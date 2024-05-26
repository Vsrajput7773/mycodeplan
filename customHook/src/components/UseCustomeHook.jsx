import React from 'react'
import customeHook from './customeHook'


function UseCustomeHook() {

    const {data,loading,error} =customeHook()

        if(loading){
            return <div>Loading...</div>
        }
        if(error){
            return <div>Error:{error.massage}</div>
        }
    return (
    <div>
        <ul>
        {data.map((d,index)=>(
        <ul >

            <li key={index}>Name: {d.name}</li>
            <li>UserName:{d.username}</li>
            <li>Email: {d.email}</li>
            <li>Phone No.: {d.phone}</li>
            <li>website: {d.website}</li>
            <li>company Name: {d.company.name}</li>
            <li>Id:{d.id}</li>
            <li>City:{d.address.city}</li>
            <br></br>
        </ul>
        ))}  
    </ul>
    </div>
  )
}

export default UseCustomeHook