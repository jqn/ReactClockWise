/**
 * App/Components/StopWatch.js
 */
import React, { Component } from "react";
import time from "../Lib/TimeTracker";
import moment from "moment";
import classnames from "classnames";

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
    if (this.props.todo.timestamp === "00:00:00") {
      this.initializeTime();
    } else {
      this.rehydrateTime();
    }
  }

  componentWillUnmount() {
    console.log("stopwatch unmounted");
  }

  rehydrateTime = () => {
    let time = this.props.todo.timestamp;
    let timearray = time.split(":");
    let hours = Number(timearray[0]) * 3600000;
    let minutes = Number(timearray[1]) * 60000;
    let seconds = Number(timearray[2]) * 1000;

    this.time = hours + minutes + seconds;
    this.setState({
      currentTime: this.props.todo.timestamp,
    });
  };

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
    this.props.start("running", this.props.todo.id);
  }

  pauseTime = () => {
    this.clearInterval();
    this.toggle();
    this.props.pause("paused", this.props.todo.id, this.state.currentTime);
  };

  resetTimer = () => {
    this.initializeTime();
    this.clearInterval();
    this.setState({ toggle: false });
    this.props.reset("reset", this.props.todo.id, "00:00:00", time());
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
    return momentJsObject.format("HH:mm:ss");
  };

  getTime = () => {
    return moment.utc(this.time);
  };

  render() {
    let toggleText = !this.state.toggle ? (
      <i className="material-icons">play_arrow</i>
    ) : (
      <i className="material-icons">pause</i>
    );
    return (
      <div
        ref={element => (this.time = element)}
        className="mdl-cell mdl-cell--12-col mdl-grid stopwatch"
        id="time"
      >
        <div className="timer mdl-cell mdl-cell mdl-cell--4-col counter-wrapper">
          <h5 className="counter">{this.state.currentTime}</h5>
        </div>
        <div className="controls mdl-cell  mdl-cell mdl-cell mdl-cell--4-col">
          <button
            className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab play"
            onClick={this.runTimer}
          >
            {toggleText}
          </button>
          <button
            className="reset mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab replay"
            onClick={this.resetTimer}
          >
            <i className="material-icons">replay</i>
          </button>
          <button
            className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect delete"
            onClick={this.props.deleteTodo}
          >
            <i className="material-icons">close</i>
          </button>
        </div>
      </div>
    );
  }
}
