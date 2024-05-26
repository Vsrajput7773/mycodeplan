import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';
function Home() {
    const users =useSelector((state)=> state.users)
    // console.log(users);
const dispatch=useDispatch()
    const handleDelete =(id)=>{
        dispatch(deleteUser({id:id}))
    }
  return (
    <>
    <div className='w-100 vh-100  bg-dark '>
<div className=''>
<Link to={'/register'} className='btn btn-success'>New User +</Link>
<table className='table text-light'>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>

        </tr>
    </thead>

            <tbody>
                {users.map((user,index)=>(
  <tr key={index}>
  
  <td >{user.id}</td>
  <td >{user.name}</td>
  <td >{user.email}</td>
  <td >{user.password}</td>
  <td className='d-flex'>
  <Link to={'/update'} className='btn btn-success bg-success ms-1'>Update User</Link>
  <button onClick={()=>handleDelete(user.id)} className='btn btn-success bg-success ms-1'>Delete User</button>
  </td>
  </tr>
                ))}
              
            </tbody>
</table>

</div>
</div>
    </>
  )
}

export default Home