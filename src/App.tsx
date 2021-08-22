import React from "react";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import theme from "./templates/themes/theme";
import { ToastContainer, toast } from "react-toastify";
import GlobalContainer from "./containers/Global";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={loading()}>
          <ToastContainer />
          <GlobalContainer />
          <Routes />
        </React.Suspense>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
