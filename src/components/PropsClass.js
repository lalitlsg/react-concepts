import React, { Component } from "react";

export default class PropsClass extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome"
    };
  }

  handleClick() {
    this.setState({
      message: "Thank You"
    });
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        {this.props.children} {this.props.name} {message}
        <br />
        <button onClick={() => this.handleClick()}>Click</button>
      </div>
    );
  }
}
