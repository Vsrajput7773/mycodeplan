import React, { useState } from 'react'

function Hook2() {
 
    const [count,setCount]= useState([])

    const handleSubmit =(()=>{
        console.log();
        setCount([...count,{
            id:count.length,
            count:Math.floor((Math.random()*10)+1),
        }])
        console.log(count)
    })
 
    return (

    <div>
            <button onClick={handleSubmit}>Click me</button>
    <ul>
        {
            count.map(list=>(
                <li key={list.id}>{list.count}</li>
            ))
        }
    </ul>

    </div>
  )
}

export default Hook2