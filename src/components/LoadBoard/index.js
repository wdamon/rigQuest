import React, { Component } from 'react';
import { Box, Section, Heading } from 'grommet';
import LoadSearch from './LoadSearch';
import LoadTable from './LoadTable';

export default class LoadBoard extends Component {
  render() {
    return (
      <Box pad="small" size="full">
        <Section align="start">
          <Heading tag="h3">Search</Heading>
          <LoadSearch />
        </Section>
        <Section align="start">
          <Heading tag="h3">Load Board</Heading>
          <LoadTable />
        </Section>
      </Box>
    );
  }
};
