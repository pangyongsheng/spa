$(function(){
    //获取传参
    var obj = router.parse();
    console.log(obj);
    $("#title").html(obj.param.title);
    //返回
    $(document).on('click','.navback',function(){
        window.location.hash = router.stringify('home',{animate:'left'});
    })
    //轮播图
    $('#J_Slider').slider({
        speed: 200,
        autoplay: 2000,
        lazyLoad: true
    });
    //tab页
    var $tab = $('#J_Tab');
    $tab.tab({
        nav: '.tab-nav-item',
        panel: '.tab-panel-item',
        activeClass: 'tab-active'
    });
    $tab.find('.tab-nav-item').on('open.ydui.tab', function (e) {
        console.log('索引：%s - [%s]正在打开', e.index, $(this).text());
    });
    $tab.find('.tab-nav-item').on('opened.ydui.tab', function (e) {
        console.log('索引：%s - [%s]已经打开了', e.index, $(this).text());
    });

})
