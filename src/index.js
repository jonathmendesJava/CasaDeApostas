// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Apps';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import MinhasRotas from './MinhasRotas';
import 'bootstrap/dist/css/bootstrap.min.css';


console.log('index.js is loaded');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
