'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../Actions/Types';

// const TODO_FILTERS = {
//   [SHOW_ALL]: () => true,
//   [SHOW_ACTIVE]: todo => !todo.completed,
//   [SHOW_COMPLETED]: todo => todo.completed,
// };

export default class MainSection extends Component {
  // static propTypes = {
  //   todos: PropTypes.array.isRequired,
  //   actions: PropTypes.object.isRequired,
  // };

  // state = { filter: SHOW_ALL };

  // handleClearCompleted = () => {
  //   this.props.actions.clearCompleted();
  // };
  //
  // handleShow = filter => {
  //   this.setState({ filter });
  // };
  //
  // renderToggleAll(completedCount) {
  //   const { todos, actions } = this.props;
  //   if (todos.length > 0) {
  //     return (
  //       <span>
  //         <input className="toggle-all" type="checkbox" />
  //         <label onClick={actions.completeAll} />
  //       </span>
  //     );
  //   }
  // }
  renderToggleAll() {
    return (
      <span>
        <input type="checkbox" />
        <label>Toggle all</label>
      </span>
    );
  }

  render() {
    console.log('props', this.props);
    // const { todos, actions } = this.props;
    // const { filter } = this.state;

    return (
      <section className="main">
        {this.renderToggleAll()}
        <ul className="todo-list" />
      </section>
    );
  }
}
