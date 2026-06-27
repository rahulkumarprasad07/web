import React from "react";
import profile from"./my pfp linked.jpeg";

function Data(){

    return(

        <div id="card">
            <img src={profile}  alt="profile" />
            <h2>RAHUL KUMAR</h2>
            <p>Frontend Developer</p>
            <p>Loves React & C++</p>
            <button>Follow</button>

        </div>
    )
}
export default Data;