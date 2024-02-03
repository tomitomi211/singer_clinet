import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Works from "./components/Works";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/works">Works</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works/" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}



export default App;
