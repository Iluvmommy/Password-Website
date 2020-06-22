import React, { Component } from "react";

const styles = {
  position: "absolute",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  background: "#4dd2ff",
  top: "0",
  left: "0",
  fontFamily: "'Quicksand', san-serif"
};

class NavBar extends Component {
  render() {
    return (
      <>
        <header style={styles}>
          <nav>
            <h1>Password Helper</h1>
            <li><a href="/">password generator</a></li>
            <li><a href="/">password safety</a></li>
          </nav>
        </header>
      </>
    );
  }
}

export default NavBar;
