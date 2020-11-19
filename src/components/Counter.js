import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incCount() {
    this.setState(
      //setState is async fun
      //   {
      //     count: this.state.count + 1
      //   },
      //second parameter is callback fun used when we want to do something only after chnage in state
      //   () => {
      //     console.log(this);
      //     console.log(this.state.count);
      //   }
      //when we want to update state based on prev state always pass the fun in setState which has access to prevState
      (prevState, props) => ({
        count: prevState.count + 1
      })
    );
    // console.log("sync", this.state.count);
  }

  inCFive() {
    this.incCount();
    this.incCount();
    this.incCount();
    this.incCount();
    this.incCount();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.incCount()}>
          Click - {this.state.count}
        </button>
        <button
          onClick={() => {
            this.inCFive();
          }}
        >
          Inc 5 - {this.state.count}
        </button>
      </div>
    );
  }
}
