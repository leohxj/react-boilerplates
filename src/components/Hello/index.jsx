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

  state = {
    name: this.props.name
  };

  // 如果组件有对 props => state 的操作, 应该加上这个声明周期
  componentWillReceiveProps = (nextProps: Object) => {
    this.setState({
      ...this.state,
      ...nextProps
    })
  }

  render() {
    return (
      <div className={classNames('c-hello')}>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
