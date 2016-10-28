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


const store = createStore( combineReducers({mathReducer, userReducer}), applyMiddleware(logger));


store.dispatch({
  type: 'ADD',
  payload: 10
});


store.dispatch({
  type: 'SUBSTRACT',
  payload: 2
});

store.dispatch({
  type: 'SET_NAME',
  payload: 'Logan'
});


store.dispatch({
  type: 'SET_AGE',
  payload: 23
});

// const app = document.getElementById('app');
//
// ReactDom.render( < Layout / > , app);
