/* @flow */
import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header:AntdHeader } = Layout;

export default class Header extends PureComponent<{}> {
  render() {
    return (
      <AntdHeader>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/counter">Counter</NavLink>
          </Menu.Item>
        </Menu>
      </AntdHeader>
    );
  }
}
