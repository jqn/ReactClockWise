/**
 * App/Containers/App.js
 */
"use strict";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ActionCreators } from "../Actions";
import { bindActionCreators } from "redux";
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import MainSection from "../Components/MainSection";
import css from "../Styles/style.css";

const App = ({ todos, actions }) => (
  <Nav>
    <div className="mdl-grid">
      <Header addTodo={actions.addTodo} />
      <MainSection todos={todos} actions={actions} />
    </div>
  </Nav>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
