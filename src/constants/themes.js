import { createMuiTheme } from "@material-ui/core/styles";

import { green, blue, red } from "@material-ui/core/colors";

export const fertilityTheme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

export const attractivnessTheme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export const fitnessTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});
