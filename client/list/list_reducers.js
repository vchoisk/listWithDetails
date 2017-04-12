import { combineReducers } from 'redux';

import listReducer from './list_reducer.js';
import selectedItemReducer from './selected_item_reducer.js';

const listReducers = combineReducers({
  listReducer,
  selectedItemReducer,
});

export default listReducers;