import React, {Component} from "react";

class Item extends Component {
    render() {

        const {changeChecked, checked,label, id} = this.props
        let className = '';
        if (checked) {
            className = 'checked'
        }
        return <li onClick={changeChecked(id)} className={className}>{label}<span className='close'>x</span></li>
    }
}

export default Item;
