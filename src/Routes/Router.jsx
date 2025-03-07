import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../components/login';
import Signup from '../components/Signup';
import Home from '../components/Home';
import DashBoard from '../components/DashBoard';
import ProtectedRoute from "../components/ProtectedRoute";


const Router = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
