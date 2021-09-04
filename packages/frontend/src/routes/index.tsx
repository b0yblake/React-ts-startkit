import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PATHS from '../constants/clientPaths';
import Home from '../containers/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          {/**
           * PUBLIC PATHS
           */}
          <Route path={PATHS.HOME} component={Home} />

          {/**
           * PROTECTED PATHS
           */}
          {/* <ProtectedRoute path={PATHS.HOME} component={Home} /> */}
        </Switch>
      </Route>
    </BrowserRouter>
  );
};

export default Routes;
