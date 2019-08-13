import React, { Component } from "react";
import { Container } from "reactstrap";
import SpendingSummary from "./components/SpendingSummary";
import ExpenseTable from "./components/ExpenseTable";

class ExpensePage extends Component {
  render() {
    return (
      <Container>
        <SpendingSummary />
        <ExpenseTable />
      </Container>
    );
  }
}

export default ExpensePage;