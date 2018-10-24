/**
 * @file 入口文件
 * @description 是否有必要拆分 Layout, 值得商量， 我这么做是为了文件结构清晰
 *
 * @author Leo Hui <leohxj@gmail.com>
 *
 * Created Date: Tue, 2018-01-09 17:12:51
 *
 * Last Modified: Sat, 2018-09-15 13:10:58
 * Last Modified By: Leo Hui <leohxj@gmail.com>
 *
 */
import * as React from 'react';
import ReactDOM from 'react-dom';

import Layout from './layouts';

import './styles/theme.less';

// Mount ReactDOM
const MOUNT_POINT_ID = 'mount-point';
const MOUNT_NODE = document.getElementById(MOUNT_POINT_ID);

const render = () => {
  ReactDOM.render(<Layout />, MOUNT_NODE);
};

async function x() {
  console.log('x');
}
render();

if (process.env.NODE_ENV === 'development') {
  console.warn('注意: 正在使用本地开发环境代码!');
}
