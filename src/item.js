import React, {Component} from "react";

class Item extends Component {
    render() {

        const {changeChecked,deleteItem, checked, label, id} = this.props
        let className = '';
        if (checked) {
            className = 'checked'
        }
        return (
            <li className={className}>
                <span onClick={changeChecked(id)}>{label}</span>
                <span onClick={deleteItem(id)} className='close'>x</span>
            </li>
        )
    }
}

export default Item;
