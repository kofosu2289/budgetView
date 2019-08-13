import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ExpenseBoard from "./components/ExpenseBoard";
import Summary from "./components/Summary";
import IncomeBoard from "./components/IncomeBoard";

class HomePage extends Component {
  render() {
    const customRowStyling = { marginLeft: 0 };

    return (
      <Container className="body">
        <Row style={customRowStyling}>
          <Col md="3">
            <IncomeBoard />
          </Col>
          <Col md="6">
            <Summary />
          </Col>
          <Col md="3">
            <ExpenseBoard />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;