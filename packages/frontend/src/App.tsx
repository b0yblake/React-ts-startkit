import React from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import theme from './templates/themes/theme';
import RoutesPage from './routes';
import Loading from './components/Loading';

// Load style sheets
import './assets/stylesheets/index.scss';

const App = () => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<Loading />}>
        <RoutesPage />
      </React.Suspense>
    </ThemeProvider>
  </StyledEngineProvider>
);

export default App;
