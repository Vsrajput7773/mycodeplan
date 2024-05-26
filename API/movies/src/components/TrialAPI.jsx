import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

function TrialAPI() {

        useEffect(()=>{
            const url = 'https://trailapi-trailapi.p.rapidapi.com/trails/%7Bid%7D'
            fetch(url).then((res)=>{
                console.log(res);
            })
        },[])


  return (
    <div>TrialAPI</div>
  )
}

export default TrialAPI