import React, {Component} from "react";
import Item from "./item";

class List extends Component {

    state = {
        data: [
            {id: 1, checked: true, label: 'Hit the gym'},
            {id: 2, checked: false, label: 'Pay bills'},
            {id: 3, checked: true, label: 'Meet George'},
            {id: 4, checked: true, label: 'Buy eggs'},
            {id: 5, checked: false, label: 'Read a book'},
            {id: 6, checked: true, label: 'Organize office'}
        ]
    }

    render() {

        return (
            <ul id="myUL">
                {
                    this.state.data.map(
                        ({id, label, checked}) => {
                            return <Item key={id} label={label} checked={checked}/>
                        }
                    )
                }
            </ul>
        )
    }
}

export default List;
