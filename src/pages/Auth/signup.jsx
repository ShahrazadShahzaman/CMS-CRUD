import "./signup.css"
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';

export const Signup =()=>{
    const [formData, setForm] = useState({
        email: "",
        password: ""
      });
      console.log(formData);

      const handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setForm({
          ...formData,
          [name]: value
        });
      };
    
      const handlesubmit = async (e) => {
        e.preventDefault();
        try {
          const { email, password } = formData;
          const res = await createUserWithEmailAndPassword(auth, email, password);
          console.log(res, "res");
          alert("User registered successfully!");
        } catch (error) {
          console.log(error.message);
          alert("Error: " + error.message);
        }
      };
    
    return (
        <>
        <div className="container">
        <div className="title">
            <p>Registration</p>
        </div>

        <form action="#" onSubmit={handlesubmit}>
            <div className="user_details">
                <div className="input_box">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" placeholder="Enter your name" onChange={handleInputChange} required/>
                </div>
                <div className="input_box">
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" onChange={handleInputChange} required/>
                </div>
                <div className="input_box">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" onChange={handleInputChange} required/>
                </div>
                <div className="input_box">
                    <label for="phone">Phone Number</label>
                    <input type="number" id="phone" placeholder="Enter your number" onChange={handleInputChange} required/>
                </div>
                <div className="input_box">
                    <label for="pass">Password</label>
                    <input type="password" id="pass" placeholder="Enter your password" onChange={handleInputChange} required/>
                </div>
                <div className="input_box">
                    <label for="confirmPass">Confirm Password</label>
                    <input type="password" id="confirmPass" placeholder="Confirm your password" required/>
                </div>
            </div>
            <div className="gender">
                <span className="gender_title">Gender</span>
                <input type="radio" name="gender" id="radio_1"/>
                <input type="radio" name="gender" id="radio_2"/>
                <input type="radio" name="gender" id="radio_3"/>

                <div className="category">
                    <label for="radio_1">
                        <span className="dot one"></span>
                        <span>Male</span>
                    </label>
                    <label for="radio_2">
                        <span className="dot two"></span>
                        <span>Female</span>
                    </label>
                    <label for="radio_3">
                        <span className="dot three"></span>
                        <span>Prefer not to say</span>
                    </label>
                </div>
            </div>
            <div className="reg_btn">
                <input type="submit" value="Register"/>
            </div>
        </form>
    </div>
        </>
    )
}