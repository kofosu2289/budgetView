import React, { Component } from "react";
import "./NewIncomeModal.css";
import axios from "axios";

class NewIncomeModal extends Component {
  handleClick = event => {
    event.preventDefault();
    const category = {
      name: event.target.categoryName.value,
      board_type: "income",
      goal: 0,
      current_total: 0,
      user_id: Number(localStorage.getItem('currUser_id')),
    };

    axios.post(`http://localhoat:3001/api/v1/category.json`, { category })
      .then(res => {
        this.props.update()
        this.props.close()
      })
  }

  render() {
    const { component: Component, ...props } = this.props;
    return (
      <form onSubmit={this.handleClick}>
        <h4 className="py-4">Add new Income category:</h4>
        <div className="form-group row px-4">
          <label htmlFor="categoryName" className="col-sm-3 col-form-label">
            Income Source Name:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="categoryName"
              placeholder="i.e. Job 1"
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

export default NewIncomeModal;
