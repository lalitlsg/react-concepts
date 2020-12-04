import React, { Component } from "react";
import Regular from "./Regular";
import Pure from "./Pure";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
      arr: [10, 20, 30]
    };
  }

  changeColor = () => {
    this.setState({
      color: "green",
      arr: [...this.state.arr, Math.floor(Math.random() * 10)]
    });
  };

  render() {
    console.log("Parent Component");
    return (
      <div>
        {this.state.color}
        <button onClick={this.changeColor}>Change Color</button>
        <hr />
        <Regular color={this.state.color} arr={this.state.arr} />
        <hr />

        <Pure color={this.state.color} arr={this.state.arr} />
      </div>
    );
  }
}
