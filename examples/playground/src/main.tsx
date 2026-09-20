import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@frutiger.js/core/styles.css';
import { ToastProvider } from '@frutiger.js/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider placement="top-right">
      <App />
    </ToastProvider>
  </React.StrictMode>
);
