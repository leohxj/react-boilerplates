/* @flow */
import createActions from './createActions';

export default createActions('user', {
  // 相当与 plus: createAction('COUNTER_PLUS'),
  rename(parameter) {
    return parameter;
  }
});
