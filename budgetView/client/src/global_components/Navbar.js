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
    const user = localStorage.getItem('jwtToken')
    let loginLogout
    let messageCenter
    let navbarBrand
    let signup
    if (user ) {
      loginLogout =
      <NavLink to='/'>
        <div className="navbar-right-div logout" onClick={this.logout}>Logout</div>
      </NavLink>
      messageCenter =
      <NavLink to='/home'>
        <div className="navbar-right-div">Message Center</div>
      </NavLink>
      navbarBrand =
      <NavLink to='/home'>
        <div className="navbar-brand">BudgetView</div>
      </NavLink>
    } else {
      loginLogout =
      <NavLink to='/login'>
        <div className="navbar-right-div login">Login</div>
      </NavLink>
      signup =
      <NavLink to='/signup'>
        <div className="navbar-right-div login">Signup</div>
      </NavLink>
      navbarBrand =
      <NavLink to='/'>
        <div className="navbar-brand">BudgetView</div>
      </NavLink>
    }
    return (
      <nav className="navbar justify-content-between mb-4">
          {navbarBrand}
        <div className="navbar justify-content-between">
          {messageCenter}
          {signup}
          {loginLogout}
        </div>
      </nav>
    )
  }
}

export default Navbar;
