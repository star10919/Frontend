import React from "react";

export default function TodoItem(props) {
  const deleteItem = () => {

  }

  return (
    <div style={{width:'200px', display:'flex', justifyContent:'center', alignItems:'center', border:'2px solid ivory', borderRadius:'10px'}}>
      {props.item}
      <button style={{margin:'5px'}} onClick={deleteItem}>삭제</button>
    </div>

  )
}