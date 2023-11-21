import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Nature Green
    },
    secondary: {
      main: '#2196F3', // Sky Blue
    },
    error: {
      main: '#F44336', // Warning Red
    },
    background: {
      default: '#FAFAFA', // Off White
    },
    text: {
      primary: '#263238', // Dark Gray
    },
    accent: {
      main: '#795548', // Earth Brown
    },
  },
  typography: {
    fontFamily: 'Roboto, Lato, Arial, sans-serif',
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto, Lato, Arial, sans-serif',
          '&:hover': {
            backgroundColor: '#e0e0e0', 
          },
        },
      },
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
