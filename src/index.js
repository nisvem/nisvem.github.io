import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main/Main.js';

import './style/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);