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
    // Define other typography variants here
  },
  spacing: 8, // Base unit for spacing
  breakpoints: {
    values: {
      xs: 0,    // Extra small devices (portrait phones)
      sm: 600,  // Small devices (landscape phones)
      md: 900,  // Medium devices (tablets)
      lg: 1200, // Large devices (desktops)
      xl: 1536, // Extra large devices (large desktops)
      // You can adjust these values to better suit your design needs
    },
  },
});

export default theme;