import { Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./components/Home/Home";
import Photography from "./components/Photography/Photography";
import AboutMe from "./components/AboutMe/AboutMe";
import history from "./history";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" exact component={Home} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="/Photography" component={Photography} />
        </Switch>
      </Router>
    );
  }
}

export default App;
