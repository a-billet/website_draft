import { Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./components/Home";
import Photography from "./components/Photography";
import AboutMe from "./components/AboutMe";
import history from "./history";

class App extends Component {
  render() {
    return (
      /*<div>
        <Home />
      </div>*/
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="/Photography" component={Photography} />
        </Switch>
      </Router>
    );
  }
}

export default App;
