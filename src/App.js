import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Player from './pages/Player';
import Login from './pages/Login'
import './App.css';

const App = () => {

  return(
    <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/player" element={<Player />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    
    </>
  )
};

export default App;
