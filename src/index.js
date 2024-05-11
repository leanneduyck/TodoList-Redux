import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainView from './components/main-view';
import store from './store';

// renders MainView (TodoList)
// wrapped in Provider, kept getting errors from the store w/Container
const App = () => {
  return <MainView class="main-view" />;
};

ReactDOM.render(<App />, document.getElementById('root'));
