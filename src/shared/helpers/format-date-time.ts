// https://date-fns.org/v2.28.0/docs/format

import { DateTimeString } from 'shared/types';

const LOCALE = 'ru';
const TIME_ZONE = 'Europe/Moscow';

const { DateTimeFormat } = Intl;

const dMMMM = new DateTimeFormat(LOCALE, {
  timeZone: TIME_ZONE,
  month: 'long',
  day: 'numeric'
});

const dMMMMYYYY = new DateTimeFormat(LOCALE, {
  timeZone: TIME_ZONE,
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

const mH = new DateTimeFormat(LOCALE, {
  timeZone: TIME_ZONE,
  hour: 'numeric',
  minute: 'numeric',
});

const MMMMdmH = new DateTimeFormat(LOCALE, {
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

export const formatDateTime = (dateTime: DateTimeString | Date, formatter: 'dMMMM' | 'dMMMMYYYY' | 'mH' | 'MMMMdmH') => {
  switch (formatter) {
  case 'dMMMM':
    return dMMMM.format(new Date(dateTime));
  case 'dMMMMYYYY':
    return dMMMMYYYY.format(new Date(dateTime)).replace(/\s*г\./, '');
  case 'mH':
    return mH.format(new Date(dateTime));
  case 'MMMMdmH':
    return MMMMdmH.format(new Date(dateTime)).replace(/,/, '');
  default:
    return '';
  }
};
