import React, { Component } from "react";
import "./NewEntryModal.css";
import axios from "axios";
import { Redirect } from 'react-router-dom';


class NewEntryModal extends Component {


  submitNewCategory = event => {
      event.preventDefault();

      const entry = {
        name: event.target.entryName.value,
        category_id: this.props.id,
        amount: event.target.amount.value,
        description: event.target.description.value,
        date: event.target.date.value,
      };

      axios.post(`http://localhost:3001/api/v1/entry.json`, { entry })
        .then(res => {
          this.props.update()
          this.props.updateHome()
        })

      console.log("HIHI")

    }


  render() {
    const { component: Component, ...props } = this.props
    console.log('PROPS: ', this.props)
    return (
      <form onSubmit={ this.submitNewCategory }>
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
              placeholder="i.e. bought for reason Y"
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
            <button type="submit" className="btn btn-primary px-4">
              Add
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default NewEntryModal;
