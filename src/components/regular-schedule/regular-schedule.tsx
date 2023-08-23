import { format } from 'date-fns';
import isEmpty from 'lodash/isEmpty';
import { useCallback } from 'react';

import { EventCard } from 'components/event-card';
import { EventList } from 'components/event-list';
import { PaginationSentinel } from 'components/pagination-sentinel';
import { withSWRFallback } from 'hocs/with-swr-fallback';
import { useRegularEvents } from 'services/api/schedule-adapter';

import type { RegularEvent } from 'core/schedule';

export const RegularSchedule = withSWRFallback(() => {
  const { data, isLoading, setSize } = useRegularEvents();

  const events = data?.reduce(
    (acc, page) => acc.concat(page.results),
    [] as RegularEvent[]
  );

  const handleLoadMore = useCallback(() => {
    setSize((size) => size + 1);
  }, []);

  if (!events || isEmpty(events)) {
    return null;
  }

  return (
    <>
      <EventList variant="compact">
        {events.map((event) => (
          <EventList.Item key={event.id}>
            <EventCard
              title={event.title}
              type={event.type}
              imageUrl={event.image}
              date={format(new Date(event.date), 'd MMMM')}
              time={format(new Date(event.date), 'H:mm')}
              team={event.team}
              description={event.description}
              aboutText={event.aboutText}
              aboutUrl={event.aboutUrl}
              actionUrl={event.actionUrl}
              actionText={event.actionText}
            />
          </EventList.Item>
        ))}
      </EventList>
      <PaginationSentinel
        pending={isLoading}
        loadMoreCallback={handleLoadMore}
      />
    </>
  );
});
