import ReactDom from 'react-dom';
import React from 'react';
import App from './components/App/Container';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
