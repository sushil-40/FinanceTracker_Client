import { useState } from "react";

import "./App.css";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";



function App() {
  toast.success("Show your message!");
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
