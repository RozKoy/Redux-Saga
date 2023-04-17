function makeRandomData(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    let i = 0;
    while (i < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      i += 1;
    }

    return result;
}

function makeData (x) {
  return {
    id: x + 1,
    from_loc: "Sumatera",
    to_loc: makeRandomData(4),
    plane_type: makeRandomData(5),
    time: 'Januari ' + String(Math.floor(Math.random() * 30)) + ', 2023. ' + makeRandomData(5),
  };
}

const initialState = {
  counter: []
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER': {
      return {
        ...state,
        counter: [
          ...state.counter,
          makeData(state.counter.length),
        ],
      };
    }
    case 'DECREASE_COUNTER': {
      state.counter.pop();
      return {
        ...state,
        counter: state.counter.slice(0, state.counter.length),
      };
    }
    default: {
      return state;
    }
  }
};

// Exports
export default counterReducer;