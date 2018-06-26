# 文件说明

## Tree
生成的命令: `alder --exclude=".git|bower_components|node_modules" --depth=2 > tree.md`


```
 .
 ├── README.md
 ├── README.zh_CN.md
 ├── __test__
 │   └── index.test.js
 ├── config
 ├── dist
 │   ├── bundle.css
 │   ├── bundle.css.map
 │   ├── bundle.js
 │   ├── bundle.js.map
 │   ├── index.html
 │   ├── vendor.js
 │   └── vendor.js.map
 ├── docs
 │   ├── FILE_INSTRUCTION.md
 │   └── ROADMAP.md
 ├── example
 │   └── index.html
 ├── flow-typed
 │   └── npm
 ├── package.json
 ├── scripts
 │   ├── utils.js
 │   ├── webpack.config.base.babel.js
 │   ├── webpack.config.dev.babel.js
 │   └── webpack.config.prod.babel.js
 ├── src
 │   ├── actions
 │   ├── api
 │   ├── components
 │   ├── containers
 │   ├── history
 │   ├── index.html
 │   ├── index.jsx
 │   ├── reducers
 │   ├── store
 │   ├── theme
 │   └── vendors
 ├── tree.md
 └── yarn.lock
```


## Tips
- 如果应用有统一的头尾, 只是内部发生变化, 那么可以保留 layouts 目录, 否则可以建立 routes 目录

- eslint 使用 airbnb 的话, 需要 peerDependencies 安装, 才能让 eslint 在项目级别查找到依赖.
  - 使用 airbnb 的配置的话, 不需要声明 plugin: ['react'], 因为 airbnb 已经内置声明了
  - prettier 的话, 还是要声明下
