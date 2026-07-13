import React from "react";
import Head from "./heading";
import Paragraph from "./para";
import Click from "./click";
import Data from "./card";
import"./App.css";


function App(){


  return(
    <div id="main">
    <div >
       <Head />
      <Paragraph />
     
      <Click />
      
    </div>
      <div >
      < Data />
      </div>

      </div>


  );
}
export default App;
