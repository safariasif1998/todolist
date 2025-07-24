import React, { Component } from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Todo List",
      tasks: [
        { id: 1, number: 1, name: "develop front-end" },
        { id: 2, number: 2, name: "develop backend-end" },
        { id: 3, number: 3, name: "develop seo" },
        { id: 4, number: 4, name: "build Project" },
      ],
    };
  }
  handelAddTask(name) {
    this.setState((state) => {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Math.random() * 10, number: 1, name: name },
        ],
      };
    });
  }
  handelRemove(item) {
    console.log("item is clicked " + item);
  }
  render() {
    return (
      <div className="main-container">
        <div className="row">
          <h2 className="title">{this.state.title}</h2>
          <Header handelAddTask={this.handelAddTask.bind(this)} />
          <Body
            tasks={this.state.tasks}
            handelRemove={this.handelRemove.bind(this)}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
