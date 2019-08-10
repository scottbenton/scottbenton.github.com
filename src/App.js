import React, { useEffect } from 'react';
import Header from './Components/Header';
import './App.css';
import { amber } from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import { setLocalStorage, getLocalStorage } from './HelperFunctions/StorageHelpers';

const theme = (type) => createMuiTheme({
  palette: {
    type: type,
    primary: {
      main: (type === 'light' ? '#5c6bc0' : '#5c6bc0'),
    },
    secondary: amber,
    background: {
      default: (type === 'light' ? '#F5F5F5' : '#121212'),
      paper: (type === 'light' ? '#FFFFFF' : '#212121'),
    },
  }
});
// '#f5f5f5'
function App() {
  const [themeType, setThemeType] = React.useState(getLocalStorage('theme') || 'light');

  const toggleTheme = () => {
    setThemeType(prevThemeType => {
      return prevThemeType === 'light' ? 'dark' : 'light';
    });
  }

  useEffect(() => {
    setLocalStorage('theme', themeType);
  }, [themeType])

  const myTheme = theme(themeType);

  return (
    <MuiThemeProvider theme={myTheme}>
      <CssBaseline />
      <Header toggleTheme={toggleTheme} />
    </MuiThemeProvider>
  );
}

export default App;
