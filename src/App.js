import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import NavBar from "./components/navbar";
import PasswordChecker from "./components/password-checker";
import "./App.css";
import PasswordGenerator from "./components/password-generate";
import Home from "./components/home";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/password-checker" exact component={PasswordChecker}/>
          <Route path="/password-generator" component={PasswordGenerator}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
