import React from 'react'
import './Counter.css'

const Counter = () => {
  return (
    <div className='counter'>
        <p id='para'>you have clicked 0 times</p>
        <button id='hit'>hit me</button>
    </div>
  )
}

export default Counter