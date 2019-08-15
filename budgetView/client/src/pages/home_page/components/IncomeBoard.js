import React, { Component } from "react";
import "./IncomeBoard.css";
import NewIncomeModal from "./NewIncomeModal";
import Popup from "reactjs-popup";
import axios from "axios";
import { NavLink } from "react-router-dom";

class IncomeBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  update() {
    axios
      .get("http://localhost:3001/api/v1/category.json")
      .then(response => {
        this.setState({
          categories: response.data
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.update();
  }

  getIncomeCategory = () => {
    const obtained_categories = this.state.categories;
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

    return (
      <div className="income-board py-4 text-center">
        <h4>Income Boards</h4>
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
                  <h6 className="card-subtitle mb-2 text-muted">
                    Goal Total: {category.goal}$
                  </h6>
                </div>
              </div>
            </NavLink>
          );
        })}
        </div>
        <Popup
          trigger={
            <button type="button" className="btn btn-lg income-btn">
              Add Income Source
            </button>
          }
          modal
          closeOnDocumentClick
        >
         {close => (
              <NewIncomeModal update={this.props.update} close ={close.bind(this)}/>
            )}
        </Popup>
      </div>
    );
  }
}

export default IncomeBoard;
