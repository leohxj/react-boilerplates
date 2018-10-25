import cn from 'classnames';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import { demoActionCreators } from '../../redux/modules/demo';

import Card from '../../components/Card';

@connect(
  (state) => ({ ...state }),
  (dispatch) => ({
    actions: bindActionCreators(
      {
        ...demoActionCreators
      },
      dispatch
    )
  })
)
export default class Overview extends PureComponent {
  static propTypes = {
    demoReduxStore: PropTypes.shape({}).isRequired,
    actions: PropTypes.shape({}).isRequired
  };

  componentDidMount = () => {
    const {
      actions: { asyncTest }
    } = this.props;
    asyncTest({ name: 'asyncTest' });
  };

  handleClick = () => {
    const {
      actions: { syncTest }
    } = this.props;

    syncTest();
  };

  render() {
    const { demoReduxStore } = this.props;

    return (
      <div className={cn('overview')}>
        <Card name="overview" />
        <Button onClick={this.handleClick}>Click</Button>
        <h1>{demoReduxStore.name}</h1>
      </div>
    );
  }
}
