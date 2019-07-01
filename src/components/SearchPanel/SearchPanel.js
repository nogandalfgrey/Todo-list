import React from 'react';

import './SearchPanel.css'

export default class SearchPanel extends React.Component {

  state = {
    label: ''
  };

  onChange = (e) => {
    this.setState({
        label: e.target.value
    }, this.onChanged);
  };

  onChanged = () => {
    this.props.todoData.forEach((item, idx) => {
      const currentWord = item.label.split('');
      const targetWord = this.state.label.split('');

      currentWord.splice(targetWord.length);

      const equal = currentWord.toString().toUpperCase() === targetWord.toString().toUpperCase();

      if (equal) {
        this.props.visibilityChange(true, idx)
      }
      else {
        this.props.visibilityChange(false, idx)
      }
    });
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