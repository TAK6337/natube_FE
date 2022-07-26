import React from "react";
import Intro from "./Intro";
import Search from "./Search";
import Login from "./Login";
import Signup from "./Signup";
import Write from "./Write";
import Detail from "./Detail";
import Update from "./Update";
import { useNavigate, Route, Routes } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/search" element={<Search />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/write" element={<Write />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/update" element={<Update />} />
    </Routes>
  );
}

export default App;