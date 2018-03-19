$(function(){
	vipspa.start({
        view: '#ui-view',
        errorTemplateId: '#error', // 可选
        router: {
            'home': {
                templateUrl: './pages/home/home.html',
                controller: './pages/home/home.js',
                styles:'./pages/home/home.css',
                animate:''
            },
            'register': {
                templateUrl: './pages/register/register.html',
                controller: './pages/register/register.js',
                styles:'./pages/register/register.css',
                animate:'right'
            },
            'transfer': {
                templateUrl: './pages/transfer/transfer.html',
                controller: './pages/transfer/transfer.js',
                styles:'./pages/transfer/transfer.css',
                animate:''
            },
            'metal': {
                templateUrl: './pages/metal/metal.html',
                controller: './pages/metal/metal.js',
                styles:'./pages/metal/metal.css',
                animate:''
            },
            'list': {
                templateUrl: './pages/list/list.html',
                controller: './pages/list/list.js',
                styles:'./pages/list/list.css',
                animate:''
            },
            'defaults': 'home' //默认路由
        }
    });

});
