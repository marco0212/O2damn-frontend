import ReactDom from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App/Container';
import './index.css';

import store from './store';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
