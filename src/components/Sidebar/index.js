import React from 'react';
import { Sidebar, Header, Title, Box, Menu, Footer, Label } from 'grommet';
import { Link } from 'react-router-dom';

export default function(props) {
  return (
    <Sidebar fixed colorIndex="brand">
      <Header pad='medium' justify='between'>
      <Title> Menu </Title>
      </Header>
      <Box flex='grow' justify='start'>
        <Menu primary={true}>
          <Link to="/login">
            <Label>
              Login 
            </Label>
          </Link>
          <Link to="/loadboard">
            <Label>
              Load Board 
            </Label>
          </Link>
          <Link to="/carriers">
            <Label>
              Carriers 
            </Label>
          </Link>
          <Link to="/shippers"> 
            <Label>
              Shippers 
            </Label>
          </Link>
          <Link to="/profile">
            <Label>
              Profile 
            </Label>
          </Link>
        </Menu>
      </Box>
      <Footer pad='medium'>
      </Footer>
    </Sidebar>
  );
}
