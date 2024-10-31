import React from 'react';
import './LogIn.css';
import { useState } from 'react';
import { assets } from '../../assets/assets';

const LogIn = ({setShowLogin}) => {
  const [currState,setCurrStste] = useState("Sign Up")
      
     return (
       <div className="login-page">
          <form className='login-page-container'>
  <div className="login-page-title">
  <h2>
  {currState}
  </h2>
  <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=" "/>
  </div>
  <div className="login-page-inputs">
    {currState==="LogIn"?<></>:<input type="text" placeholder="Your name" required />}
  <input type="email" placeholder='Your email' required/>
  <input type="password" placeholder='Password' required/>
  </div>
  <button>{currState==="Sign Up"?"Create account":"LogIn"}</button>
  <div className="login-page-condition">
     <input type="checkbox" required/>
     <p>By continuing,I agree to the terms of use & privacy policy</p>
  </div>
   {currState==="LogIn"
  ? <p>Create a new account?   <spam onClick={()=>setCurrStste("Sign Up") }>Click here</spam></p>:
   <p>Already have an account? <spam onClick={()=>setCurrStste("LogIn") }>LogIn here</spam> </p>}
  
          </form>
       </div>
     )
   }
   
   export default LogIn;
