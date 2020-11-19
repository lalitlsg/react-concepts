import React, { Component } from "react";

export default class PropsClass extends Component {
  render() {
    return (
      <div>
        {this.props.children} {this.props.name}
      </div>
    );
  }
}
