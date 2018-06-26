/**
 * @file 入口文件
 * @description 是否有必要拆分 Layout, 值得商量， 我这么做是为了文件结构清晰
 *
 * @author Leo Hui <leohxj@gmail.com>
 *
 * Created Date: Tue, 2018-01-09 17:12:51
 *
 * Last Modified: Tue, 2018-06-26 22:53:37
 * Last Modified By: Leo Hui <leohxj@gmail.com>
 *
 * @flow
 */

import * as React from 'react';
import ReactDOM from 'react-dom';

import Layout from './layouts';

import './styles/index.pcss';

const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(<Layout />, (MOUNT_NODE: any));
};

render();
