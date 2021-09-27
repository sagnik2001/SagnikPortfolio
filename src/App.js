import Navbar from "./components/Navbar.js"
import About from "./components/About/About.js"
import Projects from "./components/Projects/Projects.js"
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
      <div className="App">
       <Navbar/>
       <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
       </Switch>
     </div>
    </Router>
  );
}

export default App;
