# 基于Zepto(jquery)的单页面引用

一个基于zepto或jquery的简版单页面应用项目，可用于做一些交互逻辑简单的单页面应用，这里是一个dome,可根据实际情况进行修改

## 使用

    $ git clone https://github.com/pangyongsheng/spa.git

    $ npm install

    $ npm run dev

## 目录结构
* |-- src
* |     |--index.html             首页（空页面，通过路由加载其他页面）
* |     |--router.js              路由
* |     |--css                    公共css文件
* |     |   |--libs                   第三方ui库
* |     |   |--public                 公共样式
* |     |--js                     公共js文件
* |     |   |--libs                   第三方js库、插件
* |     |   |--public                 公共方法
* |     |--pages                  页面
* |          |--home              home页文件
* |          |   |--home.html         html
* |          |   |--home.js           js
* |          |   |--home.css          css
* |          |
* |          |--list              list页文件
* |               |--
* |               |--
* |               |--
* |          |...                 其他页面
* |
* |--packjson                     
* |--webpack.config.js            开发模式配置文件：仅使用webpack-server启服务，不打包    
* |--webpack.bulid.config.js      bulid配置文件，执行 npm run bulid 打包（不推荐使用）
