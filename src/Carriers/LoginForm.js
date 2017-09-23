import React from 'react';
import {Row, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

const LoginForm = React.createClass({
  getInitialState() {
    return {
      userName: '',
      password: '',
    }
  }, 

  handleUserNameChange(e) {
    this.setState({userName: e.target.value });
    console.log(this.state.userName);
  },

  handlePasswordChange(e) {
    this.setState({password: e.target.value });
  },

   getValidationStateUserName() {
    const length1 = this.state.password.length;
  
    if (length1 >= 1 ) return 'success';
    else return 'error';
  },

  getValidationStatePW() {
    const length2 = this.state.userName.length;
    if (length2 >= 1) return 'success';
    else return 'error';
  },
  handleSubmit(e) {

  },
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
            value={this.state.userName}
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
          <Button type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Row>  
      <br />
      </form>
    )
  }
})

export default LoginForm