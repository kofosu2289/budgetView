import React, { Component } from "react";
import { Container, Row} from "reactstrap";
import ExpenseBoard from "./components/ExpenseBoard";
import Summary from "./components/Summary";
import IncomeBoard from "./components/IncomeBoard";
import { Redirect } from 'react-router-dom';

class HomePage extends Component {

  render() {

  const { component: Component, ...props } = this.props

    if (!localStorage.getItem('jwtToken')) {
      return <Redirect to='/login' />
    }

    return (
      <Container>
        <Row>
          <div className="col-md-3">
            <IncomeBoard />
          </div>
          <div className="col-md-9">
            <div>
              GRAPH HERE            
            </div>
            <div>
              <ExpenseBoard categories={props.categories} update={props.update} {...props} />
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
