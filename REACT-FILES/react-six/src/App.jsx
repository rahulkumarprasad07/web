
import { useState } from 'react'
import Card from './components/Card.jsx'
import './App.css'
//create state
//manage state
//change state
function App() {

const [name,setName]=useState(" ");
  return (
 <div>
  <Card name={name} setName={setName}/>
  <p>this is parent:{name}</p>
  
 </div>
  )
}

export default App
