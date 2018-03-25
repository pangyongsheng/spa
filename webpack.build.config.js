const path = require('path');
const glob = require('glob');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const enterFile={};     //存放入口文件

enterFile.vendors=
    ['./src/js/libs/zepto.js',
    './src/js/libs/route.js',
    './src/router.js',
     //'./src/js/libs/ydui.flexible.js',
     //'./src/js/libs/ydui.js',
    './src/js/public/common.js'
];

//公共js
// const jsPath=glob.sync('./src/js/**/*.js');
// jsPath.forEach(function (files) {
//     enterFile.vendors.push(files);
// })

//公共css
const cssPath=glob.sync('./src/css/**/*.css');
cssPath.forEach(function (files) {
    enterFile.vendors.push(files);
})
//page下资源
const pagePath=glob.sync('./src/pages/*');

pagePath.forEach(function (files) {
    let arr=[];
    arr.push(path.resolve(__dirname,glob.sync(files+'/**/*.js').toString()));
    arr.push(path.resolve(__dirname,glob.sync(files+'/**/*.css').toString()));
    enterFile[path.basename(files)]= arr;
    //console.log(enterFile);
})

const config={
    entry: enterFile,
    output: {
        path: path.join(__dirname, 'dist'),
        //publicPath: "../",
        filename: 'pages/[name]/[name].js',
        //chunkFilename: 'js/[id].chunk.js'
    },
    module: {
        loaders: [ //加载器
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css!autoprefixer")
            },{
                test: /\.html$/,
                loader: "html"
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?name=css/fonts/[name].[ext]'
            }, {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8192&name=imgs/[name].[ext]'
                // 内联 base64 URLs, 限定 <=8k 的图片, 其他的用 URL
            }
        ]

    },
     plugins: [
         new ExtractTextPlugin('pages/[name]/[name].css', {allChunks: true}),
     ]
}

//页面文件打包
var pages = getEntry('src/**/*.html', 'src/');

for (var pathname in pages)
{
    //路径转化
    var temPath = pages[pathname].replace(/\\/, '/');
    var pName = pathname.replace(/\\/g, '/');

    //同步方式读取文件，清空ide中默认<script>标签
    var dataHtml = fs.readFileSync('./src/'+pName+'.html', 'utf-8');
    var reg=/<script[^>]*><\/script>/gi;
    var tos=dataHtml.replace(reg,'');

    var conf = {
        filename: pName + '.html',      //生成的html存放路径，相对于 path
        templateContent: tos,           //html模板资源
        //hash : true,                    //为静态资源生成hash值
        minify:{
            //romoveComments:false,        //移除HTML中的注释
             //collapseWhitespace:false    //删除空白符与换行符
        },
        inject: false                     //
    };

    //index
    if (pName.indexOf('index') != -1) {
        conf.chunks = ['vendors'];
        conf.inject= true;
        config.plugins.push(new HtmlWebpackPlugin(conf));
    }
    //pagess
    else {
        config.plugins.push(new HtmlWebpackPlugin(conf));
    }

}
//



//获取页面
function getEntry(globPath, pathDir) {
    var files = glob.sync(globPath);
    var entries = {},
        entry, dirname, basename, pathname, extname;

    for (var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);              //获取指定路径的文件夹的路径
        extname = path.extname(entry);              //返回指定路径的后缀名
        basename = path.basename(entry, extname);   //返回指定路径中的最后一部分(不包含后缀)
        pathname = path.join(dirname, basename);
        pathname = pathDir ? pathname.replace(path.normalize(pathDir), '') : pathname;
        entries[pathname] = './' + entry;
    }

    return entries;
}

module.exports = config;
