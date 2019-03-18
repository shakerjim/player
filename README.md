# omsmanage

> 非码商务后台搭建

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

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 开发依赖工具

* Vue-cli （脚手架）
* Webpack （项目资源管理工具）
* vscode （Idea）
* Node (运行环境)
* ESlint （语法监测，使项目形成一定的规范和标准，有助于后期维护和修改）

## 技术栈

* vue 2.x           框架
* iview 2.0           UI框架
* vue-router        路由
* vuex              状态管理
* axios             Http请求（promise）
* easy-mock         模拟服务端数据
* less              页面样式

## 目录结构

```
|-- build                                  // webpack配置文件
|-- config                                 // 项目打包路径
|-- static                                 // 静态文件目录
|-- src                                    // 源码目录
|   |-- api                                // 所有Api请求
|   |-- assets                             // 主题 CSS、字体等静态资源
|   |-- components                         // 公用组件库
|   |-- config                             // 项目配置文件
|   |-- libs                               // 工具库
|   |-- router                             // 路由
|   |-- store                              // 全局store管理
|   |-- styles                             // 全局样式
|   |-- views                              // 页面视图
|       |--layout                          // 框架基本布局
|   |-- App.vue                            // 页面入口
|   |-- main.js                            // 程序入口
|-- .babelrc                               // ES6语法编译配置
|-- .editorconfig                          // 代码编写规格
|-- .gitignore                             // push忽略文件
|-- index.html                             // 入口html页面
|-- package.json                           // 依赖及配置
|-- README.md                              // 简介
```
## 启动关闭Loading框
* 启动： this.$store.commit('SHOWLOADING');
* 关闭： this.$store.commit('HIDELOADING');


## Markdown快速入门

**Markdown Tag 与 Html对应关系**

> Markdown 标签结束，结尾需要以一个空格与内容分开（除了对字体加粗的`*`）
* # => H1 ## => H2 ... 
* `>` => p 块状元素,只会用于警示、提示、注意
* `*` => ul>li 
* [标题](url) =>  a
* ![标题](url) => img
* ``` ... ``` => pre
* **内容** => b 

##错误提示

* this.$Message.info(config)
* this.$Message.success(config)
* this.$Message.warning(config)
* this.$Message.error(config)
* this.$Message.loading(config)
