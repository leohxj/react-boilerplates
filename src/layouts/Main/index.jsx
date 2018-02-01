/**
 * @file 维护路由规则
 * @author Leo Hui <leohxj@gmail.com>
 *
 * Created Date: Fri, 2018-01-12 16:59:41
 *
 * Last Modified: Thu, 2018-02-01 21:36:09
 * Last Modified By: 寻镜 <leohxj@gmail.com>
 *
 */


/* @flow */
import React, { PureComponent } from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';

import Home from '../../containers/HomePage';
import Clock from '../../containers/ClockPage';
import NotFound from '../../containers/NotFound';


// $FlowFixMe, 通过 es7 stage1 decorators
@withRouter
export default class Main extends PureComponent<{}> {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/clock" component={Clock} />
          {/* 兜底的路由 */}
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
