import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ todos }) => {

  const items = todos.map((item) => {
    const { id, ...data } = item;

    return (
      <li className='todo-list-item list-group-item' key={ id }>
        <TodoListItem data={ data } />
      </li>
    )
  });

  return (
    <ul className='todo-list list-group'>
      { items }
    </ul>
  )
};

export default TodoList;