/* @flow */
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
