import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import TodoTextInput from './TodoTextInput';

class Header extends Component {
  handleSave = text => {
    if (text.length !== 0) {
      // this.props.addTodo(text)
      console.log('header input', this);
    }
  };
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapDispatchToProps)(Header);
