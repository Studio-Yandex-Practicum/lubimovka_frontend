import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { AppLayout } from 'components/app-layout';
import TrusteesSection from 'components/trustees-section/trustees-section';
import TrusteesPersons from 'components/trustees-persons-list/trustees-persons-list';
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
  const trustees = await fetchTrustees();

  if (!trustees) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      trustees,
    },
  };
};

export default Trustees;

