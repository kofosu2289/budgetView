import React, { Component } from "react";
import "./App.css";
import Navbar from "./global_components/Navbar";
import HomePage from "./pages/home_page/HomePage";
import ExpensePage from "./pages/expense_page/ExpensePage";
import IncomePage from "./pages/income_page/IncomePage";
import axios from "axios";
import { Route, Switch } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faCar,
  faUtensils,
  faTruck,
  faGamepad,
  faMoon
} from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faCar, faUtensils, faTruck, faGamepad, faMoon);

class App extends Component {


  constructor(props) {
    super(props);

  }

  update() {
    axios.get("http://localhost:3001/api/v1/category.json")
         .then(response => {
           this.setState({
             categories: response.data
           });
          })
         .catch(error => console.log(error));
  }

  componentDidMount() {
    console.log('componentDidMount <App />');
    this.update()
  }


  render() {
    return (
      <div>
        { this.state && this.state.categories &&
          <div>
            <Navbar />
            <Switch>
              <Route strict path='/home' render={props => (
                <HomePage categories={this.state.categories} update={this.update.bind(this)} {...props}/>
                )}
              />
            </Switch>
            <Switch>
              <Route path='/expense/:id' render={props => (
                <ExpensePage categories={this.state.categories} update={this.update.bind(this)} {...props}/>
                )}

              />
            </Switch>

            <Switch>
              <Route path='/income/:id' render={props => (
                <IncomePage categories={this.state.categories} update={this.update.bind(this)} {...props}/>
                )}

              />
            </Switch>


          </div>
        }
      </div>
    );
  }
}

export default App;
