
import './App.css'
import Card from "./component/Card.jsx"
import Button from "./component/Button.jsx"
import { useState } from 'react'
function App() {
const [count,setCount]=useState(0);
function handleClick(){
  setCount(count+1);
}

  return (
   <div>
    <Button incrementCount={handleClick} text="hit me">
      <p>{count}</p>
    </Button>
    {/* <Card name="chomu">
      <h1>BEST OF MY WORK</h1>
      <p>still learning web dev</p>
      <p>will end it soon</p>

    </Card> */}
   </div>
  )
}

export default App
