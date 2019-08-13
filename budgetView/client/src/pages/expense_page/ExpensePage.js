import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ExpenseSummary from "./components/ExpenseSummary";
import ExpenseTable from "./components/ExpenseTable";

class ExpensePage extends Component {
  render() {
    return (
      <Container>
        <Col md="12">
          <ExpenseSummary />
        </Col>
        <Col md="12">
          <ExpenseTable />
        </Col>
      </Container>
    );
  }
}

export default ExpensePage;