import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  handelChange(eve) {
    this.setState({
      input: eve.target.value,
    });
  }
  addTask(e) {
    const {input} = this.state;
    if(!input.trim()) return;
    this.props.handelAddTask(input);
    this.setState({
      input: "",
    });
  }
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <input
            type="text"
            placeholder="write your task name"
            className="input"
            value={this.state.input}
            onChange={this.handelChange.bind(this)}
          />
          <button className="add-task" onClick={this.addTask.bind(this)}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
