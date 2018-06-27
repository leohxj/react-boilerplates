import classNames from 'classnames';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Clock extends PureComponent {
  static propTypes = {
    date: PropTypes.string
  };

  static defaultProps = {
    date: ''
  };

  constructor(props) {
    super(props);

    const { date } = this.props;

    this.state = {
      date
    };
  }

  componentDidMount() {
    this.timer = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date().toString()
    });
  }

  render() {
    const { date } = this.state;
    return (
      <div className={classNames('foo')}>
        <h1>{date}</h1>
      </div>
    );
  }
}
