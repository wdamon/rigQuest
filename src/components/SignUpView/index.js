import React, { Component } from 'react';
import { Box, Button, Label, Form, CheckBox, 
  FormField, TextInput, Title } from 'grommet';

import 'App.css';

export default class SignUpForm extends Component {
  constructor(props) {
    super();
    this.state = {
      customerType:null,
      email: '',
      password: '',
      username: '',
      phone: '',
      organization: '',
      truckType: ''
    };
    this.input = this.input.bind(this);
  }

  onSelectCustomerType = (event) => {
    this.setState({ customerType: event.target.name });
  }
   input = (event) => {
    
    this.setState({ [event.target.name] : event.target.value })
    console.log(this.state);
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
          {
            Object.keys(this.state).map((key, i) => {
              if (key !== 'customerType') {
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
