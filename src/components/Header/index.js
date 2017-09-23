import React, { Component } from 'react';
import { Box, Button, Heading, Label } from 'grommet';

export default class Header extends Component {
  render() {
    return (
      <Box className="header" direction="horizontal" pad="small" justify="between" align="center" separator="bottom">
        <Heading margin="none" tag="h3">Truckin</Heading> 
        <Button onClick={() => {}}
          label={(
            <Label>Sign In / Sign Up</Label>
          )}>
        </Button>
      </Box>
    );
  }
};
