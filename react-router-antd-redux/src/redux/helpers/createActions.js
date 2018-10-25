// 通过 redux-actions 创建命名空间
import { createAction } from 'redux-actions';

export default function(prefix, actions) {
  return Object.keys(actions).reduce((results, key) => {
    // eslint-disable-next-line
    results[key] = createAction(`${prefix}_${key}`, actions[key]);
    return results;
  }, {});
}
