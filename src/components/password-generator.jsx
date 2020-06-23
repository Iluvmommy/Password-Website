import React, { Component } from "react";
import "./css/password-generator.css";

class PasswordGenerator extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="inDivs" className="font">
          <h2>Want a Password?</h2>
          <span>
            <label htmlFor="length">Length</label>
            <input type="range" name="length" id="length" />
          </span>
          <span>
            <label htmlFor="Symbol">Symbol</label>
            <input type="radio" id="Symbol" />
          </span>
          <span>
            <label htmlFor="numbers">numbers</label>
            <input type="radio" id="numbers" />
          </span>
          <span>
            <label htmlFor="UPPERCASE">UPPERCASE</label>
            <input type="radio" id="UPPERCASE" />
          </span>
          <span>
            <label htmlFor="lowercase">lowercase</label>
            <input type="radio" id="lowercase" />
          </span>
          <button id="generateButton" className="font">
            <span id="create">create</span>
            <span id="emoji" role="img" aria-label="happy face">
              &#128515;
            </span>
          </button>
        </div>
      </>
    );
  }
}

export default PasswordGenerator;
