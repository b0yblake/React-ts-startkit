import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ACCESS_TOKEN } from "../../constants/localStorage";
import { LOGIN } from "../../constants/clientPaths";

interface PrivateRouteProps {
  component: any;
  path: string;
  exact?: boolean;
}

function PrivateRoute({ component, path, exact }: PrivateRouteProps) {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: any) => {
        if (localStorage.getItem(ACCESS_TOKEN)) {
          return React.createElement(component, props);
        }
        return (
          <Redirect
            to={{
              pathname: `${LOGIN}`,
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
