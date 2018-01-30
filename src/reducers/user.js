import { handleActions } from 'redux-actions';

import actions from '../actions/user'; // 这里为什么不叫 userActionCreators?

// 下面的return 的结构, 也需要和这里一致, container 中才好获取
const initialState = { name: 'Leo Hui' };

export default handleActions(
  {
    [actions.rename](state) {
      return {
        ...state,
        name: 'Renamed...'
      };
    }
  },
  {
    ...initialState
  }
);
