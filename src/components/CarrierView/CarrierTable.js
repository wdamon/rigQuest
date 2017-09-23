import React, { Component } from 'react';
import arraySort from 'array-sort';
import { Table, TableHeader } from 'grommet';
import data from 'data/carriers.json';
import CarrierItem from './CarrierItem';
import CarrierSearch from './CarrierSearch';
import './CarrierTable.css';

// TODO: get this from the data
const labels = [ 'id', 'carrier', 'home', 'location'];

export default class CarrierTable extends Component {
  constructor() {
    super();
    this.state = {
      sortIndex: 0,
      sortAscending: true,
      carriers: [...data],
    };
  }

  onSort = (sortIndex)  => {
    const { 
      sortIndex: oldSortIndex, 
      sortAscending: OldSortAscending,
    } = this.state;

    const label = labels[sortIndex];
    const sortAscending = oldSortIndex === sortIndex ? !OldSortAscending : true;

    this.setState({ 
      sortIndex,
      sortAscending,
      carriers: arraySort(data, label, { reverse: !sortAscending }),
      label,
    });
  }

  render() {
    const { carriers, sortIndex, sortAscending } = this.state;

    return (
      <Table onSort={this.onSort} selectable>
        <TableHeader className="grid" sortIndex={sortIndex} sortAscending={sortAscending} onSort={this.onSort} labels={labels} />
        <tbody className="grid">
          { carriers.map(carrier => (
            <CarrierItem {...{carrier, labels}} />
          ))}
        </tbody>
      </Table>
    );
  }
};
