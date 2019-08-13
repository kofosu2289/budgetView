import React, { Component } from 'react';
import { Container } from "reactstrap";
import Navbar from './components/Navbar';
import ExpenseBoard from './components/ExpenseBoard';
import Summary from './components/Summary';
import IncomeBoard from './components/IncomeBoard';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Container>
          <ExpenseBoard />
          <Summary />
          <IncomeBoard />
        </Container>
      </div>
    );
  }
}

export default App;