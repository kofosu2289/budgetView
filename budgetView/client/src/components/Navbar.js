import React from 'react';
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light justify-content-between mb-4">
        <a class="navbar-brand">BudgetView -- Welcome to your Budgeting App!</a>
        <form class="form-inline">
          <button class="btn btn-outline-success my-2 mr-3 my-sm-0" type="submit">Message Center</button>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
        </form>
      </nav>
    )
  }
}

export default Navbar;