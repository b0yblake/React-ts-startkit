import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import theme from "./templates/themes/theme";
import { ToastContainer, toast } from "react-toastify";
import GlobalContainer from "./containers/Global";
import ProtectedRoute from "./components/ProtectedRoute";
import "react-toastify/dist/ReactToastify.css";
import PATHS from "./constants/clientPaths";
import Home from "./containers/Home";

toast.configure();

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <GlobalContainer />
        <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Route>
              <Switch>
                {/**
                 * PUBLIC PATHS
                 */}
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
            </Route>
          </React.Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
