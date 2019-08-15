import React, { Component } from "react";
import "./IncomeBoard.css";
import NewIncomeModal from "./NewIncomeModal";
import Popup from "reactjs-popup";
import axios from "axios";
import { NavLink } from "react-router-dom";

class IncomeBoard extends Component {
  getIncomeCategory = () => {
    const obtained_categories = this.props.categories;
    const income_category = [];

    obtained_categories.forEach(function(element) {
      if (element.board_type === "income") {
        income_category.push(element);
      }
    });
    return income_category;
  };

  render() {
    const income_categories = this.getIncomeCategory();
    const { component: Component, ...props } = this.props;

    return (
      <div className="income-board py-4 text-center">
        <h4>Income</h4>
        <div id="income-card-container">
          {income_categories.map(category => {
            return (
              <NavLink to={`/income/${category["id"]}`}>
                <div key={category.id} className="card my-2 mx-auto">
                  <div className="card-body">
                    <h5 className="card-title">{category.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Current Total: {category.current_total}$
                    </h6>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
        <Popup trigger={
          <button type="button" className="btn btn-outline-danger income-btn">
            Add Income Source
          </button>} modal closeOnDocumentClick >
          {close => (
            <NewIncomeModal update={props.update} close={close.bind(this)} />
          )}
        </Popup>
      </div>
    );
  }
}

export default IncomeBoard;
