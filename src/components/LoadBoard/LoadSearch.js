import React, { Component } from 'react';
// import data from 'data/loads.json';
import { Form, SearchInput } from 'grommet';
import './LoadSearch.css';

export default class LoadSearch extends Component {
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
          <SearchInput className="load-search" suggestions={null} name="load" value={search} onDOMChange={this.onChange} />
        </Form>
    );
  }
};
