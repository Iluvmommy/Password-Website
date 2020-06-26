import React, { Component } from "react";
import "./css/password-checker.css";
import getTime from './calc/getTime.jsx';

class PasswordChecker extends Component {
  state = {
    validInput: false,
  };

  onChange = () => {
    var v = document.getElementById("input").value;
    if (v === "") 
      this.setState({ validInput: false });
    else if (v.length > 0)
      this.setState({ validInput: true });
  };

  render() {
    const Info = this.state.validInput ? (
    <h2 className="font timeValue">{getTime(document.getElementById('input').value)}</h2>
    ) : <></>;

    return (
      <>
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
        <div>
          <pre>
            <li>Please note that this is an estimate of brute-force hacking.</li>
            <li>Hackers can also target certain words and names.</li>
            <li>The software is client-side. Information cannot be passed across the internet</li>
          </pre>
        </div>
      </>
    );
  }
}

export default PasswordChecker;
