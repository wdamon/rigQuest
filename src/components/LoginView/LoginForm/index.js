import React, { Component } from 'react';
import { Box, Button, Label, Form, FormField, TextInput, Title } from 'grommet';

import 'App.css';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      email: '',
      password: '',
    }
    this.emailInput = this.emailInput.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  emailInput = (ev) => {
    this.setState({email: ev.target.value})
  }

  passwordInput = (ev) => {
    this.setState({password: ev.target.value})
  }

  onLogin = (event) => {
    const body = JSON.stringify(this.state);
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body,
    })
   .then((resp) => {
      console.log('pre-json', resp);
      return resp.json();
    })
    .then((resp) => {
      if (!resp.success) {
        console.log(message);
        this.setState({ message: resp.message });
      } else {
        console.log('pos', resp);
      }
    });
  }

  onSignUp = (event) => {
    const { history } = this.props;
    history.push('/signup');
  }

  render() {
    return (
      <Box align="center" justify="center" pad={ { between: 'small'} }>
        <Title>Login</Title>
        <Form>
          <FormField label='email' >
            <TextInput onDOMChange={this.emailInput} />
          </FormField>
          <FormField label='password'>
            <TextInput />
          </FormField>
        </Form>
        <Button className="btn-med" primary onClick={this.onLogin}
          label={<Label>Log In</Label>} />
        <Button className="btn-med" secondary path="/signup">
          <Label>Sign Up</Label>
        </Button>
      </Box>
    );
  };
}
