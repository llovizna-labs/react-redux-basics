import React from "react";
import {render}  from "react-dom";
import Layout from "./components/Layout";

import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import createLogger from 'redux-logger';


import {Provider} from 'react-redux';

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
  items: [{
    id: 0,
    value: 'Im the first'
  }],
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


const app = document.getElementById('app');

render( <Provider store={store} >
      < Layout / >
  </Provider> , app);
