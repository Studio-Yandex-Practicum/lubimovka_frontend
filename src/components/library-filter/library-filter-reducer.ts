interface Action {
  type: string;
  payload: {
    programme: string;
    years: string[]
  };
}

interface State {
  years: string[];
  programmes: string[]
}

function reducer(state: State, action: Action): State {
  const { type, payload } = action;
  switch(type) {
  case 'add years':
    return {
      ...state,
      years: payload.years
    };
  case 'add programme':
    return {
      ...state,
      programmes: [...state.programmes, payload.programme]
    };
  case 'remove programme':
    return {
      ...state,
      programmes: state.programmes.filter(
        (el, index, arr) => index !== arr.indexOf(payload.programme)
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
