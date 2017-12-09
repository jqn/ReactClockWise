import React, { Component } from 'react';

const Nav = props => {
  return (
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
      <div className="mdl-layout__content">{props.children}</div>
    </div>
  );
};

export default Nav;
