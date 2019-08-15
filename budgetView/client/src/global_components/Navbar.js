import React, { Component } from "react";
import { Redirect, NavLink } from 'react-router-dom';
import "./Navbar.css";

class Navbar extends Component {

  constructor(props){
    super(props)
  }

  logout = (event) => {
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('fbToken')

  }

  render() {
    const user = localStorage.getItem('jwtToken')
    const fbUser = localStorage.getItem('fbToken')

    let button1
    let button2
    if (user || fbUser) {
      button1 =
      <NavLink to='/'>
        <div className="navbar-right-div logout" onClick={this.logout}>Logout</div>
      </NavLink>
      button2 =
      <NavLink to='/home'>
        <div className="navbar-right-div">Message Center</div>
      </NavLink>
    } else {
      button1 =
      <NavLink to='/login'>
        <div className="navbar-right-div login" onClick={this.login}>Login</div>
      </NavLink>
    }
    return (
      <nav className="navbar justify-content-between mb-4">
        <NavLink to='/home'>
          <div className="navbar-brand">BudgetView</div>
        </NavLink>
        <div className="navbar justify-content-between">
          {button2}
          {button1}
        </div>
      </nav>
    )
  }
}

export default Navbar;
