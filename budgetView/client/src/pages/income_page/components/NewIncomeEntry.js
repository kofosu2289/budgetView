import React, { Component } from "react";
import axios from "axios";
import "./NewIncomeEntry.css";

class NewIncomeEntry extends Component {
  handleClick = event => {
    event.preventDefault();

    const entry = {
      name: event.target.entryName.value,
      amount: event.target.amount.value,
      description: event.target.description.value,
      date: event.target.date.value,
      category_id: this.props.state_category.id
    };

    axios
      .post("http://localhost:3001/api/v1/entry.json", { entry })
      .then(response => {
        this.props.update();
        this.props.updateHome();
        this.props.close();
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <form className="income-entry-form text-center"onSubmit={this.handleClick}>
        <h4 className="py-4">Add New Entry:</h4>
        <div className="form-group row px-4">
          <label htmlFor="entryName" className="col-sm-3 col-form-label">
            Name:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="entryName"
              placeholder="i.e. item X"
            />
          </div>
        </div>
        <div className="form-group row px-4">
          <label htmlFor="amount" className="col-sm-3 col-form-label">
            Amount Spent:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="amount"
              placeholder="i.e. $75.00"
            />
          </div>
        </div>
        <div className="form-group row px-4">
          <label htmlFor="description" className="col-sm-3 col-form-label">
            Notes:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="i.e. from sources Y"
            />
          </div>
        </div>
        <div className="form-group row px-4">
          <label htmlFor="date" className="col-sm-3 col-form-label">
            Date:
          </label>
          <div className="col-sm-9">
            <input
              type="date"
              className="form-control"
              id="date"
              placeholder="i.e. $75.00"
            />
          </div>
        </div>
        <div className="form-group row px-4">
          <div className="col-sm-12">
            <button type="submit" className="btn btn-outline-danger px-4">
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default NewIncomeEntry;
