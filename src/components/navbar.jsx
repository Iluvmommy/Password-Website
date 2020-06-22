import React, { Component } from "react";

const styles = {
  position: "absolute",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  background: "lightblue",
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
            <h1>hello</h1>
          </nav>
        </header>
      </>
    );
  }
}

export default NavBar;
