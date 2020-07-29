import React, { Component } from "react";
import "./App.css";
import Navbar from "./global_components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ExpensePage from "./pages/ExpensePage/ExpensePage";
import IncomePage from "./pages/IncomePage/IncomePage";
import Footer from "./global_components/Footer/Footer";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faCar,
  faUtensils,
  faTruck,
  faGamepad,
  faMoon,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(
  faHome,
  faCar,
  faUtensils,
  faTruck,
  faGamepad,
  faMoon,
  faTrash,
  fab
);

class App extends Component {
  update() {
    const currUser = localStorage.getItem("currUser_id");
    axios
      .get("https://desolate-badlands-77534.herokuapp.com/api/v1/category", {
        params: { user_id: currUser }
      })
      .then(response => {
        this.setState({
          categories: response.data
        });
      })
      .catch(error => console.log(error));
  }

  clearState() {
    this.setState({
      categories: []
    });
  }

  componentDidMount() {
    this.update();
  }

  render() {
    return (
      <BrowserRouter>
        {this.state &&
          this.state.categories && (
            <div>
              <Navbar clearState={this.clearState.bind(this)} />
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/login" component={LoginPage} />
                <Route
                  path="/home"
                  render={props => (
                    <HomePage
                      categories={this.state.categories}
                      update={this.update.bind(this)}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/expense/:id"
                  render={props => (
                    <ExpensePage
                      categories={this.state.categories}
                      update={this.update.bind(this)}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/income/:id"
                  render={props => (
                    <IncomePage
                      categories={this.state.categories}
                      update={this.update.bind(this)}
                      {...props}
                    />
                  )}
                />
              </Switch>
            </div>
          )}
      </BrowserRouter>
    );
  }
}

export default App;
