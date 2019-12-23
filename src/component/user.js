import React, { Component } from "react";
import jwt from "jsonwebtoken";
import { Redirect } from "react-router-dom";

export default class User extends Component {
  state = {
    name: "",
    email: "",
    role: ""
  };
  componentWillMount() {
    if (localStorage.getItem("x-auth-token")) {
      let decoded = jwt.decode(localStorage.getItem("x-auth-token"));
      this.setState({
        name: decoded.name,
        email: decoded.email,
        role: decoded.role
      });
    } else {
      this.setState({ name: "", email: "", role: "" });
    }
  }
  render() {
    if (!localStorage.getItem("x-auth-token")) {
      return <Redirect to={{ pathname: "/" }} />;
    }
    return (
      <div>
        <div className="ui two column grid">
          <div className="column">
            <h2>User Name: {this.state.name}</h2>
          </div>
          <div className="column">
            <div className="ui raised segment">
              <a className="ui red ribbon label" href="/">
                Overview
              </a>
              <span>Account Details</span>
              <p> Email: {this.state.email}</p>
              <a className="ui blue ribbon label" href="/">
                Community
              </a>{" "}
              User Reviews
              <p>Role: {this.state.role}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
