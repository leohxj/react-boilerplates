import cn from 'classnames';
import React, { PureComponent } from 'react';

import Card from '../../components/Card';

export default class Setting extends PureComponent {
  render() {
    return (
      <div className={cn('setting')}>
        <Card name="setting" />
      </div>
    );
  }
}
