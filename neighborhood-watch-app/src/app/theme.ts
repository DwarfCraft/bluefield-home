import { createTheme } from '@mui/material/styles';

const baseComponents = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        padding: '12px 24px',
        fontSize: '1.1rem',
        textTransform: 'none' as const,
        fontWeight: 600,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingTop: 24,
        paddingBottom: 24,
      },
    },
  },
};

const typography = {
  h1: {
    fontSize: '2.5rem',
    fontWeight: 700,
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 600,
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 600,
  },
  body1: {
    fontSize: '1.125rem', // Larger body text for readability
    lineHeight: 1.6,
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1565C0', // High contrast Blue
    },
    secondary: {
      main: '#E65100', // High contrast Orange
    },
    background: {
      default: '#F5F7FA',
      paper: '#FFFFFF',
    },
  },
  typography,
  components: baseComponents,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90CAF9',
    },
    secondary: {
      main: '#FFB74D',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
  typography,
  components: baseComponents,
});
