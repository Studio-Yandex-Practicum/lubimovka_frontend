import { stringify } from 'querystring';

import useSWRInfinite from 'swr/infinite';

import { EVENTS_PER_PAGE } from 'core/schedule';
import { fetcher } from 'services/fetch';

import type {
  PaginatedAfishaEventListOutputList as EventsDTO,
  AfishaInfoOutput as ScheduleMetaDTO,
} from '__generated__/api-typings';
import type { FestivalEvent, ScheduleMeta } from 'core/schedule';
import type { DTOPagination } from 'services/api/types';

const RESOURCE_URL = '/afisha/events/';

export function fetchScheduleMeta(): Promise<ScheduleMeta> {
  return fetcher<ScheduleMetaDTO>('/afisha/info/').then(mapDTOToScheduleMeta);
}

function mapDTOToScheduleMeta(dto: ScheduleMetaDTO): ScheduleMeta {
  return {
    ...dto.festival_status && {
      scheduleNote: dto.asterisk_text,
      registrationAnnounce: dto.info_registration,
    },
    scheduleAnnounce: dto.description,
  };
}

type EventsQueryParams = {
  offset?: number
  limit: number
}

type PaginatedFestivalEvents = {
  results: FestivalEvent[]
  pagination: DTOPagination
}

export const getEventsCacheKey = (queryParams: EventsQueryParams) => [
  RESOURCE_URL,
  queryParams,
] as const;

const getEventsKey = (pageIndex: number, previousPageData: PaginatedFestivalEvents) => {
  if (previousPageData && !previousPageData.pagination.next) {
    return null;
  }

  return getEventsCacheKey({
    limit: EVENTS_PER_PAGE,
    offset: pageIndex * EVENTS_PER_PAGE,
  });
};

export const fetchFestivalEvents = (params: EventsQueryParams): Promise<PaginatedFestivalEvents> => fetcher<EventsDTO>(`${RESOURCE_URL}?${stringify(params)}`).then(mapDTOToFestivalEvents);

function mapDTOToFestivalEvents(dto: EventsDTO): PaginatedFestivalEvents {
  const {
    results = [],
    ...pagination
  } = dto;

  return {
    results: results.map((event): FestivalEvent => ({
      id: event.id,
      title: event.title,
      description: event.description,
      location: event.location,
      artworkUrl: event.image,
      team: event.team,
      date: event.date_time,
      registrationOpeningDate: event.opening_date_time,
      registrationUrl: event.action_url,
    })),
    pagination,
  };
}

export const useFestivalEvents = () => (
  useSWRInfinite(getEventsKey, ([, queryParams]) => fetchFestivalEvents(queryParams), {
    revalidateFirstPage: false,
  })
);
