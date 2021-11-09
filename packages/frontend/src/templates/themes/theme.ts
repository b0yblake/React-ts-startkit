import { createTheme } from '@mui/material/styles';
import themeColor from './color';

const theme = createTheme({
  typography: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: themeColor.lightTheme.color.secondary,
      contrastText: 'white',
    },
  },
});

export default theme;
