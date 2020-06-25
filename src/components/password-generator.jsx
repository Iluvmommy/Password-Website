import React, { Component } from "react";
import "./css/general.css";
import "./css/password-generator.css";
import generate from "./calc/generate";

class PasswordGenerator extends Component {
  state = {
    pwLen: 11,
    symbol: false,
    numbers: false,
    uppercase: false,
    lowercase: true,
    words: true,
  };

  copy = () => {
    var copyText = document.getElementById("pw").innerHTML;
    window.prompt("Copy to clipboard: Ctrl+C, Enter", copyText)
  }

  onChangeInput = (evt) => {
    var v = evt.target.value;
    this.setState({ [evt.target.name]: v });
  };

  render() {
    var state = this.state;

    return (
      <>
        <div className="inDivs font">
          <h2>Want a Password?</h2>
          <div>
            <label htmlFor="length">Length : {state.pwLen}</label>
            <input
              type="range"
              name="pwLen"
              className="length"
              onChange={this.onChangeInput}
              value={state.pwLen || ""}
              min="5"
              max="65"
            />
          </div>
          <div>
            <label htmlFor="Symbol">Symbol</label>
            <input
              type="checkbox"
              className="symbol"
              name="symbol"
              onChange={this.onChangeInput}
            />
          </div>
          <div>
            <label htmlFor="numbers">numbers</label>
            <input
              type="checkbox"
              className="numbers"
              name="numbers"
              onChange={this.onChangeInput}
            />
          </div>
          <div>
            <label htmlFor="UPPERCASE">UPPERCASE</label>
            <input
              type="checkbox"
              className="uppercase"
              name="uppercase"
              onChange={this.onChangeInput}
            />
          </div>
          <div>
            <label htmlFor="lowercase">lowercase</label>
            <input
              type="checkbox"
              className="lowercase"
              name="lowercase"
              onChange={this.onChangeInput}
              defaultChecked
            />
          </div>
        </div>
        <div className="font unbound-container">
          <div id="pw" color={(this.state.pwLen < 11)? "orange" : "green"}>
            {generate(
              state.pwLen,
              state.symbol,
              state.numbers,
              state.uppercase,
              state.lowercase
            )}
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="copyBtn font" onClick={this.copy}>
              <div className="btn-copy">copy</div>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default PasswordGenerator;
