import { AppLayout } from 'components/app-layout';
import { AboutUsLayout } from 'components/about-us-layout';
import SponsorsSection from 'components/sponsors-section/sponsors-section';
import PersonsList from 'components/persons-list/persons-list';
import { SEO } from 'components/seo';
import { usePersistentData } from 'providers/persistent-data-provider';
import { fetcher } from 'services/fetcher';

import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { Sponsor } from 'api-typings';

interface ISponsorsProps {
  sponsors: Array<Sponsor>,
}

const Sponsors = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { sponsors } = props;
  const { settings } = usePersistentData();

  return (
    <AppLayout>
      <SEO title="Попечители"/>
      <AboutUsLayout>
        <SponsorsSection
          title="Попечители фестиваля"
          description="Здесь представлены частные лица и организации, которые помогают Любимовке, внося существенные пожертвования на развитие фестиваля."
          callToEmail="Если вы хотите стать попечителем фестиваля, напишите нам на "
          callToEmailAddress={settings?.emailAddresses.charity}
        >
          <PersonsList persons={sponsors}/>
        </SponsorsSection>
      </AboutUsLayout>
    </AppLayout>
  );
};

const fetchSponsors = async () => {
  let data;

  try {
    data = await fetcher<Array<Sponsor>>('/info/about-festival/sponsors/');
  } catch (error) {
    throw error;
  }

  return data;
};

export const getServerSideProps: GetServerSideProps<ISponsorsProps> = async () => {
  try {
    const sponsors = await fetchSponsors();

    return {
      props: {
        sponsors,
      }
    };
  } catch(error) {
    return {
      props: {
        errorCode: 500,
        sponsors: []
      }
    };
  }
};

export default Sponsors;
