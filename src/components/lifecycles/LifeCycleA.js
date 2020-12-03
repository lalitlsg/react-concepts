import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };

    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    // console.log(state);
    console.log("LifeCycleA getDerivedStateFromProps");
    return {
      name: props.name
    };
  }

  componentDidMount() {
    // console.log(this.state);
    console.log(`LifeCycleA componentDidMount`);
  }

  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        {this.state.name}
        <LifeCycleB />
      </div>
    );
  }
}
