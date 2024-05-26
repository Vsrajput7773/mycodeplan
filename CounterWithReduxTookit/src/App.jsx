
import './App.css'
import {useDispatch,useSelector } from 'react-redux'
import { increment,dicrement,incrementByAmount,userName } from './Features/counterSlice'

function App() {
  const count=useSelector(state=>state.counter)
  const setName=useSelector(state=>state.userIn)
  console.log(setName);
  const dispatch=useDispatch()
  return (
    <>

      <h1>{setName}</h1>

      <h1>Counter Increment {count}</h1>
      <input type="text" onChange={e =>dispatch(userName((e.target.value)))}/>
      <button onClick={()=>dispatch(increment())} >Inrement+</button>
      <button onClick={()=>dispatch(dicrement())}>Dicrement</button>
      <button onClick={()=>dispatch(incrementByAmount(5))}>IncrementBy 5</button>
    </>
  )
}

export default App
