import React, { Component } from "react";
import Clock from "../clock/Clock";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: new Date().toLocaleTimeString(),
    };
    setInterval(this.tick.bind(this), 1000);
  }
  tick() {
    this.setState({
      clock: new Date().toLocaleTimeString(),
    });
  }
  render() {
    return (
      <div className="footer">
        <Clock />
      </div>
    );
  }
}
