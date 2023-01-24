import type { ScheduleMode, EventType } from './constants';

export type ScheduleMeta = {
  mode: ScheduleMode.Festival
  scheduleAnnounce: string
  scheduleNote?: string
  registrationAnnounce?: string
} | {
  mode: ScheduleMode.Regular
  scheduleAnnounce: string
  scheduleNote?: never
  registrationAnnounce?: never
}

type EventPersonGroup = {
  name: string
  persons: string[]
}

type EventConditionalParams = {
  type: `${EventType.Reading}`
  project: string
  performanceId: string
  coverImageUrl?: never
} | {
  type: `${EventType.Workshop}`
  project?: never
  performanceId?: never
  coverImageUrl?: never
} | {
  type: `${EventType.Performance}`
  coverImageUrl: Url
  project?: never
  performanceId?: never
}

export type Event = {
  id: number
  title: string
  description?: string
  date: DateTimeIsoString
  team: EventPersonGroup[]
  actionText: string
  actionUrl: Url
} & EventConditionalParams
