- 不需要加 flow, 感觉写业务代码时候挺繁琐的。而且有些插件配置很麻烦。



## css
- postcss-loader 由于可以用来处理 autoprefixer, 所以是现在项目必备。
- 如果借助框架，比如如果使用 antD 的话，想要自定义主题的话， 就使用框架提供的预处理语言。比如 less
- 其他情况， 可以使用 postcss, 自己增加插件, 这样的话， 工程也不需要 less-loader
  - 引入 normalize css, 维持样式一致
- 引入 less 之类的预处理语言的话，如果使用了 css-module， webpack 需要设置 include 处理下 node_modules 中的文件
- 构建的时候，如果有多主题， 也可参考 antDesign 方式
