import React, { Component } from "react";
import axios from "axios";
import "./budgetEditor.css";

class BudgetEditor extends Component {

  editCategory = event => {
      event.preventDefault();
      const newGoal = event.target.maxGoal.value;
      const params = {
        newGoal: event.target.maxGoal.value,
        category_id: this.props.id,
      }

      axios.put(`http://localhost:3001/api/v1/category/${this.props.id}.json`, { newGoal }).then(res => {
        this.props.update();
        this.props.close();
        if (this.props.updateHome) {
          this.props.updateHome();
        }
      });


    };


  render() {
    const { component: Component, ...props } = this.props;
    return (
      <form className="budget-edit-form text-center" onSubmit={this.editCategory}>
        <h4 className="py-4">Edit your category budget:</h4>
        <div className="form-group row px-4">
          <label htmlFor="maxGoal" className="col-sm-3 col-form-label">
            New budget goal:
          </label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="maxGoal" placeholder="i.e. $75.00" />
          </div>
        </div>
        <div className="form-group row px-4">
          <div className="col-sm-12">
            <button type="submit" className="btn btn-outline-danger px-4">
              Update
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default BudgetEditor;
