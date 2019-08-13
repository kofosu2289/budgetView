import React, { Component } from "react";
import { Container, Row} from "reactstrap";
import ExpenseBoard from "./components/ExpenseBoard";
import Summary from "./components/Summary";
import IncomeBoard from "./components/IncomeBoard";

class HomePage extends Component {

  render() {

  const { component: Component, ...props } = this.props

    return (
      <Container>
        <Row>
          <IncomeBoard />
          <Summary />
          <ExpenseBoard categories={props.categories} update={props.update} {...props}/>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
