import React, { Component } from "react";
import './SignupForm.css'

class SignupForm extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <header>
            <h1>Signup</h1>
          </header>
          <div className="form-group row">
            <label htmlhtmlFor="inputFirstName3" className="col-sm-2 col-form-label">first name</label>
            <div className="col-sm-10">
              <input type="test" className="form-control" id="inputFirstName3" placeholder="First Name" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlhtmlFor="inputLastName3" className="col-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-10">
              <input type="test" className="form-control" id="inputLastName3" placeholder="Last Name" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlhtmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlhtmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlhtmlFor="inputPasswordConfirmation3" className="col-sm-2 col-form-label">Confirmation</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPasswordConfirmation3" placeholder="Password Confirmation" />
            </div>
          </div>
        </form>
      </div>

    )
  }
}

export default SignupForm;
