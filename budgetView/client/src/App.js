import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import Navbar from './components/Navbar';
import ExpenseBoard from './components/ExpenseBoard';
import Summary from './components/Summary';
import IncomeBoard from './components/IncomeBoard';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Row>
            <Col md="3">
              <ExpenseBoard />
            </Col>
            <Col md="6">
              <Summary />
            </Col>
            <Col md="3">
              <IncomeBoard />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;