import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./SignupForm.css";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      redirect: false,
      error: false
    };
  }

  onChange = event => {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({ credentials: credentials });
  };

  onSave = event => {
    event.preventDefault();

    const user = {
      user: this.state.credentials
    };

    axios.post(`http://localhost:3001/api/v1/users`, user).then(res => {
      if (res.status === 204) {
        this.setState({ error: true });
      } else {
        this.setState({ redirect: true, error: false });
      }
    });
  };

  render() {
    if (this.state.redirect && !this.state.error) {
      return <Redirect to="/login" />;
    } else if (this.state.error) {
      var error = (
        <div className="error-message">
          Missing credentials. Please fill out all fields before submitting.
        </div>
      );
    }
    return (
      <div className="signup-new-user">
        <header className="signup-page-header text-center my-3">
          <h1>Sign Up</h1>
        </header>
        <div className="d-flex justify-content-center">
          <form className="shadow p-3 mb-4 bg-white" onSubmit={this.onSave}>
            <div className="form-group input">
              First Name{" "}
              <input
                type="text"
                className="form-control"
                id="inputFirstName3"
                name="first_name"
                label="first_name"
                value={this.state.credentials.first_name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group input">
              Last Name{" "}
              <input
                type="text"
                className="form-control"
                id="inputLastName3"
                name="last_name"
                label="last_name"
                value={this.state.credentials.last_name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group input">
              Email{" "}
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                name="email"
                label="email"
                value={this.state.credentials.email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group input">
              Password{" "}
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                name="password"
                label="password"
                value={this.state.credentials.password}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group input">
              Password Confirmation{" "}
              <input
                type="password"
                className="form-control"
                id="inputPasswordConfirmation3"
                name="password_confirmation"
                label="password_confirmation"
                value={this.state.credentials.password_confirmation}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group submit text-center">
              <input type="submit" className="btn btn-custom btn-primary" />
            </div>
          </form>
        </div>
        {error}
        <div className="signup-message text-center">
          <p>
            Already have an account? Click <a href="/login">here</a> to sign in.
          </p>
        </div>
      </div>
    );
  }
}

export default SignupForm;
