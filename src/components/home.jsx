import React, { Component } from "react";
import "./css/general.css";
import "./css/home.css";
import svg from "./css/hacker2.svg";

class Home extends Component {
  state = {};
  render() {
    return (
      <div id="main">
        <img src={svg} alt="malicious hacker"/>
        <div className="text">
          <h1 className="font">Keep YOUR data safe</h1>
          <p className="font urgent">
            <span>
              Hacker attack every <em>39</em> seconds
            </span>
            <span>
              You can purchase a consumer account for $1 on the dark market
            </span>
            <span>
              Russian hackers can infiltrate a computer network in 18 min
            </span>
            <span>
              Cybercrime is more profitable than global illegal drug trade
            </span>
            <span>We are all lazy...we hate passwords</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
