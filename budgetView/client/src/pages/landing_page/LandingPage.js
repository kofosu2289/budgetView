import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Content from "./components/Content"
import LoginWithFacebook from "./components/FacebookLogin"

class LandingPage extends Component {
  render() {
    return (
      <Container className="landing-body">
        <Content />
        <LoginWithFacebook />
      </Container>
    )
  }
}

export default LandingPage;
