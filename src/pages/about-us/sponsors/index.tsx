
import { AboutUsLayout } from 'components/about-us-layout';
import { AppLayout } from 'components/app-layout';
import PersonsList from 'components/persons-list/persons-list';
import { SEO } from 'components/seo';
import SponsorsSection from 'components/sponsors-section/sponsors-section';
import { usePersistentData } from 'providers/persistent-data-provider';
import { fetcher } from 'services/fetcher';

import type { Sponsor } from '__generated__/api-typings';
import type { InferGetServerSidePropsType } from 'next';

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
          callToEmailAddress={settings?.emailAddresses.sponsorship}
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
