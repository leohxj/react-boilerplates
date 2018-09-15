import React, { PureComponent } from 'react';
import { Layout, Menu } from 'antd';
import pathToRegexp from 'path-to-regexp';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

import { sitemap, getCurrentMenu } from '../../routes';

import styles from './index.less';

import logo from '../../assets/snapshoot.jpg';

const { Sider } = Layout;

/**
 * Recursively flatten the data
 * [{path:string},{path:string}] => {path,path2}
 * @param  menu
 */
export const getFlatMenuKeys = (menu) =>
  menu.reduce((keys, item) => {
    keys.push(item.path);
    if (item.children) {
      return keys.concat(getFlatMenuKeys(item.children));
    }
    return keys;
  }, []);

/**
 * Find all matched menu keys based on paths
 * @param  flatMenuKeys: [/abc, /abc/:id, /abc/:id/info]
 * @param  paths: [/abc, /abc/11, /abc/11/info]
 */
export const getMenuMatchKeys = (flatMenuKeys, paths) =>
  paths.reduce(
    (matchKeys, path) =>
      matchKeys.concat(flatMenuKeys.filter((item) => pathToRegexp(item).test(path))),
    []
  );

@withRouter
export default class SiderMenu extends PureComponent {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired,
    onCollapse: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string
    }).isRequired
  };

  render() {
    const { collapsed, onCollapse } = this.props;

    const {
      location: { pathname }
    } = this.props;

    const currnetMenu = getCurrentMenu(pathname) || {};

    return (
      <Sider
        className={styles.container}
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        width={200}
      >
        <div className={styles.logo} id="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
            <h1>Ant Home</h1>
          </NavLink>
        </div>
        <Menu theme="dark" selectedKeys={[currnetMenu.key]} mode="inline">
          {sitemap.map((el) => (
            <Menu.Item key={el.key}>
              <NavLink to={el.path}>{el.title}</NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    );
  }
}
