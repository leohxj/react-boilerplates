/* @flow */
import * as React from 'react';
import ReactDOM from 'react-dom';

// 页面的基础接口
import Layout from './layouts';

// render
const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(<Layout />, (MOUNT_NODE: any));
};

render();
