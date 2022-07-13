import { AppLayout } from 'components/app-layout';
import { AboutUsLayout } from 'components/about-us-layout';
import SponsorsSection from 'components/sponsors-section/sponsors-section';
import PersonsList from 'components/persons-list/persons-list';
import { SEO } from 'components/seo';
import { usePersistentData } from 'providers/persistent-data-provider';
import { fetcher } from 'services/fetcher';

import type { InferGetServerSidePropsType } from 'next';
import type { Sponsor } from 'api-typings';

const Sponsors = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { sponsors } = props;
  const { settings } = usePersistentData();

  return (
    <AppLayout>
      <SEO title="Попечители"/>
      <AboutUsLayout>
        <SponsorsSection
          title="Попечители фестиваля"
          description="Здесь представлены частные лица и организации, которые помогают Любимовке на постоянной и безвозмездной основе."
          callToEmail="Если вы хотите стать попечителем фестиваля, напишите нам на "
          callToEmailAddress={settings?.emailAddresses.charity}
        >
          <PersonsList persons={sponsors}/>
        </SponsorsSection>
      </AboutUsLayout>
    </AppLayout>
  );
};

export const getServerSideProps = async () => {
  let sponsors;

  try {
    sponsors = await fetcher<Sponsor[]>('/info/about-festival/sponsors/');
  } catch (error) {
    throw error;
  }

  return {
    props: {
      sponsors,
    }
  };
};

export default Sponsors;
