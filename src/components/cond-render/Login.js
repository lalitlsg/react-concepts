import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  toggleLogIn = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  };

  render() {
    //method1 if-else
    // if (this.state.isLoggedIn) {
    //   return (
    //     <>
    //       <div>Hi User</div>
    //       <button onClick={this.toggleLogIn}>LogOut</button>
    //     </>
    //   );
    // } else {
    //   return (
    //     <>
    //       <div>Hi Guest</div>
    //       <button onClick={this.toggleLogIn}>LogIn</button>
    //     </>
    //   );
    // }
    // ------------------------------------------------------------------------------//
    //method2 element variable
    // let toRender;
    // if (this.state.isLoggedIn) {
    //   toRender = (
    //     <>
    //       <div>Hi User</div>
    //       <button onClick={this.toggleLogIn}>LogOut</button>
    //     </>
    //   );
    // } else {
    //   toRender = (
    //     <>
    //       <div>Hi Guest</div>
    //       <button onClick={this.toggleLogIn}>LogIn</button>
    //     </>
    //   );
    // }
    // return <>{toRender}</>;
    // ------------------------------------------------------------------------------//
    //method3 ternary operator
    // return this.state.isLoggedIn ? (
    //   <>
    //     <div>Hi User</div>
    //     <button onClick={this.toggleLogIn}>LogOut</button>
    //   </>
    // ) : (
    //   <>
    //     <div>Hi Guest</div>
    //     <button onClick={this.toggleLogIn}>LogIn</button>
    //   </>
    // );
    // ------------------------------------------------------------------------------//
    //method4 short circuit
    return this.state.isLoggedIn && <div>Hi User</div>;
  }
}
