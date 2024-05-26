import React, { useEffect, useState } from 'react'

function Hook() {
const [count ,setCount]=useState(0)
const [count1 ,setCount1]=useState(0)

useEffect(()=>{
    console.log("Use Effect Hook is working....",count1);
},[count1])
   
return (
    <div>
        <h1>{count}</h1>
        <h1>{count1}</h1>
        <button onClick={()=>{setCount(count +1)}}>Count + 1</button>
        <button onClick={()=>{setCount1(count1 +1)}}>Count + 1</button>
    </div>
  )
}

export default Hook