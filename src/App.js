import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Home/Login";
import Signup from "./components/pages/Home/Signup";
import SinglePage from "./components/pages/Home/singlepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/searchprogram" element={<Home />} />
        <Route exact path="/:id" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
