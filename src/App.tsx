import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { ThemeProvider, createTheme, Shadows } from '@mui/material/styles';

import AppLayout from './components/app-layout/app-layout';
import './App.css';
import Dashboard from './pages/dashboard/dashboard';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

const theme = createTheme({
  palette: {
    primary: {
      main: '#103b66',
      dark: '#233B53',
      light: '#546679'
    },
    secondary: {
      main: '#21b8f9',
      light: '#e9f8fe',
      dark: '#000032'
    },
    success: {
      main: '#00c48c',
      dark: '#00b67a'
    },
    error: {
      main: '#f33451'
    },
    warning: {
      main: '#ffa26b',
      dark: '#f3a35c'
    },
    grey: {
      300: '#6c7c8c',
      400: '#e5e5e5',
      500: '#f7f7f7',
      600: '#666666'
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
  },
  mixins: {
    toolbar: {
      minHeight: 60
    }
  }
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="vetrina-live-ld" element={<Dashboard />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
