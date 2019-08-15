import React, { Component } from "react";
import "./NewExpenseModal.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

class NewExpenseModal extends Component {

   generate_color = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };




  submitNewCategory = event => {
    console.log(this.props, 'we testing tho')




      event.preventDefault();
        const category = {
          name: event.target.categoryName.value,
          board_type: 'expense',
          icon: event.target.exampleFormControlSelect1.value,
          color: this.generate_color(),
          goal: event.target.maxGoal.value,
          current_total: 0,
          user_id: Number(localStorage.getItem('currUser_id')),
      };

      axios.post(`http://localhost:3001/api/v1/category.json`, { category })
        .then(res => {
          this.props.update()
          this.props.close()
        })
    }


  render() {





    const { component: Component, ...props } = this.props

    return (
      <form onSubmit={this.submitNewCategory}>
        <h4 className="py-4">Add New Expense Category:</h4>
        <div className="form-group row px-4">
          <label htmlFor="categoryName" className="col-sm-3 col-form-label">
            Title:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="categoryName"
              placeholder="i.e. Vacation"
            />
          </div>
        </div>
        <div className="form-group row px-4">
          <label htmlFor="category-icon" className="col-sm-3 col-form-label">
            Select icon:
          </label>
          <div className="col-sm-9">
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Map</option>
              <option>Coffee</option>
              <option>Train</option>
              <option>Phone</option>
              <option>Utensils</option>
            </select>
          </div>
        </div>
        <div className="form-group row px-4">
          <label htmlFor="maxGoal" className="col-sm-3 col-form-label">
            Maximum Goal Spending Amount:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="maxGoal"
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

export default NewExpenseModal;
