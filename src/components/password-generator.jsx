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
  };

  onChangeLen = () => {
    var v = document.getElementsByClassName('length').value;
    console.log(v);
    this.setState({ pwLen: v });
  };

  onChangeInput = (element) => {
    var v = element.value;
    // console.log(v);
    this.setState({element: v});
  };

  render() {
    var state = this.state;
    return (
      <div className="inDivs font">
        <h2>Want a Password?</h2>
        <div>
          <label htmlFor="length">Length : {state.pwLen}</label>
          <input
            type="range"
            name="length"
            className="length"
            onChange={this.onChangeLen}
            value={state.pwLen}     
            min="5"
            max="65"
          />
        </div>
        <div>
          <label htmlFor="Symbol">Symbol</label>
          <input
            type="checkbox"
            className="symbol"
            onChange={() => this.onChangeInput(this)}
          />
        </div>
        <div>
          <label htmlFor="numbers">numbers</label>
          <input
            type="checkbox"
            className="numbers"
            onChange={() => this.onChangeInput(this)}
          />
        </div>
        <div>
          <label htmlFor="UPPERCASE">UPPERCASE</label>
          <input
            type="checkbox"
            className="UPPERCASE"
            onChange={() => this.onChangeInput(this)}
          />
        </div>
        <div>
          <label htmlFor="lowercase">lowercase</label>
          <input
            type="checkbox"
            className="lowercase"
            onChange={() => this.onChangeInput(this)}
            defaultChecked
          />
        </div>
        <div className="pw">
          {generate(
            state.pwLen,
            state.symbol,
            state.numbers,
            state.uppercase,
            state.lowercase
          )}
        </div>
        <div style={{textAlign: "center"}}>
          <button className="copyBtn font">
            <div className="btn-copy">copy</div>
          </button>
        </div>
      </div>
    );
  }
}

export default PasswordGenerator;
