import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import SignupForm from './components/SignupForm'

class SignupPage extends Component {
  render () {
    return (
      <Container className="body">
        <SignupForm />
      </Container>
    )
  }
}

export default SignupPage;
