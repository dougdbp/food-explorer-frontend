import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer} from 'react-toastify';
import { AuthProvider } from './hooks/auth';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme.darkTheme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
