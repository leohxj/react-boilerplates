import classNames from 'classnames';
import React, { PureComponent } from 'react';

import Hello from '../../components/Hello';

export default class HomePage extends PureComponent<{}> {
  handleRename = () => {};

  handleAsyncPlus = () => {};

  render() {
    return (
      <div className={classNames('home')}>
        <Hello />
      </div>
    );
  }
}
