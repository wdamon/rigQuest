import React, { Component } from 'react';
import data from 'data/shippers.json';
import { Form, SearchInput } from 'grommet';
import './ShipperSearch.css';

export default class ShipperSearch extends Component {
  constructor() {
    super();
    this.state = { 
      search: '',
    };
  }

  onChange = (event) => {
    this.setState({ 
      search: event.target.value,
    });
  }

  render() {
    const { search } = this.props;

    return (
        <Form>
          <SearchInput className="shipper-search" suggestions={null} name="shipper" value={search} onDOMChange={this.onChange} />
        </Form>
    );
  }
};
