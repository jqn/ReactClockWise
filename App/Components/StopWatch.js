import React, { Component } from 'react';
import moment from 'moment';

export default class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {};
    // holds the actuall time
    this.time = null;
    // will be used to clear the interval
    this.intervalId = null;
    // used to switch from play to pause and viceversa
    this.state.toggle = false;
    // holds the formatted current time in HH:mm:ss
    this.state.currentTime = null;
  }

  componentDidMount() {
    this.initializeTime();
  }

  initializeTime = () => {
    this.time = 0;
    this.setState({
      currentTime: this.formatTime(this.getTime()),
    });
  };

  runTimer = () => {
    if (!this.state.toggle) {
      this.startTime();
    } else {
      this.pauseTime();
    }
  };

  startTime() {
    this.createInterval();
    this.toggle();
    this.props.todo.start('running', this.state.currentTime);
  }

  pauseTime = () => {
    this.clearInterval();
    this.toggle();
    this.props.todo.pause('paused', this.state.currentTime);
  };

  resetTimer = () => {
    this.initializeTime();
    this.clearInterval();
    this.setState({ toggle: false });
    this.props.todo.reset();
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  createInterval() {
    this.intervalId = setInterval(this.updateTime, 100);
  }

  clearInterval() {
    clearInterval(this.intervalId);
  }

  updateTime = () => {
    this.time += 100;
    const newTime = this.getTime();
    const formattedTime = this.formatTime(newTime);

    this.setState({ currentTime: formattedTime });
  };

  formatTime = momentJsObject => {
    return momentJsObject.format('HH:mm:ss');
  };

  getTime = () => {
    return moment.utc(this.time);
  };

  render() {
    let toggleText = !this.state.toggle ? 'Play' : 'Pause';
    const { start, reset, pause } = this.props;

    return (
      <div ref="time" className="stopwatch mdl-cell mdl-cell--4-col" id="time">
        <h4>{this.state.currentTime}</h4>
        <button
          className="mdl-button mdl-js-button mdl-button--raised"
          onClick={this.runTimer}
        >
          {toggleText}
        </button>
        <button
          className="mdl-button mdl-js-button mdl-button--raised"
          onClick={this.resetTimer}
        >
          Reset
        </button>
      </div>
    );
  }
}
