import { AfishaEventListOutput, AfishaInfoOutput } from 'api-typings';
import { fetchEventsFestival } from '../utils/fetchData';
import { parseDate } from '../utils/getDateInfo';
import { Events, State } from './types';

export const getInitialState = (info: AfishaInfoOutput, results?: AfishaEventListOutput[]) => {
  const res: State = { 
    status: 'done',
    currentDate: '', 
    events: {},
    datesInfo: {},
    info
  };
  
  res.info.afisha_dates = Array.from(new Set(res.info.afisha_dates));

  if (!results) {
    return res;
  }
  res.currentDate = results[0].date_time.slice(0, 10);
  
  const { events, datesInfo } = res;
  res.events = results.reduce((_prev, curr) => {
    const date = new Date(curr.date_time).toLocaleDateString('en-CA');
    events[date] = (events[date] || []);
    events[date].push(curr);
    datesInfo[date] = parseDate(curr.date_time);

    return events;
  }, {});

  return res;
};

export const readDateInfo = (state: State, dateParam: string) => {
  const date = new Date(dateParam.slice(0, 10)).toLocaleDateString('en-CA');
  const { datesInfo } = state;
  return datesInfo[date] || parseDate(new Date(dateParam).toLocaleDateString('en-CA'));
};

export const readEvents = async (state: State, dates?: string[]): Promise<Events> => {
  if (!dates) {
    const { afisha_dates } = state.info;
    const index = afisha_dates.indexOf(state.currentDate); 
    if (index === afisha_dates.length - 1) {
      return {};
    }  
    dates = [afisha_dates[index + 1]];  
  }
  
  const { events } = state;
  const res: Events  = {};

  for (let i = 0; i < dates.length; i++) {
    const date = new Date(dates[i].slice(0, 10)).toLocaleDateString('en-CA');
    if (!events[date]) {
      const response = await fetchEventsFestival(date);
      events[date] = response.results || [];
    }
    state.currentDate = date;
    res[date] = events[date];
  }

  return res;
};
