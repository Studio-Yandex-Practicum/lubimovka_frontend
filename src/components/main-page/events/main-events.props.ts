import type { event_type } from 'api-typings';

interface IEvent_body {
  id: number
  description: string
  image: string
  name: string
  project_title: null | string
  team: {
    name: string;
    persons: string[];
  }[]
}

interface IItems {
  readonly id: number;
  type: event_type;
  event_body: IEvent_body;
  date_time: string;
  paid?: boolean;
  url: string;
  place: string;
}

export type IMainAfisha = {
  title: string;
  description: string;
  button_label: string;
  items: Array<IItems>;
}
