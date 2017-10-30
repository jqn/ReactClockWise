'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreators } from '../Actions';
import { bindActionCreators } from 'redux';
import Header from '../Components/Header';
import MainSection from '../Components/MainSection';
import css from '../Styles/style.css';

const App = ({ todos, actions }) => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">YouDo</span>
        <div className="mdl-layout-spacer" />
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="#">
            Settings
          </a>
        </nav>
      </div>
    </header>
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">YouDo</span>
      <nav className="mdl-navigation">
        <a className="mdl-navigation__link" href="#">
          All
        </a>
        <a className="mdl-navigation__link" href="#">
          Active
        </a>
        <a className="mdl-navigation__link" href="#">
          Completed
        </a>
      </nav>
    </div>
    <div className="mdl-layout__content">
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="mdl-cell mdl-cell--12-col">
            <Header addTodo={actions.addTodo} />
          </div>
          <MainSection todos={todos} actions={actions} />
        </div>
      </div>
    </div>
  </div>
);

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  todos: state.Todos,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
