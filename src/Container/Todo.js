import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import InputField from './InputField';

function Todo() {
    const [input, setInput] = useState('')
    const [toDoData, setToDoDta] = useState([])
    
    const onSubmit = (e) => {
      
        e.preventDefault()
        let list;
        if (input !== '') {
            list = { taskName: input, id: toDoData.length + 1 }
            setToDoDta([...toDoData, list])
            setInput('')
        }
    }

    const removerItem = (id)=>{
        const newData = toDoData.filter((item, index)=>{
           return item.id!==id
        })
        setToDoDta(newData)
    }

    return (
        <>
            <InputField
                value={input}
                handleSubmit={onSubmit}
                onChange={(e) => {
                    setInput(e.target.value)
                }}
            />
            <ToDoItem
                item={toDoData}
                onpress={removerItem}

            />
        </>
    );
}
export default Todo;
