import React, { Component } from 'react';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>BudgetView</h1>
        </div>
      </div>
    );
  }
}

export default App;