import { createTheme, darken, lighten } from "@mui/material";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          primary: '#004d40',
          color: '#ffffff'
        }
      }      
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: '#00796b',
          color: '#ffffff',
          '&:hover': {
            background: darken('#00796b', 0.15),
          }
        },
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: lighten('#777', 0.80),
          color: '#00796b',
        },
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: '#00796b',
          color: '#ffffff',
        },
        outlined: {
          background: 'transparent',
          borderColor: '#ffab00',
          color: '#ffab00'
        }
      }
    },
  },
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
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSize: 16,
    body1: {
      fontWeight: 500,
    }
  },
});
console.log(theme);

export default theme;