import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config"
import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./signin.css";
export const  Signin =() =>{

const[formData,setFormData]=useState({
    email:"",
    password:""
})
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

       <Navigate to="/admin"/>
        
    } catch (error) {
        console.log("error");  
    }
}
return(
    <>
   <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center text-dark mt-5">Login Form</h2>
        <div className="text-center mb-5 text-dark">Made with bootstrap</div>
        <div className="card my-5">

          <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>

            <div className="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" id="Username" aria-describedby="emailHelp"
                placeholder="User Name" onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" placeholder="password" onChange={handleInputChange}/>
            </div>
            <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button></div>
            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
              Registered? <Link to="/signup" className="text-dark fw-bold"> Create an
                Account</Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
    </>
)
}