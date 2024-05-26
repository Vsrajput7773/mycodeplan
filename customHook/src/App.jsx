import { useState } from 'react'
import './App.css'
import UseCustomeHook from './components/UseCustomeHook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseCustomeHook/>    
    </>
  )
}

export default App
