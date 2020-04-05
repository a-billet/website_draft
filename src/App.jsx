import { Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./components/Home/Home";
import Photography from "./components/Photography/Photography";
import Portrait from "./components/Photography/Portrait";
import Trip from "./components/Photography/Trip";
import Wildlife from "./components/Photography/Wildlife";
import AboutMe from "./components/AboutMe/AboutMe";
import history from "./history";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/photography" component={Photography} />
          <Route path="/voyage" component={Trip} />
          <Route path="/wildlife" component={Wildlife} />
          <Route path="/portrait" component={Portrait} />
        </Switch>
      </Router>
    );
  }
}

export default App;
