import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

import { List, listReducers } from './list/index.jsx';

let store = combineReducers(listReducers);

const App = () => (
  <Provider store={store}>
    Hello World
    <List />
  </Provider>
);

ReactDom.render(<App />, document.getElementById('example'));