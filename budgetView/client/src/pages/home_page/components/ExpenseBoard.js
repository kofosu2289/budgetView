import React, { Component } from "react";
import "./ExpenseBoard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewExpenseModal from "./NewExpenseModal";
import Popup from "reactjs-popup";

class ExpenseBoard extends Component {
  render() {
    return <div className="expense-board col-md-3 py-4 text-center">
      <h4 className="py-3">Expense Boards</h4>
      <div className="card-deck">
        <div className="card my-3">
          <div className="card-body">
            <FontAwesomeIcon icon="home" className="icons pb-2" />
            <h5 className="card-title">Housing</h5>
            <h6 className="card-subtitle mb-2 text-muted">$875</h6>
          </div>
        </div>
        <div className="card my-3">
          <div className="card-body">
            <FontAwesomeIcon icon="car" className="icons pb-2" />
            <h5 className="card-title">Transport</h5>
            <h6 className="card-subtitle mb-2 text-muted">$167</h6>
          </div>
        </div>
        <div className="w-100 d-none d-xl-block" />
        <div className="card my-3">
          <div className="card-body">
            <FontAwesomeIcon icon="utensils" className="icons pb-2" />
            <h5 className="card-title">Food</h5>
            <h6 className="card-subtitle mb-2 text-muted">$189</h6>
          </div>
        </div>
        <div className="card my-3">
          <div className="card-body">
            <FontAwesomeIcon icon="gamepad" className="icons pb-2" />
            <h5 className="card-title">Lifestyle</h5>
            <h6 className="card-subtitle mb-2 text-muted">$97</h6>
          </div>
        </div>
        <div className="w-100 d-none d-xl-block" />
        <div className="card my-3">
          <div className="card-body">
            <FontAwesomeIcon icon="truck" className="icons pb-2" />
            <h5 className="card-title">Shopping</h5>
            <h6 className="card-subtitle mb-2 text-muted">$124</h6>
          </div>
        </div>
        <div className="card my-3">
          <div className="card-body">
            <FontAwesomeIcon icon="moon" className="icons pb-2" />
            <h5 className="card-title">Other</h5>
            <h6 className="card-subtitle mb-2 text-muted">$322</h6>
          </div>
        </div>
      </div>

      <Popup trigger={<button type="button" className="btn btn-lg category-btn">
        Add Category
            </button>} modal closeOnDocumentClick>
        <NewExpenseModal />
      </Popup>
    </div>;
  }
}

export default ExpenseBoard;
