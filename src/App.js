import React from "react";
import Intro from "./Intro";
// import Login from "./Login";
// import Signup from "./Signup";
import Search from "./Search";
import { useNavigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/Search" element={<Search />} />
      {/* <Route path="/user/signup" element={<Signup />} />
      <Route path="/user/login" element={<Login />} /> */}
    </Routes>
  );
}

export default App;
