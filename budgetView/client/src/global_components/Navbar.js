import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {

  logout = event => {
    localStorage.removeItem("jwtToken");
    this.props.clearState()
  };

  render() {
    const user = localStorage.getItem("jwtToken");
    
    let loginLogout;
    let navbarBrand;
    let signup;
    if (user) {
      loginLogout = (
        <NavLink to="/">
          <div className="navbar-right-div btn btn-outline-warning logout" onClick={this.logout}>
            Logout
          </div>
        </NavLink>
      );
      navbarBrand = (
        <NavLink to="/home">
          <div className="navbar-brand">BudgetView</div>
        </NavLink>
      );
    } else {
      loginLogout = (
        <NavLink to="/login">
          <div className="navbar-right-div login">Login</div>
        </NavLink>
      );
      signup = (
        <NavLink to="/signup">
          <div className="navbar-right-div login">Signup</div>
        </NavLink>
      );
      navbarBrand = (
        <NavLink to="/">
          <div className="navbar-brand">BudgetView</div>
        </NavLink>
      );
    }
    return (
      <nav className="navbar justify-content-between mb-3">
        {navbarBrand}
        <div className="navbar justify-content-between">
          {signup}
          {loginLogout}
        </div>
      </nav>
    );
  }
}

export default Navbar;
