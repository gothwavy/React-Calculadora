import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculadora from './Calculadora.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculadora />
  </React.StrictMode>
);
