import React from 'react';

import './SearchPanel.css'

export default class SearchPanel extends React.Component {

  state = {
    term: ''
  };

  onChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.setTerm(term);
  };

  render() {
    return (
      <input
        className='form-control search-panel'
        type='text'
        placeholder='search'
        onChange={ this.onChange }
        value={ this.state.label }
      />
    )
  }
}