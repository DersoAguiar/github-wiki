import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles'; 

import App from './Pages/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);


