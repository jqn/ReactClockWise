'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import MainSection from '../Components/MainSection';
import Footer from '../Components/Footer';
import * as TodoActions from '../Actions';

const App = ({ todos, actions }) => (
  <div>
    <Header />
    <MainSection />
    <Footer />
  </div>
);

const mapStateToProps = state => ({
  todos: state.addTodo,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
