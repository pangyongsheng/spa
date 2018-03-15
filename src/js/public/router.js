$(function(){
	vipspa.start({
        view: '#ui-view',
        errorTemplateId: '#error', // 可选
        router: {
            'home': {
                templateUrl: './modules/home/home.html',
                controller: './modules/home/home.js',
                styles:'./modules/home/home.css'
            },
            'register': {
                templateUrl: './modules/register/register.html',
                controller: './modules/register/register.js',
                styles:'./modules/register/register.css'
            },
            'transfer': {
                templateUrl: './modules/transfer/transfer.html',
                controller: './modules/transfer/transfer.js',
                styles:'./modules/transfer/transfer.css'
            },
            'metal': {
                templateUrl: './modules/metal/metal.html',
                controller: './modules/metal/metal.js',
                styles:'./modules/metal/metal.css'
            },
            'list': {
                templateUrl: './modules/list/list.html',
                controller: './modules/list/list.js',
                styles:'./modules/list/list.css'
            },
            'defaults': 'home' //默认路由
        }
    });

});