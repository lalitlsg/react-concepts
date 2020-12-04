//Note : Refs cannot be attach to functional component

import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: "i like Virat"
    };
  }

  changePlayer = () => {
    this.setState({
      player: "Sachine sabka baap hai"
    });
  };

  render() {
    return (
      <div>
        <h1>Child Comp</h1>
        <div> {this.state.player}</div>
      </div>
    );
  }
}
