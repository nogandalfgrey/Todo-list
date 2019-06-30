import React from 'react';

import './TodoListItem.css'

class TodoListItem extends React.Component {

  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done
      }
    })
  };

  onImportantMark = () => {
    this.setState((state) => {
      return {
        important: !state.important
      }
    })
  };

  render() {

    const { data, onDeleted } = this.props;
    let classNames = 'todo-list-item-text';

    if (this.state.done) {
      classNames += ' done';
    }
    if (this.state.important) {
      classNames += ' important';
    }

    return (
        <div className='todo-list-item-inner'>
          <span
              className={ classNames }
              onClick={ this.onLabelClick }
          >
            { data.label }
          </span>
          <button
              className='todo-list-button btn btn-outline-danger'
              onClick={ onDeleted }
          >
            <svg width="1em" height="1em" aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt"
                 className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 448 512">
              <path fill="tomato"
                    d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"/>
            </svg>
          </button>
          <button
            className='todo-list-button btn btn-outline-success'
            onClick={ this.onImportantMark }>
            <svg width="1em" height="1em" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation"
                 className="svg-inline--fa fa-exclamation fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 192 512">
              <path fill="#28a745"
                    d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"/>
            </svg>
          </button>
        </div>
    )
  }
}

export default TodoListItem;