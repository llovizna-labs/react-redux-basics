const reminderReducer = (state = {
  items: [{
    id: 0,
    value: 'Im the first'
  }],
}, action) => {
  switch (action.type) {
    case 'ADD_ITEM_FULFILLED':
      state = {
        ...state,
        items: [].concat(state.items, action.payload)
      }
      break;
    case 'DELETE_ITEM':
      state = {
        ...state,
        items: state.items.slice(0,action.payload).concat(state.items.slice(action.payload+1))
      }
      break;
  }
  return state;
}

export default reminderReducer;
