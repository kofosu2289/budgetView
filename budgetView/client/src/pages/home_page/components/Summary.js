import React, { Component } from 'react'
import axios from 'axios';
import "./Summary.css";
import {Doughnut} from 'react-chartjs-2';



class CategoryContainer extends Component {


	constructor(props) {
	  super(props);
	  this.state = {
	    categories: [],
	  }
	}

  //Function to update state for messages
  updateCategory = (newCategory) => {

    this.setState({ categories: [
      ...this.state.categories,
      {
        id: newCategory.id,
        name: newCategory.name,
        user_id: newCategory.user_id,
        board_type: newCategory.board_type,
        goal: newCategory.goal,
        current_total: newCategory.current_total,
        updated_at: newCategory.updated_at


      } ]
    })
  }

	componentDidMount() {
		axios.get("http://localhost:3001/api/v1/category.json")
		  .then(response => {
		    this.setState({
		      categories: response.data
		    });
	      console.log(this.state)
		  })
		  .catch(error => console.log(error));
	}

  render() {


    const generate_color = () => {

      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;

    }

  	const dataPoint = [];
    const labels = [];
    const colors = [];

  	this.state.categories.forEach(function(category){
      if (category.board_type === 'expense'){
	  		dataPoint.push(category.current_total);
	      labels.push(category.name);
	      colors.push(generate_color());
      }
		});

    const options = {
      responsive: true,
  	  legend: {
  	  	"display": true,
  	  	"position":"right",
  	  },
  	}

    const data = {
            labels: labels,
            datasets: [{
	            backgroundColor: colors,
	            data: dataPoint,
            }]
        }

	  return(
	  	<div style={{'padding-right':200}}>
		    <h4 align='left'>Spending Summary</h4>
		  	<Doughnut data={data} options={options} height={100}/>
				<br/>
	  	</div>
	  	)

	}
}

export default CategoryContainer;
