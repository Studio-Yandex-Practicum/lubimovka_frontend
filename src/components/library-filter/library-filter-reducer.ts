import { Dispatch } from 'react';

export type Action =
  { type: 'add years'; years: string[] } |
  { type: 'add programme'; programme: string } |
  { type: 'remove programme'; programme: string } |
  { type: 'reset' }

export interface State {
  years: string[];
  programmes: string[]
}

export interface ILibraryFilterReducer {
  filterState: State;
  filterDispatcher: Dispatch<Action>;
}

function reducer(state: State, action: Action): State {
  switch(action.type) {
  case 'add years':
    return {
      ...state,
      years: action.years
    };
  case 'add programme':
    return {
      ...state,
      programmes: [...state.programmes, action.programme]
    };
  case 'remove programme':
    return {
      ...state,
      programmes:state.programmes.filter(
        (el, index, arr) => index !== arr.indexOf(action.programme)
      )
    };
  case 'reset':
    return {
      years: [],
      programmes: []
    };
  default:
    return state;
  }
}

export default reducer;
