/* @flow */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import React, { PureComponent } from 'react';
import { Button } from 'antd';

import counterActionCreators from '../../actions/counter';

import style from './index.pcss';

type Props = {
  value: string,
  actions: any
};

// $FlowFixMe, 通过 es7 stage1 decorators
@connect(
  (state) => ({ ...state.counter }),
  (dispatch) => ({ actions: bindActionCreators(counterActionCreators, dispatch) })
)
export default class Counter extends PureComponent<Props> {
  handlePlus = () => {
    this.props.actions.minus();
  };

  handleMinus = () => {
    this.props.actions.plus();
  };

  handleAsyncPlus = () => {
    this.props.actions.asyncPlus();
  };

  render() {
    return (
      <div className={classNames(style.counter)}>
        {this.props.value}
        <Button type="primary" onClick={this.handlePlus}>
          plus
        </Button>
        <Button onClick={this.handleAsyncPlus}>async Plus</Button>
        <Button type="primary" onClick={this.handleMinus}>
          minus
        </Button>
      </div>
    );
  }
}
