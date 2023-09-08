
import { FestivalDate } from 'components/festival-date';
import { FestivalEventCard } from 'components/festival-event-card';
import { FestivalEventTabs } from 'components/festival-event-tabs';
import { PaginationSentinel } from 'components/pagination-sentinel';
import { format } from 'date-fns';
import { withSWRFallback } from 'hocs/with-swr-fallback';
import { useState, useCallback, useMemo } from 'react';
import { useFestivalEvents } from 'services/api/schedule-adapter';

import type { FestivalEvent } from 'core/schedule';

interface FestivalScheduleProps {
  fallback: object
}

const REMAINING_TAB_COUNT_BEFORE_LOAD_EVENTS = 2;

export const FestivalSchedule: React.VFC<FestivalScheduleProps> = withSWRFallback(
  () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const { data, isLoading, setSize } = useFestivalEvents();

    const handleLoadMore = useCallback(() => {
      setSize((size) => size + 1);
    }, []);

    const handleTabChange = (tabIndex: number, totalTabCount: number) => {
      if (totalTabCount - tabIndex < REMAINING_TAB_COUNT_BEFORE_LOAD_EVENTS) {
        handleLoadMore();
      }

      setSelectedTabIndex(tabIndex);
    };

    type EventGroup = {
      [date: string]: {
        registrationOpen: boolean
        registrationOpeningDate: DateTimeIsoString
        events: FestivalEvent[]
      }
    };

    const groupedEvents = useMemo(() => {
      if (!data) {
        return [];
      }

      return data.reduce<EventGroup>(
        (groups, page) => {
          page.results.forEach((event) => {
            const [date] = event.date.split('T');

            if (!groups[date]) {
              groups[date] = {
                registrationOpen: !!event.registrationUrl,
                registrationOpeningDate: event.registrationOpeningDate,
                events: [],
              };
            } else if (
              event.registrationUrl
              && !groups[date].registrationOpen
            ) {
              groups[date].registrationOpen = true;
            } else if (
              event.registrationOpeningDate
              && event.registrationOpeningDate < groups[date].registrationOpeningDate
            ) {
              groups[date].registrationOpeningDate
                = event.registrationOpeningDate;
            }

            groups[date].events.push(event);
          });

          return groups;
        },
        {}
      );
    }, [data]);

    return (
      <>
        <FestivalEventTabs
          selectedTabIndex={selectedTabIndex}
          onTabChange={handleTabChange}
        >
          {Object.entries(groupedEvents).map(
            ([date, { events, registrationOpen, registrationOpeningDate }]) => {
              const [day, month] = format(new Date(date), 'd MMMM').split(' ');

              return (
                <FestivalEventTabs.Panel
                  key={date}
                  title={<FestivalDate day={day} month={month} dateTime={date}/>}
                  registrationOpen={registrationOpen}
                  registrationOpeningDate={format(
                    new Date(registrationOpeningDate),
                    'd MMMM в H:mm'
                  )}
                >
                  {events.map((event) => {
                    const eventStartDate = format(new Date(event.date), 'H:mm');

                    return (
                      <FestivalEventCard
                        key={event.id}
                        time={eventStartDate}
                        location={event.location}
                        title={event.title}
                        image={event.image}
                        description={event.description}
                        actionUrl={event.registrationUrl}
                        credits={event.team}
                      />
                    );
                  }
                  )}
                </FestivalEventTabs.Panel>
              );
            }
          )}
        </FestivalEventTabs>
        <PaginationSentinel
          pending={isLoading}
          loadMoreCallback={handleLoadMore}
        />
      </>
    );
  }
);
