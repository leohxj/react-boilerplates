/* @flow */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counter from './counter';
import user from './user';

export default combineReducers({
  counter,
  user,
  router: routerReducer
});
