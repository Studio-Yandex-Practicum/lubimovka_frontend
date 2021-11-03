interface Action {
  type: string;
  payload: string;
}

interface State {
  years: string[];
  programmes: string[]
}

function reducer(state: State, action: Action): State {
  const { type, payload } = action;
  switch(type) {
  case 'add year':
    return {
      ...state,
      years: [...state.years, payload]
    };
  case 'add programme':
    return {
      ...state,
      programmes: [...state.programmes, payload]
    };
  case 'remove year':
    return {
      ...state,
      years: state.years.filter(
        (el, index, arr) => index !== arr.indexOf(payload)
      )
    };
  case 'remove programme':
    return {
      ...state,
      programmes: state.programmes.filter(
        (el, index, arr) => index !== arr.indexOf(payload)
      )
    };
  case 'reset':
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
