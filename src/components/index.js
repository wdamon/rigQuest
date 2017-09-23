import React, { Component } from 'react';
import { Box, Button, Label, Headline } from 'grommet';
import "./Header.css";

export default class Header extends Component {
  onLogin() {}

  render() {
    return (
      <Box direction="row" justify="between" align="between" size="full" separator="bottom"
        pad="small">
        <Box justify="center">
          <Headline margin="none" size="small">Truckin</Headline>
        </Box>
        <Box>
          <Button onClick={this.onLogin} 
            label={<Label>{'login/signup'}</Label>}>
          </Button>
        </Box>
      </Box>
    );
  }
};
