import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, onDeleted, onToggleDone,
                    onToggleImportant }) => {

  const items = todos.map((item) => {
    const { id, ...data } = item;


    let itemClasses = 'todo-list-item list-group-item';

    if (data.visible) {
      itemClasses += ' visible'
    }
    else {
      itemClasses += ' invisible'
    }

    return (
      <li className={ itemClasses } key={ id }>
        <TodoListItem
            data={ data }
            onDeleted={ () => {onDeleted(id)} }
            onToggleDone={ () => onToggleDone(id) }
            onToggleImportant={ () => onToggleImportant(id) }
        />
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