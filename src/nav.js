import React, { Component } from 'react';
import {Col, Nav, NavItem, Button} from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';


class NavBar extends Component {
  constructor(props) {
    super(props);
     this.state = {selected:1};
     this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
      this.setState({selected:selectedKey});
      console.log(this.state.selected);
    }

  render() {
    
    return (
      <Col sm={3} md={2}>
        <Nav bsStyle="pills" stacked activeKey={this.state.selected} onSelect={this.handleSelect}>
          <LinkContainer to="/home">
            <NavItem eventKey={1}> 
              Home
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/carriers">  
            <NavItem eventKey={2}>
              Carrier
            </NavItem>
         </LinkContainer>
         <LinkContainer to="/shippers">
          <NavItem eventKey={3}> 
            Shippers
          </NavItem>
        </LinkContainer>  
        </Nav>
      </Col>
    )  
  }

}

export default NavBar;
