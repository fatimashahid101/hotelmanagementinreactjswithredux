import './App.css';
import {useState, useEffect} from 'react'
import AppRouter from './config/router/index';
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './config/redux/store/index';
import {auth,onAuthStateChanged} from './config/firebaseconfig/index'
import { getData,changeUserAuth } from './config/redux/action/index';


function App() {


  const theme = createTheme({
    palette: {
      primary: {
        main: '#1a1b3a'
      },
      secondary: {
        main: '#fff'
      },
      info:{
        main:'#c5a880'
      }
    },
    typography: {
      // fontFamily: 'Quicksand'
      fontFamily: 'Montserrat'
    }

  })




  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter/>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
