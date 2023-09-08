import { stringify } from 'querystring';

import { EVENTS_PER_PAGE, ScheduleMode, EventType } from 'core/schedule';
import { fetcher } from 'services/fetch';
import useSWRInfinite from 'swr/infinite';

import type {
  PaginatedAfishaEventListOutputList as EventsDTO,
  AfishaInfoOutput as ScheduleMetaDTO,
} from '__generated__/api-typings';
import type { RegularEvent, FestivalEvent, ScheduleMeta } from 'core/schedule';
import type { DTOPagination } from 'services/api/types';

const RESOURCE_URL = '/afisha/events/';

export function fetchScheduleMeta(): Promise<ScheduleMeta> {
  return fetcher<ScheduleMetaDTO>('/afisha/info/').then(mapDTOToScheduleMeta);
}

function mapDTOToScheduleMeta(dto: ScheduleMetaDTO): ScheduleMeta {
  return {
    ...(dto.festival_status
      ? {
        mode: ScheduleMode.Festival,
        scheduleNote: dto.asterisk_text,
        registrationAnnounce: dto.info_registration,
      }
      : {
        mode: ScheduleMode.Regular,
      }),
    scheduleAnnounce: dto.description,
  };
}

type EventsQueryParams = {
  offset?: number
  limit: number
};

export const getEventsCacheKey = (queryParams: EventsQueryParams) =>
  [RESOURCE_URL, queryParams] as const;

const getEventsKey = (
  pageIndex: number,
  previousPageData: PaginatedRegularEvents
) => {
  if (previousPageData && !previousPageData.pagination.next) {
    return null;
  }

  return getEventsCacheKey({
    limit: EVENTS_PER_PAGE,
    offset: pageIndex * EVENTS_PER_PAGE,
  });
};

type PaginatedRegularEvents = {
  results: RegularEvent[]
  pagination: DTOPagination
};

const fetchRegularEvents = (
  params: EventsQueryParams
): Promise<PaginatedRegularEvents> =>
  fetcher<EventsDTO>(`${RESOURCE_URL}?${stringify(params)}`).then(
    mapDTOToRegularEvents
  );

function mapDTOToRegularEvents(dto: EventsDTO): PaginatedRegularEvents {
  const { results = [], ...pagination } = dto;

  return {
    results: results.map((event) => ({
      id: event.id,
      type:
        (event.type === EventType.Performance && 'Спектакль')
        || (event.type === EventType.Workshop && 'Мастер-класс')
        || (event.type === EventType.Reading
          && `Читка${
            event.title
              ? ` проекта ${event.title}`
              : ''
          }`)
        || '',
      title: event.title,
      description: event.description,
      artworkUrl: event.image,
      team: event.team,
      date: event.date_time,
      ...(event.type === EventType.Performance
        ? {
          aboutText: 'О спектакле',
          aboutUrl: `/performances/${event.performance_id}`,
        }
        : {}),
      actionText: event.action_text,
      actionUrl: event.action_url,
    })),
    pagination,
  };
}

export const useRegularEvents = () =>
  useSWRInfinite(getEventsKey, ([, queryParams]) =>
    fetchRegularEvents(queryParams)
  );

type PaginatedFestivalEvents = {
  results: FestivalEvent[]
  pagination: DTOPagination
};

export const fetchFestivalEvents = (
  params: EventsQueryParams
): Promise<PaginatedFestivalEvents> =>
  fetcher<EventsDTO>(`${RESOURCE_URL}?${stringify(params)}`).then(
    mapDTOToFestivalEvents
  );

function mapDTOToFestivalEvents(dto: EventsDTO): PaginatedFestivalEvents {
  const { results = [], ...pagination } = dto;

  return {
    results: results.map((event) => ({
      id: event.id,
      title: event.title,
      description: event.description,
      location: event.location,
      artworkUrl: event.action_url,
      team: event.team,
      date: event.date_time,
      registrationOpeningDate: event.opening_date_time || '',
      registrationUrl: event.action_url,
      image: event.image,
      type: event.type,
    })),
    pagination: pagination,
  };
}

export const useFestivalEvents = () =>
  useSWRInfinite(
    getEventsKey,
    ([, queryParams]) => fetchFestivalEvents(queryParams),
    {
      revalidateFirstPage: false,
    }
  );
