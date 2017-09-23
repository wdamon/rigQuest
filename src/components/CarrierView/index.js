import React, { Component } from 'react';
import { Box, Section, Heading } from 'grommet';
import CarrierSearch from './CarrierSearch';
import CarrierTable from './CarrierTable';

export default class CarrierView extends Component {
  render() {
    return (
      <Box pad="small" size="full">
        <Section align="start">
          <Heading tag="h3">Search</Heading>
          <CarrierSearch />
        </Section>
        <Section align="start">
          <Heading tag="h3">Carriers</Heading>
          <CarrierTable />
        </Section>
      </Box>
    );
  }
};
