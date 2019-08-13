import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Content from "./components/Content"

class LandingPage extends Component {
  render() {
    return (
      <Container className="landing-body">
        <Content />
      </Container>
    )
  }
}

export default LandingPage;
