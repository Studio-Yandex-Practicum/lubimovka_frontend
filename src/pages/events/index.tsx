import { AfishaTitle } from 'components/afisha-page/afisha-title';
import { FestivalEvents } from 'components/afisha-page/festival-events';
import { AppLayout } from 'components/app-layout';
import { AfishaProvider } from 'components/afisha-page/afisha-provider';
import { fetchEvents, fetchInfo } from 'components/afisha-page/utils/fetchData';
import { RegularEvents } from 'components/afisha-page/regular-events';
import { SEO } from 'components/seo';
import { notFoundResult } from 'shared/constants/server-side-props';

import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { AfishaEvents, AfishaInfo } from 'shared/types';

interface IProps {
  info: AfishaInfo;
  events: AfishaEvents
}

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

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  try {
    const info = await fetchInfo();
    const events = await fetchEvents();

    return {
      props: {
        info,
        events
      }
    };
  } catch {
    return notFoundResult;
  };
};

export default Events;
