import React from 'react';

import './AddItem.css';

const AddItem = ({ addItem }) => {
  return (
      <div className='add-item'>
        <input className='add-item-search-panel form-control' type='search' placeholder='todo'/>
        <button
            className='btn btn-outline-info'
            onClick={ () => addItem('Hello world') }
        >
          Add
        </button>
      </div>
  )
};

export default AddItem;