import React, { Component } from "react";
import SignupForm from "./components/SignupForm";

class SignupPage extends Component {
  render() {
    return (
      <SignupForm onLogIn={this.props.onLogIn} />
    );
  }
}

export default SignupPage;
