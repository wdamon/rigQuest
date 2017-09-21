import React, { Component } from 'react';
import {Col, Nav, NavItem, Button} from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';


class NavBar extends Component {

  render() {
    function handleSelect(selectedKey) {
      alert('selected ' + selectedKey);
    }
    return (
      <Col sm={3} md={2}>
        <Nav bsStyle="pills" stacked activeKey={1}>
          <NavItem eventKey={1}> 
            <LinkContainer to="/">
              <Button>Home</Button>
            </LinkContainer>
          </NavItem>
          <NavItem eventKey={2}>
            <LinkContainer to="/carriers">
              <Button>Carrier </Button>
            </LinkContainer>
          </NavItem>
          <NavItem eventKey={3}> 
            <LinkContainer to="/shippers">
              <Button>Shippers</Button>
            </LinkContainer>
          </NavItem>
        </Nav>
      </Col>
    )  
  }

}

export default NavBar;
