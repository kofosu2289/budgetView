import React, { Component } from "react";
import './SignupForm.css'

class SignupForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
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
    this.props.onLogIn(this.state.credentials);
  }

  render () {
    return (
      <section className="signup-new-user">
        <header className="signup-page-header">
          <h1>Signup</h1>
        </header>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-1">
            <form>
              <div className="form-group input">
                First Name <input type="text" className="form-control" id="inputFirstName3" name="first_name" label="first_name" value={this.state.credentials.first_name} onChange={this.onChange} />
              </div>
              <div className="form-group input">
                Last Name <input type="text" className="form-control" id="inputLastName3" name="last_name" label="last_name" value={this.state.credentials.last_name} onChange={this.onChange} />
              </div>
              <div className="form-group input">
                Email <input type="email" className="form-control" id="inputEmail3" name="email" label="email" value={this.state.credentials.email} onChange={this.onChange} />
              </div>
              <div className="form-group input">
                Password <input type="password" className="form-control" id="inputPassword3" name="password" label="password" value={this.state.credentials.password} onChange={this.onChange} />
              </div>
              <div className="form-group input">
                Password Confirmation <input type="password" className="form-control" id="inputPasswordConfirmation3" name="password_confirmation" label="password_confirmation" value={this.state.credentials.password_confirmation} onChange={this.onChange} />
              </div>
              <div className="form-group submit">
                <input type="submit" className="btn btn-primary" onClick={this.onSave} />
              </div>
            </form>
          </div>
        </div>
        <div className="signup-message">
          <p>Already have an account? Click <a href="/login">here</a> to sign in.</p>
        </div>
      </section>
    )
  }
}

export default SignupForm;
