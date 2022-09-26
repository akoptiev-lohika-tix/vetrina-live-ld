import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import Dashboard from './pages/dashboard/dashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#103b66',
      dark: '#233B53'
    },
    secondary: {
      main: '#21b8f9',
      light: '#e9f8fe'
    }
  },
  typography: {
    fontFamily: '"Noto Sans HK", "sans-serif"',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
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
