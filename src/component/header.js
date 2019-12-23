import React, { Component } from "react";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  // componentDidMount() {
  //   if (localStorage.getItem("x-auth-token") && this.props.isLogged) {
  //     const decoded = jwt.decode(localStorage.getItem("x-auth-token"));
  //     console.log(this.props.loggedin);

  //     this.props.headerLogged(decoded.name);
  //   } else {
  //     this.setState({
  //       topleft: "Log In",
  //       topright: "Sign Up",
  //       toleft: "/login",
  //       toright: "/signup"
  //     });
  //   }
  // }

  // deleteToken = () => {
  //   if (this.props.topRight === "Log Out") {
  //     localStorage.removeItem("x-auth-token");
  //   } else return 0;
  // };
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" style={{ margin: 10 }}>
          <h2>Home</h2>
        </Link>
        <div className="right menu">
          <Link to={this.props.toLeft} style={{ margin: 10 }}>
            <h2>{this.props.topLeft}</h2>
          </Link>
          <Link
            to={this.props.toRight}
            style={{ margin: 10 }}
            onClick={this.props.loggedOut}
          >
            <h2>{this.props.topRight}</h2>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    topLeft: state.topleft,
    topRight: state.topright,
    toLeft: state.toleft,
    toRight: state.toright,
    isLogged: state.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loggedOut: () => {
      dispatch({ type: "LOGGED_OUT" });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
