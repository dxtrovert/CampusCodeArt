import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import MotionConfigProvider from './components/animations/MotionConfigProvider.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MotionConfigProvider>
          <App />
        </MotionConfigProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
