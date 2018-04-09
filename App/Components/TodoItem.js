import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import Stopwatch from './Stopwatch';

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  };

  state = {
    editing: false
  };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  };

  render() {
    const { todo, completeTodo, deleteTodo, reset, start, pause } = this.props;
    const actions = {
      reset: this.props.reset,
      start: this.props.start,
      pause: this.props.pause
    };
    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={text => this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <div className="view mdl-cell mdl-cell--12-col">
          <div className="mdl-grid">
            <div className="view mdl-cell mdl-cell--12-col">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.completed}
                onChange={() => completeTodo(todo.id)}
              />
              <label
                className="todo-text"
                onDoubleClick={this.handleDoubleClick}
              >
                {todo.text}
              </label>
            </div>
            <Stopwatch
              todo={this.props.todo}
              {...actions}
              deleteTodo={() => deleteTodo(todo.id)}
            />
          </div>
        </div>
      );
    }

    return (
      <li
        className={classnames({
          completed: todo.completed,
          editing: this.state.editing
        })}
      >
        {element}
      </li>
    );
  }
}
