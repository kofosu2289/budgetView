import React, { Component } from "react";
import { Container } from "reactstrap";
import SpendingSummary from "./components/SpendingSummary";
import ExpenseTable from "./components/ExpenseTable";
import NewIncomeEntry from "./components/NewIncomeEntry";

import axios from "axios";
import Popup from "reactjs-popup";

class ExpensePage extends Component {
  update() {
    const { id } = this.props.match.params;
    axios
      .get(`http://localhost:3001/api/v1/category/${id}.json`)
      .then(response => {
        this.setState({
          category: response.data[0],
          entries: response.data[1]
        });
        console.log(this.state, "yo yo we checking this out");
      })
      .catch(error => console.log(error));
  }

  updateDatabase(to_add) {
    console.log(to_add, "we got here");
    console.log(
      this.state.category.current_total,
      typeof this.state.category.current_total,
      this.state.user_id,
      "we got here twice"
    );

    const { id } = this.props.match.params;
    axios
      .put(`http://localhost:3002/api/v1/category/${id}`, {
        current_total: this.state.category.current_total + to_add,
        name: this.state.category.name,
        user_id: this.state.category.user_id,
        board_type: this.state.category.board_type,
        goal: this.state.category.goal
      })
      .then(response => {})
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.update();
  }

  render() {
    return (
      <Container>
        {this.state && this.state.entries && (
          <div>
            <SpendingSummary entries={this.state.entries} />
            <ExpenseTable entries={this.state.entries} />

            <Popup
              trigger={
                <button type="button" className="btn btn-lg income-btn">
                  Add New Entry
                </button>
              }
              modal
              closeOnDocumentClick
            >
              <NewIncomeEntry
                update={this.update.bind(this)}
                state_category={this.state.category}
                state_entry={this.state.entry}
              />
            </Popup>
          </div>
        )}
      </Container>
    );
  }
}

export default ExpensePage;
