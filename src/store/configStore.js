/* @flow */
import { createStore } from 'redux';

import enhancers from './enhancers';
import reducers from '../reducers';

export default function configStore(initialState?: Object) {
  // createStore 初始化
  const store = createStore(reducers, initialState, enhancers);

  return store;
}
