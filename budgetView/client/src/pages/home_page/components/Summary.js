import React, { Component } from "react";
import "./Summary.css";
import { Doughnut } from "react-chartjs-2";

class CategoryContainer extends Component {

  render() {
    let reverse_labels;
    let reverse_dataPoints;
    let example_graph_message;



    let dataPoint = [];
    let labels = [];

    this.props.categories.forEach(function(category) {
      if (category.board_type === "expense") {
        dataPoint.push(category.current_total);
        labels.push(category.name);

      }
    });


    if (dataPoint.length === 0){

      reverse_labels = ['Food', 'School', 'Hobbies', 'Transportation'];
      reverse_dataPoints = [25, 25, 25, 25];
      example_graph_message = 'Example Chart - Add Stuff'


    }
    else{

    reverse_dataPoints = dataPoint.reverse();
    reverse_labels = labels.reverse();
    example_graph_message = ''
  }




    let options = {
      responsive: false,
      legend: {
        display: true,
        position: "right"
      },
      // layout: {
      //   padding: {
      //     left: 0,
      //     right: 300,
      //     top: 0,
      //     bottom: 0
      //   }
      // }
    };

    let data = {
      labels: reverse_labels,
      datasets: [
        {
          backgroundColor: ['#ae0001',' #eeba30','#000000','#f72f53','#000080','#008000','#fef65b','#9EB6B8', '#767BA5', '#2C3571', '#008080', '#FF6347'],
          data: reverse_dataPoints
        }
      ]
    };



    return (
      <div className="summary text-center">

        <h4 className="py-3">Expenses</h4>
        <h5>{example_graph_message}</h5>
        <div className="pie-chart">
          <Doughnut data={data} options={options} height={85} />
        </div>
      </div>
    );



  }
}

export default CategoryContainer;
