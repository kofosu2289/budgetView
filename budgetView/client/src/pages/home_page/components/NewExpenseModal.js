import React, { Component } from "react";
import "./NewExpenseModal.css";

class NewExpenseModal extends Component {
  render() {
    return (
      <form>
        <h4 className="py-4">Add new expense category:</h4>
        <div className="form-group row px-4">
          <label htmlFor="category-name" className="col-sm-3 col-form-label">
            Title:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="category-name"
              placeholder="i.e. Vacation"
            />
          </div>
        </div>
        <div className="form-group row px-4">
          <label htmlFor="category-icon" className="col-sm-3 col-form-label">
            Select icon:
          </label>
          <div className="col-sm-9">
            <select className="form-control" id="category-icon">
              <option>Map</option>
              <option>Garbage Bin</option>
              <option>Train</option>
              <option>Phone</option>
              <option>Pet</option>
            </select>
          </div>
        </div>
        <div className="form-group row px-4">
          <label htmlFor="max-goal" className="col-sm-3 col-form-label">
            Maximum Goal:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="max-goal"
              placeholder="i.e. $75.00"
            />
          </div>
        </div>
        <div className="form-group row px-4">
          <div className="col-sm-12">
            <button type="submit" className="btn btn-primary px-4">
              Add
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default NewExpenseModal;
