import { createTheme } from '@mui/material';
import { cyan, purple } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: purple[700],
      dark: purple[800],
      light: purple[500],
      contrastText: '#FFF',
    },
    secondary: {
      main: cyan[700],
      dark: cyan[800],
      light: cyan[500],
      contrastText: '#FFF',
    },
    error: {
      main: '#FF0000',
      dark: '#FF0000',
      light: '#FF0000',
    },
    background: {
      default: '#202124',
      paper: '#303134',
    },
    text: {
      primary: '#E1E5EE',
      secondary: '#C7CCDB',
    }
  }
});
