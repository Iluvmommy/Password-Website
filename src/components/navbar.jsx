import React, { Component } from "react";
import { Link } from "react-router-dom";

const styles = {
  position: "absolute",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  background: "#4dd2ff",
  top: "0",
  left: "0",
  fontFamily: "'Quicksand', san-serif",
};

class NavBar extends Component {
  render() {
    return (
      <>
        <nav style={styles}>
          <h1>Password Helper</h1>
          <Link to="/password-generate">
            <li>password generator</li>
          </Link>
          <Link>
            <li>password safety</li>
          </Link>
        </nav>
      </>
    );
  }
}

export default NavBar;
