import { AppLayout } from 'components/app-layout';
import TrusteesSection from 'components/trustees-section/trustees-section';
import PersonsList from 'components/persons-list/persons-list';
import { usePersistentData } from 'providers/persistent-data-provider';
import { fetcher } from 'services/fetcher';

import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { Sponsor } from 'api-typings';

interface ITrusteesProps {
  trustees: Array<Sponsor>,
}

const Trustees = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { trustees } = props;
  const { settings } = usePersistentData();

  return (
    <AppLayout>
      <main>
        <TrusteesSection
          title="Попечители фестиваля"
          description="Здесь представлены частные лица и организации, которые помогают Любимовке, внося существенные пожертвования на развитие фестиваля."
          callToEmail="Если вы хотите стать попечителем фестиваля, напишите нам на "
          callToEmailAddress={settings?.emailAddresses.charity}
        >
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

