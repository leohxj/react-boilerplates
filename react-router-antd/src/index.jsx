import * as React from 'react';
import ReactDOM from 'react-dom';

import './vendors';
import Layout from './layouts';

import './styles/theme.less';

// Mount ReactDOM
const MOUNT_POINT_ID = 'mount-point';
const MOUNT_NODE = document.getElementById(MOUNT_POINT_ID);

const render = () => {
  ReactDOM.render(<Layout />, MOUNT_NODE);
};

render();

// 开发环境的一些设置
if (process.env.NODE_ENV === 'development') {
  console.warn('正在使用本地开发环境代码');
}
