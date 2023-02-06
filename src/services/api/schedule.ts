import { objectToQueryString } from '@funboxteam/diamonds';

import { EventType, ScheduleMode } from 'core/schedule';
import { fetcher } from 'services/fetcher';

import type { Paginate } from './types';
import type {
  AfishaInfoOutput as ScheduleMetaDTO,
  PaginatedAfishaEventListOutputList as ScheduleDTO,
} from '__generated__/api-typings';
import type { ScheduleMeta , Event } from 'core/schedule';

export function getScheduleMeta(): Promise<ScheduleMeta> {
  return fetcher<ScheduleMetaDTO>('/afisha/info/').then(mapDTOToScheduleMeta);
}

function mapDTOToScheduleMeta(dto: ScheduleMetaDTO): ScheduleMeta {
  return {
    ...dto.festival_status ? {
      mode: ScheduleMode.Festival,
      scheduleNote: dto.asterisk_text,
      registrationAnnounce: dto.info_registration,
    } : {
      mode: ScheduleMode.Regular,
    },
    scheduleAnnounce: dto.description,
  };
}

type PaginatedSchedule = Paginate<Event[], 'events'>

interface GetScheduleOptions {
  limit: number
  offset?: number
}

export async function getSchedule(options: GetScheduleOptions): Promise<PaginatedSchedule> {
  const {
    limit,
    offset,
  } = options;

  const query = objectToQueryString({
    limit,
    ...offset && { offset }
  });

  return fetcher<ScheduleDTO>(`/afisha/events/${query}`).then(mapDTOToSchedule);
}

function mapDTOToSchedule({ results = [], ...pagination }: ScheduleDTO): PaginatedSchedule {
  return {
    // @ts-ignore: TODO
    events: results.map((event) => ({
      id: event.id,
      type: event.type,
      title: event.event_body.name,
      description: event.event_body.description,
      date: event.date_time,
      team: event.event_body.team,
      actionText: event.action_text,
      actionUrl: event.action_url,
      ...event.type === EventType.Reading && {
        project: event.event_body.project_title,
        performanceId: event.event_body.id, // TODO: сейчас по доке непонятно, почему здесь используется значение этого поля
      },
      ...event.type === EventType.Performance && {
        // @ts-ignore: TODO: в типах кодогенерации не выводится поле `event.event_body.image`
        coverImageUrl: event.event_body.image,
      }
    })),
    pagination,
  };
}
