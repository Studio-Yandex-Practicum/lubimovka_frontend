import { Dispatch } from 'react';

export type Action =
  { type: 'add years'; festival: string[] } |
  { type: 'add programme'; program: string } |
  { type: 'remove programme'; program: string } |
  { type: 'reset' }

export interface State {
  [key: string]: string[];
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
      festival: action.festival
    };
  case 'add programme':
    return {
      ...state,
      program: [...state.program, action.program]
    };
  case 'remove programme':
    return {
      ...state,
      program: state.program.filter(
        (el, index, arr) => index !== arr.indexOf(action.program)
      )
    };
  case 'reset':
    return {
      festival: [],
      program: []
    };
  default:
    return state;
  }
}

export default reducer;
