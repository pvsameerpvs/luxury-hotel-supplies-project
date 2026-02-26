import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DDA126',
      light: '#F3C24E',
      dark: '#B87B11',
      contrastText: '#fff',
    },
    secondary: {
      main: '#333333',
    },
    background: {
      default: '#ffffff',
      paper: '#f9f9f9',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), sans-serif',
    h1: { fontFamily: 'var(--font-playfair), serif' },
    h2: { fontFamily: 'var(--font-playfair), serif' },
    h3: { fontFamily: 'var(--font-playfair), serif' },
    h4: { fontFamily: 'var(--font-playfair), serif' },
    h5: { fontFamily: 'var(--font-playfair), serif' },
    h6: { fontFamily: 'var(--font-playfair), serif' },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: '#ffffff',
        },
        notchedOutline: {
          borderColor: '#EAEAEA',
        },
      },
    },
  },
});

export default theme;
