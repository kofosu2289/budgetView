import React, { Component } from "react";
import { Container} from "reactstrap";
import LoginForm from "./components/LoginForm";

class LoginPage extends Component {
  render() {
    return (
      <Container className="login-body">
        <LoginForm />
      </Container>
    );
  }
}

export default LoginPage;
