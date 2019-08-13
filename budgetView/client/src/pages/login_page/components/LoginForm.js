import React, { Component } from "react";
import './LoginForm.css'

class LoginForm extends Component {
  render () {
    return (
      <section className="login-existing-user">
        <header className="login-page-header">
          <h1>Login</h1>
        </header>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-1">
            <form>
              <div className="form-group input">
                Email <input type="email" className="form-control" id="inputEmail3" />
              </div>
              <div className="form-group input">
                Password <input type="password" className="form-control" id="inputPassword3" />
              </div>
              <div className="form-group submit">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="login-message">
          <p>Don't have an account? Click <a href="/signup">here</a> to sign up.</p>
        </div>
      </section>
    )
  }
}

export default LoginForm;
