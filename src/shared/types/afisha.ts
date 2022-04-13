export type EventType = 'PERFORMANCE' | 'MASTERCLASS' | 'READING';

export type Role = {
  name: string;
  readonly persons: Array<string>;
};

export type EventMasterClass = {
  readonly id: number;
  name: string;
  description: string;
  team: Array<Role>;
  readonly projectTitle: string;
};

export type EventPerformance = {
  readonly id: number;
  name: string;
  description: string;
  team: Array<Role>;
  image: string;
  readonly projectTitle: string;
};

export type EventReading = {
  readonly id: number;
  name: string;
  description: string;
  team: Array<Role>;
  readonly projectTitle: string;
};

export type EventTypeObjects = (EventMasterClass | EventPerformance | EventReading);

export type AfishaEvent = {
  readonly id: number;
  type: EventType;
  readonly eventBody: EventTypeObjects;
  dateTime: string;
  paid?: boolean;
  url: string;
  place: string;
}

export type AfishaEvents = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<AfishaEvent>;
};

export type AfishaInfo = {
  festivalStatus: boolean;
  description: string;
  infoRegistration?: string;
  asteriskText?: string;
  afishaDates: Array<string>;
};
