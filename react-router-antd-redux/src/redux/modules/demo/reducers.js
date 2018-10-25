import { handleActions } from 'redux-actions';

import actions from './actions';

// 下面的return 的结构, 也需要和这里一致, container 中才好获取
const initialState = { name: 'Leo Hui' };

export default handleActions(
  {
    [actions.asyncTest](state, action) {
      console.info('state, action===:', state, action);
      return {
        ...state,
        name: 'asyncTest...'
      };
    },
    [actions.syncTest](state, { type, payload, error }) {
      console.info('state, type, payload, error====:', state, type, payload, error);
      return {
        ...state,
        name: 'syncTest'
      };
    }
  },
  {
    ...initialState
  }
);
