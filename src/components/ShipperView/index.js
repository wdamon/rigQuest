import React, { Component } from 'react';
import { Box, Section, Heading } from 'grommet';
import ShipperSearch from './ShipperSearch';
import ShipperTable from './ShipperTable';

export default class ShipperView extends Component {
  render() {
    return (
      <Box pad="small" size="full">
        <Section align="start">
          <Heading tag="h3">Search</Heading>
          <ShipperSearch />
        </Section>
        <Section align="start">
          <Heading tag="h3">Shippers</Heading>
          <ShipperTable />
        </Section>
      </Box>
    );
  }
};
