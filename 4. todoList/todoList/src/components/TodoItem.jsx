import React from "react";

export default function TodoItem(props) {
  return (
    <div style={{width:'280px', display:'flex', justifyContent:'center'}}>
      {props.item}
      <button>삭제</button>
    </div>

  )
}