import { createTheme } from "@material-ui/core/styles";
import { LINK_COLOR } from "./color";

const theme = createTheme({
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: LINK_COLOR,
      contrastText: "white",
    },
  },
});

export default theme;
