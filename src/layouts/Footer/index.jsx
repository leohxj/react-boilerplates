/* @flow */
import React, { PureComponent } from 'react'
import { Layout } from 'antd';

const { Footer:AntdFooter } = Layout;

export default class Footer extends PureComponent<{}> {
  render() {
    return (
      <AntdFooter style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
      </AntdFooter>
    )
  }
}


