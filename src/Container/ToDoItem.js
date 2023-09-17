import React from "react";
import '../App.css'
const ToDoItem = (props)=>{

    console.log('props===>>>>>', props)

    return(
        <>
            {props?.item?.map((item, index)=>{
                return(
                    <div className="itemCant" key={item.id}>
                        <p>{item?.taskName}</p>
                        <button onClick={()=>{props.onpress(item.id)}}>X</button>
                    </div>
                )
            })}
        </>
    )
}

export default ToDoItem;