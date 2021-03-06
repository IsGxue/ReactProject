import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
/* <App />    普通js对象 */



// jsx写法

//时间方法组件
// function clock() {
//   let time = new Date().toLocaleTimeString();
//   let element =
//     (<div>
//       <h1>现在时间是{time}</h1>
//     </div>);
//   let rott = document.querySelector('#root');
//   ReactDOM.render(element, rott)
// }
// clock();
// setInterval(() => {
//   clock();
// }, 1000)


//函数式组件
function Clock(props) {
  return (<div>
    <h1>现在时间是{props.time.toLocaleTimeString()}</h1>
  </div>);
}

function run() {
  ReactDOM.render(
    <Clock time={new Date()}></Clock>,
    document.querySelector('#root')
  )
}
setInterval(run, 1000)

// ReactDOM.render(
//   <React.StrictMode>
//    <App />    
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
