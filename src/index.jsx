/**
 * @file 入口文件
 * @description 是否有必要拆分 Layout, 值得商量， 我这么做是为了文件结构清晰
 *
 * @author Leo Hui <leohxj@gmail.com>
 *
 * Created Date: Tue, 2018-01-09 17:12:51
 *
 * Last Modified: Tue, 2018-06-26 16:55:36
 * Last Modified By: Leo Hui <leohxj@gmail.com>
 *
 * @flow
 */

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
