/**
 * App/Components/Nav.js
 */
import React, { Component } from 'react';

const Nav = props => {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">ClockWise</span>
          <div className="mdl-layout-spacer" />
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="#">
              <i className="material-icons">settings</i>
            </a>
          </nav>
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">ClockWise</span>
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
      <div className="mdl-layout__content mdl-cell--2-offset-desktop">
        {props.children}
      </div>
    </div>
  );
};

export default Nav;
