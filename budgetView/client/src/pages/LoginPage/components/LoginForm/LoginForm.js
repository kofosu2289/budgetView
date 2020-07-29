import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        email: "",
        password: ""
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

    axios
      .post(`https://desolate-badlands-77534.herokuapp.com/api/v1/sessions`, { ...this.state.credentials })
      .then(res => {
        const token = res.data.jwt;
        const id = res.data.id;
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("currUser_id", id.toString());
        this.setState({ redirect: true, error: false });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    } else if (this.state.error) {
      var error = (
        <div className="error-message mb-2">
          Incorrect Credentials. Please try again.
        </div>
      );
    }
    return (
      <div className="login-existing-user">
        <div className="d-flex justify-content-center">
          <form
            className="shadow py-4 px-5 mt-4 bg-white"
            onSubmit={this.onSave}
          >
            <h1 className="text-center mb-2">Login</h1>
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
            <div className="form-group submit text-center">
              <input type="submit" className="btn btn-primary" />
            </div>
            {error}
            <div className="login-message text-center">
              <p>
                Dont have an account? Click <a href="/signup">here</a> to sign
                up.
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
