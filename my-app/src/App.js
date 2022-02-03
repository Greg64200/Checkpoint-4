import React from "react";
import "./App.css";
import Home from "./Components/Pages/PagesDetail/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
// import Services from "./components/pages/Services";
// import Products from "./components/pages/Products";

// import AdventureSection from "./Components/Pages/AdventureSection";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
