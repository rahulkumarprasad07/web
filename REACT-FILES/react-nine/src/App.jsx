import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0);
  const[Total,setTotal]=useState(0);
  function handleClick(){
    setCount(count+1);
    
  }
    function handleTotal(){
 
    setTotal(Total+1);
  }
//FIRST is side effect function
//second-->cleanUp function
//third-->comma seperated dep list(kbhi bhi third vlaue update hogi useEFFect call hoga)


// useEffect(() => {
// alert("i will run on each render")
// })


//variation 2
// useEffect(() => {
// alert("i will work on when count is updated")
// },[count])

//variation 4
// useEffect(() => {
//  alert("run only when count and total updated!")
// }, [count,Total])

//variation 5
useEffect(() => {
 alert("count updated")

  return () => {
 alert("count unmount from ui")
  }
}, [count])


  return (
  <div>
    <button onClick={handleClick}>count!</button>
    <br />
    <p>count is:{count}</p>
    <br></br>
    <button onClick={handleTotal}>total!</button>
    <br />
    <p>count is:{Total}</p>
  </div>
  )
}

export default App
