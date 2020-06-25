import React, { Component } from "react";
import "./css/general.css";
import "./css/home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div id="main">
        <div className="text">
          <h1 className="font">Password Safety</h1>
          <p className="font">
            Hacker attack every <em>39</em> seconds
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
