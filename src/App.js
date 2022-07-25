import React from "react";
import Intro from "./Intro";
import Login from "./Login";
import Signup from "./Signup";
import { useNavigate, Route, Routes } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/user/signup" element={<Signup />} />
      <Route path="/user/login" element={<Login />} />
    </Routes>
  );
}

export default App;