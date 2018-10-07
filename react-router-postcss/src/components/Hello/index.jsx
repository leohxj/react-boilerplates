import classNames from 'classnames';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Hello extends PureComponent {
  static propTypes = {
    name: PropTypes.string
  };

  // 如果有 defaultProps Props 上不需要标注么...?
  static defaultProps = {
    name: 'Hello Router'
  };

  constructor(props) {
    super(props);

    const { name } = this.props;

    this.state = {
      name
    };
  }

  render() {
    const { name } = this.state;

    return (
      <div className={classNames('c-hello')}>
        <h1>{name}</h1>
      </div>
    );
  }
}
