import React, { useEffect, useState } from 'react'
import axios from 'axios'
function PostSubmit() {

    const [id,setId]=useState()
    const [title,setTitle]=useState()
    const [about,setAbout]=useState()
    const [response,setResponse]=useState()


// useEffect(()=>{
//  

// })


    const handleSubmit=(e)=>{
    e.preventDefault()
    const user={id,title,about}
    axios.post("https://jsonplaceholder.typicode.com/posts",user)
    .then((respose)=>{
            console.log(response);
            // setResponse(respose.data)
            console.log(respose.data);
        })
        .catch((error)=>{
            console.log(error);
        }) 
    }
    // console.log(title);
  return (
    <div>
        <h1>{response}</h1>
        <form>
        <div>
        {/* <lable>UserId</lable> */}
        <input type="text" placeholder='Enter User ID ' value={id} onChange={e => setId(e.target.value)}  />
        </div>
        <div>
        {/* <lable >Title</lable> */}
        <input type="text" placeholder='Enter Title' value={title}  onChange={e => setTitle(e.target.value)}  />
        </div>
        <div>
        {/* <lable>About</lable> */}
        <input type="text" placeholder='Enter About the Post' value={about }  onChange={e => setAbout(e.target.value)} />
        </div>
        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </form>
    </div>
  )
}
export default PostSubmit
