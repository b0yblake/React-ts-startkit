import React from "react";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import theme from "./templates/themes/theme";
import GlobalContainer from "./containers/Global";
import Routes from "./routes";
import "./assets/stylesheets/index.scss";
import "react-toastify/dist/ReactToastify.css";

const loading = () => (
  <div>Loading...</div>
);

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={loading()}>
          <GlobalContainer />
          <Routes />
        </React.Suspense>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
