import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default class login extends Component {
  state = {
    email: "",
    password: "",
    isSignedUp: false
  };

  handleInputChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleInputChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const userObject = {
      email: this.state.email,
      password: this.state.password
    };
    await axios
      .post("http://localhost:8000/api/auth/login", userObject)
      .then(res => {
        localStorage.setItem('x-auth-token', res.headers['x-auth-token']);
        this.setState({ isSignedUp: true });
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  render() {
    if (localStorage.getItem("x-auth-token")) {
      return <Redirect to={{ pathname: "/" }} />;
    }
    return (
      <div style={{ marginTop: 50 }}>
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui teal image header">
              <div className="content">Log-in to your account</div>
            </h2>
            <form className="ui large form">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="at icon"></i>
                    <input
                      type="text"
                      name="email"
                      placeholder="ex. akram@elgnainy.com"
                      onChange={this.handleInputChangeEmail}
                      value={this.state.email}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleInputChangePassword}
                      value={this.state.password}
                    />
                  </div>
                </div>
                <div
                  className="ui fluid large teal submit button"
                  onClick={this.handleSubmit}
                >
                  Login
                </div>
              </div>

              <div className="ui error message"></div>
            </form>

            <div className="ui message">
              New to us? <Link to="/signup">Signup</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
