import React, { Component } from "react";
import "./SpendingSummary.css";
import { Doughnut } from "react-chartjs-2";

class SpendingSummary extends Component {
  render() {
    console.log(this.props.entries, "inside spendingsummary");

    const generate_color = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const dataPoint = [];
    const labels = [];
    const colors = [];

    const name = this.props.entries;

    name.forEach(function(element) {
      const to_add = element.amount;
      const to_add2 = element.name;
      const to_add3 = generate_color();

      dataPoint.push(to_add);
      labels.push(to_add2);
      colors.push(to_add3);
    });

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: "top"
        }
      },
      data = {
        labels: labels,
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: colors,
            data: dataPoint
          }
        ]
      };


    return (
      <div className="spending-summary mx-auto border border-dark col-md-12">
        <div className="text-center">
          <Doughnut data={data} options={options} width={1600} height={250} />
        </div>
      </div>
    );
  }
}

export default SpendingSummary;
