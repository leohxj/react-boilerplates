import cn from 'classnames';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Card extends PureComponent {
  static propTypes = {
    name: PropTypes.string
  };

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
      <div className={cn('card')}>
        <h1>{name}</h1>
      </div>
    );
  }
}
