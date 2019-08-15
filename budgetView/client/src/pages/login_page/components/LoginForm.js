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

    axios.post(`http://localhost:3001/api/v1/sessions`, { ...this.state.credentials })
      .then(res => {
        const token = res.data.jwt;
        const id = res.data.id;
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('currUser_id', id);
        this.setState({ redirect: true, error: false })
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
        <div className="error-message">
          Incorrect Credentials. Please try again.
        </div>
      )
    }
    return (
      <section className="login-existing-user">
        <header className="login-page-header">
          <h1>Login</h1>
        </header>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-1">
            <form onSubmit={this.onSave}>
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
              <div className="form-group submit">
                <input type="submit" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
        {error}
        <div className="login-message">
          <p>
            Dont have an account? Click <a href="/signup">here</a> to sign up.
          </p>
        </div>
      </section>
    );
  }
}

export default LoginForm;
