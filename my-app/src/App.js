import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./Components/Pages/NavBar";

function App() {
  return (
    <>
      <div>
        <Router>
          <NavBar />
        </Router>
      </div>
    </>
  );
}

export default App;
