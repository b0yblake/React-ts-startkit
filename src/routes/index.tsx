import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "../guards/ProtectedRoute";
import PATHS from "../constants/clientPaths";
import Home from "../containers/Home";
import Login from "../containers/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          {/**
           * PUBLIC PATHS
           */}
          <Route exact path={PATHS.LOGIN} component={Login} />

          {/**
           * PROTECTED PATHS
           */}
          <ProtectedRoute path={PATHS.HOME} component={Home} />
        </Switch>
      </Route>
    </BrowserRouter>
  );
};

export default Routes;
