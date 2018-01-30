/**
 * @file 维护路由规则
 * @author 寻镜 <xuejie.hxj@alibaba-inc.com>
 *
 * Created Date: Fri, 2018-01-12 16:59:41
 *
 * Last Modified: Mon, 2018-01-15 13:51:31
 * Last Modified By: 寻镜 <xuejie.hxj@alibaba-inc.com>
 *
 * Copyright (c) 2018 Alibaba Group Holding Ltd.
 */


/* @flow */
import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Layout } from 'antd';

import Home from '../../containers/Home';
import Counter from '../../containers/Counter';
import NotFound from '../../components/NotFound';

const { Content } = Layout;

// $FlowFixMe, 通过 es7 stage1 decorators
@withRouter
export default class Main extends PureComponent<{}> {
  render() {
    return (
      <Content>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          {/* 兜底的路由 */}
          <Route component={NotFound} />
        </Switch>
      </Content>
    );
  }
}
