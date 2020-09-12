import React, {Component} from "react";
import Item from "./item";

class List extends Component {

    state = {
        data: [
            {id: 18789, checked: true, label: 'Hit the gym'},
            {id: 4242, checked: false, label: 'Pay bills'},
            {id: 31, checked: true, label: 'Meet George'},
            {id: 23523, checked: true, label: 'Buy eggs'},
            {id: 56, checked: false, label: 'Read a book'},
            {id: 426, checked: true, label: 'Organize office'}
        ]
    }

    changeChecked = (id) => () => {
        this.setState(({data}) => {
            const index = data.findIndex((item) => item.id === id)
            const item = {...data[index]}
            item.checked = !item.checked
            return {data:[...data.slice(0,index),item,...data.slice(index+1)]}
        })
    }

    deleteItem = (id) => () => {
        this.setState(({data}) => {
            const index = data.findIndex((item) => item.id === id)
            return {data:[...data.slice(0,index),...data.slice(index+1)]}
        })
    }

    render() {

        return (
            <ul id="myUL">
                {
                    this.state.data.map(
                        (item) => {
                            return <Item deleteItem={this.deleteItem} changeChecked={this.changeChecked} key={item.id} {...item}/>
                        }
                    )
                }
            </ul>
        )
    }
}

export default List;
