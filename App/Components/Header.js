import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';
import time from '../Lib/TimeTracker';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text, '00:00:00', time());
    }
  };

  render() {
    return (
      <div className="header mdl-cell mdl-cell--12-col">
        <h2>Todos</h2>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </div>
    );
  }
}
