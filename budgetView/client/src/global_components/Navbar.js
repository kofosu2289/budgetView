import React, { Component } from "react";
import { Redirect, NavLink } from 'react-router-dom';
import "./Navbar.css";

class Navbar extends Component {

  constructor(props){
    super(props)
  }

  logout = (event) => {
    localStorage.removeItem('jwtToken')
  }

  render() {
    var user = localStorage.getItem('jwtToken')
    if (user) {
      var button = <NavLink to='/'><div className="navbar-right-div logout" onClick={this.logout}>Logout</div></NavLink>
    } else {
      button = <NavLink to='/login'><div className="navbar-right-div login" onClick={this.login}>Login</div></NavLink>
    }
    return (
      <nav className="navbar justify-content-between mb-4">
        <NavLink to='/home'>
          <div className="navbar-brand">BudgetView</div>
        </NavLink>
        <div className="navbar justify-content-between">
          <NavLink to='/home'>
            <div className="navbar-right-div">Message Center</div>
          </NavLink>
          {button}
        </div>
      </nav>
    )
  }
}

export default Navbar;
