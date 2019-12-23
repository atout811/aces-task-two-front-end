import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./home";
import Signup from "./signup";
import Login from "./login";
import Header from "./header";
import User from "./user";

export default class App extends Component {
  state = {
    loggedin: false
  };
  toggleHandler = () => {
    if (localStorage.getItem("x-auth-token")) {
      this.setState({ loggedin: true });
    } else {
      return 0;
    }
  };
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/profile" component={User} />
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
