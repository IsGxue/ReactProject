import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './views/login/index';
import reportWebVitals from './reportWebVitals';
/* <App />    普通js对象 */
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

// var ReactRouter = require('react-router')
// var Router = ReactRouter.Router
// var Route = ReactRouter.Route
// var Link = ReactRouter.Link


  ReactDOM.render(
    // <React.StrictMode>
     <Login />    
    // </React.StrictMode>
    ,
    document.getElementById('root')
  );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
