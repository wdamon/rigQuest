import React from 'react';
import {Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

const Home = () => (
 <div> 
    <Col sm={3} md={6}>
      <LinkContainer to="/carriers">
        <Button>Carrier </Button>
      </LinkContainer>
    </Col>
    <Col sm={3} md={6}>
      <LinkContainer to="/shippers">
          <Button>Shipper </Button>
      </LinkContainer>
    </Col>
  </div>
);

export default Home;