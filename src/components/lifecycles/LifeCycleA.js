import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "random",
      data: {},
      isRenderB: true
    };

    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    // console.log(state);
    console.log("LifeCycleA getDerivedStateFromProps");
    // return {
    //   name: props.name
    // };
    return null;
  }

  componentDidMount() {
    // console.log(this.state);
    console.log(`LifeCycleA componentDidMount`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps);
    // console.log(nextState);
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    // console.log(prevProps);
    // console.log(prevState);
    return prevState;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifeCycleA componentDidUpdate");
    // console.log(prevProps);
    // console.log(prevState);
    // console.log(snapshot);

    // ----------------make sure to call ajax based on state or props or some condition otherwise
    // ----------------as there is setState so it will go into infinite loop

    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    //   .then(res => {
    //     this.setState({
    //       data: res.data
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }

  changeName = () => {
    console.log("called");
    this.setState({
      name: "Nikhil",
      isRenderB: !this.state.isRenderB
    });
  };

  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        {this.state.name}
        <button onClick={this.changeName}>change name</button>
        {this.state.isRenderB && <LifeCycleB />}
      </div>
    );
  }
}
