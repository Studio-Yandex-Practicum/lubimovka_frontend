import { createContext, FC, useContext, useEffect, useState } from 'react';

import { AfishaInfoOutput } from 'api-typings';
import { ParseDate } from '../utils/getDateInfo';
import { Events, IProps, State } from './types';
import { getInitialState, readDateInfo, readEvents } from './actions';

export type Context = {
  getInfo: () => AfishaInfoOutput;
  getEvents: (p?: string[]) => Promise<Events>;
  getDateInfo: (p?: string) => ParseDate;
  isLoading: () => boolean;
  getState: () => State;
}

const FestivalContext = createContext<Partial<Context>>({});
export const useFestival = (): Context => useContext(FestivalContext) as Context;

export const FestivalProvider: FC<IProps> = (props) => {
  const { children, info, events } = props;
  const [state] = useState(getInitialState(info, events.results));

  useEffect(() => {
  }, []);

  const getInfo = () => info;
  const getEvents = (dates?: string[]) => {
    state.status = 'loading';
    const res = readEvents(state, dates);
    state.status = 'done';
    return res;
  };
  const getDateInfo = (date: string) => readDateInfo(state, date);

  return (
    <FestivalContext.Provider value={{ 
      getInfo,
      getEvents,
      getDateInfo,
      isLoading: () => state.status === 'loading',
      getState: () => state
    } as Context}
    >
      {children}
    </FestivalContext.Provider>
  );
};

