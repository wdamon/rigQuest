import React from 'react';
import {Col, Button, PageHeader} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Shippers = () => (
  <div>
    <Col sm={4} md={5}>
      <PageHeader>
        {"Welcome Shipper"}
      </PageHeader>
    </Col>
    <Col sm={4} md={5}>
      <Button>
        {//Authentication
         "Login"
        }
      </Button>
      <Button>
        {//Authentication
          "Sign Up"
        }
      </Button>
    </Col>
  </div>
)

export default Shippers;
