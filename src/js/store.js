import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import createLogger from 'redux-logger';

import thunk from 'redux-thunk';

import promise from 'redux-promise-middleware';

import reminderReducer from './reducers/reminder';


const logger = createLogger();


const store = createStore(
  combineReducers({
    reminderReducer
  }),
  applyMiddleware(logger, promise()));

export default store;
