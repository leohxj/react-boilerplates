/* @flow */
import createActions from './createActions';
import * as api from '../api';

export default createActions('counter', {
  // 相当与 plus: createAction('COUNTER_PLUS'),
  plus(parameter) {
    return parameter;
  },
  minus(parameter) {
    return parameter;
  },
  async asyncPlus() {
    const result = await api.syncPlus();
    return result;
  }
});
