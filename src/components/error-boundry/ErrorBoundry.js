import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) return <div>Something Went Wrong</div>;
    return <>{this.props.children}</>;
  }
}

// Notes
// 1.If we define getDerivedStateFromError, componentDidCatch methods in class component then it becomes error boundry
// 2.Error boundry component is not able to catch error from event handlers
//so for event handlers, to catch errors use try...catch
