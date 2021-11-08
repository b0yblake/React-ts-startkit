/* eslint-disable */
import React from 'react';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import theme from './templates/themes/theme';
import RoutesPage from './routes';

const loading = () => <div>Loading...</div>;

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={loading()}>
          <RoutesPage />
        </React.Suspense>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
