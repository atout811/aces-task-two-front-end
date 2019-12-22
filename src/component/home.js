import React, { Component } from "react";
import { Link } from "react-router-dom";
import jwt from 'jsonwebtoken';

export default class Home extends Component {
  state = {
    name: "",
    email: "",
    role: ""
  };

  componentDidMount(){
    if(localStorage.getItem('x-auth-token')){
      const decoded = jwt.decode(localStorage.getItem("x-auth-token"));
      console.log(decoded.name);
      this.setState({name: decoded.name, email: decoded.email, role: decoded.role});
    }else{
      this.setState({name: "", email: "", role: ""});
    }
  }

  render() {
    // return (
      let out = <div>
  <h1>Welcome To Our Task ,{ this.state.name } ^_^</h1>
        <h3>
          if you're new here please <Link to="/signup">Sign up</Link>
        </h3>
        <h3>
          if you have an account please <Link to="/login">Log in</Link>
        </h3>
      </div>

      if(this.state.name){
        out = <div>
          <h1>Welcome To Our Task ^_^</h1>
          <h3>Welcome, { this.state.name }</h3>
        </div>
      }
      return (out);
    // );
  }
}
