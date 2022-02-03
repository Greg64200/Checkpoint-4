import React from "react";
import "./App.css";
import Home from "./Components/Pages/PagesDetail/Home";
import Services from "./Components/Pages/PagesDetail/Services";
import Products from "./Components/Pages/PagesDetail/Products";
import SignUp from "./Components/Pages/PagesDetail/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
