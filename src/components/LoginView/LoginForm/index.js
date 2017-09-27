import React, { Component } from 'react';
import { Box, Button, Label, Form, FormField, TextInput, Title } from 'grommet';
import { Redirect } from 'react-router-dom';

import Auth from '../../../helpers.js';

import 'App.css';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      email: '',
      password: '',
      redirectToReferrer:false,
    }
    this.emailInput = this.emailInput.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.goToSignUp = this.goToSignUp.bind(this);
  }

  goToSignUp = () => {
    this.props.history.push('/signup');
  }
  emailInput = (ev) => {
    this.setState({email: ev.target.value})
  }

  passwordInput = (ev) => {
    this.setState({password: ev.target.value})
  }

  onLogin = (event) => {
    const body = {
        email: this.state.email,
        password: this.state.password,
      };

    fetch('/login', {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })
   .then((resp) => {
      return resp.json();
    })
    .then((resp) => {
      if (!resp.success) {
        console.log(message); //i'm not serving a message, yet
        this.setState({ message: resp.message });
      } else {
        console.log('pos', resp);
        Auth.isAuthenticated = true;
        this.props.updateUser(resp.profile);
        this.setState({redirectToReferrer:true});
      }
    });
  }

  onSignUp = (event) => {
    const { history } = this.props;
    history.push('/signup');
  }

  render() {
    const { from } = this.props.history.location.state || { from: { pathname: '/profile' } }

     if (this.state.redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
    
    return (
      <Box align="center" justify="center" pad={ { between: 'small'} }>
        <Title>Please Login</Title>
        <h2>{this.state.message}</h2>
        <Form>
          <FormField label='email' >
            <TextInput onDOMChange={this.emailInput} />
          </FormField>
          <FormField label='password'>
            <TextInput onDOMChange={this.passwordInput} />
          </FormField>
        </Form>
        <Button className="btn-med" primary onClick={this.onLogin}
          label={<Label>Log In</Label>} />
        <Button className="btn-med" secondary onClick={this.goToSignUp}>
          <Label>Sign Up</Label>
        </Button>
      </Box>
    );
  };
}
