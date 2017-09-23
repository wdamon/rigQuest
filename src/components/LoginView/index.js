import React, { Component } from 'react';
import { Box } from 'grommet';

import LoginForm from './LoginForm';

export default class LoginView extends Component {
  onLogin = (event) => {
    this.setState({ form: event });
    console.log(event);
  }

  onSignUp = (event) => {
    const { history } = this.props;
    history.push('/signup');
  }

  render() {
    return (
      <Box full align="center" justify="center">
        <LoginForm />
      </Box>
    );
  };
}
