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
    if (localStorage.getItem('fbToken')) {
      return this.setState({ redirect: true })
    }
  }

  responseFacebook = (res) => {
    console.log(res);
    const token = res.accessToken
    console.log(token)
    localStorage.setItem('fbToken', token);
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
