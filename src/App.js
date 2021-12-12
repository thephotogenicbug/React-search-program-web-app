import React from 'react'
import "./App.css";
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
         <Route  exact path='/' element={<Home />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
