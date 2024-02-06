import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';
import { CurrentThemeProvider } from './contexts/current-theme.context';
import { ToDoItemsProvider } from './contexts/to-do-items.context';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <CurrentThemeProvider>
      <ToDoItemsProvider>
        <App />
      </ToDoItemsProvider>
    </CurrentThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
