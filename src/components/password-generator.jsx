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
    lowercase: false,
  };

  onChangeLen = () => {
    var v = document.getElementById("length").value;
    this.setState({ pwLen: v });
  };
  onChangeSymbol = () => {
    var v = document.getElementById("symbol").value;
    this.setState({ symbol: v });
  };
  onChangeNumbers = () => {
    var v = document.getElementById("numbers").value;
    this.setState({ numbers: v });
  };
  onChangeUppercase = () => {
    var v = document.getElementById("UPPERCASE").value;
    this.setState({ uppercase: v });
  };
  onChangeLowercase = () => {
    var v = document.getElementById("lowercase").value;
    this.setState({ lowercase: v });
  };

  render() {
    var state = this.state;
    return (
      <>
        <div id="inDivs" className="font">
          <h2>Want a Password?</h2>
          <span>
            <label htmlFor="length">Length : {state.pwLen}</label>
            <input
              type="range"
              name="length"
              id="length"
              onChange={this.onChangeLen}
              value={state.pwLen}
              min="5"
              max="65"
            />
          </span>
          <span>
            <label htmlFor="Symbol">Symbol</label>
            <input type="checkbox" id="symbol" onChange={this.onChangeSymbol} />
          </span>
          <span>
            <label htmlFor="numbers">numbers</label>
            <input type="checkbox" id="numbers" onChange={this.onChangeNumbers} />
          </span>
          <span>
            <label htmlFor="UPPERCASE">UPPERCASE</label>
            <input
              type="checkbox"
              id="UPPERCASE"
              onChange={this.onChangeUppercase}
            />
          </span>
          <span>
            <label htmlFor="lowercase">lowercase</label>
            <input
              type="checkbox"
              id="lowercase"
              onChange={this.onChangeLowercase}
            />
          </span>
          <span>
            {generate(
              state.pwLen,
              state.symbol,
              state.numbers,
              state.uppercase,
              state.lowercase
            )}
          </span>
          <button id="copyBtn" className="font">
            <div id="btn-copy">copy</div>
          </button>
        </div>
      </>
    );
  }
}

export default PasswordGenerator;
