import React, { useEffect, useState } from "react";
import './App.css';
import Axios from "axios";


import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Songs from "./components/Songs";
import Home from "./components/Home";

function App() {


  // const [categoryList, setCategoryList] = useState([]);

  // useEffect(() => {
  //   Axios.get("http://localhost:3003/api/get/category").then((response) => {
  //     setCategoryList(response.data);
  //     // console.log(categoryList);
  //   });
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="singer_clinet/" className="menu">プロジェクト一覧</Link>
        <Link to="singer_clinet/songs" className="menu">曲</Link>
        <Link to="singer_clinet/" className="menu">ユーザー管理</Link>

        {/* これ絶対消さないで、mysqlの取得だから */}
        {/* <ul>
          {categoryList.map((val, index) => {
            return <li key={index}>{val.name}</li>
          })}
        </ul> */}


        <Routes>
          <Route path="singer_clinet/" element={<Home />} />
          <Route path="singer_clinet/songs" element={<Songs />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
