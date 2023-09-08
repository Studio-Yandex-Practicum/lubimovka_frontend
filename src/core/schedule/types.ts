import type { ScheduleMode } from './constants';

export type ScheduleMeta =
  | {
      mode: ScheduleMode.Regular
      scheduleAnnounce: string
      scheduleNote?: never
      registrationAnnounce?: never
    }
  | {
      mode: ScheduleMode.Festival
      scheduleAnnounce: string
      scheduleNote?: string
      registrationAnnounce?: string
    };

type EventPersonGroup = {
  name: string
  persons: string[]
};

export type RegularEvent = {
  id: number
  type: string
  title: string
  description?: string
  artworkUrl?: Url
  team: EventPersonGroup[]
  date: DateTimeIsoString
  performanceId?: number
  aboutText?: string
  aboutUrl?: Url
  actionText?: string | null
  actionUrl?: Url | null
  image?: Url
};
// @ts-ignore: TODO: добавил типы, чтобы избавитья от ошибок
export type FestivalEvent = {
  id: number
  title: string
  description?: string
  location?: string | null
  artworkUrl?: Url | null
  team: EventPersonGroup[]
  date: DateTimeIsoString
  registrationOpeningDate: DateTimeIsoString
  registrationUrl?: Url | null
  image: string
  type: string
};
