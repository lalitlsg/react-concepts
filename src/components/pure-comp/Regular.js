import React, { Component } from "react";

export default class Regular extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log("Regular Component");
    return (
      <div>
        <div> Regular Component</div>
        <div> {this.props.color}</div>
        <div> {JSON.stringify(this.props.arr)}</div>
      </div>
    );
  }
}
