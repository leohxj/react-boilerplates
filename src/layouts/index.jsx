/**
 * @file 页面根节点
 * @description
 * redux 放在应用的入口去注册. Router 相关初始化放在这里
 * 这个管理应用整体的结构, 理论上应用 Header, Footer 都是固定的吧
 *
 * @author Leo Hui <leohxj@gmail.com>

 * Created Date: Fri, 2018-01-12 16:43:13
 *
 * Last Modified: Tue, 2018-06-26 16:44:24
 * Last Modified By: Leo Hui <leohxj@gmail.com>
 *
 * @flow
 */

import React, { PureComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class Layouts extends PureComponent<{}> {
  render() {
    return (
      <Router>
        <div className="page-wrapper">
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default hot(module)(Layouts);
