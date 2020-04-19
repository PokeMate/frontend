import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Pokedex from "./Pokedex";
import About from "./About";
import Mate from "./Mate";
import Profile from "./Profile";
import Incubator from "./Incubator";
import Details from "./Details";

import Header from "../components/Header";

export default function Views(props) {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pokedex/:id">
          <Details />
        </Route>
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
    </Router>
  );
}
