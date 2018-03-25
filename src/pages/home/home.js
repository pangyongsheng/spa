$(function(){
    //轮播图
    $('#J_Slider').slider({
        speed: 200,
        autoplay: 2000,
        lazyLoad: true
    });
    //扫码
    var dialog = window.YDUI.dialog;

    $(document).on('click','.nav-qs',function(){
        dialog.notify('扫码！', 1000, function(){
        });
    })
    //菜单
    $(document).on('click','.nav-me',function(){
        dialog.notify('菜单', 1000, function(){
        });
    })
    //
    $(document).on('click','.qq',function(){
         dialog.toast('820568018', 'success', 500);
    })
    $(document).on('click','.wb',function(){
         dialog.toast('没有微博', 'success', 500);
    })
    $(document).on('click','.wx',function(){
         dialog.toast('pangyongsheng', 'success', 500);
    })
    //查看详情
    $(document).on('click','.list-item',function(){
        var name=$(this).find('.list-title').html();
        window.location.hash = router.stringify('detail',{animate:'right',title:name});
    })

})
