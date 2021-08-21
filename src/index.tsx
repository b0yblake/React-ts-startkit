import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import store from "./store";
import history from "./utils/history";
import App from "./App";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

ReactDOM.render(
  <React.Suspense fallback={loading()}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.Suspense>,
  document.getElementById("root-frontend")
);
