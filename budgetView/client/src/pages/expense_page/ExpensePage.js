import React, { Component } from "react";
import { Container } from "reactstrap";
import BarGraphs from "../home_page/components/BarGraphs";
import ExpenseTable from "./components/ExpenseTable";
import axios from "axios";
import NewEntryModal from "./components/NewEntryModal";
import BudgetEditor from "./components/budgetEditor";
import Popup from "reactjs-popup";
import { Redirect } from "react-router-dom";
import "./ExpensePage.css";

class ExpensePage extends Component {
  update() {
    const id = this.props.match.params["id"];
    axios
      .get(`http://localhost:3001/api/v1/category/${id}.json`)
      .then(response => {
        this.setState({
          category: response.data[0],
          entries: response.data[1]
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.update();
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
                    </button> } modal closeOnDocumentClick   >
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
                <a href="/home" className="btn btn-outline-primary px-4" id="income-go-home">Go Home</a>
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
