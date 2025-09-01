import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LanguageProvider } from './components/useLanguage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
    <App />
    </LanguageProvider>
  </React.StrictMode>
);

reportWebVitals();
