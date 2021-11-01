enum ActionType {
  AddYear = 'add year',
  AddProgramme = 'add programme',
  RemoveYear = 'remove year',
  RemoveProgramme = 'remove programme',
  Reset = 'reset'
}

interface Action {
  type: ActionType;
  payload: string;
}

interface State {
  years: string[];
  programmes: string[]
}

function reducer(state: State, action: Action): State {
  const { type, payload } = action;
  switch(type) {
  case ActionType.AddYear:
    return {
      ...state,
      years: [...state.years, payload]
    };
  case ActionType.AddProgramme:
    return {
      ...state,
      programmes: [...state.programmes, payload]
    };
  case ActionType.RemoveYear:
    return {
      ...state,
      years: state.years.filter(
        (el, index, arr) => index !== arr.indexOf(payload)
      )
    };
  case ActionType.RemoveProgramme:
    return {
      ...state,
      programmes: state.programmes.filter(
        (el, index, arr) => index !== arr.indexOf(payload)
      )
    };
  case ActionType.Reset:
    return {
      ...state,
      years: [],
      programmes: []
    };
  default:
    return state;
  }
}

export default reducer;
