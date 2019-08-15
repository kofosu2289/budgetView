import React, { Component } from "react";
import "./ExpenseBoard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewExpenseModal from "./NewExpenseModal";
import Popup from "reactjs-popup";
import { NavLink } from "react-router-dom";
import BarGraphs from "./BarGraphs.js";

const makeCardStack = cards => {
  const allCards = cards.map(card => {
    switch (card["board_type"]) {
      case "expense":
        return (
          <NavLink to={`/expense/${card["id"]}`}>
            <div className="card my-2 mx-1">
              <div className="card-body">
                <FontAwesomeIcon icon="home" className="icons pb-2" />
                <h5 className="card-title">{card["name"]}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  ${card["goal"]}
                </h6>
                <BarGraphs data_needed={card} />
              </div>
            </div>
          </NavLink>
        );
    }
  });
  return allCards;
};

class ExpenseBoard extends Component {
  render() {
    const { component: Component, ...props } = this.props;
    return (
      <div className="expense-board py-4 text-center">
        <h4 className="py-3">Expense Boards</h4>
        <div>{makeCardStack(props.categories)}</div>
        <Popup
          trigger={
            <button type="button" className="btn btn-lg category-btn">
              Add Category
            </button>
          }
          modal
          closeOnDocumentClick
        >
          <NewExpenseModal update={props.update} />
        </Popup>
      </div>
    );
  }
}

export default ExpenseBoard;
