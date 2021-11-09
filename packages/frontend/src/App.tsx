import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import theme from './templates/themes/theme';
import RoutesPage from './routes';

const Loading = () => <div>Loading...</div>;

const App = () => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<Loading />}>
        <RoutesPage />
      </React.Suspense>
    </ThemeProvider>
  </StylesProvider>
);

export default App;
