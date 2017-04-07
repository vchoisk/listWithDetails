import { combineReducers } from 'redux';

import listReducer from './list_reducer.js';

const listReducers = combineReducers({
  listReducer,
});

export default listReducers;