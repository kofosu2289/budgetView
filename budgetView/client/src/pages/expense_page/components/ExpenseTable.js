import React, { Component } from "react";
import "./ExpenseTable.css";

class ExpenseTable extends Component {
  render() {
    return (
      <div className="expense-table mx-auto py-4 col-md-12">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Budgeted</th>
              <th scope="col">Tracked</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Provigo</td>
              <td>July 23rd, 2018</td>
              <td>$80.00</td>
              <td>$67.00</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Freshco</td>
              <td>July 25th, 2018</td>
              <td>$50.00</td>
              <td>$24.00</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Metro</td>
              <td>July 27th, 2018</td>
              <td>$70.00</td>
              <td>$62.00</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Convience Store</td>
              <td>July 27th, 2018</td>
              <td>$20.00</td>
              <td>$6.00</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>XXXXX</td>
              <td>July 30th, 2018</td>
              <td>$XX.XX</td>
              <td>$XX.XX</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>XXXXX</td>
              <td>July 30th, 2018</td>
              <td>$XX.XX</td>
              <td>$XX.XX</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>XXXXX</td>
              <td>July 30th, 2018</td>
              <td>$XX.XX</td>
              <td>$XX.XX</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>XXXXX</td>
              <td>July 30th, 2018</td>
              <td>$XX.XX</td>
              <td>$XX.XX</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>XXXXX</td>
              <td>July 30th, 2018</td>
              <td>$XX.XX</td>
              <td>$XX.XX</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>XXXXX</td>
              <td>July 30th, 2018</td>
              <td>$XX.XX</td>
              <td>$XX.XX</td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>XXXXX</td>
              <td>July 30th, 2018</td>
              <td>$XX.XX</td>
              <td>$XX.XX</td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>XXXXX</td>
              <td>July 30th, 2018</td>
              <td>$XX.XX</td>
              <td>$XX.XX</td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>XXXXX</td>
              <td>July 30th, 2018</td>
              <td>$XX.XX</td>
              <td>$XX.XX</td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td>XXXXX</td>
              <td>July 30th, 2018</td>
              <td>$XX.XX</td>
              <td>$XX.XX</td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <td>XXXXX</td>
              <td>July 30th, 2018</td>
              <td>$XX.XX</td>
              <td>$XX.XX</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ExpenseTable;
