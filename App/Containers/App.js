'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../Actions';
import { bindActionCreators } from 'redux';
import Header from '../Components/Header';
import MainSection from '../Components/MainSection';
import Footer from '../Components/Footer';

const App = ({ todos, actions }) => (
  <div>
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} />
    <Footer />
  </div>
);

const mapStateToProps = state => ({
  todos: state.Todos,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
