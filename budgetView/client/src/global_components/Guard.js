import React, { Component } from "react";

import SignupPage from '../pages/signup_page/SignupPage'

class Guard extends Component {

  handleLogIn = () => {
    console.log("to do")
  }

  render() {
    if (true) {
      return <SignupPage onLogIn={this.handleLogIn} />
    }
    return this.props.children
  }
}

export default Guard;
