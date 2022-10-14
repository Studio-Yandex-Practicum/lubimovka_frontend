import { AfishaTitle } from 'components/afisha-page/afisha-title';
import { FestivalEvents } from 'components/afisha-page/festival-events';
import { AppLayout } from 'components/app-layout';
import { AfishaProvider } from 'components/afisha-page/afisha-provider';
import { fetchEvents, fetchInfo } from 'components/afisha-page/utils/fetchData';
import { RegularEvents } from 'components/afisha-page/regular-events';
import { SEO } from 'components/seo';

import type { InferGetServerSidePropsType } from 'next';

const Events = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    events,
    info
  } = props;

  return (
    <AppLayout>
      <SEO title="Афиша фестиваля"/>
      <main>
        <AfishaTitle
          {...info}
        />
        <AfishaProvider events={events} info={info}>
          {info.festivalStatus ? (
            <FestivalEvents/>
          ) : (
            <RegularEvents/>
          )}
        </AfishaProvider>
      </main>
    </AppLayout>
  );
};

export const getServerSideProps = async () => {
  const info = await fetchInfo();
  const events = await fetchEvents();

  return {
    props: {
      info,
      events
    }
  };
};

export default Events;
