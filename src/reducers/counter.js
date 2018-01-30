import { handleActions } from 'redux-actions';

import actions from '../actions/counter';

// 下面的return 的结构, 也需要和这里一致, container 中才好获取
const initialState = { value: 42 };

export default handleActions(
  {
    [actions.plus](state) {
      return {
        ...state,
        value: state.value + 1
      };
    },
    [actions.minus](state) {
      return {
        ...state,
        value: state.value - 1
      };
    },
    // actions 传递的数据在 payload 中
    [actions.asyncPlus](state, { error, payload: { value } }) {
      if (error) {
        return state;
      }
      return {
        ...state,
        value: state.value + value
      };
    }
  },
  {
    ...initialState
  }
);
