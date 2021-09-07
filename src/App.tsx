import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Route path="/" component={HomePage} />
        </header>
      </div>
    </Router>
  );
}

export default App;
