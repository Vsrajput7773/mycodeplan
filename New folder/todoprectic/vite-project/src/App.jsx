
import React, { useState } from 'react'

function App() {
  const [todo,setTodo] =useState([])
  const [inputTodo,setInputTodo] =useState("")


const handleTodo =(e)=>{
e.preventDefault()
if( inputTodo.trim() !=="") {
  setTodo([...todo,inputTodo])
  setInputTodo('')
}


}

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleTodo}>
        <label htmlFor="todo">Task:</label>
        <input type="text"
        value={inputTodo}
        placeholder='Enter a task'
        onChange={e =>setInputTodo(e.target.value)}
        />
        <button>Add task</button>
        <ul>

          {todo.map((todo,index)=>(
            <tr key={index}>
              <li>
              <td>{todo}</td>
              {/* <button>Edit</button> */}
              </li>
            </tr>
          ))}

        </ul>
      </form>
    </div>
  )
}

export default App