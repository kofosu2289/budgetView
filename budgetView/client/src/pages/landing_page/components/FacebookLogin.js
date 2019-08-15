'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom';




class LoginWithFacebook extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  redirect = (event) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.accessToken
    localStorage.setItem('fbToken', token);
    this.setState({ redirect: true })
  }

  responseFacebook = (res) => {
    localStorage.setItem('user', JSON.stringify(res));

  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
    return(
      <FacebookLogin
        appId="410163969616087"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
        cssClass="my-facebook-button-class"
        onClick={this.redirect}
        icon="fa-facebook"
      />
    );
  }
}

export default LoginWithFacebook;
