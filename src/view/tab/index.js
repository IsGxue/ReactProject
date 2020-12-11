import React from 'react';
import './index.css'

class Tab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow1: 'content active',
            isShow2: 'content',
        }
        this.clickEvent = this.clickEvent.bind(this)
    }
    clickEvent(e) {
        console.log(this)
        if (e.target.dataset.btnid === '1') {
            this.setState({
                isShow1: 'content active',
                isShow2: 'content',
            })
        } else {
            this.setState({
                isShow1: 'content',
                isShow2: 'content active',
            })
        };
    }

    //渲染函数
    render() {
        return (
            <div>
                <button data-btnid='1' onClick={this.clickEvent}>内容1</button>
                <button data-btnid='2' onClick={this.clickEvent}>内容2</button>
                <div className={this.state.isShow1}><h1>内容1</h1></div>
                <div className={this.state.isShow2}><h1>内容2</h1></div>

            </div>
        )
    }



}

export default Tab