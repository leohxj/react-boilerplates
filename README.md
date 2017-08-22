# umd-library-starter
Support es6 module, postcss.

Write you code, export umd format library.


# Package.json

## DevDependencies

## webpack
- webpack: 核心功能
- webpack-dev-server: dev 环境下使用，实现自动更新, 静态服务器等功能

### babel
- babel-core: babel 核心功能
- babel-loader: 处理 ES6 代码，推荐安装 `yarn add babel-loader babel-core babel-preset-env webpack --dev`
- babel-preset-env: babel 的 preset

### eslint
- eslint: eslint 核心功能
- eslint-loader: webpack loader 处理代码是否符合 eslint 规范
- eslint-config-airbnb-base: airbnb 最佳实践，但是有些 rules 不是很人性化，可以自行关闭
- eslint-plugin-import: airbnb-base 依赖的 eslint plugin

### css
- postcss-loader: 处理 css 代码
- postcss-cssnext: postcss 的 preset 吧
- css-loader: 支持引用CSS文件(import 方式), 只负责读取 css 文件内容（当作字符处理)
- style-loader: 将解析的 css 内容，通过 style 标签插入页面 head 中, 所以一般 style-loader 作为最后处理
- extract-text-webpack-plugin: 负责将 css 输出成文件

### html
- html-webpack-plugin: 生成 html 文件，注入相关 webpack 生成的脚本
