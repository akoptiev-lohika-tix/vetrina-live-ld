import React from 'react';
import './App.css';
import Dashboard from './pages/dashboard/dashboard';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#103b66'
    },
    secondary: {
      main: '#ffffff',
      dark: '#f7f7f7',
      light: '#e5e5e5'
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
