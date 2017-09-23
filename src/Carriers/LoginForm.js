import React, { Component } from 'react';
import {Row, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import config from '../config.js';
import 'whatwg-fetch';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state= {
      username: '',
      password: '',
    }
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserNameChange(e) {
    this.setState({username: e.target.value });
    console.log(this.state.username);
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value });
  }

   getValidationStateUserName() {
    const length1 = this.state.password.length;
  
    if (length1 >= 1 ) return 'success';
    else return 'error';
  }

  getValidationStatePW() {
    const length2 = this.state.username.length;
    if (length2 >= 1) return 'success';
    else return 'error';
  }

  handleSubmit(e) {
    fetch(`${config.url}/login`, {
      method: 'post',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then(response => response.json())
    .then((responseData) => {
      console.log(responseData)
      if (responseData.user) {
        console.log("success", responseData);
      } else {
       console.log("error", responseData);
      }
    })
    .catch((err) => console.log(err));
  }

  render() {
    return (

      <form>
        <FormGroup
          controlId="Login"
          validationState={this.getValidationStateUserName()}
        > 
          <ControlLabel>User Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.username}
            placeholder="Enter Text"
            onChange={this.handleUserNameChange}
          />
          <FormControl.Feedback />
        </FormGroup>  
        <FormGroup
          controlId="PW"
          validationState={this.getValidationStatePW()}
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
        <Row>
          <Button onClick={this.handleSubmit}>
            Submit
          </Button>
        </Row>  
      <br />
      </form>
    )
  }
}

export default LoginForm