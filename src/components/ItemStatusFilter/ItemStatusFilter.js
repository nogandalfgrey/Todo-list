import React from 'react';

import './ItemStatusFilter.css';

const ItemStatusFilter = () => {

  return (
      <div className='btn-group'>
        <button className='btn btn-outline-info active'>All</button>
        <button className='btn btn-outline-secondary'>Active</button>
        <button className='btn btn-outline-secondary'>Done</button>
      </div>
  )
};

export default ItemStatusFilter;