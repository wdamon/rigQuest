import React, { Component } from 'react';
import { Box, Button, Label, Form, CheckBox, 
  FormField, TextInput, Title } from 'grommet';
import Auth from '../../helpers.js';

import 'App.css';

export default class SignUpForm extends Component {
  constructor(props) {
    super();
    this.state = {
      customerType:null,
      email: '',
      password: '',
      userName: '',
      firstName: '',
      lastName: '',
      phone: '',
      organization: '',
      truckType: '',
      message: '',
    };
    this.input = this.input.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.onSelectCustomerType = this.onSelectCustomerType.bind(this);
  }

  onSelectCustomerType = (event) => {
    this.setState({ customerType: event.target.name });
  }

  input = (event) => {
    this.setState({ [event.target.name] : event.target.value })
    console.log(this.state);
   }

  onSignUp = (event) => {
    const body = JSON.stringify(this.state)
     console.log(body + typeof body)
    if (this.state.customerType === 'carrier') {
      fetch('/signupCarrier', {
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: body,
      })
    .then((resp) => {
      console.log(resp)
      return resp.json();
    })
    .then((resp) => {
      if (!resp.success) {
        this.setState({ message: resp.message });
      } else {
        console.log('pos', resp);
        Auth.isAuthenticated = true;
        this.props.updateUser(resp.profile);
        this.setState({redirectToReferrer:true});
      }
    });
      }
    }

  render() {

    const { customerType } = this.state;

    return (
      <Box full align="center" justify="center" pad={ { between: 'small'} }>
        <Title>Sign Up</Title>
        {this.state.message}
        <Form>
          <FormField label="I am a ">
            <Box direction="horizontal" pad={ { horizontal: 'medium', vertical: 'small' } }>
              <CheckBox checked={customerType === 'carrier'} name="carrier" label="Carrier" onClick={this.onSelectCustomerType}/>
              <CheckBox checked={customerType === 'shipper'} name="shipper" label="Shipper" onClick={this.onSelectCustomerType}/>
              </Box>
          </FormField>
          {
            Object.keys(this.state).map((key, i) => {
              if (key !== 'customerType' && key !== 'message') {
                return (
                  <FormField label={key} key={i}>
                    <TextInput  onDOMChange={this.input} name={key} key={i}/>
                  </FormField>
                )
              } 
            })
          }
            
        </Form>
        <Button className="btn-med" primary onClick={this.onSignUp}
          label={<Label>Sign Up</Label>} />
      </Box>
    );
  };
}
