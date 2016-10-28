import React from "react";
import ReactDom from "react-dom";
import Layout from "./components/Layout";

import {
  createStore,
  applyMiddleware
} from 'redux';

import createLogger from 'redux-logger';

const logger = createLogger();


const initialState = {
  result: 1,
  lastValues: []
}


const reducer = (state = initialState, action) => {
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

const store = createStore(reducer, applyMiddleware(logger));


store.dispatch({
  type: 'ADD',
  payload: 10
});


store.dispatch({
  type: 'SUBSTRACT',
  payload: 2
});

// const app = document.getElementById('app');
//
// ReactDom.render( < Layout / > , app);
