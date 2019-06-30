import React from 'react';

import './AddItem.css';

export default class AddItem extends React.Component {

  state = {
    label: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: ''
    })
  };

  onInputChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  render() {

    return (
        <form
            className='add-item'
            onSubmit={ this.onSubmit }
        >
          <input
              className='add-item-search-panel form-control'
              type='text'
              placeholder='todo'
              onChange={ this.onInputChange }
              value={ this.state.label }
          />
          <button className='btn btn-outline-info'>
            Add
          </button>
        </form>
    )
  }
}