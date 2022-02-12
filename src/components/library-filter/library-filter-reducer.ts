import { Dispatch } from 'react';

import { DroplistOption } from '../ui/droplist';

export type Action =
  { type: 'add years'; festival: DroplistOption } |
  { type: 'remove year'; festival: DroplistOption } |
  { type: 'add programme'; program: string } |
  { type: 'remove programme'; program: string } |
  { type: 'reset' }

export type State = {
  festival: DroplistOption[],
  program: string[],
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
      festival: [...state.festival, action.festival]
    };
  case 'remove year':
    return {
      ...state,
      festival: state.festival.filter(
        ({ value }) => value !==  action.festival.value
      )
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
