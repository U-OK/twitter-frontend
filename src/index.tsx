import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider, CssBaseline} from '@material-ui/core';
import {Provider} from 'react-redux';
import {store} from 'store/store';
import theme from "theme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CssBaseline/>
    <ThemeProvider theme={theme}>
      <Router>
        <Provider store={store}>
          <App/>
        </Provider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
