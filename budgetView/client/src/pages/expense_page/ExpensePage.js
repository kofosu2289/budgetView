import React, { Component } from "react";
import { Container } from "reactstrap";
import SpendingSummary from "./components/SpendingSummary";
import ExpenseTable from "./components/ExpenseTable";
import axios from "axios";
import NewEntryModal from "./components/NewEntryModal";
import Popup from "reactjs-popup";


class ExpensePage extends Component {

  update() {
    axios.get(`http://localhost:3001/api/v1/category/${this.props.match.params['id']}.json`)
         .then(response => {
           this.setState({
             category: response.data[0],
             entries: response.data[1]
           });
          })
         .catch(error => console.log(error));

  }

  componentDidMount() {
    this.update()

  }

  render() {
    return (
      <Container>
        <Popup trigger={
          <button type="button" className="btn btn-lg category-btn">
            Add Category
          </button>} modal closeOnDocumentClick>
          <NewEntryModal update={this.props.update} />
        </Popup>
        {this.state && this.state.entries &&
          <div>
            <SpendingSummary entries={this.state.entries} />
            <ExpenseTable entries={this.state.entries} id={this.props.match.params} />          </div>
        }
      </Container>
    );
  }
}

export default ExpensePage;
