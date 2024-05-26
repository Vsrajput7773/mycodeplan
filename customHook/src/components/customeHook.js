import React, { useEffect, useState } from 'react'

function customeHook() {
 const URL ="https://jsonplaceholder.typicode.com/users"
 const [data,setData]=useState(null)
 const [loading,setLoading]=useState(true)
 const [error,setError]=useState(null)

 useEffect(()=>{
    const fetchData =async()=>{
        try {
            const response = await fetch(URL);
            if(!response.ok){
                throw new Error('Failed to find data');
            }
            const jsonData= await response.json();
            setData(jsonData)
            console.log(jsonData);
        
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false)
        }
    };
    fetchData();
 },[URL])
 
 return {data,loading,error}
}

export default customeHook