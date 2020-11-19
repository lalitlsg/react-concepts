import React, { Component } from "react";

//Binding Event Handler
export default class EventExample extends Component {
  constructor() {
    super();
    this.state = {
      message: "Lalit"
    };
    // 3.Method
    // this.handleClick = this.handleClick.bind(this);
  }

  //   handleClick() {
  //     this.setState({
  //       message: "Nikhil"
  //     });
  //   }

  // 4.Method
  handleClick = () => {
    this.setState({
      message: "Nikhil"
    });
  };

  render() {
    return (
      <div>
        {this.state.message}
        {/* 1.Method */}
        {/* <button onClick={this.handleClick.bind(this)}>click</button> */}
        {/* 2.Method */}
        {/* <button onClick={() => this.handleClick()}>click</button> */}
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}
