import "./App.css";
import { Header } from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Home } from "./components/Home.jsx";
import { Manual } from "./components/Manual.jsx";
// import { Dog } from "./components/Dog.jsx";
import { AboutUs } from "./components/AboutUs.jsx";
import { useState } from 'react'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/manual" element={<Manual />} />
        {/* <Route path="/dog" element={<Dog />} /> */}
        <Route path="/aboutus" element={<AboutUs />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
