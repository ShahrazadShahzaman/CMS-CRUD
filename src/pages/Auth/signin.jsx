import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";
export const  Signin =() =>{
  const navigate = useNavigate();

const[formData,setFormData]=useState({
    email:"",
    password:""
})
const [error,setError]=useState("");
const handleInputChange = (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    setFormData({
        ...formData,
        [name]:value
    })
}
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const {email,password} = formData;
        const res = await signInWithEmailAndPassword(auth,email,password)
        console.log(res,"responding");
        navigate("/admin");
        
    } catch (error) {
        console.log("Login error:", error.message);  
        setError(error.message);
    }
}
return(
    <>
   <div className="signin-container">
    <div className="card">
        <h2 className="text-center text-dark mb-4">Login Form</h2>
          <form className="cardbody-color" onSubmit={handleSubmit}>
            <div className="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="profile-image-pic img-thumbnail rounded-circle"
                width="140px" alt="profile"/>
            </div>

            <div className="mb-3">
              <input type="Email" name="email" className="signin-control" id="email"
                placeholder="Email" onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
              <input type="password" name="password" className="signin-control" id="password" placeholder="password" onChange={handleInputChange}/>
            </div>
            <button type="submit" className="btn btn-color">Login</button>

            <div id="emailHelp" className="form-text text-center mb-3">Not
              Registered? <Link to="/signup" className="text-dark fw-bold"> Create an
                Account</Link>
            </div>
          </form>
        </div>
      </div>
    </>
)
}