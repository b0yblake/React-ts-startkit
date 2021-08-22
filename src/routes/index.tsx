import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import PATHS from "../constants/clientPaths";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          {/**
           * PUBLIC PATHS
           */}
          <Route exact path={PATHS.LOGIN} component={Login} />
          <Route exact path={PATHS.REGISTER} component={Register} />

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
