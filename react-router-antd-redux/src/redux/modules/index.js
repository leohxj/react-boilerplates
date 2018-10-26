import { combineReducers } from 'redux';

// 获取所以 module 的 reducer
import demoReducer from './demo';

// 把 reducer 暴露出去, 给 store
export default combineReducers({
  demoReduxStore: demoReducer
});
