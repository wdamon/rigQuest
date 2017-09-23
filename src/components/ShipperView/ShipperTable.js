import React, { Component } from 'react';
import arraySort from 'array-sort';
import { Table, TableHeader } from 'grommet';
import data from 'data/shippers.json';
import ShipperItem from './ShipperItem';
import ShipperSearch from './ShipperSearch';
import './ShipperTable.css';

// TODO: get this from the data
const labels = [ 'id', 'shipper', 'home'];

export default class ShipperTable extends Component {
  constructor() {
    super();
    this.state = {
      sortIndex: 0,
      sortAscending: true,
      shippers: [...data],
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
      shippers: arraySort(data, label, { reverse: !sortAscending }),
      label,
    });
  }

  render() {
    const { shippers, sortIndex, sortAscending } = this.state;

    return (
      <Table onSort={this.onSort} selectable>
        <TableHeader className="grid" sortIndex={sortIndex} sortAscending={sortAscending} onSort={this.onSort} labels={labels} />
        <tbody className="grid">
          { shippers.map(shipper => (
            <ShipperItem {...{shipper, labels}} />
          ))}
        </tbody>
      </Table>
    );
  }
};
