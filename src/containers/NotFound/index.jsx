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

  constructor(props: Props) {
    super(props);

    const { name } = this.props;

    this.state = {
      name
    };
  }

  render() {
    const { name } = this.state;

    return (
      <div className={classNames('404')}>
        <h1>{name}</h1>
      </div>
    );
  }
}
