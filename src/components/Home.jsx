import React from 'react'
import {useNavigate } from 'react-router-dom'
import { showToast } from './Toast';
const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    showToast('logout succesfully')

setTimeout(() => {
  navigate("/");
}, 1000);
}
  return (
    <div>
      <h1>HWelcome home buddy</h1>
      <button onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default Home
