import { useState } from 'react'

import './App.css'

function App() {
//  function handleClick(){
//    alert("I am clicked!!")
//  }
//  function handleMouse(){
//   alert("i m para")
//  }
function handleInput(e){
  console.log("input has changed!!",e.target.value)
}

  return (
<div>
  <form>
    <input type="text"  onChange={handleInput}/>
  </form>
  {/* <p onMouseOver={handleMouse}>I AM A para</p>
<button id='clickBtn' onClick={handleClick}>CLICK ME!</button> */}
</div>
  )
}

export default App
