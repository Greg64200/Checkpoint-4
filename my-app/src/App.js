import React from "react";
import "./App.css";
// import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
// import Services from "./components/pages/Services";
// import Products from "./components/pages/Products";
// import SignUp from "./components/pages/SignUp";
// import AdventureSection from "./Components/Pages/AdventureSection";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          {/* <AdventureSection /> */}
          {/* <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/products" component={Products} />
            <Route path="/sign-up" component={SignUp} />
          </Switch> */}
        </Router>
      </div>
    </>
  );
}

export default App;
