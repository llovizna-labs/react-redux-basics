

default export mathReducer = (state = {
  result: 1,
  lastValues: []
}, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        lastValues: [].concat(state.lastValues, state.result),
        result: state.result + action.payload
      }
      break;
    case 'SUBSTRACT':
      state = {
        ...state,
        lastValues: [].concat(state.lastValues, state.result),
        result: state.result - action.payload
      }
      break;
  }
  return state;
}
