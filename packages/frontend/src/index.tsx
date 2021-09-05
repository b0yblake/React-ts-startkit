import React from 'react';

import ReactDOM from 'react-dom';

import { ConnectedRouter } from 'connected-react-router';

import { Provider } from 'react-redux';

import store from './store';

import history from './utils/history';

import App from './App';



ReactDOM.render(

  <Provider store={store}>

    <ConnectedRouter history={history}>

      <App />

    </ConnectedRouter>

  </Provider>,

  document.getElementById('root-frontend'),

);

