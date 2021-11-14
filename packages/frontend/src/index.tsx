import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// import { ConnectedRouter } from 'connected-react-router';
// import history from './utils/history';

ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> // Disabled because it's not support RRv6 */}

    <App />
    {/* </ConnectedRouter> */}
  </Provider>,
  document.getElementById('root-frontend'),
);
