/**
 * App/Lib/TimeTracker.js
 */
import moment from "moment";

export const time = () => {
  return {
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("HH:mm:ss"),
  };
};

export const dateTime = () => {
  return {
    datetime: moment().format("YYYY-MM-DD HH:mm:ss"),
  };
};
