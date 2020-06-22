
import React, { Component } from "react";
import "./password-checker.css";
import {getTime} from './calc/getTime.jsx';

class PasswordChecker extends Component {
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
    <h2 className="font timeValue">{getTime(document.getElementById('input').value)}</h2>
    ) : <h2 className="font timeValueAfter">less than one second</h2>;

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
        <div id="timeInfo">
          {Info}
        </div>
      </main>
    );
  }
}

export default PasswordChecker;
