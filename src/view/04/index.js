
import React from 'react';
// import ReactDOM from 'react-dom';


class Clock extends React.Component {
    constructor(props) {  //相当于vue里面的data
        super(props) //状态
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }
    render() {  //dom  渲染函数
        this.state.time = new Date().toLocaleTimeString()
        return (
            <div>
                <h1>
                    {this.state.time}
                </h1>

            </div>
        )
    }
    //生命周期函数 ,组件渲染完成时的函数
    componentDidMount() {
       
        setInterval(() => {
            //不能直接修改state里面的值，直接修改state的值需要使用setState
            //  通过this.setState修改完数据后，并不会立即修改dom里面的 内容，react会在
            // 这个函数内容所有设置状态改变后，统一对比对虚拟dom对象，然后在统一修改，提升性能
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000)
      
    }
}

export default Clock