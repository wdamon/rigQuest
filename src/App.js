import React, { Component } from 'react';
import {Grid, Row, Col, PageHeader, Image, Button} from 'react-bootstrap';
import {
  Route,
  Link
} from 'react-router-dom'
import logo from './assets/logo.png';
import Nav from './nav.js';
import Home from  './home.js';
import Carriers from './carriers.js';
import Shippers from './shippers.js';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Nav />
          <Col sm={9} md={10}>
            <PageHeader>
              <Image src={logo} responsive alt="logo" />
            </PageHeader>

            <Row className="show-grid">
              <Route exact path="/" component ={Home}/>
              <Route path="/carriers" component ={Carriers}/>
              <Route path="/shippers" component ={Shippers}/>
            </Row>

          </Col>
        </Row>
      </Grid>    
    );
  }
}



export default App;