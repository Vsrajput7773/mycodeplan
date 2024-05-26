import React, { useCallback, useState } from 'react'
import Child from './child'

export default function Parent() {
const [counter,setCounter]=useState(0)
const [counterTwo,setCounterTwo]=useState([])
    
const hadleCount =()=>{
    setCounter(counter +1)
}
const fun=useCallback(()=>{
    console.log("Hello");
},[counterTwo])


return (
      <div>
        <Child counterTwo={counterTwo} fun={fun} />
        <h1>{counter}</h1>
        <button onClick={hadleCount}>Counter</button>
        </div>
  )
}
