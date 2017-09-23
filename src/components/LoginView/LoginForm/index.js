import React, { Component } from 'react';
import { Box, Button, Label, Form, FormField, TextInput, Title } from 'grommet';

import 'App.css';

export default class LoginForm extends Component {
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
      <Box align="center" justify="center" pad={ { between: 'small'} }>
        <Title>Login</Title>
        <Form>
          <FormField label='email'>
            <TextInput />
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
