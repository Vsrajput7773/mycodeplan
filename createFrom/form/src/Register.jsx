import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from './UserReducer'

function Register() {
  const [name ,setName] =useState('')
  const [email ,setEmail] =useState('')
  const [password ,setPassword] =useState('')
  const dispatch =useDispatch()
  const navigate =useNavigate()
  const user=useSelector((state)=>state.users) 

const handleSubmit =(e)=>{
e.preventDefault()
dispatch(addUser({id:user[user.length -1 ].id+1,name,email,password}))
  navigate('/')
}

  return (
    <div className='w-100 vh-100 bg-dark d-flex justify-content-center align-items-center text-light'>
      <form onSubmit={handleSubmit} className='bg-light w-50 text-dark p-5'>
        <h1 className='text-center my-4 fs-3'>Register Form</h1>
       <div className="form-group d-flex my-4 mx-4 ">
       <label htmlFor="name">Name: </label>
        <input type="text"
         className='form-control mx-2' 
         name='name' 
         placeholder='Enter Name'
         onChange={e =>setName(e.target.value)}
         required/>
       </div>
       <div className="form-group d-flex my-4 mx-4 ">
       <label htmlFor="email">Email: </label>
        <input type="email" 
        className='form-control mx-2' 
        name='email' 
        placeholder='Enter Email id' 
        onChange={e =>setEmail(e.target.value)}
        required/>
       </div>
       <div className="form-group d-flex my-4 mx-4 ">
       <label htmlFor="password">Password:</label>
        <input type="password" 
        className='form-control mx-2' 
        name='password' 
        placeholder='Enter Password' 
        onChange={e =>setPassword(e.target.value)}
        
        required/>
       </div>
       <div className='form-group text-center '>
      <button className='btn btn-success '>Submit</button>
       </div>
       
      </form>
    </div>
  )
}

export default Register