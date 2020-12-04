import React, { Component } from "react";
import Child from "./Child";

export default class RefParent extends Component {
  constructor(props) {
    super(props);

    this.childRef = React.createRef();
  }

  changePlayerFromParent = () => {
    this.childRef.current.changePlayer();
  };

  render() {
    return (
      <div>
        <h1>Parent Comp</h1>
        <div>
          <button onClick={this.changePlayerFromParent}>Change Player</button>
        </div>
        <hr />
        <Child ref={this.childRef} />
      </div>
    );
  }
}
