import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Tours from "./Tours";
import Rent from "./Rent";
import Retail from "./Retail";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/tours">
            <Tours />
          </Route>
          <Route path="/rent">
            <Rent />
          </Route>
          <Route path="/retail">
            <Retail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
