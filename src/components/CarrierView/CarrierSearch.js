import React, { Component } from 'react';
import data from 'data/carriers.json';
import { Form, SearchInput } from 'grommet';
import './CarrierSearch.css';

export default class CarrierSearch extends Component {
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
          <SearchInput className="carrier-search" suggestions={null} name="carrier" value={search} onDOMChange={this.onChange} />
        </Form>
    );
  }
};
