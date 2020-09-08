import React, {Component} from "react";

class Item extends Component {

    state = {
        checked: true,
    }
    onClick = (e) => {
        this.setState((state)=>{
            return {
                checked:!state.checked
            }
        })
    }

    render() {
        let className = '';
        if (this.state.checked) {
            className = 'checked'
        }
        return <li onClick={this.onClick} className={className}>{this.props.label}</li>
    }
}

export default Item;
