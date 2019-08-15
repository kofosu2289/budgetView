import React, { Component } from "react";
import "./Rundown.css";
import NumberFormat from "react-number-format";

class Rundown extends Component {
  render() {
    let total_income = 0;
    let total_expenses = 0;

    this.props.categories.forEach(function(category) {
      if (category.board_type === "income") {
        total_income += category.current_total;
      } else {
        total_expenses += category.current_total;
      }
    });

    const amount_left = total_income - total_expenses;
    let color = "rgb(139, 179, 88)";
    if (amount_left < 0) {
      color = "rgb(250, 77, 65)";
    }

    return (
      <div className="rundown mt-3">
        <h4 className="text-center">You've budgeted...</h4>
        <div className="rundown-income d-flex bd-highlight mx-5">
          <div className="mr-auto bd-highlight">
            <h6>Income</h6>
          </div>
          <div className="ml-auto bd-highlight" id="total-income">
            <NumberFormat value={`${total_income}`} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          </div>
        </div>
        <div className="rundown-spending d-flex bd-highlight mx-5">
          <div className="mr-auto bd-highlight">
            <h6>Spending</h6>
          </div>
          <div className="ml-auto bd-highlight" id="total-expenses">
            <NumberFormat value={`${total_expenses}`} displayType={'text'} thousandSeparator={true} prefix={'-$'} />            
          </div>
        </div>
        <hr width="80%" />
        <div className="rundown-leftover d-flex bd-highlight mx-5">
          <div className="mr-auto bd-highlight">
            <h6>Leftover</h6>
          </div>
          <div className="ml-auto bd-highlight">
            <p id="amount-left" style={{ color: color }}>
              <NumberFormat value={`${amount_left}`} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Rundown;
