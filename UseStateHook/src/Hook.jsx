import React, { useState } from 'react'

function Hook() {
    const [input1,setInput1]=useState({firstName:"",lastName:""})

  return (
    <div>
        <h1>UseState Hook</h1>
        <input type="text" value={input1.firstName} onChange={e => setInput1({ ...input1,firstName:e.target.value})} />
        <input type="text" value={input1.lastName} onChange={e => setInput1({...input1,lastName:e.target.value})} />
        {JSON.stringify(input1)}
        {/* {input1.firstName}
        {input1.lastName} */}
    </div>
  )
}

export default Hook