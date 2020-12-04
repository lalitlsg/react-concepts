import React, { Component } from "react";

export default class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("LifeCycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }

  componentWillMount() {
    //cancel subscriptions, event listeners, ajax etc
    console.log("LifeCycleB componentWillMount");
  }

  render() {
    console.log("LifeCycleB render");
    return <div>B Component</div>;
  }
}
