/* @flow */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import React, { PureComponent } from 'react';
import { Button } from 'antd';

import counterActionCreators from '../../actions/counter';
import userActionCreators from '../../actions/user';

import Hello from '../../components/Hello';

type Props = {
  name: string,
  actions: any
};

// $FlowFixMe, 通过 es7 stage1 decorators
@connect(
  (state) => ({
    ...state.counter,
    ...state.user
  }),
  (dispatch) => ({
    actions: bindActionCreators(
      {
        ...counterActionCreators,
        ...userActionCreators
      },
      dispatch
    )
  })
)
export default class Home extends PureComponent<Props> {
  handleRename = () => {
    this.props.actions.rename();
  };

  handleAsyncPlus = () => {
    this.props.actions.asyncPlus();
  };

  render() {
    return (
      <div className={classNames('home')}>
        <Hello name={this.props.name} />

        {this.props.name}

        <Button type="primary" onClick={this.handleRename}>
          rename
        </Button>
        <Button onClick={this.handleAsyncPlus}>async Plus</Button>
      </div>
    );
  }
}
