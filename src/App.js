import React from "react";
import NavBar from "./components/navbar";
import PasswordChecker from "./components/password-checker";
import "./App.css";
import { BrowserRouter as router, Route, Switch } from "react-router-dom";
import PasswordGenerator from "./components/password-generate";

function App() {
  return (
    <>
      <NavBar />
      <router>
        <Switch>
          <Route path="/" exact component={PasswordChecker}/>
          <Route path="/password-generator" component={PasswordGenerator}/>
        </Switch>
      </router>
    </>
  );
}

export default App;
