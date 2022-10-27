import { objectToQueryString } from '@funboxteam/diamonds';

import { fetcher } from 'services/fetcher';

import type { PaginatedAfishaEventListOutputList as EventsDTO } from 'api-typings';
import type { Event } from 'core/events';

export function getEvents({ page = 1, perPage = 10 } = {}) {
  const params = objectToQueryString({
    limit: perPage,
    offset: (page - 1) * perPage,
  });

  fetcher<EventsDTO>(`/afisha/events/${params}`).then(mapDTOToEvents);
}

function mapDTOToEvents({ results = [] }: EventsDTO): Event[] {
  return results.map((event) => ({
    id: event.id,
    type: event.type,
    title: event.event_body.name,
    description: event.event_body.description,
    date: event.date_time,
    team: event.event_body.team,
    actionText: event.action_text,
    actionUrl: event.action_url,
  }));
}
