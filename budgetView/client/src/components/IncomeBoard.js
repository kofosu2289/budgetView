import React from "react";
import "./IncomeBoard.css";

class IncomeBoard extends React.Component {
  render() {
    return (
      <div className="income-board row justify-content-center text-center border border-dark py-4">
        <h4>Income Boards</h4>
        <div class="card my-2">
          <div class="card-body">
            <h5 class="card-title">Cashier (Part-time)</h5>
            <h6 class="card-subtitle mb-2 text-muted">Costco - $21/hr</h6>
          </div>
        </div>
        <div class="card my-2">
          <div class="card-body">
            <h5 class="card-title">Dog Walker (Part-time)</h5>
            <h6 class="card-subtitle mb-2 text-muted">Pup Walker Service - $11/hr</h6>
          </div>
        </div>
        <div class="card my-2">
          <div class="card-body">
            <h5 class="card-title">Gift</h5>
            <h6 class="card-subtitle mb-2 text-muted">From Dad - $250</h6>
          </div>
        </div>
      </div>
    )
  }
}

export default IncomeBoard;