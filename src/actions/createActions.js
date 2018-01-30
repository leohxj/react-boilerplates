/* @flow */
import { createAction } from 'redux-actions';

export default function(prefix: string, actions: Object) {
  return Object.keys(actions).reduce((results, key) => {
    results[key] = createAction(`${prefix}_${key}`, actions[key]);
    return results;
  }, {});
}
