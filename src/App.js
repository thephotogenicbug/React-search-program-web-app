import React from 'react'
import "./App.css";
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/pages/Home/Login';
import Signup from './components/pages/Home/Signup';

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
         <Route  exact path='/' element={<Login />} />
         <Route exact path="/signup" element={<Signup />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
