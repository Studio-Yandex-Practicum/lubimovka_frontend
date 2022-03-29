import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { AppLayout } from 'components/app-layout';
import TrusteesSection from 'components/trustees-section/trustees-section';
import PersonsList from 'components/persons-list/persons-list';
import { Sponsor } from 'api-typings';
import { fetcher } from 'shared/fetcher';

import textData from './assets/mock-text-data.json';

interface ITrusteesProps {
  trustees: Array<Sponsor>,
}

const Trustees = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { trustees } = props;

  return (
    <AppLayout>
      <main>
        <TrusteesSection text={textData}>
          <PersonsList persons={trustees}/>
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
    throw error;
  }

  return data;
};

export const getServerSideProps: GetServerSideProps<ITrusteesProps> = async () => {
  try {
    const trustees = await fetchTrustees();

    return {
      props: {
        trustees,
      }
    };
  } catch(error) {
    return {
      props: {
        errorCode: 500,
        trustees: []
      }
    };
  }
};

export default Trustees;

