
import React from 'react';
// import ReactDOM from 'react-dom';


class Clock extends React.Component{
    constructor(props){  //相当于vue里面的data
        super(props) //状态
        this.state={
            time:new Date().toLocaleTimeString()
        }
    }
    render(){  //dom  渲染函数
        this.state.time=new Date().toLocaleTimeString()
        return(
            <div>
                <h1>
                    {this.state.time}
                </h1>

            </div>
        )
    }
    //生命周期函数 ,组件渲染完成时的函数
    componentDidMount(){}
}

export default Clock