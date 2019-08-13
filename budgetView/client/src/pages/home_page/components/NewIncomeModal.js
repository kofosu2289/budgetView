import React, { Component } from "react";
import "./NewIncomeModal.css";

class NewIncomeModal extends Component {
  render() {
    return (
      <form>
        <h4 className="py-4">Add new income source:</h4>
        <div className="form-group row px-4">
          <label for="income-source-title" className="col-sm-3 col-form-label">
            Title:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="income-source-title"
              placeholder="i.e. Part-time Job"
            />
          </div>
        </div>
        <div className="form-group row px-4">
          <label for="company-name" className="col-sm-3 col-form-label">
            Company:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="company-name"
              placeholder="i.e. Costco"
            />
          </div>
        </div>
        <div className="form-group row px-4">
          <label for="income" className="col-sm-3 col-form-label">
            Income:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="income"
              placeholder="i.e. $14.50/hr"
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

export default NewIncomeModal;