import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '../public/WEB/css/satoshi.css';
import { ThemeProvider } from '@material-tailwind/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
