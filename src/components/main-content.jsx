import React, { Component } from "react";
import "./main-content.css";

class MainContent extends Component {
  state = {
    validInput: null,
  };
  render() {
    const Info = this.state.validInput ? (
      <h1 className="text font">hello</h1>
    ) : null;

    return (
      <main>
        <h2 className="font">Is This a Good Password?</h2>
        <form id="form" className="font">
          <input
            id="input"
            type="text"
            autoComplete="off"
            name="password"
            value={this.state.validInput}
            required
          />
          <label htmlFor="password" id="label-line">
            <span id="content-text">Password</span>
          </label>
        </form>
        {Info}
      </main>
    );
  }
}

export default MainContent;
