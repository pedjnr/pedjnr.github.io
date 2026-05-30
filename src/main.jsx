import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const savedTheme = window.localStorage.getItem('qa-portfolio-theme');
document.documentElement.dataset.theme = savedTheme === 'dark' ? 'dark' : 'light';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
