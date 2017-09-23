import React, { Component } from 'react';
import arraySort from 'array-sort';
import { Table, TableHeader } from 'grommet';
import data from 'data/loads.json';
import LoadItem from './LoadItem';
import './LoadTable.css';

// TODO: get this from the data
const labels = [ 'id', 'shipper', 'pickup', 'dropoff', 'amount'];

export default class LoadTable extends Component {
  constructor() {
    super();
    this.state = {
      sortIndex: 0,
      sortAscending: true,
      loads: [...data],
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
      loads: arraySort(data, label, { reverse: !sortAscending }),
      label,
    });
  }

  render() {
    const { loads, sortIndex, sortAscending } = this.state;

    return (
      <Table onSort={this.onSort} selectable>
        <TableHeader className="grid" sortIndex={sortIndex} sortAscending={sortAscending} onSort={this.onSort} labels={labels} />
        <tbody className="grid">
          { loads.map(load => (
            <LoadItem {...{load, labels}} />
          ))}
        </tbody>
      </Table>
    );
  }
};
