import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App from './root/App01';
// import App from './root/fetchListFromUrl';
import App from './root/04_react_bootstrap';
// import App from './root/App02';
// import App from './root/App03';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
