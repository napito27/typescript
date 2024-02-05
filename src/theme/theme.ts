import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b'
    },
    secondary: {
      main: '#ffab00'
    },
    error: {
      main: '#d32f2f'
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default theme;