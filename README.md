# umd-library-starter
Support es6 module, postcss.

Write you code, export umd format library.



# DevDependencies

## base
- cross-env: TBD, 区分环境，目前直接使用 webpack 命令后加参数  `--env` 参数。遇到兼容问题再替换吧。

## webpack
- webpack: 核心功能
- webpack-dev-server: dev 环境下使用，实现自动更新, 静态服务器等功能
- friendly-errors-webpack-plugin: 在开发环境下，提供更好的编译体验

## babel
- babel-core: babel 核心功能
- babel-loader: 处理 ES6 代码，推荐安装 `yarn add babel-loader babel-core babel-preset-env webpack --dev`
- babel-preset-env: babel 的 preset
- babel-preset-stage-2: 接近稳定的标准 preset
- babel-plugin-transform-runtime: runtime 期间的 polyfill
- babel-runtime: build 时候使用的
- babel-polyfill: 转换 ES6 的API, 配合 babel-preset-env 设置 `useBuildIn: true` 可减少打包体积，安装在 dependencies 中


## eslint
- eslint: eslint 核心功能
- eslint-loader: webpack loader 处理代码是否符合 eslint 规范
- eslint-config-airbnb-base: airbnb 最佳实践，但是有些 rules 不是很人性化，可以自行关闭
- eslint-plugin-import: airbnb-base 依赖的 eslint plugin
- eslint-friendly-formatter: 精准定位出错附近的代码，显示出来

## css
- postcss-loader: 处理 css 代码
- postcss-cssnext: postcss 的 preset 吧
- css-loader: 支持引用CSS文件(import 方式), 只负责读取 css 文件内容（当作字符处理)
- style-loader: 将解析的 css 内容，通过 style 标签插入页面 head 中, 所以一般 style-loader 作为最后处理
- extract-text-webpack-plugin: 负责将 css 输出成文件

## html
- html-webpack-plugin: 生成 html 文件，注入相关 webpack 生成的脚本


# config
webpack 配置文件，建议进行拆分，便于管理和复用。

# TBD
- `npm run start` 使用 `webpack-dev-server` 有预览功能，但是 `npm run build` 没有，最好添加一个 `express` 处理
- `webpack-dev-server` 可以替换为 `express` + `webpack-dev-middleware` + `webpack-hot-middleware`

