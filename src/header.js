import React from "react";

const Header = () => {
    return (
        <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <input type="text" id="myInput" placeholder="Title..."/>
            <span className="addBtn">Add</span>
        </div>
    )
}

export default Header;
