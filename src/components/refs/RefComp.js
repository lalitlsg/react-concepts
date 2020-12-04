import React, { Component } from "react";

export default class RefComp extends Component {
  constructor(props) {
    super(props);

    //method1 createRef
    this.inputRef = React.createRef();

    //method2 callback ref
    this.cbRef = null;
    this.setCbRef = element => {
      this.cbRef = element;
    };
    this.state = {
      text: ""
    };
  }

  componentDidMount() {
    this.inputRef.current.focus();
    // console.log(this.inputRef);
  }

  showText = () => {
    if (this.cbRef) {
      console.log(this.cbRef);
      this.setState({
        text: this.cbRef.value
      });
    }
  };

  render() {
    return (
      <>
        <div>
          <input type="text" ref={this.inputRef} />
        </div>
        <hr />
        <div>
          {this.state.text}
          <br />
          <input type="text" ref={this.setCbRef} />
          <div>
            <button onClick={this.showText}>show text</button>
          </div>
        </div>
      </>
    );
  }
}
