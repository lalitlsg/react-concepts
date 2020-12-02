import React, { Component } from "react";
import MethodProp from "./MethodProp";

export default class ParentMethodProp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "parent"
    };
  }

  showChildMsg = value => {
    this.setState({
      name: value
    });
  };

  render() {
    return (
      <div>
        {this.state.name}
        <MethodProp showMsg={this.showChildMsg} />
      </div>
    );
  }
}
