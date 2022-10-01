import React from 'react';

import { ThemeProvider, createTheme, Shadows } from '@mui/material/styles';

import './App.css';
import Dashboard from './pages/dashboard/dashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#103b66',
      dark: '#233B53',
      light: '#546679'
    },
    secondary: {
      main: '#21b8f9',
      light: '#e9f8fe'
    },
    success: {
      main: '#00c48c'
    },
    grey: {
      400: '#e5e5e5',
      500: '#f7f7f7'
    }
  },
  typography: {
    fontFamily: '"Noto Sans HK", "sans-serif"',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  shadows: [
    'none',
    '0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)',
    ...Array(23).fill('none')
  ] as Shadows,

  components: {
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    }
  }
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
};

export default App;
