import React from 'react';
import ReactDOM, { render }  from 'react-dom';
import Header from './components/header';
import Main from './components/main';

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

render(<App />, document.getElementById('app'));
