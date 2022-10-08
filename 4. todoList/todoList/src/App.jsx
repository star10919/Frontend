import React,{ useState } from 'react'
import './App.css'
import TodoBoard from './components/TodoBoard'
import TodoItem from './components/TodoItem'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const addItem = () => {
    setTodoList([...todoList, inputValue])
  }


  return (
    <div className="App">
      <input type='text' value={inputValue} style={{width:300, height:50, borderRadius:10, marginRight:10, border:'2px solid skyblue'}} onChange={(event)=>setInputValue(event.target.value)} />
      <button style={{width:80, height:50, border:'2px solid skyblue'}} onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList.map((item => <TodoItem item={item} />))} />
    </div>
  )
}

export default App
