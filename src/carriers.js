import React from 'react';
import {Col, Button, PageHeader} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Carriers = () => (
  <div>
    <Col sm={4} md={5}>
      <PageHeader>
        {"Welcome Trucker"}
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

export default Carriers;