import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const savedTheme = window.localStorage.getItem('qa-portfolio-theme-v2');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const initialTheme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : systemTheme;
document.documentElement.dataset.theme = initialTheme;
document.documentElement.style.colorScheme = initialTheme === 'dark' ? 'dark' : 'only light';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
