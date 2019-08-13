import React, { Component } from 'react';
import "./App.css";
import Navbar from './global_components/Navbar';
import HomePage from './pages/home_page/HomePage';
import ExpensePage from './pages/expense_page/ExpensePage';
import axios from 'axios';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faCar, faUtensils, faTruck, faGamepad, faMoon } from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faCar, faUtensils, faTruck, faGamepad, faMoon);

class App extends Component {
  componentDidMount() {
  axios
    .get("http://localhost:3001/api/v1/category")
    .then(response => {
      console.log(response);
      this.setState({
        resources: response.data
      });
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div style={{height: "100vh"}}>
        <Navbar />
        <HomePage />
      </div>
    );
  }
}

export default App;