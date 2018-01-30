/* @flow */
import classNames from 'classnames';
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

type Props = {
  date: string
}

type State = {
  date: string
}

export default class Clock extends PureComponent<Props, State> {
  timer: number;

  // 等价与 constructor 中 this.state = {}
  state = {
    date: this.props.date
  };

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date().toString()
    });
  }

  render() {
    return (
      <div className={classNames('foo')}>
        <h1>{this.state.date}</h1>
      </div>
    );
  }
}
