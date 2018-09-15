/**
 * @file 导航栏
 * @description 导航栏目是对应的内部跳转链接
 *
 * @author Leo Hui <leohxj@gmail.com>
 *
 * Created Date: Fri, 2018-01-12 16:54:48
 *
 * Last Modified: Sat, 2018-09-15 10:40:34
 * Last Modified By: Leo Hui <leohxj@gmail.com>
 *
 */
import { Breadcrumb } from 'antd';
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getCurrentMenu } from '../../routes';

import styles from './index.less';

@withRouter
export default class Header extends PureComponent {
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
      <div className={styles.container}>
        <Breadcrumb>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>{currnetMenu.key}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
