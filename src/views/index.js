import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Pokedex from "./Pokedex";
import About from "./About";
import Mate from "./Mate";
import Profile from "./Profile";
import Incubator from "./Incubator";
import ApplicationBar from "./ApplicationBar";

export default function Views(props) {
  return (
    <div style={windowStyle}>
      <Router>
        <div style={appBarStyle}>
          <ApplicationBar />
        </div>
        <div style={desktopStyle}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pokedex">
              <Pokedex />
            </Route>
            <Route path="/incubator">
              <Incubator />
            </Route>
            <Route path="/mate">
              <Mate />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const appBarStyle = {
  zIndex: 100000,
};

const windowStyle = {
  width: "calc(100vw - 12px)",
  height: "calc(100vh - 12px)",
  background: "teal",
};

const desktopStyle = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
};
