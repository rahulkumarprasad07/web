
 //alert msg

// const { useState } = require("react");


// function App (){
//   function Greet(){
//     alert('wass up?')
//   }
//   return(
//     <button onClick={Greet}>hit me!</button>
//   )

// }
// export default App;


//vol up and down
// import React from "react";
// import { useState } from "react";

// function App(){
//  const [vol,setVol]=useState(50)
//  function Inc(){
//   if(vol<100){
//   setVol(vol+10);
//   }
//  }
//  function Dec(){
//   if(vol>0){
//   setVol(vol-10);
//   }
//  }

//  return(
//   <div>
//     <button style={{backgroundColor:"lightcyan"}} onClick={Inc}>INC</button>
//     <h3>{vol}</h3>
//     {vol===100 && <h3>MAX VOL</h3>}
//     {vol>50 && vol<90 && <h3>high</h3>}
//       {vol<=50 && vol>10 && <h3>low</h3>}
//      {vol===0 && <h3>MUTE</h3>}
//    <button style={{backgroundColor:"lightcyan"}} onClick={Dec}>DEC</button>

//   </div>

//  )
// }
// export default App

// import { useState } from "react";
// function App(){
//       const[color,setColor]=useState("white");

//   function Color(){
//     setColor("red")

//   }
//   function white(){
//     setColor("white")
//   }
//   return(
//     <div style={{backgroundColor:color,height:"100vh"}}> 
//          <button onClick={Color} onDoubleClick={white}>change</button>
         
    
//     </div>


//   )
// }
// export default App;}


//hide password


// import { useState } from "react";
// function App(){
//   const [show,setShow]=useState(false)
//   function Show(){
//     setShow(!show)
    
//   }
//   return(
//     <div>
//       <input type={show?"text":"password"} placeholder="enter password" />
//       <button  onClick={Show}>{show?"hide":"show"}</button>
//     </div>
    
//   )
  
// }
// export default App;
// import { useState } from "react";
// function App(){
//   const[status,setStatus]=useState("Stop")
//   const[color,setColor]=useState("red")
//   function Change(){
//     if(status=="Stop"){
//       setStatus("Ready")
//       setColor("yellow")
//     }else if(status=="Ready"){
//       setStatus("Go")
//       setColor("green")
//     }else{setStatus("Stop")
//       setColor("red")
//     }
//   }
//   return(
//     <button onClick={Change} style={{backgroundColor:color}}>{status}</button>
//   )
// }
// export default App

// import { useState } from "react";
// function App(){
//   const [show,setShow]=useState(false)
//   function Hide(){
//     setShow(!show)
//   }
//   return(
//     <div>
//     <input placeholder="enter password"type={show?"text":"password" }/>
//     <button onClick={Hide}>{show?"hide":"show"}</button>

//     </div>


//   )
// }
// export default App;
// exportdefault App;
// import { useState } from "react";
// function App(){
//   const [show,setShow]=useState(false)
//   function show(){
//     setShow(!show)
//   }
//   return(
//     <div>
//     <input placeholder="enter password"/ type={show?"type":"password"}>
//     <button onClick={show}>{show?"hide":"show"}</button>

//     </div>


//   )
// }
// import { useState } from "react";
// function App(){
//   const [follow,setFollow]=useState(false)
//   function Subscribe(){
//     setFollow(!follow)
//   }
//   return(
//     <div>
//       <button onClick={Subscribe}>{follow?"following":"follow"}</button>
//     </div>
//   )
// }
// export default App