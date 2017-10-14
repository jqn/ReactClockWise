import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreators } from '../Actions';
import { bindActionCreators } from 'redux';
import TodoTextInput from './TodoTextInput';

class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };
  handleSave = text => {
    if (text.length !== 0) {
      console.log('header input', this.props);
      this.props.addTodo(text);
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

function mapStateToProps(state) {
  console.log('state', state);
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
