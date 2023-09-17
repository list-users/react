import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function InputField(props) {

    return (
        <>
            <div id="myDIV" className="header">
                <h2>My To Do List</h2>
                <input
                    type="text"
                    id="myInput"
                    placeholder="Title..."
                    onChange={props.onChange}
                    name="full_name"
                    value={props.value}
                />
                <input type='button' onClick={props.handleSubmit} className="addBtn" value='Add' />
            </div>
        </>
    );
}
export default InputField;
