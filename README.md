## vue-music

vue技术栈打造的仿原生音乐APP（data from QQ-Music）

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 目录结构

```tree
.
├── .babelrc        babel配置
├── .editorconfig   editor配置
├── .eslintignore   eslint校验忽略项
├── .eslintrc.js    eslint规则配置
├── .gitignore      git忽略项
├── .postcssrc.js   postcss平台配置
├── README.md
├── build           webpack打包
├── config          webpack配置
├── index.html
├── package-lock.json
├── package.json    工程依赖包
├── src
│   ├── App.vue     入口app.vue
│   ├── api         后端请求相关代码
│   ├── common      通用的公用资源
│   │   ├── fonts
│   │   ├── images
│   │   ├── js
│   │   └── stylus
│   ├── components  工程组件
│   ├── main.js     入口js文件
│   ├── router      路由配置
│   └── store       vuex相关代码
└── static          静态资源
```