import React from "react";

import AppHeader from '../AppHeader/AppHeader';
import TodoList from '../TodoList/TodoList';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

import './App.css';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ];

  return (
      <div className='container'>
        <AppHeader />
        <div className='filter-wrapper'>
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList todos={ todoData }/>
      </div>
  );
};

export default App;