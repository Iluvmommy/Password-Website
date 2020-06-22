import React, { Component } from "react";
import "./main-content.css";
import getTime from './calc/getTime.jsx';

class MainContent extends Component {
  state = {
    validInput: null,
  };

  onChange = () => {
    var v = document.getElementById("input").value;
    if (v === "") 
      this.setState({ validInput: null });
    else if (v.length > 0)
      this.setState({ validInput: true });
  };

  render() {
    const Info = this.state.validInput ? (
    <h1 className="text font">{getTime(document.getElementById('input').value)}</h1>
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
            onChange={this.onChange}
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
