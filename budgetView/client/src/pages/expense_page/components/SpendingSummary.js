import React, { Component } from "react";
import "./SpendingSummary.css";
import { Progress } from "reactstrap";

class SpendingSummary extends Component {
  render() {
    console.log(this.props.category, "inside SpendingSummary");

    const percentage =
      (this.props.category.current_total / this.props.category.goal) * 100;
    const percent_string = percentage.toString();
    const current_total = this.props.category.current_total;
    console.log(percent_string, typeof percent_string);

    if (percentage > 100) {
      return (
        <div className="fdfdd">
          <div>
            <Progress color="danger" value={percent_string}>
              {" "}
              {current_total}${" "}
            </Progress>
          </div>
        </div>
      );
    } else {
      return (
        <div className="fdfdd">
          <div>
            <Progress color="success" value={percent_string}>
              {" "}
              {current_total}${" "}
            </Progress>
          </div>
        </div>
      );
    }
  }
}

export default SpendingSummary;
