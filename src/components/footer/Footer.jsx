import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="">updated {new Date().toLocaleTimeString()}</p>
      </div>
    );
  }
}
