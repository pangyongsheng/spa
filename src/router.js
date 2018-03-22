$(function(){
	router.start({
        view: '#ui-view',
        errorTemplateId: '#error', // 可选
        router: {
            'home': {
                templateUrl: './pages/home/home.html',
                controller: './pages/home/home.js',
                styles:'./pages/home/home.css',
                animate:''
            },
			'list': {
                templateUrl: './pages/list/list.html',
                controller: './pages/list/list.js',
                styles:'./pages/list/list.css',
                animate:''
            },
			'personal': {
                templateUrl: './pages/personal/personal.html',
                controller: './pages/personal/personal.js',
                styles:'./pages/personal/personal.css',
                animate:''
            },
			'detail':{
				templateUrl: './pages/detail/detail.html',
                controller: './pages/detail/detail.js',
                styles:'./pages/detail/detail.css',
                animate:'right'
			},
            'defaults': 'home' //默认路由
        }
    });

});
