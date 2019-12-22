import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <div>
        <div className="ui two column grid">
          <div className="column">
            <h2>Hesham</h2>
          </div>
          <div className="column">
            <div className="ui raised segment">
              <a className="ui red ribbon label">Overview</a>
              <span>Account Details</span>
              <p></p>
              <a className="ui blue ribbon label">Community</a> User Reviews
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
