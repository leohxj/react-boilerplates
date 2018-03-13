/* @flow */
import classNames from 'classnames';
import React, { PureComponent } from 'react';

type Props = {
  name: string
};

type State = {
  name: string
};

export default class NotFound extends PureComponent<Props, State> {
  static defaultProps = {
    name: '404 not found :)'
  };

  state = {
    name: this.props.name
  };

  render() {
    return (
      <div className={classNames('404')}>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
