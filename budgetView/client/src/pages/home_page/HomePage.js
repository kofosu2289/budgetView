import React, { Component } from "react";
import { Container, Row} from "reactstrap";
import ExpenseBoard from "./components/ExpenseBoard";
import Summary from "./components/Summary";
import IncomeBoard from "./components/IncomeBoard";

class HomePage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <IncomeBoard />
          <Summary />
          <ExpenseBoard />
        </Row>
      </Container>
    );
  }
}

export default HomePage;
