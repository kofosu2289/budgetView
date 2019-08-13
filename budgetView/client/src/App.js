import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import Navbar from './components/Navbar';
import ExpenseBoard from './components/ExpenseBoard';
import Summary from './components/Summary';
import IncomeBoard from './components/IncomeBoard';
import "./App.css";
import axios from 'axios';

class App extends Component {
  componentDidMount() {
  axios
    .get("http://localhost:3001/api/v1/resources.json")
    .then(response => {
      console.log(response);
      this.setState({
        resources: response.data
      });
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Row>
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
      </div>
    );
  }
}

export default App;