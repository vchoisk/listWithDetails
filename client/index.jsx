import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { ListContainer, listReducers } from './list/index.js';

let store = createStore(listReducers);

const App = () => (
  <Provider store={store}>
    <ListContainer title="Examle Table"/>
  </Provider>
);

ReactDom.render(<App />, document.getElementById('example'));