import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'



function App() {
    const [x,setX]=useState()
    const [y,setY]=useState()

   const logmovemove =(e)=>{
    
        setX(e.clientX)
        setY(e.clientY)
   }

useEffect(()=>{
    console.log("vishal");
    window.addEventListener('mousemove',logmovemove)
},[])

    return (
    <div>
        x {x} : y {y}
    </div>
  )}

export default App