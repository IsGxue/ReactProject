

import './index.css';
import React from 'react';
// let temp = 2;
// let bg = 'bg';
// let img = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605091859534&di=8eea3dfd55d7c2d0bd982f67efd54cb3&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg'


// let styleTemp = {
//     background: 'red',
//     borderBottom: '1px black solid',
//     height: '100px',
//     // backgroundImage: "url(" + img + ")"
// }
// let classArr = ['abc', 'bvd'].join(' ');
// let classStr = 'scd'
function App1(props) {
    let temp = '2';
    let show = temp === '123' ? '45622' : '344222'
    return (
        <div >
            {temp}{props.test}
            <div >{show}</div>
        </div>

    );
}


class App extends React.Component {
    render() {
        console.log(this)
        return (
            <div>类组件
                <App1 test='22' />
            </div>

        )
    }
}

export default App;
