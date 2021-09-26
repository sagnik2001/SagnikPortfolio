import Navbar from "./components/Navbar.js"
import About from "./components/About/About.js"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header.js";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <>
       <Navbar/>
       <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/about" component={About} />
       </Switch>
       </>
    </Router>
  );
}

export default App;
