var path = require('path');

//开启浏览器监听模式
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

//配置文件
var config = {
    entry: {

    },
    output: {

    },
    module: {

    },
    devServer: {
        contentBase: './src/',
        port: 8088,
        disableHostCheck: true,
        public: '192.168.89.243',
        host:'0.0.0.0'
    },
    plugins: [
        new OpenBrowserPlugin({
            url: 'http://localhost:8088'
        })
    ]
};




module.exports = config;
