import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { updateUser } from './UserReducer';

function EditeUser() {
    const {id} =useParams();
    const users = useSelector((state)=>state.users)
    const exsitingUser =users.filter(f => f.id == id)
    const {name , email} = exsitingUser[0];
    const [updateName ,setUpdateName] =useState(name)
    const [updateEmail ,setUpdateEmail] =useState(email)
    const dispatch =useDispatch()
    const navigate =useNavigate()
    const handleUpdate =(event)=>{
        event.preventDefault()
        dispatch(updateUser({
            id:id,
            name:updateName,
            email:updateEmail
        }))
        navigate('/')
    }


    return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-dark text-white p-5'>
        <form onSubmit={handleUpdate}  >
            <h1>Update User</h1>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text"
                 name='name'
                  className='form-control'
                 placeholder='Enter your Name '
                 value={updateName}
                 onChange={(e)=>setUpdateName(e.target.value)}
                 />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" 
                name='email' 
                className='form-control ' 
                placeholder='Enter your Name'
                value={updateEmail}
                onChange={(e)=>setUpdateEmail(e.target.value)}
                />
            </div><br/>
            <button className='btn btn-info'>Update</button>
        </form>
    </div>
</div>
  )
}

export default EditeUser