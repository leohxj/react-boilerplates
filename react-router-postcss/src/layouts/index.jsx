/**
 * @file 页面根节点, 文件夹为 layouts， 寓意页面基本结构
 * @description
 * 完成 Router， ReactHotLoader 的注册
 * Redux 的注册， 放在也Main 组件中 （为什么没有放在这一层？？）
 * 这个管理应用整体的结构, 理论上应用 Header, Footer 都是固定的
 *
 * @author Leo Hui <leohxj@gmail.com>

 * Created Date: Fri, 2018-01-12 16:43:13
 *
 * Last Modified: Wed, 2018-06-27 23:02:49
 * Last Modified By: Leo Hui <leohxj@gmail.com>
 *
 */

import React, { PureComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import cn from 'classnames';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import styles from './index.pcss';

class Layouts extends PureComponent {
  render() {
    return (
      <Router>
        <div className={cn(styles.pageWrapper)}>
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default hot(module)(Layouts);
