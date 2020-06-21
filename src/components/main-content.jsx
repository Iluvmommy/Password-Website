import React, { Component } from "react";
import "./main-content.css";

class MainContent extends Component {
  render() {
    return (
      <main id="body">
        <h2>Generate Password</h2>
        <form id="form">
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
      </main>
    );
  }
}

export default MainContent;
