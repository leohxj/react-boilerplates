/* @flow */
import classNames from 'classnames';
import React, { PureComponent } from 'react';

import Clock from '../../components/Clock';

type Props = {};

export default class ClockPage extends PureComponent<Props> {
  handleRename = () => {};

  handleAsyncPlus = () => {};

  render() {
    return (
      <div className={classNames('home')}>
        <Clock date="xxx" />

        <button type="button" onClick={this.handleRename}>
          rename
        </button>
        <button type="button" onClick={this.handleAsyncPlus}>
          async Plus
        </button>
      </div>
    );
  }
}
