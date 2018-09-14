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
 * Last Modified: Fri, 2018-09-14 22:54:42
 * Last Modified By: Leo Hui <leohxj@gmail.com>
 *
 */
import React, { PureComponent } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import cn from 'classnames';
import { hot } from 'react-hot-loader';

import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';

import styles from './index.less';

const { Content, Sider } = Layout;

class Layouts extends PureComponent {
  state = {
    collapsed: false
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <Router basename="/admin">
        <Layout className={cn(styles.container)}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} theme="light">
            <div className="logo" />
            <Menu />
          </Sider>
          <Layout>
            <Header />
            <Content>
              <Main />
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default hot(module)(Layouts);
