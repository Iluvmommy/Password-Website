import React from "react";
import NavBar from "./components/navbar";
import PasswordChecker from "./components/password-checker";
import "./App.css";
import { BrowserRouter as router, Route, Switch } from "react-router-dom";
import PasswordGenerator from "./components/password-generate";
import Home from "./components/home";

function App() {
  return (
    <>
      <NavBar />
      <router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/password-checker" exact component={PasswordChecker}/>
          <Route path="/password-generator" component={PasswordGenerator}/>
        </Switch>
      </router>
    </>
  );
}

export default App;
