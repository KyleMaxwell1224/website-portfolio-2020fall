import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {  HashRouter} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  //This HashRouter is vital to the code. It routes from file to file, and it also
  //ensures that we don't get an error 404 on GitHub pages.
  <HashRouter >
{ /* Now, we initialize our App function, which creates a list of routes  */ }
    <App />
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
