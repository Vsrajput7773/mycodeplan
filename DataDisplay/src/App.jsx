import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
function App() {

const [post ,setPost] =useState([])
const [error,setError] =useState("")

useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((response)=>{
    console.log(response.data);
    setPost(response.data)
  })
  .catch((error1)=>{
    console.log(error1);

    setError("URL Error")
  })
},[])


  return (
   <>
   List of post

   {
    post.length ?
    post.map((post,index)=>(
<ul key={index}>
<li>{post.body}</li>
</ul>
    )) :"post is Empty"
  } 

   {
    error ? <h1>{error}</h1> :"Some thing went wrong"
   }
  </>
  )
}

export default App
