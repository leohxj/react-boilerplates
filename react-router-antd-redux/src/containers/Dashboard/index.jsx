import cn from 'classnames';
import React, { PureComponent } from 'react';

import Card from '../../components/Card';

export default class Dashboard extends PureComponent {
  render() {
    return (
      <div className={cn('dashboard')}>
        <Card name="Dashboard" />
      </div>
    );
  }
}
