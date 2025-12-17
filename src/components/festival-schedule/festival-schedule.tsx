import { format } from 'date-fns';
import { useState, useCallback, useMemo } from 'react';

import { FestivalDate } from 'components/festival-date';
import { FestivalEventCard } from 'components/festival-event-card';
import { FestivalEventTabs } from 'components/festival-event-tabs';
import { InfiniteScrollTrigger } from 'components/infinite-scroll-trigger';
import { EVENTS_PER_PAGE, type FestivalEvent } from 'core/schedule';
import { withSWRFallback } from 'hocs/with-swr-fallback';
import { useFestivalEvents } from 'services/api/schedule-adapter';

interface FestivalScheduleProps {
  fallback: object
}

const REMAINING_TAB_COUNT_BEFORE_LOAD_EVENTS = 2;

export const FestivalSchedule: React.VFC<FestivalScheduleProps> = withSWRFallback(() => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const { data, isLoading, setSize } = useFestivalEvents();

  const isEmpty = data?.[0]?.results.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.results.length < EVENTS_PER_PAGE);

  const handleLoadMore = useCallback(() => {
    setSize((size) => size + 1);
  }, []);

  const handleTabChange = (tabIndex: number, totalTabCount: number) => {
    if (totalTabCount - tabIndex < REMAINING_TAB_COUNT_BEFORE_LOAD_EVENTS) {
      handleLoadMore();
    }

    setSelectedTabIndex(tabIndex);
  };

  const groupedEvents = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.reduce((groups, page) => {
      page.results.forEach((event) => {
        const [date] = event.date.split('T');

        if (!groups[date]) {
          groups[date] = {
            registrationOpen: !!event.registrationUrl,
            registrationOpeningDate: event.registrationOpeningDate,
            events: [],
          };
        } else if (event.registrationUrl && !groups[date].registrationOpen) {
          groups[date].registrationOpen = true;
        } else if (event.registrationOpeningDate < groups[date].registrationOpeningDate) {
          groups[date].registrationOpeningDate = event.registrationOpeningDate;
        }

        groups[date].events.push(event);
      });

      return groups;
    }, {} as Record<string, {
      registrationOpen: boolean
      registrationOpeningDate: string
      events: FestivalEvent[]
    }>);
  }, [data]);

  return (
    <>
      <FestivalEventTabs
        selectedTabIndex={selectedTabIndex}
        onTabChange={handleTabChange}
      >
        {Object.entries(groupedEvents).map(([date, { events, registrationOpen, registrationOpeningDate }]) => {
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
              registrationOpen={registrationOpen}
              registrationOpeningDate={format(new Date(registrationOpeningDate), 'd MMMM в H:mm')}
            >
              {events.map((event) => (
                <FestivalEventCard
                  key={event.id}
                  time={format(new Date(event.date), 'H:mm')}
                  location={event.location}
                  title={event.title}
                  image={event.artworkUrl}
                  description={event.description}
                  aboutUrl={event.performanceId !== null ? (`/performances/${event.performanceId}`) : undefined}
                  actionUrl={event.registrationUrl}
                  actionText={event.actionText}
                  credits={event.team}
                />
              ))}
            </FestivalEventTabs.Panel>
          );
        })}
      </FestivalEventTabs>
      <InfiniteScrollTrigger
        isLoading={isLoading}
        onLoadNeeded={handleLoadMore}
        hasMore={!isReachingEnd}
      />
    </>
  );
});
