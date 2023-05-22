import { createTheme } from '@mui/material';
import { cyan, purple } from '@mui/material/colors';

export const LightTheme = createTheme({
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
      default: '#F7F6F3',
      paper: '#FFF',
    }
  }
});
