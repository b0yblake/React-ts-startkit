import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import theme from "./templates/themes/theme";
import { ToastContainer, toast } from "react-toastify";
import GlobalContainer from "./containers/Global";
import ProtectedRoute from "./components/ProtectedRoute";
import "react-toastify/dist/ReactToastify.css";
import PATHS from "./constants/clientPaths";
import Home from "./containers/Home";

toast.configure();

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <GlobalContainer />
        <BrowserRouter>
          <Switch>
            {/**
             * PUBLIC PATHS
             */}
            <Route exact path="/">
              <Redirect to={PATHS.LOGIN} />
            </Route>
            <Route
              exact
              path={PATHS.LOGIN}
              component={(props) => <AdminAccess {...props} />}
            />
            <Route
              exact
              path={PATHS.REGISTER}
              component={(props) => <AdminAccess {...props} />}
            />
            {/**
             * PROTECTED PATHS
             */}
            <ProtectedRoute path={PATHS.HOME} component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
