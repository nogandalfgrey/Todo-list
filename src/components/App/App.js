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
      { label: 'Показывается при добавлении', important: false, done: false, id: 1 },
      { label: 'Поиск подстрокой', important: true, done: false, id: 2 },
      { label: 'Коммиты', important: false, done: false, id: 3 }
    ],
    term: '',
    filter: 'All'
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
          { label: text, important: false, done: false, id: this.maxId++ };

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

  setTerm = (term) => {
    this.setState({ term });
  };

  search = (items, term) => {
    if(this.state.term === '') {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
    })
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  statusFilter = (items, filter) => {
    switch (filter) {
      case 'All': return items;
      case 'Done': return items.filter((item) => item.done);
      case 'Active': return items.filter((item) => !item.done);
      default: {
        console.error('Wrong filter property');
        return items;
      }
    }
  };

  render() {
    const { todoData } = this.state;
    const visibleItems = this.search(todoData, this.state.term);
    const filteredItems = this.statusFilter(visibleItems, this.state.filter);

    const todo = todoData.filter((el) => el.done === false).length;
    const done = todoData.length - todo;

    return (
        <div className='container'>
          <AppHeader
            todo={ todo }
            done={ done }
          />
          <div className='filter-wrapper'>
            <SearchPanel setTerm={ (term) => this.setTerm(term) }/>
            <ItemStatusFilter setFilter={ (filter) => this.setFilter(filter) }/>
          </div>
          <TodoList
            todos={ filteredItems }
            onDeleted={ (id) => this.deleteItem(id) }
            onToggleDone={ (id) => this.onToggleDone(id) }
            onToggleImportant={ (id) => this.onToggleImportant(id) }
          />
          <AddItem addItem={ (text) => this.addItem(text) }/>
        </div>
    );
  }
}