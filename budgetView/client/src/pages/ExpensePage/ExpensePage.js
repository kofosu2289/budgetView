import React, { Component } from "react";
import { Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import BarGraphs from "../HomePage/components/BarGraphs/BarGraphs";
import ExpenseTable from "./components//ExpenseTable/ExpenseTable";
import axios from "axios";
import NewEntryModal from "./components/NewEntryModal/NewEntryModal";
import BudgetEditor from "./components/BudgetEditor/BudgetEditor";
import Popup from "reactjs-popup";
import { Redirect } from "react-router-dom";
import "./ExpensePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ExpensePage extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      orderBy: 'id desc'
    };
  }

  update(order) {
    const id = this.props.match.params["id"];
    const params = { orderBy: (order || this.state.orderBy)}
    axios.get(`https://desolate-badlands-77534.herokuapp.com/api/v1/category/${id}`, {params})
         .then(response => {
            this.setState({
              category: response.data[0],
              entries: response.data[1]
            });
          })
         .catch(error => console.log(error));
   }

  changeOrder = event => {
    event.preventDefault()
    const newOrder = event.target.id
    this.setState ({
      orderBy: event.target.id
    })
    this.update(newOrder)
  }


  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }


  componentDidMount() {
    this.update(this.state.orderBy);
  }

  render() {
    if (
      !localStorage.getItem("jwtToken")
    ) {
      return <Redirect to="/login" />;
    }
    return (
      <Container>
        {this.state &&
          this.state.entries && (
            <div className="expense-page">
              <a href="/home" className="btn btn-outline-primary px-4" id="income-go-home"><FontAwesomeIcon icon="home" /></a>
              <h1 className="text-center">{this.state.category.name}</h1>
              <h4 className="text-center mb-4" id="expense-budgeted">
                Budgeted - ${this.state.category.goal}
              </h4>
              <BarGraphs card={this.state.category} />

              <div className="mt-4 mb-2" id="expense-buttons">
                <Popup trigger={
                    <button
                      type="button"
                      className="btn btn-outline-primary px-4" >
                      Add Entry
                    </button> } modal closeOnDocumentClick >
                  {close => (
                    <NewEntryModal
                      update={this.update.bind(this)}
                      id={this.state.category.id}
                      updateHome={this.props.update}
                      close={close.bind(this)}
                    />
                  )}
                </Popup>
                <Popup trigger={
                    <button
                      type="button"
                      className="btn btn-outline-primary px-4" >
                      Edit Budget Amount
                    </button> } modal closeOnDocumentClick >
                  {close => (
                    <BudgetEditor
                      update={this.update.bind(this)}
                      category={this.state.category}
                      updateHome={this.props.update}
                      close={close.bind(this)}
                    />
                  )}
                </Popup>

                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>
                    Change View
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>
                      Order By:
                    </DropdownItem>
                    <DropdownItem id='name' onClick={this.changeOrder}>
                      A - Z
                    </DropdownItem>
                    <DropdownItem id='date desc' onClick={this.changeOrder}>
                      Date - Newest
                    </DropdownItem>
                    <DropdownItem id='date asc' onClick={this.changeOrder}>
                      Date - Oldest
                    </DropdownItem>
                    <DropdownItem id='amount desc' onClick={this.changeOrder}>
                      $$$ - $
                    </DropdownItem>
                    <DropdownItem id='amount asc' onClick={this.changeOrder}>
                      $ - $$$
                    </DropdownItem>
                    <DropdownItem id='id desc' onClick={this.changeOrder}>
                      Last Added
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>

              </div>
              <ExpenseTable
                entries={this.state.entries}
                id={this.state.category.id}
                update={this.update.bind(this)}
                updateHome={this.props.update}
              />
            </div>
          )}
      </Container>
    );
  }
}

export default ExpensePage;
