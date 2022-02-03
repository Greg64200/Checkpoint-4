import React from "react";
import "./App.css";
import Home from "./Components/Pages/PagesDetail/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Pages/NavBar";
// import Services from "./components/pages/Services";
// import Products from "./components/pages/Products";

// import AdventureSection from "./Components/Pages/AdventureSection";

function App() {
  return (
    <>
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
