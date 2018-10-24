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
 * Last Modified: Sat, 2018-09-15 10:40:57
 * Last Modified By: Leo Hui <leohxj@gmail.com>
 *
 */
import { Layout } from 'antd';
import React, { PureComponent } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import cn from 'classnames';

import Header from './Header';
import SideMenu from './SideMenu';
import Main from './Main';
import Footer from './Footer';

import styles from './index.less';

const { Content } = Layout;

class Layouts extends PureComponent {
  state = {
    collapsed: false
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;

    // Layout 布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。
    return (
      <Router basename="/admin">
        <Layout className={cn(styles.container)}>
          <SideMenu collapsed={collapsed} onCollapse={this.onCollapse} />
          <Layout className={cn(styles.rightPanel)}>
            <Header />
            <Content className={styles.rightContent}>
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
