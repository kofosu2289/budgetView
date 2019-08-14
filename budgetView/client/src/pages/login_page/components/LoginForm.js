import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        email: '',
        password: ''
      },
      redirect: false
    }
  }

  onChange = (event) => {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave = (event) => {
    event.preventDefault();

    axios.post(`http://localhost:3001/api/v1/sessions`, { ...this.state.credentials })
      .then(res => {
        console.log(res)
        })

    // fetch(`/api/v1/sessions?`, { method: 'POST' })

  }

  render () {
    if (this.state.redirect) {
      return <Redirect to='/login'/>
    }
    return (
      <section className="login-existing-user">
        <header className="login-page-header">
          <h1>Login</h1>
        </header>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-1">
            <form onSubmit={this.onSave} >
              <div className="form-group input">
                Email <input type="email" className="form-control" id="inputEmail3" name="email" label="email" value={this.state.credentials.email} onChange={this.onChange} />
              </div>
              <div className="form-group input">
                Password <input type="password" className="form-control" id="inputPassword3" name="password" label="password" value={this.state.credentials.password} onChange={this.onChange}/>
              </div>
              <div className="form-group submit">
                <input type="submit" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
        <div className="login-message">
          <p>Dont have an account? Click <a href="/signup">here</a> to sign up.</p>
        </div>
      </section>
    )
  }
}

export default LoginForm;
