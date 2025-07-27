import React, { Component } from "react";

export default class Clock extends Component {
  render() {
    return (
      <div>
        <p>{new Date().toLocaleTimeString()}</p>
      </div>
    );
  }
}
