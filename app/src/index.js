import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DetailsContextProvider } from './context/DetailContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DetailsContextProvider>
        <App/>
      </DetailsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

