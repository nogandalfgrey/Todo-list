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
      { label: 'Показывается при добавлении', important: false, done: false, id: 1, visible: true },
      { label: 'Поиск подстрокой', important: true, done: false, id: 2, visible: true },
      { label: 'Коммиты', important: false, done: false, id: 3, visible: true }
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
          { label: text, important: false, done: false, id: this.maxId++, visible: true };

      const newArray = [
        ...todoData,
        newData
      ];

      return {
        todoData: newArray
      }
    })
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);

    const oldData = arr[idx];
    const newData = { ...oldData, [propName]: !oldData[propName] };

    return [
      ...arr.slice(0, idx),
      newData,
      ...arr.slice(idx + 1)
    ]
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  };

  visibilityChange = (status, idx) => {
    this.setState(({ todoData }) => {
      const oldData = todoData[idx];
      const newData = { ...oldData, visible: status };

      return {
        todoData: [
          ...todoData.slice(0, idx),
          newData,
          ...todoData.slice(idx + 1)
        ]
      }
    });
  };

  render() {
    const { todoData } = this.state;

    const todo = todoData.filter((el) => el.done === false).length;
    const done = todoData.length - todo;

    return (
        <div className='container'>
          <AppHeader
            todo={ todo }
            done={ done }
          />
          <div className='filter-wrapper'>
            <SearchPanel
                todoData={ todoData }
                visibilityChange={ (status, idx) => this.visibilityChange(status, idx) }
            />
            <ItemStatusFilter/>
          </div>
          <TodoList
            todos={ todoData }
            onDeleted={ (id) => this.deleteItem(id) }
            onToggleDone={ (id) => this.onToggleDone(id) }
            onToggleImportant={ (id) => this.onToggleImportant(id) }
          />
          <AddItem addItem={ (text) => this.addItem(text) }/>
        </div>
    );
  }
}