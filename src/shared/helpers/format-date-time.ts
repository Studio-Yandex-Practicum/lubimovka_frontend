// https://date-fns.org/v2.28.0/docs/format

import { DateTimeString } from 'shared/types';

const LOCALE = 'ru';
const TIME_ZONE = 'Europe/Moscow';

const { DateTimeFormat } = Intl;

const formatters = {
  dMMMM: new DateTimeFormat(LOCALE, {
    timeZone: TIME_ZONE,
    month: 'long',
    day: 'numeric'
  }),
  dMMMMYYYY: new DateTimeFormat(LOCALE, {
    timeZone: TIME_ZONE,
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }),
  mH: new DateTimeFormat(LOCALE, {
    timeZone: TIME_ZONE,
    hour:'numeric',
    minute:'numeric',
  })
};

export const formatDateTime = (dateTime: DateTimeString | Date, formatter: keyof typeof formatters) => formatters[formatter].format(new Date(dateTime));
