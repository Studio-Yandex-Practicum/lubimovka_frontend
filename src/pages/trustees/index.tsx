import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';

import { AppLayout } from 'components/app-layout';
import TrusteesSection from 'components/trustees-section/trustees-section';
import TrusteesPersons from 'components/trustees-persons-list/trustees-persons-list';
import { Sponsor } from 'api-typings';
import { fetcher } from 'shared/fetcher';

import textData from './assets/mock-text-data.json';

interface ITrusteesProps {
  errorCode?: number,
  trustees: Array<Sponsor>,
}

const Trustees = ({ errorCode, trustees }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (errorCode) {
    return (
      <Error statusCode={errorCode}/>
    );
  }

  return (
    <AppLayout>
      <main>
        <TrusteesSection text={textData}>
          <TrusteesPersons trustees={trustees}/>
        </TrusteesSection>
      </main>
    </AppLayout>
  );
};

const fetchTrustees = async () => {
  let data;

  try {
    data = await fetcher<Array<Sponsor>>('/info/about-festival/sponsors/');
  } catch (error) {
    return;
  }

  return data;
};

export const getServerSideProps: GetServerSideProps<ITrusteesProps> = async () => {
  try {
    const trustees = await fetchTrustees();

    return {
      props: {
        trustees,
      },
    };
  } catch (error) {
    return {
      errorCode: 500,
      trustees: []
    };
  }
};

export default Trustees;

