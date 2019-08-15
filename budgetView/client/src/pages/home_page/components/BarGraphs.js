import React, { Component } from "react";
import "./BarGraphs.css";
import { Progress } from "reactstrap";

class BarGraphs extends Component {
  render() {
    console.log(
      this.props.data_needed,
      "are we actually here",
      this.props.data_needed.current_total,
      this.props.data_needed.goal,
      typeof this.props.data_needed.goal
    );
    const percentage =
      (this.props.data_needed.current_total / this.props.data_needed.goal) *
      100;
    const percent_string = percentage.toString();
    const current_total = this.props.data_needed.current_total;
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

export default BarGraphs;
