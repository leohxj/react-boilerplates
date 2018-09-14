import { Menu as AntdMenu } from 'antd';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

import { sitemap, getCurrentMenu } from '../../routes';

@withRouter
export default class Menu extends PureComponent {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string
    }).isRequired
  };

  render() {
    const {
      location: { pathname }
    } = this.props;

    const currnetMenu = getCurrentMenu(pathname) || {};

    return (
      <AntdMenu selectedKeys={[currnetMenu.key]} mode="inline">
        {sitemap.map((el) => (
          <AntdMenu.Item key={el.key}>
            <NavLink to={el.path}>{el.title}</NavLink>
          </AntdMenu.Item>
        ))}
      </AntdMenu>
    );
  }
}
