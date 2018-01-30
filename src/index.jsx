/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// 页面的基础接口
import Layout from './layouts';

import { configStore } from './store';

// Create store
const store = configStore();

// render
const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Layout />
    </Provider>,
    (MOUNT_NODE: any)
  );
};

render();
