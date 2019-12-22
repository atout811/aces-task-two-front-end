import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To Our Task ^_^</h1>
        <h3>
          if you're new here please <Link to="/signup">Sign up</Link>
        </h3>
        <h3>
          if you have an account please <Link to="/login">Log in</Link>
        </h3>
      </div>
    );
  }
}
