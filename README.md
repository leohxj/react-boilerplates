# umd-library-starter
Support es6 module, postcss.

Write you code, export umd format library.

# 目录说明
- build: webpack 配置文件, 参考的 vue-cli 脚手架
- dist: 构建输出的目录
- example: demo 示例
- src: 源码目录
- `.babelrc`: babelrc 配置文件
- `.browserslistrc`: Browserslist 配置文件, cssnext, babel-preset-env 好多都是用这个
- `.editorconfig`: editorconfig 配置文件
- `eslintignore`: eslint 忽略列表
- `eslintrc.js`: eslint 配置文件, eslint 推荐使用 .js 文件维护配置, 可能是好维护注释吧.
- `.gitignore`: git 忽略列表
- `.postcssrc.js`: postcss 配置文件
- `.prettierrc`: Prettier 配置文件
- `.stylelintrc`: styleint 配置文件, 类似 eslint 的工具
- `.travis.yml`: TravisCI 配置文件
- `package.json`: 项目 package.json
- `package-lock.json`: npm5 带的版本锁定功能


# DevDependencies

## base
- cross-env: TODO: 区分环境，目前直接使用 webpack 命令后加参数  `--env` 参数。遇到兼容问题再替换吧。

## webpack
- webpack: 核心功能
- webpack-dev-server: dev 环境下使用，实现自动更新, 静态服务器等功能
- friendly-errors-webpack-plugin: 在开发环境下，提供更好的编译体验, 输出还是会保留 webpack 原始的报错
- clean-webpack-plugin: rimraf 的作用, 每次 build 情况下目录
- uglifyjs-webpack-plugin: 压缩 JS 代码, webpack.optimize.UglifyJSPlugin 也能用, 只不过 webpack 内置的 Uglifyjs 版本低一点

## babel
- babel-core: babel 核心功能
- babel-loader: 处理 ES6 代码，推荐安装 `yarn add babel-loader babel-core babel-preset-env webpack --dev`
- babel-preset-env: babel 的 preset
- babel-preset-stage-2: 接近稳定的标准 preset
- babel-runtime: polyfill 的一种方式
- babel-plugin-transform-runtime: runtime 期间的 polyfill, 自动加载需要 polyfill 的内容
- babel-polyfill: 如果开发的是应用级别, 使用 `babel-polyfill` 替代上面的 `runtime`.
  - 配合 babel-preset-env 设置 `useBuildIn: true` 可减少打包体积，安装在 dependencies 中


## eslint
- eslint: eslint 核心功能
- eslint-loader: webpack loader 处理代码是否符合 eslint 规范
- eslint-config-airbnb-base: airbnb 最佳实践，但是有些 rules 不是很人性化，可以自行关闭
- eslint-plugin-import: airbnb-base 依赖的 eslint plugin
- eslint-friendly-formatter: 精准定位出错附近的代码，显示出来
- eslint-plugin-prettier: 配合 prettier 格式化

## css
- postcss-loader: 处理 css 代码
- postcss-cssnext: postcss 的 preset 吧, 这里包含了 autoprefixer, 无需再次引入
- css-loader: 支持引用CSS文件(import 方式), 只负责读取 css 文件内容(当作字符处理), 可设置 `modules: true` 支持 css modules
- style-loader: 将解析的 css 内容，通过 style 标签插入页面 head 中, 所以一般 style-loader 作为最后处理
- extract-text-webpack-plugin: 负责将 css 输出成文件

### stylelint
- stylelint: 校验 css 代码
- stylelint-config-standard: 一些最佳实践的集合
- stylelint-webpack-plugin: stylelint 结合 webpack 的插件

#### 结合 postcss (*not recommend*)
- stylelint:
- postcss-reporter: 将 stylelint 的结果报告出来, 但是目前都是给的 warning, 推荐使用结合 webpack 的方式




## html
- html-webpack-plugin: 生成 html 文件，注入相关 webpack 生成的脚本

## format
- husky: git hook
- lint-staged: 检测 staged 的变化
- prettier: 格式化 JS, CSS 代码

# config
webpack 配置文件，建议进行拆分，便于管理和复用。

## 三份 config

# TBD
[] `npm run start` 使用 `webpack-dev-server` 有预览功能，但是 `npm run build` 没有，最好添加一个 `express` 处理
[x] `webpack-dev-server` 可以替换为 `express` + `webpack-dev-middleware` + `webpack-hot-middleware`
[] 如何一个工程配置多个主题
[] css, html 多加入 lint, 最好配合 perttier
[x] prettier 自己加规则, 尽量配合 eslint, lint-staged 先 prettier 再 eslint --fix
[] babel-preset-env 如何设置
[] 压缩处理, babel-preset-minify, uglify 添加 drop 参数
[] webpack 文件可以用 es6 去写.
[] .babelrc 如何区分 dev, prod 环境, 去加载 polyfill

# Tips
- 代码质量校验, 最好都结合 webpack 构建处理, 这样能避免一些 lint-staged 的处理 (比如 `eslint --fix`)
- broswerlist 怎么配是个问题, 站点性质的, 加上 `CN` 处理下吧
- sourcemap, 生产环境还是输出下吧, 有时候定位或配合监控平台会不错
