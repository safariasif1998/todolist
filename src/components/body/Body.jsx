import React, { Component } from "react";

export default class Body extends Component {
  handelRemove(id) {
    this.props.handelRemove(id);
  }
  render() {
    const task = this.props.tasks.map((task, index) => {
      return (
        <tr key={index}>
          <td>{task.number}</td>
          <td>{task.name}</td>
          <td style={{ textAlign: "center" }}>
            <button className="remove" onClick={(id)=>this.handelRemove(task.id)}>
              Remove
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className="main-body">
        <table className="table">
          <thead className="thead">
            <tr className="">
              <th className="">N</th>
              <th>Task-Name</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody className="tbody">{task}</tbody>
        </table>
      </div>
    );
  }
}
