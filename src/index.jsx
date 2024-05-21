import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import '../i18n'; 
import './global.css';

createRoot(
  document.querySelector('#app'),
).render(<App />);
