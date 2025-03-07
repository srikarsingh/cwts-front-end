import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { showToast } from "./Toast";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/auth/signup", { userName, email, password }).then(responce => {
      // this I have used for restricting the login page
      if (responce.data.status === true) {
        showToast("All set tick tick go")
        navigate("/login");
        console.log(responce);
        
      }
    }).
      catch(error => {
  console.log(error);
  
    })
  };
  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="Email">Email</label>
        <input
          type="email"
          placeholder="Enter the email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter the password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign up</button>
        <p>
          Already have an account ?<Link to="/login">Login</Link>{" "}
         </p>
      </form>
    </div>
  );
};

export default Signup;
