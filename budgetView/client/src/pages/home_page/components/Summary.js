import React, { Component } from "react";
import axios from "axios";
import "./Summary.css";
import { Doughnut } from "react-chartjs-2";

class CategoryContainer extends Component {
  //Function to update state for messages

  render() {
    const generate_color = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const dataPoint = [];
    const labels = [];
    const colors = [];

    this.props.categories.forEach(function(category) {
      if (category.board_type === "expense") {
        dataPoint.push(category.current_total);
        labels.push(category.name);
        colors.push(generate_color());
      }
    });

    const options = {
      responsive: true,
      legend: {
        display: true,
        position: "right"
      },
      layout: {
        padding: {
          left: 0,
          right: 300,
          top: 0,
          bottom: 0
        }
      }
    };

    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: colors,
          data: dataPoint
        }
      ]
    };

    return (
      <div className="summary text-center">
        <h4 className="py-3">Expenses</h4>
        <div id="pie-chart">
          <Doughnut data={data} options={options} height={85} />
        </div>
      </div>
    );
  }
}

export default CategoryContainer;
