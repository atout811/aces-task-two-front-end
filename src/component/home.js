import React, { Component } from "react";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    if (localStorage.getItem("x-auth-token")) {
      const decoded = jwt.decode(localStorage.getItem("x-auth-token"));
      this.props.whileLogged(decoded);
    }
  }

  render() {
    // return (
    let out = (
      <div>
        <h1>Welcome To Our Task  ^_^</h1>
        <h3>
          if you're new here please <Link to="/signup">Sign up</Link>
        </h3>
        <h3>
          if you have an account please <Link to="/login">Log in</Link>
        </h3>
      </div>
    );

    if (this.props.name) {
      out = (
        <div>
          <h1>Welcome To Our Task, {this.props.name} ^_^</h1>
        </div>
      );
    }
    return out;
    // );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    email: state.email,
    role: state.role
  };
};
const mapDispatchToProps = dispatch => {
  return {
    whileLogged: (name, email, role) => {
      dispatch({ type: "IS_LOGGED", payload: name, email, role });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
