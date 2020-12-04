import React, { Component } from "react";
import FRChild from "./FRChild";

export default class FRParent extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  fillValue = () => {
    this.inputRef.current.value = "Bhar Diya";
  };

  render() {
    return (
      <div>
        <h1>Parent Comp</h1>
        <div>
          <button onClick={this.fillValue}>Fill Value</button>
        </div>
        <hr />
        <FRChild ref={this.inputRef} />
      </div>
    );
  }
}
