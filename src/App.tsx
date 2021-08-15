import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/index";
import Calculator from "./pages/Calculator";
import { Header } from "./components/atoms/Header";
import { Nav } from "./components/molecules/Nav";

function App() {
  return (
    <Router>
      <Header>Cypress Testing Examples</Header>
      <Nav />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
