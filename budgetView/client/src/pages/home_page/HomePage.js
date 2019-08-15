import React, { Component } from "react";
import { Container, Row} from "reactstrap";
import ExpenseBoard from "./components/ExpenseBoard";
import Summary from "./components/Summary";
import IncomeBoard from "./components/IncomeBoard";
import Rundown from "./components/Rundown";
import { Redirect } from 'react-router-dom';
import "./HomePage.css";

class HomePage extends Component {

  render() {

  const { component: Component, ...props } = this.props

  if (!localStorage.getItem('jwtToken')) {
    return <Redirect to='/login' />
    }

    return (
      <Container>
        <Row>
          <div className="col-md-3" id="left-div">
            <IncomeBoard categories={props.categories} update={props.update} {...props}/>
            <Rundown categories={props.categories} update={props.update} {...props}/>
          </div>
          <div className="col-md-9" id="right-div">
            <div>
              <Summary categories={props.categories} update={props.update}/>
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
