import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../src/styles/index.css';
//import {App} from './App';
import { AppRoutes } from './routing/AppRoutes';

import './assets/sass/style.scss'
import './assets/sass/plugins.scss'
import './/assets/sass/style.react.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
