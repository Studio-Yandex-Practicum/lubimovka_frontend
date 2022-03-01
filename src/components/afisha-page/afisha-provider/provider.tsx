import { createContext, FC, ReactNode, useContext, useReducer } from 'react';

import { setEvents, getInitialState, State, setDay } from './reducer';
import { AfishaEvent, AfishaEvents, AfishaInfo } from 'shared/types';
import { reducer, setCondition } from './reducer';
import { fetchEvents } from '../utils/fetchData';

export interface IProps {
  children: ReactNode;
  info: AfishaInfo;
  events: AfishaEvents;
}

export type Context = {
  selectInfo: () => AfishaInfo;
  selectEvents: (day?: string) => AfishaEvent[];
  takeEvents: (date?: string) => void;
  isLoading: () => boolean;
  isComlete: () => boolean;
  selectState: () => State;
  putDay: (day: number) => void;
  selectDay: () => number;
}

const AfishaContext = createContext<Partial<Context>>({});
export const useAfisha = (): Context => useContext(AfishaContext) as Context;

export const AfishaProvider: FC<IProps> = (props) => {
  const { children, info } = props;
  const [state, dispatch] = useReducer(reducer, getInitialState(info, props.events));
  const { events } = state;

  const selectState = () => state;
  const isComlete = () => events.length === props.events.count;
  const isLoading = () => state.condition === 'loading';
  const putDay = (d: number) => {
    dispatch(setDay(d));
    takeEvents(d);
  };
  const selectDay = () => state.day;

  const takeEvents = async (d?: number) => {
    if (isComlete() || isLoading()) {
      return;
    }

    if (d !== undefined && events[events.length - 1].dateTime.slice(0, 10) !== info.afishaDates[d].slice(0, 10)) {
      return;
    }

    try {
      dispatch(setCondition('loading'));
      const res = await fetchEvents(events.length);
      dispatch(setEvents(res.results));
      dispatch(setCondition('done'));
    } catch (err) {
      dispatch(setCondition('error'));
    }
  };
  const selectInfo = () => info;
  const selectEvents = (d?: string) => d
    ? events.filter(e => e.dateTime.slice(0, 10) === d.slice(0, 10))
    : events;

  return (
    <AfishaContext.Provider value={{
      selectInfo,
      selectEvents,
      takeEvents,
      isComlete,
      isLoading,
      selectState,
      putDay,
      selectDay
    } as Context}
    >
      {children}
    </AfishaContext.Provider>
  );
};

