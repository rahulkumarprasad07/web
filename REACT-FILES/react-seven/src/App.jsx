import LoginBtn from './Components/LoginBtn'
import LogoutBtn from './Components/LogoutBtn'
import { useState } from 'react'
import './App.css'

function App() {
const[IsLoggedIn,setLoggedIn]=useState(false);
// if(IsLoggedIn){
//  return (

//    <LogoutBtn/>

//   )
// }else{
//  return (

//    <LoginBtn/>

//   )
// }
return(
  <div>
  <p>welcome</p>
  {IsLoggedIn && <LogoutBtn/>}
  </div>
)
 
}

export default App
