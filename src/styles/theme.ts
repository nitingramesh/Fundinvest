import { createTheme } from '@mui/material/styles';

// Modern color palette with vibrant and appealing colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#2563EB', // Vibrant blue
      light: '#60A5FA',
      dark: '#1E40AF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#6D28D9', // Purple for accent
      light: '#A78BFA',
      dark: '#5B21B6',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#059669', // Emerald green
      light: '#34D399',
      dark: '#047857',
    },
    error: {
      main: '#DC2626', // Bright red
      light: '#F87171',
      dark: '#B91C1C',
    },
    warning: {
      main: '#F59E0B', // Amber
      light: '#FBBF24',
      dark: '#D97706',
    },
    info: {
      main: '#0EA5E9', // Sky blue
      light: '#38BDF8',
      dark: '#0284C7',
    },
    grey: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
    background: {
      default: '#F9FAFB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#111827',
      secondary: '#4B5563',
      disabled: '#9CA3AF',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 10,
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(0, 0, 0, 0.05)',
    '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
    '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 2px 4px rgba(0, 0, 0, 0.1)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 4px 8px rgba(0, 0, 0, 0.1)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 8px 16px rgba(0, 0, 0, 0.1)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 12px 24px rgba(0, 0, 0, 0.1)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 16px 32px rgba(0, 0, 0, 0.1)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 20px 40px rgba(0, 0, 0, 0.1)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 24px 48px rgba(0, 0, 0, 0.1)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 28px 56px rgba(0, 0, 0, 0.1)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 32px 64px rgba(0, 0, 0, 0.1)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 36px 72px rgba(0, 0, 0, 0.1)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 40px 80px rgba(0, 0, 0, 0.1)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 44px 88px rgba(0, 0, 0, 0.1)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 48px 96px rgba(0, 0, 0, 0.1)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 52px 104px rgba(0, 0, 0, 0.1)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 56px 112px rgba(0, 0, 0, 0.1)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 60px 120px rgba(0, 0, 0, 0.1)',
    '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 64px 128px rgba(0, 0, 0, 0.1)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 16px',
          fontWeight: 600,
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
        },
        containedPrimary: {
          '&:hover': {
            boxShadow: '0px 4px 6px -1px rgba(37, 99, 235, 0.3), 0px 2px 4px -1px rgba(37, 99, 235, 0.15)',
          },
        },
        containedSecondary: {
          '&:hover': {
            boxShadow: '0px 4px 6px -1px rgba(109, 40, 217, 0.3), 0px 2px 4px -1px rgba(109, 40, 217, 0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme; 