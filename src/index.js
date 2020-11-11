import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './view/03/index';
// import App from './view/03/index';
import reportWebVitals from './reportWebVitals';
/* <App />    普通js对象 */


ReactDOM.render(
  <React.StrictMode>
   {/* <App test='123' />     */}
   <App1  test='123' />    
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
