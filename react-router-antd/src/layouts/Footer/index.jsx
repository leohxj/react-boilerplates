import React, { PureComponent } from 'react';

import styles from './index.less';

export default class Footer extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <footer>Footer</footer>
      </div>
    );
  }
}
