import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { showToast } from "./Toast";
// Here we have used redux authSlice import like
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
     e.preventDefault();
     axios
       .post("http://localhost:3000/auth/login", { email, password })
       .then((response) => {
         if (response.data.status === true) {
           dispatch(
             loginSuccess({
               user: response.data.user,
               token: response.data.token,
             })
           );
           showToast("Login successful", "success");
           setTimeout(() => navigate("/home"), 2000);
         }
       })
       .catch(() => {
         showToast("Invalid Credentials", "error");
       });
  };
  return (
    <div className="sign-up-container">
      <h2>Login </h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
        <p>
          Not have an Account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
