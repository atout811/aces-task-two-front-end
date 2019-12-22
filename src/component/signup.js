import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export default class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  handleInputChangeName = e => {
    this.setState({
      name: e.target.value
    });
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    await axios
      .post("http://localhost:8000/api/auth/register", userObject)
      .then(res => {
        localStorage.setItem("x-auth-token", res.headers['x-auth-token']);
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
      <div>
        <div style={{ marginTop: 50 }}>
          <div className="ui middle aligned center aligned grid">
            <div className="column">
              <h2 className="ui teal image header">
                <div className="content">Create New Account</div>
              </h2>
              <form className="ui large form">
                <div className="ui stacked segment">
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="user icon"></i>
                      <input
                        type="text"
                        placeholder="ex. Abdo Tarek"
                        onChange={this.handleInputChangeName}
                        value={this.state.name}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="at icon"></i>
                      <input
                        type="text"
                        name="email"
                        placeholder="ex. abdo@tarek.com"
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
                    Signup
                  </div>
                </div>

                <div className="ui error message"></div>
              </form>

              <div className="ui message">
                Have an account? <Link to="login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
