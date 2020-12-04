import React, { PureComponent } from "react";

export default class Pure extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: { firstname: "", lastname: "" }
    };
  }

  handleName = e => {
    //in pure component, for objects , never change the existing state.Always return a new object
    //that reflects the new state
    this.setState({
      name: {
        ...this.state.name,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    console.log("Pure Component");
    return (
      <div>
        <div> Pure Component</div>
        <div> {this.props.color}</div>
        <div> {JSON.stringify(this.props.arr)}</div>
        <div>{JSON.stringify(this.state.name)}</div>
        <div>
          <input
            name="firstname"
            value={this.state.name.firstname}
            onChange={this.handleName}
          />
        </div>
        <div>
          <input
            name="lastname"
            value={this.state.name.lastname}
            onChange={this.handleName}
          />
        </div>
      </div>
    );
  }
}
