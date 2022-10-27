import { EventType } from './constants';

type PersonGroup = {
  name: string
  persons: string[]
}

export type Event = {
  id: number
  type: `${EventType}`,
  title: string
  description?: string
  date: string
  team: PersonGroup[]
  actionText: string
  actionUrl: string
}

