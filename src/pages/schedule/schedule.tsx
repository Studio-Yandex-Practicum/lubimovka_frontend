import { format } from 'date-fns';
import Error from 'next/error';
import { useCallback, useState } from 'react';

import { AppLayout } from 'components/app-layout';
import { EventCard } from 'components/event-card';
import { EventList } from 'components/event-list';
import { FestivalDate } from 'components/festival-date';
import { FestivalEventCard } from 'components/festival-event-card';
import { FestivalEventTabs } from 'components/festival-event-tabs';
import { PaginationSentinel } from 'components/pagination-sentinel';
import { ScheduleHeadline } from 'components/schedule-headline';
import { ScheduleLayout } from 'components/schedule-layout';
import { SEO } from 'components/seo';
import { ScheduleMode } from 'core/schedule';
import { getSchedule, getScheduleMeta } from 'services/api/schedule';
import { isNonEmpty } from 'shared/helpers/is-non-empty';
import { useEffectAfterMount } from 'shared/hooks/use-effect-after-mount';
import { useIntersectionObserver } from 'shared/hooks/use-intersection-observer';

import type { Event } from 'core/schedule';
import type { InferGetServerSidePropsType } from 'next';

const EVENTS_PER_PAGE = 15;
const REMAINING_TAB_COUNT_BEFORE_LOAD_EVENTS = 2;

const Events = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    scheduleMeta: {
      mode,
      scheduleAnnounce,
      scheduleNote,
      registrationAnnounce,
    }
  } = props;

  const [events, setEvents] = useState(props.events);
  const [pagination, setPagination] = useState(props.pagination);
  const [paginationSentinelRef, shouldLoadMoreEvents] = useIntersectionObserver({ rootMargin: '0px 0px 50% 0px' });
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const fetchSchedule = useCallback(async (options) => {
    let result: Awaited<ReturnType<typeof getSchedule>>;
    setProcessing(true);

    try {
      result = await getSchedule(options);
    } catch {
      setErrorOccurred(true);

      return;
    }

    setEvents((events) => events.concat(result.events));
    setPagination((pagination) => ({ ...pagination, ...result.pagination }));
    setProcessing(false);
  }, []);

  const handleShouldLoadMoreEvents = useCallback(() => {
    if (!pagination.next) {
      return;
    }

    setPagination((pagination) => ({
      ...pagination,
      currentPage: pagination.currentPage + 1,
    }));
  }, [pagination.next]);

  const handleTabChange = (tabIndex: number, totalTabCount: number) => {
    if (totalTabCount - tabIndex < REMAINING_TAB_COUNT_BEFORE_LOAD_EVENTS) {
      handleShouldLoadMoreEvents();
    }

    setSelectedTabIndex(tabIndex);
  };

  useEffectAfterMount(() => {
    if (!shouldLoadMoreEvents) {
      return;
    }

    handleShouldLoadMoreEvents();
  }, [shouldLoadMoreEvents]);

  useEffectAfterMount(() => {
    fetchSchedule({
      limit: EVENTS_PER_PAGE,
      offset: EVENTS_PER_PAGE * (pagination.currentPage - 1),
    });
  }, [pagination.currentPage]);

  if (errorOccurred) {
    return (
      <Error statusCode={500}/>
    );
  }

  return (
    <>
      <SEO title="Афиша"/>
      <AppLayout>
        <ScheduleLayout>
          <ScheduleLayout.Slot area="headline">
            <ScheduleHeadline
              title={`Афиша ${mode === ScheduleMode.Festival ? 'фестиваля' : 'событий'}`}
              scheduleAnnounce={scheduleAnnounce}
              scheduleNote={scheduleNote}
              registrationAnnounce={registrationAnnounce}
            />
          </ScheduleLayout.Slot>
          {isNonEmpty(events) && (
            <>
              {mode === ScheduleMode.Regular && (
                <EventList variant="compact">
                  {events.map((event) => (
                    <EventList.Item key={event.id}>
                      <EventCard
                        title={event.title}
                        date={format(new Date(event.date), 'd MMMM')}
                        time={format(new Date(event.date), 'H:mm')}
                        team={event.team}
                        description={event.description}
                        actionUrl={event.actionUrl}
                        actionText={event.actionText}
                      />
                    </EventList.Item>
                  ))}
                </EventList>
              )}
              {mode === ScheduleMode.Festival && (
                <FestivalEventTabs
                  selectedTabIndex={selectedTabIndex}
                  onTabChange={handleTabChange}
                >
                  {Object.entries(groupEventsByDate(events)).map(([date, events]) => {
                    const [day, month] = format(new Date(date), 'd MMMM').split(' ');

                    return (
                      <FestivalEventTabs.Panel
                        key={date}
                        title={(
                          <FestivalDate
                            day={day}
                            month={month}
                            dateTime={date}
                          />
                        )}
                      >
                        {events.map((event) => (
                          <FestivalEventCard
                            key={event.id}
                            time={format(new Date(event.date), 'H:mm')}
                            title={event.title}
                            image={event.coverImageUrl}
                            // @ts-ignore: TODO: уточнить у бекенда, почему описание события может быть опциональным
                            description={event.description}
                            actionUrl={event.actionUrl}
                            credits={event.team}
                          />
                        ))}
                      </FestivalEventTabs.Panel>
                    );
                  })}
                </FestivalEventTabs>
              )}
              {!processing && pagination.next && (
                <PaginationSentinel ref={paginationSentinelRef}/>
              )}
            </>
          )}
        </ScheduleLayout>
      </AppLayout>
    </>
  );
};

export default Events;

export const getServerSideProps = async () => {
  const scheduleQueryParams = {
    limit: EVENTS_PER_PAGE,
  };

  const { events, pagination } = await getSchedule(scheduleQueryParams);
  const scheduleMeta = await getScheduleMeta();

  return {
    props: {
      scheduleMeta,
      events,
      pagination: {
        ...pagination,
        currentPage: 1,
      },
    }
  };
};

function groupEventsByDate(events: Event[]) {
  return events.reduce((groups, event) => {
    const [date] = event.date.split('T');
    const group = groups[date] || (groups[date] = []);

    group.push(event);

    return groups;
  }, {} as Record<string, Event[]>);
}
