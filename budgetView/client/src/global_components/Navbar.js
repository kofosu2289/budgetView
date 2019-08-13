import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar justify-content-between mb-4">
        <a className="navbar-brand">BudgetView</a>
        <form className="form-inline">
          <button className="btn my-2 mr-3 my-sm-0" type="submit">Message Center</button>
          <button className="btn my-2 my-sm-0" type="submit">Logout</button>
        </form>
      </nav>
    )
  }
}

export default Navbar;