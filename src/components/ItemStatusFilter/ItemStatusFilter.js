import React from 'react';

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends React.Component {
  state = {
    filter: 'All'
  };

  buttons = [
    { name: 'All', label: 'All' },
    { name: 'Active', label: 'Active' },
    { name: 'Done', label: 'Done' }
  ];

  onButtonsClick = (e) => {
    const filter = e.target.name;
    this.setState({ filter });
    this.props.setFilter(filter);
  };

  render() {
    const activeBtnClasses = 'btn btn-outline-info active';
    const defaultBtnClasses = 'btn btn-outline-secondary';

    const buttons = this.buttons.map(({ name, label }) => {
      return (
        <button
            className={ this.state.filter === name ? activeBtnClasses : defaultBtnClasses }
            name={ name }
            key={ name }
        >
          { label }
        </button>
      )
    });

    return (
        <div
          className='btn-group'
          onClick={ this.onButtonsClick }
        >
          { buttons }
        </div>
    )
  }
}