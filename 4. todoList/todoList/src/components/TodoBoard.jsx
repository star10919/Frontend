import React from "react";
import TodoItem from "./TodoItem"

export default function TodoBoard (props) {
  return (
    <div style={{width:'400px', marginTop:'10px', backgroundColor:'skyblue', display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
      <h1>Todo List</h1>
      {props.todoList.map((item) => <TodoItem item={item}/>)}
    </div>
  )
}