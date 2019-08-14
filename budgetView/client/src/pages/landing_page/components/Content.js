import React, { Component } from "react";
import './Content.css'

class Content extends Component {
  render() {
    return (
      <div className="landing-content">
        <h1>Welcome to BudgetView!</h1>
        <h5 className='tagline'>Your friendly budgeting buddy</h5>
        <p className='content-message'>Are you a first time budgeter? <a href='/signup'>Register now.</a></p>
        <p className='content-message'>Been here before? <a href='/login'>Log in</a> to keep budgeting!</p>
      </div>
    )
  }
}

export default Content;
