import moment from 'moment';

export default function time() {
  return {
    date: moment().format('YYYY-MM-DD'),
    time: moment().format('HH:mm:ss'),
  };
}
