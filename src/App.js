import React from "react";
import Mountain from "./components/pages/Mountain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Team from "./components/team/Team";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Mountain />} />
      <Route path="/home" element ={<Home/>} />
      <Route path="/team" element ={<Team/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
