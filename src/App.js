import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./contents/Home";
import Destination from "./contents/Destination";
import Crew from "./contents/Crew";
import Technology from "./contents/Technology";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div class="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/destination">
          <Destination />
        </Route>
        <Route exact path="/crew">
          <Crew />
        </Route>
        <Route exact path="/technology">
          <Technology />
        </Route>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://www.frontendmentor.io/profile/TpPoom#">TpPoom</a>.
        </div>
      </div>
    </Router>
  );
}

export default App;
