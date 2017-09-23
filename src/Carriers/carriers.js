import React, { Component } from 'react';
import {Row, Col, Button, PageHeader} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

class Carriers extends Component {
  constructor(props) {
    super(props);
    this.state={signup:false}
    this.signup = this.signup.bind(this);
  }

  signup() {
    this.setState({signup: !this.state.signup })
  }

  render() {
    return(
      <div>
        <Row className="show-grid">
          <Col sm={4} md={5}>
            <PageHeader>
              {"Welcome Trucker, Plase Login or Signup"}
            </PageHeader>
          </Col>
        </Row>
        <Row className="show-grid">
        {!this.state.signup?
          <Col sm={4} md={5}>
            <LoginForm/>
          </Col> 
          :
          <Col sm={6} md={10}>
            <SignUpForm/> 
          </Col>
        }
        </Row>  
        <Row className="show-grid">
           <Col sm={4} md={5}>
            <Button onClick={this.signup}>
              {//Authentication
                "Don't Have an Account? Sign Up"
              }
            </Button>  
          </Col>
        </Row>  
      </div>
    )
  }
}



export default Carriers;