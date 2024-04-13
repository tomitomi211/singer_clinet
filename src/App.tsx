// import React from 'react';
import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import './App.css';
import Axios from "axios";


import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Works from "./components/Works";
// import Button from "./components/Button";

function App() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/category").then((response) => {
      setCategoryList(response.data);
      // console.log(categoryList);
    });
  }, []);

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
        <ul>
          {/* {categoryList.map((val, index) => {
            return <li key={index}>{val.name}</li>
          })} */}
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works/" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/button" element={<Button />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
    
  );
}



export default App;
