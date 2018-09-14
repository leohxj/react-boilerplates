import cn from 'classnames';
import React, { PureComponent } from 'react';

import Card from '../../components/Card';

export default class Overview extends PureComponent {
  render() {
    return (
      <div className={cn('overview')}>
        <Card name="overview" />
      </div>
    );
  }
}
