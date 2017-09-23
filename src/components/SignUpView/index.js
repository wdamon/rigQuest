import React, { Component } from 'react';
import { Box, Button, Label, Form, CheckBox, 
  FormField, TextInput, Title } from 'grommet';

import 'App.css';

export default class SignUpForm extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  onSelectCustomerType = (event) => {
    this.setState({ customerType: event.target.name });
  }

  onSignUp = (event) => {
    this.setState({ form: event });
    console.info(event);
  }

  render() {
    const { customerType } = this.state;

    return (
      <Box full align="center" justify="center" pad={ { between: 'small'} }>
        <Title>Sign Up</Title>
        <Form>
          <FormField label="I am a ">
            <Box direction="horizontal" pad={ { horizontal: 'medium', vertical: 'small' } }>
              <CheckBox checked={customerType === 'carrier'} name="carrier" label="Carrier" onClick={this.onSelectCustomerType}/>
              <CheckBox checked={customerType === 'shipper'} name="shipper" label="Shipper" onClick={this.onSelectCustomerType}/>
              </Box>
          </FormField>
          <FormField label='email'>
            <TextInput />
          </FormField>
          <FormField label='password'>
            <TextInput />
          </FormField>
        </Form>
        <Button className="btn-med" primary onClick={this.onSignUp}
          label={<Label>Sign Up</Label>} />
      </Box>
    );
  };
}
