import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import createLogger from 'redux-logger';

import reminderReducer from './reducers/reminder';


const logger = createLogger();


const store = createStore(
  combineReducers({
    reminderReducer
  }),
  applyMiddleware(logger));

export default store;
