import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [count,setCount]=useState(0);

  return (
    <div className='counter'>
        <p id='para'>you have clicked {count} times</p>
        <button id='hit' onClick={()=>{
          setCount(count+1) }}>hit me</button>
    </div>
  )
}

export default Counter