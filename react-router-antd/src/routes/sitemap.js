import Loadable from 'react-loadable';

import Loading from '../layouts/Loading';

function LoadableRoute(loader) {
  return Loadable({
    loader,
    loading: Loading
  });
}

export default [
  {
    key: 'overview',
    path: '/overview',
    title: '总览',
    sub: [],
    routeConfig: {
      path: '/overview',
      exact: true,
      component: LoadableRoute(() =>
        import(/* webpackChunkName: "route.overview" */ '../containers/Overview')
      )
    }
  },
  {
    key: 'dashboard',
    path: '/dashboard',
    title: '看板',
    sub: [],
    routeConfig: {
      path: '/dashboard',
      exact: true,
      component: LoadableRoute(() =>
        import(/* webpackChunkName: "route.dashboard" */ '../containers/Dashboard')
      )
    }
  },
  {
    key: 'setting',
    path: '/setting',
    title: '设置',
    sub: [],
    routeConfig: {
      path: '/setting',
      exact: true,
      component: LoadableRoute(() =>
        import(/* webpackChunkName: "route.setting" */ '../containers/Setting')
      )
    }
  }
];
