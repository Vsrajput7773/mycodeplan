import { useState } from 'react'
import './App.css'

function App() {
      const [input ,setInput]=useState('') 
      const [todo ,setTodo]=useState([]) 
      const [editIndex,setEditeIndex]=useState(null)

      const handleSubmit =(e)=>{
        e.preventDefault()
        if(input.trim()!==''){
        
        setTodo([...todo,input])
        setInput('')
        }
    }
const handleEdit=(index)=>{
  setEditeIndex(index)
  setInput(todo[index])

}

const handleSave=()=>{
  if (input.trim() !== '') {
    const updatedTodoList = [...todo];
    updatedTodoList[editIndex] = input;
    setTodo(updatedTodoList);
    setInput('');
    setEditeIndex(null);
  }
}
    const handledelete=(index)=>{
        const newlist=[...todo]
        newlist.splice(index,1)
        setTodo(newlist)
    }

  return (
  <>
    <input type="text" placeholder='Enter Todo' value={input} onChange={(e)=>setInput(e.target.value)} />
   {editIndex !==null ?(
      <button onClick={handleSave}>Save</button>
   ):(

    <button  onClick={handleSubmit}>Submit Todo</button>
   ) }
   
    <ul>
      {
        todo.map((data,index)=>(
          <>
          <li key={data.index}>
            {editIndex === index ? (
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            ):(
              <>
              {data}
              <button onClick={()=>handleEdit(index)}>Edit</button>
              </>


              )}
            </li>
          <button onClick={()=>handledelete(index)}>Remove</button>
          </>
        ))
      }
    </ul>

  </>
  )
}


export default App
