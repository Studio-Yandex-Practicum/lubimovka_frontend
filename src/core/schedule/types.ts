export type ScheduleMeta = {
  scheduleAnnounce: string
  scheduleNote?: string
  registrationAnnounce?: string
}

type EventPersonGroup = {
  name: string
  persons: string[]
}

export type FestivalEvent = {
  id: number
  title: string
  description?: string
  location?: string | null
  artworkUrl?: Url
  team: EventPersonGroup[]
  date: DateTimeIsoString
  registrationOpeningDate: DateTimeIsoString
  registrationUrl?: Url | null
  performanceId: number | null
}
