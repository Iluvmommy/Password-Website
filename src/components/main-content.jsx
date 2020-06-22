import React, { Component } from "react";
import "./main-content.css";
import './calc/getTime';
import './calc/info';
import { getTime } from "./calc/getTime";

class MainContent extends Component {
  render() {
    return (
      <main>
        <h2 className="font">Is This a Good Password?</h2>
        <form id="form" className="font">
          <input
            id="input"
            type="text"
            autoComplete="off"
            name="password"
            required
          />
          <label htmlFor="password" id="label-line">
            <span id="content-text">Password</span>
          </label>
        </form>
        <h2 className="font">{getTime()}</h2>
      </main>
    );
  }
}

export default MainContent;
