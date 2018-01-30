/**
 * @file 页面根节点, redux 放在应用的入口去注册. Router 相关初始化放在这里
 *       这个管理应用整体的结构, 理论上应用 Header, Footer 都是固定的吧
 * @author Leo Hui <leohxj@gmail.com>
 *
 * Created Date: Fri, 2018-01-12 16:43:13
 *
 * Last Modified: Fri, 2018-01-12 23:37:55
 * Last Modified By: Leo Hui <leohxj@gmail.com>
 *
 */

/* @flow */
import React, { PureComponent } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Layout } from 'antd';

import history from '../history';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class Layouts extends PureComponent<{}> {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Layout className="page-wrapper">
          <Header />
          <Main />
          <Footer />
        </Layout>
      </ConnectedRouter>
    );
  }
}
