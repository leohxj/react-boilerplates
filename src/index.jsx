/**
 * @file 入口文件
 * @description
 * 是否有必要拆分 Layout, 值得商量， 我这么做是为了文件结构清晰
 * 如果结合 Redux 的话， Provider 放在这里注入， 如果有 react-router-redux 的话， ConnectedRouter 也放这里
 * react-hot-loader 是针对 React 组件，所以绑定到 Layout(Routers) 上即可
 * Routers 一般里面会有路由描述，所以文件不小, 至于 ConnectedRouter 放在 Routers 还是这里。。。。我也不清楚
 *
 * @author Leo Hui <leohxj@gmail.com>
 *
 * Created Date: Tue, 2018-01-09 17:12:51
 *
 * Last Modified: Tue, 2018-09-11 20:19:44
 * Last Modified By: Leo Hui <leohxj@gmail.com>
 *
 */

import * as React from 'react';
import ReactDOM from 'react-dom';

import './vendors';
import Layout from './layouts';

import './styles/index.pcss';

const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(<Layout />, MOUNT_NODE);
};

render();
