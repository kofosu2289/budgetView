import React, { Component } from "react";
import axios from "axios";
import "./ExpenseTable.css";


const makeEntryRow = (entries) => {
  let count = 0;
  const allRows = entries.map(entry => {
    count += 1;
    return(
      <tr>
        <th scope="row">{count}</th>
        <td>{entry.name}</td>
        <td>{entry.date}</td>
        <td>$ {entry.amount}</td>
        <td>{entry.description}</td>
      </tr>
    );

  })
  return allRows
}

class ExpenseTable extends Component {
  handleClick = event => {
    event.preventDefault();

    const category_id = this.props.id;
    
    axios.delete(`http://localhost:3001/api/v1/category/${category_id}`)
      .then(res => {
        this.props.updateHome()
      })
  }



  render() {
    const { component: Component, ...props } = this.props
    return (
      <div>

        <div className="expense-table mx-auto py-4 col-md-12">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
            {makeEntryRow(props.entries)}
            </tbody>
          </table>
          <br />
          <button type="button" className="btn btn-primary delete-btn" onClick={this.handleClick.bind(this)}>Delete Category</button>

        </div>
      </div>
    );
  }
}

export default ExpenseTable;
