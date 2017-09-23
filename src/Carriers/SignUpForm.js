import React, { Component } from 'react';
import {Button, FormGroup, ControlLabel, FormControl, Form} from 'react-bootstrap';

 class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state= {
      userName: '',
      password: '',
      fName: '',
      lName: '',
      email: '',
      phone: '',
      org: '',
      truckType: '',
    }
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFNameChange = this.handleFNameChange.bind(this);
    this.handleLNameChange = this.handleLNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleOrgChange = this.handleOrgChange.bind(this);
    this.handleTruckTypeChange = this.handleTruckTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserNameChange(e) {
    this.setState({userName: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value });
  }

  handleFNameChange(e) {
    this.setState({fName: e.target.value });
  }

  handleLNameChange(e) {
    this.setState({lName: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value });
  }
  handlePhoneChange(e) {
    this.setState({phone: e.target.value });
  }
  handleOrgChange(e) {
    this.setState({Org: e.target.value });
  }
  handleTruckTypeChange(e) {
    this.setState({truckType: e.target.value });
  }

  handleSubmit(e) {

  }
   
  render() {
    return (
    <div> 
      <form>
        <FormGroup
          controlId="Login"
        > 
          <ControlLabel>User Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.userName}
            placeholder="Enter Text"
            onChange={this.handleUserNameChange}
          />
          <FormControl.Feedback />
        </FormGroup>  
        <FormGroup
          controlId="PW"
        > 
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="text"
            value={this.state.password}
            placeholder="Enter Text"
            onChange={this.handlePasswordChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>

      <Form inline>
        <FormGroup
          controlId="fName"
        > 
          <ControlLabel>First Name</ControlLabel>
                {' '}
          <FormControl
          
            type="text"
            value={this.state.fName}
            placeholder="Enter Text"
            onChange={this.handleFNameChange}
          />
          <FormControl.Feedback />
        </FormGroup>
              {'   '}
        <FormGroup
          controlId="lName"
        > 
          <ControlLabel>Last Name</ControlLabel>
                {' '}
          <FormControl
            type="text"
            value={this.state.lName}
            placeholder="Enter Text"
            onChange={this.handleLNameChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </Form> 
      <form>
         <FormGroup
          controlId="email"
        > 
          <ControlLabel>Email</ControlLabel>
        <FormControl
            type="text"
            value={this.state.email}
            placeholder="Enter Text"
            onChange={this.handleEmalChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
      <Button type="submit" onClick={this.handleSubmit}>
        Submit
      </Button>
    </div>
    )
  }
}

export default SignUpForm