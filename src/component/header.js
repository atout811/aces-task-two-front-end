import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" style={{ margin: 10 }}>
          <h2>Home</h2>
        </Link>
        <div className="right menu">
          <Link to="/login" style={{ margin: 10 }}>
            <h2>Log in</h2>
          </Link>
          <Link to="/signup" style={{ margin: 10 }}>
            <h2>Sign up</h2>
          </Link>
        </div>
      </div>
    );
  }
}
