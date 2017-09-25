import React, { Component } from 'react';
import { Box } from 'grommet';

export default class ProfileView extends Component {
  render() {
    return (
      <Box full align="center" justify="center">
       <h1> {`Welcome ${this.props.profile.firstName}!`}</h1>
      </Box>
    );
  };
}
