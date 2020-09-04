import React from "react";
import ReactDom from 'react-dom'

const Hello = () => {
    const style = {
        color: 'red',
        fontSize: '15px'
    }
    return (
        <div>
            <h1 style={style} className='text-center'>React first App</h1>
            <p>it is good news</p>
            <div className='form-group'>
                <label htmlFor='UserName'>Username</label>
                <input type='text' name='username' id='UserName'/>
            </div>
        </div>
    )
}


const Blog = (props) => {
    return (
        <div className="card" style={{width:'18rem'}} >
            <img className="card-img-top" src="https://www.biggerbolderbaking.com/wp-content/uploads/2017/08/1C5A0056-500x500.jpg" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    )
}

const Products = (props) => {
    return (
        <div style={{width:"min-content",margin:"auto",display:"flex"}}>
            <Blog title={'Tort'} text={'diur gsiug iurguerg pieurg piuergf pwure'}/>
            <Blog title={'Shocolad'}/>
            <Blog title={'Marmilad'}/>
            <Blog title={'Yogurt'}/>
        </div>
    )
}


ReactDom.render(
    <Products/>
    , document.getElementById('root'))
