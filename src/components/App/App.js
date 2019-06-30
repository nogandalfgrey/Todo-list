import React from "react";

import AppHeader from '../AppHeader/AppHeader';
import TodoList from '../TodoList/TodoList';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import AddItem from '../AddItem/AddItem';

import './App.css';

export default class App extends React.Component {

  maxId = 100;

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      }
    })
  };

  addItem = (text) => {
    this.setState(({ todoData }) => {
      const newData =
          { label: text, important: false, id: this.maxId++ };

      const newArray = [
        ...todoData,
        newData
      ];

      return {
        todoData: newArray
      }
    })
  };

  render() {
    return (
        <div className='container'>
          <AppHeader />
          <div className='filter-wrapper'>
            <SearchPanel/>
            <ItemStatusFilter/>
          </div>
          <TodoList
              todos={ this.state.todoData }
              onDeleted={ (id) => this.deleteItem(id) }
          />
          <AddItem addItem={ (text) => this.addItem(text) }/>
        </div>
    );
  }
}