import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

export default class TodoItem extends Component {
  handleSave = text => {
    console.log('handleSave TodoItem', text);
  };
  render() {
    let element;
    const { todo } = this.props;
    element = (
      <TodoTextInput text={todo.text} onSave={text => this.handleSave(text)} />
    );
    return <li>{element}</li>;
  }
}
