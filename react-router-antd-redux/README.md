# react-router-antd
基于 ant-design, react-route, redux.

redux 和 redux-router 结合的时候，不推荐使用 react-router-redux 了，而是使用 `withRouter`。


Redux users: The [react-router-redux](https://github.com/ReactTraining/react-router/tree/5345a820818c8d43ac923558670538a479ac2234/packages/react-router-redux) package is now deprecated. See [Redux Integration](https://reacttraining.com/react-router/web/guides/redux-integration) for a better approach.


## Redux 使用说明
基础安装的库:
- redux: 创建 store
- react-redux: 使用 connect 等方法
- redux-actions: 简化 actions 书写
- redux-promise: 提供异步中间件
