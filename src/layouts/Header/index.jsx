/**
 * @file 导航栏
 * @description 导航栏目是对应的内部跳转链接
 *
 * @author Leo Hui <leohxj@gmail.com>
 *
 * Created Date: Fri, 2018-01-12 16:54:48
 *
 * Last Modified: Tue, 2018-06-26 17:12:20
 * Last Modified By: Leo Hui <leohxj@gmail.com>
 *
 * @flow
 */

import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends PureComponent<{}> {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/clock">Clock</NavLink>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}
