import React from "react";
import ReactDom from "react-dom";
import Layout from "./components/Layout";

import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import createLogger from 'redux-logger';

const logger = createLogger();


const mathReducer = (state = {
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

const userReducer = (state = {
  name: 'Martha',
  age: 27
}, action) => {
  switch (action.type) {
    case 'SET_NAME':
      state = {
        ...state,
        name: action.payload
      }
      break;
    case 'SET_AGE':
      state = {
        ...state,
        age: action.payload
      }
      break;
  }
  return state;
}


const reminderReducer = (state = {
  items: [],
}, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
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


const store = createStore(
  combineReducers({
    mathReducer,
    userReducer,
    reminderReducer
  }),
  applyMiddleware(logger));


// store.dispatch({
//   type: 'ADD',
//   payload: 10
// });
//
//
// store.dispatch({
//   type: 'SUBSTRACT',
//   payload: 2
// });
//
// store.dispatch({
//   type: 'SET_NAME',
//   payload: 'Logan'
// });
//
//
// store.dispatch({
//   type: 'SET_AGE',
//   payload: 23
// });


store.dispatch({
  type: 'ADD_ITEM',
  payload: {
    id: 0,
    value: 'Hola'
  }
});

store.dispatch({
  type: 'ADD_ITEM',
  payload: {
    id: 1,
    value: 'Hola mundo'
  }
});


store.dispatch({
  type: 'DELETE_ITEM',
  payload: 0
});



// const app = document.getElementById('app');
//
// ReactDom.render( < Layout / > , app);
