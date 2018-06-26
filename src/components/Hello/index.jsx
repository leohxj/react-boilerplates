/* @flow */
import classNames from 'classnames';
import React, { PureComponent } from 'react';

type Props = {
  name: string
};

type State = {
  name: string
};

export default class Hello extends PureComponent<Props, State> {
  // 如果有 defaultProps Props 上不需要标注么...?
  static defaultProps = {
    name: 'Hello Router'
  };

  constructor(props: Props) {
    super(props);

    const { name } = this.props;

    this.state = {
      name
    };
  }

  // 如果组件有对 props => state 的操作, 应该加上这个声明周期
  componentWillReceiveProps = (nextProps: Object) => {
    this.setState((prevState, props) => ({
      ...prevState,
      ...props
    }));
  };

  render() {
    const { name } = this.state;

    return (
      <div className={classNames('c-hello')}>
        <h1>{name}</h1>
      </div>
    );
  }
}
