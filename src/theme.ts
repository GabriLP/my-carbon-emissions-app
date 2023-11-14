import { createTheme } from '@mui/material/styles';

// Define your custom colors
const palette = {
  primary: {
    main: '#556cd6', // Example primary color
  },
  secondary: {
    main: '#19857b', // Example secondary color
  },
  error: {
    main: '#ff5252', // Example error color
  },
  // Add other colors as needed
};

// Define custom typography
const typography = {
  fontFamily: [
    '"Roboto"', // Primary font
    '"Arial"', // Secondary font
    'sans-serif', // Fallback font
  ].join(','),
  // You can also define font sizes, weights, etc.
};

// Define custom spacing
const spacing = 8; // The base unit of spacing, e.g., 8px

// Create a theme instance
const theme = createTheme({
  palette,
  typography,
  spacing,
  // You can add more customization here as needed, such as:
  // breakpoints, transitions, zIndex, etc.
});

export default theme;
