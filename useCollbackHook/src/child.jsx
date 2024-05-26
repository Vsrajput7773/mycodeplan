import React,{memo} from 'react'

function Child({counter,fun}) {
    console.log("Child component is render");
  return (
    <div>child Component{counter}</div>
  )
}

export default memo(Child)