

import './01.css'
let temp = 2;
let bg = 'bg';
let img = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605091859534&di=8eea3dfd55d7c2d0bd982f67efd54cb3&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg'
let Template1 =(
    <div>拉拉</div >
)
function Template() {
    return (
        <div>拉拉</div >
    )
}
console.log(Template1)
function App() {
    return (
        <div className={bg}>
        {/* <div className='bg'> */}
        <img src={img} />
            <h1>{temp == 1 ? <button>33</button> : <Template />}</h1>
        </div>
    );
}

export default App;
