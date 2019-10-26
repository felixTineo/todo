import React from 'react';
import ReactDOM, { render }  from 'react-dom';
import Header from './components/header';
import Main from './components/main';
import { createStore } from 'redux';
import nextTodo from './store/reducers';
import { Provider } from 'react-redux';
const store = createStore(nextTodo);

const App = () => (
  <Provider store={store}>
    <Header />
    <Main />
  </Provider>
);

render(<App />, document.getElementById('app'));
