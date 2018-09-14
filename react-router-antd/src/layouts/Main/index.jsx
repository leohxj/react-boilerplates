/**
 * @file 维护路由规则
 * @author Leo Hui <leohxj@gmail.com>
 *
 * Created Date: Fri, 2018-01-12 16:59:41
 *
 * Last Modified: Sat, 2018-09-08 17:34:22
 * Last Modified By: 寻镜 <xuejie.hxj@alibaba-inc.com>
 *
 */
import React, { PureComponent } from 'react';

import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import { sitemap } from '../../routes';
import NotFound from '../../containers/NotFound';

@withRouter
export default class Main extends PureComponent {
  render() {
    return (
      <div>
        <Switch>
          <Redirect exact from="/" to="/overview" />
          {sitemap.map(({ routeConfig }) => (
            <Route key={routeConfig.path} {...routeConfig} />
          ))}
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}
