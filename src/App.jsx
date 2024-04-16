import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar/Navbar";
import Home from "./Pages/Home/Homescreen/Home";
import "./App.css";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
