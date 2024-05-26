import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

function Update() {

  const {id} =useParams();
  const users = useSelector((state)=>state.users)
  const exsitingUser =users.find(f => f.id === id)
  const {name,email,password} = exsitingUser[0];
  const [updateName ,setUpdateName] =useState(name)
  const [updateEmail ,setUpdateEmail] =useState(email)
  const [updatePassword ,setUpdatePassword] =useState(password)
  const dispatch =useDispatch()
  const navigate =useNavigate()
  const handleUpdate =(event)=>{
      event.preventDefault()
      dispatch(updateUser({
          id:id,
          name:updateName,
          email:updateEmail,
          password:updatePassword,
      }))
      navigate('/')
  }

  return (
    <div className="w-100 vh-100 bg-dark d-flex justify-content-center align-items-center text-light">
      <form
        onSubmit={handleUpdate}
        className="bg-dark w-50 text-light border p-5"
      >
        <h1 className="text-center my-4 fs-3">Update User</h1>
        <div className="form-group d-flex my-4 mx-4 ">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            value={updateName}
            className="form-control mx-2"
            // name="name"
            placeholder="Enter Name"
            onChange={(e) => setUpdateName(e.target.value)}
            required
          />
        </div>
        <div className="form-group d-flex my-4 mx-4 ">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            value={updateEmail}
            className="form-control mx-2"
            // name="email"
            placeholder="Enter Email id"
            onChange={(e) => setUpdateEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group d-flex my-4 mx-4 ">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={updatePassword}
            className="form-control mx-2"
            // name="password"
            placeholder="Enter Password"
            onChange={(e) => setUpdatePassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group text-center ">
          <button className="btn btn-success ">Update</button>
        </div>
      </form>
    </div>
  );
}

export default Update;
