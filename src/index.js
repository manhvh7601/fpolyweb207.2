import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';


ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
