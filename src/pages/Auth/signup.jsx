import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth  } from "../../firebase/config";
import { Link } from "react-router-dom";
import "./signup.css"
import { toast } from "react-toastify";

export const Signup =()=>{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");

  const [error,setError]=useState("");
  const handleSignup = async ()=>{
  try{
await createUserWithEmailAndPassword(auth, email, password);
toast.success ("signup successful");
  }
  catch{
    console.log("Error during signup" , error.message);
    setError(error.message);
    toast.error("signup error...")
  }
}
    return(
<>
<section className="signup-container">
    <div className="signup-box">
              <h2>Create an account</h2>

              <form>

                <div className="input-group">
                <label>Your Name</label>
                  <input className="input-signup" type="text"placeholder="Enter Your Name" /> 
                </div>

                <div className="input-group" >
                <label>Your Email</label>
                  <input className="input-signup" type="email" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="Enter Your Email" />
                </div>

                <div className="input-group">
                <label>Password</label>
                  <input className="input-signup" type="password" value={password} onChange={(e) =>setPassword(e.target.value)} placeholder="Enter Your Password" />
                </div>

                <div className="input-group">
                <label>Repeat your password</label>
                  <input className="input-signup" type="password" placeholder="Repeat Your Password..." />
                </div>

                <div className="checkbox-group">
                  <input type="checkbox"/>
                  <p> I agree all <Link to={"#"}>Terms and Conditions</Link></p>
                </div>
                  <button  type="button" className="register-btn" onClick={handleSignup}>Register</button>
                <p className="login-nav">Have already an account? <Link to="/signin">Login here</Link></p>
              </form>
            </div>
</section>
</>
  );
};