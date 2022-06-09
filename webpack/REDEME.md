## 收集问题

1、文件分析和热更新

2、文件指纹如何生成
  - Hash
  - ChunkHash
  - ContentHash

3、热更新与文件指纹无法一起使用

4、style-loader 与 minicssloader无法一起使用 因为前面那个是写在一个文件里面 后面是拆出来

5、代码压缩
  - HTML压缩 html-webpack-plugin
  - Css压缩 optimize-css-assets-webpack-plugin cssnano(webpack4)
  - Css压缩 css-minimizer-webpack-plugin cssnano(webpack5)
  - Js压缩 

6、为什么css要前缀
  - 需要兼容其他的浏览器 比如 -webkit-border-radius:10px 
  - 解决是 通过postcss（后置处理器） autoprefixer自动补全css3前缀
