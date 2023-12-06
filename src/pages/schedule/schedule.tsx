import { unstable_serialize } from 'swr/infinite';

import { AppLayout } from 'components/app-layout';
import { FestivalSchedule } from 'components/festival-schedule';
import { ScheduleHeadline } from 'components/schedule-headline';
import { ScheduleLayout } from 'components/schedule-layout';
import { SEO } from 'components/seo';
import { EVENTS_PER_PAGE } from 'core/schedule';
import { fetchFestivalEvents, fetchScheduleMeta, getEventsCacheKey } from 'services/api/schedule-adapter';

import type { InferGetServerSidePropsType } from 'next';

const Events = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    scheduleMeta: {
      scheduleAnnounce,
      scheduleNote,
      registrationAnnounce,
    },
    fallback,
  } = props;

  return (
    <>
      <SEO title="Афиша"/>
      <AppLayout>
        <ScheduleLayout>
          <ScheduleLayout.Slot area="headline">
            <ScheduleHeadline
              title='Афиша фестиваля'
              scheduleAnnounce={scheduleAnnounce}
              scheduleNote={scheduleNote}
              registrationAnnounce={registrationAnnounce}
            />
          </ScheduleLayout.Slot>
          <FestivalSchedule
            fallback={fallback}
          />
        </ScheduleLayout>
      </AppLayout>
    </>
  );
};

export default Events;

export const getServerSideProps = async () => {
  const queryParams = {
    limit: EVENTS_PER_PAGE,
    offset: 0,
  };
  const events = await fetchFestivalEvents(queryParams);
  const scheduleMeta = await fetchScheduleMeta();

  return {
    props: {
      scheduleMeta,
      fallback: {
        [unstable_serialize(() => getEventsCacheKey(queryParams))]: [events],
      }
    }
  };
};
