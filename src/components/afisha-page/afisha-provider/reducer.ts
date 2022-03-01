import { AfishaEvent,  AfishaEvents, AfishaInfo } from 'shared/types';

type ActionSetEvents = {
  type: 'SET_EVENTS',
  payload: AfishaEvent[]
};

type ActionSetCondition = {
  type: 'SET_CONDITION',
  payload: StateСondition
};

type ActionSetDay = {
  type: 'SET_DAY',
  payload: number
};

type Actions = ActionSetEvents | ActionSetCondition | ActionSetDay;
type StateСondition = 'done' | 'loading' | 'error';

export const getInitialState = (info: AfishaInfo, fetchedEvents: AfishaEvents) => {

  info.afishaDates = Array.from(new Set(info.afishaDates));
  const { results: events  } = fetchedEvents;

  return {
    condition: <StateСondition>'done',
    events,
    day: info.afishaDates.length ? 0 : -1
  };
};

export type State = ReturnType<typeof getInitialState>;

export const setCondition = (c: StateСondition): ActionSetCondition  => ({ type: 'SET_CONDITION', payload: c });
export const setEvents = (e: AfishaEvent[]): ActionSetEvents => ({ type: 'SET_EVENTS', payload: e });
export const setDay = (d: number): ActionSetDay => ({ type: 'SET_DAY', payload: d });

export const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
  case 'SET_CONDITION':
    return { ...state, condition: action.payload };
  case 'SET_DAY':
    return { ...state, day: action.payload };
  case 'SET_EVENTS':
    return { ...state, events: [...state.events, ...action.payload] };
  default:
    return state;
  }
};
