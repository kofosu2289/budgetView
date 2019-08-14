import React, { Component } from 'react';
import "./App.css";
import Navbar from './global_components/Navbar';
import LandingPage from './pages/landing_page/LandingPage';
import SignupPage from './pages/signup_page/SignupPage';
import LoginPage from './pages/login_page/LoginPage';
import HomePage from './pages/home_page/HomePage';
import axios from 'axios';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faCar, faUtensils, faTruck, faGamepad, faMoon } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

library.add(faHome, faCar, faUtensils, faTruck, faGamepad, faMoon);

class App extends Component {
  componentDidMount() {
  // axios.get("/api/v1/category.json")
  //   .then(response => {
  //     console.log(response);
  //     this.setState({
  //       resources: response.data
  //     });
  //   })
  //   .catch(error => console.log(error));
  }

  render() {
    return (
      <BrowserRouter>
        <div style={{height: "100vh"}}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
