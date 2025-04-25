import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CollapseProvider } from './context/CollapseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CollapseProvider>
      <App />
    </CollapseProvider>
  </React.StrictMode>
);

reportWebVitals();
