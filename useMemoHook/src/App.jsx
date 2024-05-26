import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

function App() {
 const [counterOne,setCounterOne]=useState(0)
 const [counterTwo,setCounterTwo]=useState(0)

const handleCounterOne=()=>{
  setCounterOne(counterOne +1)
}

 const isEven=useMemo(()=>{
  console.log("vishal");
  let i=0;
  while(i<200000000)i++;
  return counterOne%2===0
},[counterOne])



const handleCounterTwo=()=>{
setCounterTwo(counterTwo +1)
}
  return (
    <div>
      <h1>{counterOne}</h1>
      <span>{isEven?"even":"odd"}</span>
      <button onClick={handleCounterOne}>CounterOne</button>
      <h2>{counterTwo}</h2>
      <button onClick={handleCounterTwo}>CounterTwo</button>
    </div>
  )
}

export default App