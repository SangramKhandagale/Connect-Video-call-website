import React from "react";
 import '../App.css'
import { Link, useNavigate } from "react-router-dom";
import "../styles/landing.css"

function Page(){

let navigate=useNavigate();

    return(


     <div className="landingpagecontainer">
       <nav className="navbar">
       <div className="navHeader">
            <h2>Connect</h2>
        </div>
       <div className="navList">
        <p className="guest" 
        onClick={()=>{
          navigate("/home")
        }}>Join as Guest</p>
        <p className="register"
        onClick={()=>{
          navigate("/auth")
        }}
        > Register</p>
      <div role="button">
        <p className="log"
         onClick={()=>{
          navigate("/auth")
        }}
        >Login</p>
      </div>
       </div>
       </nav>

      
      <div className="landingMainContainer">
<div className="notall">
<h1><span >Connect</span> With your Loved One's</h1>
<p >Cover the Distance by Connect</p>
<p className="special">Designed By-Sangram Pradip Khandagale</p>
<div className="butt" role="button">
   <Link to={"/auth"}>Get Started</Link>
</div>
</div>
<div className="img">
    <img src="/mobile.png" alt="" />
</div>

       </div>

      

     </div>
    )
}

export default Page;