

import './index.css'
let temp = 2;
let bg = 'bg';
let img = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605091859534&di=8eea3dfd55d7c2d0bd982f67efd54cb3&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg'


let styleTemp = {
    background: 'red',
    borderBottom: '1px black solid',
    height: '100px',
    backgroundImage: "url(" + img + ")"
}
let classArr = ['abc', 'bvd'].join(' ');
let classStr = 'scd'
function App() {
    return (

        <div >
           1. {/*<div style={styleTemp}> *注释</div> */}
           2. <div style={styleTemp}></div>
           3. <div className={'abc ' + classStr}></div>
           4. <div className={classArr}></div>
        </div>

    );
}

export default App;
