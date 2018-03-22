$(function(){
    //轮播图
    $('#J_Slider').slider({
        speed: 200,
        autoplay: 2000,
        lazyLoad: true
    });
    //扫码
    $(document).on('click','.nav-qs',function(){
        dialog.notify('提交成功！', 5000, function(){
        });
    })
    //菜单
    $(document).on('click','.nav-me',function(){
        dialog.notify('提交成功！', 5000, function(){
        });
    })
    //查看详情
    $(document).on('click','.list-item',function(){
        var name=$(this).find('.list-title').html();
        window.location.hash = router.stringify('detail',{animate:'right',title:name});
    })

})
