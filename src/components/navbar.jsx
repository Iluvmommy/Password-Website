import React, { Component } from "react";
import { Link } from "react-router-dom";

const styles = {
  position: "absolute",
  width: "100%",
  display: "flex",
  alignItems: "center",
  borderBottom: "2px solid lightblue",
  top: "0",
  left: "0",
  fontFamily: "'Quicksand', san-serif",
};

const links = {
  color: "darkcyan",
  listStyle: "none",
  textDecoration: "none",
  fontSize: "20px",
  margin: "5px 20px",
};

const title = {
  fontSize: "23px",
  maxHeight: "70px",
  margin: "10px auto 10px 10px",
  color: "black",
  listStyle: "none",
  textDecoration: "none",
};

class NavBar extends Component {
  render() {
    return (
      <header>
        <nav className="nav" style={styles}>
          <Link to="/" style={title}>
            <h1 style={{ margin: "0" }}>Password Helper</h1>
          </Link>
          <Link to="/password-generator" style={links}>
            <li>Generate a password</li>
          </Link>
          <Link to="/password-checker" style={links}>
            <li>Is this a safe password?</li>
          </Link>
        </nav>
      </header>
    );
  }
}

export default NavBar;
