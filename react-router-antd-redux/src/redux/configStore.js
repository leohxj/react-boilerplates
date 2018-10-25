import { createStore } from 'redux';

import reducers from './modules';
import enhancers from './helpers/enhancers';

export default function configStore(initialState) {
  // createStore 初始化
  const store = createStore(reducers, initialState, enhancers);

  return store;
}
