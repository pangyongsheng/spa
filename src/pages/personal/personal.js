$(function(){
    var dialog = window.YDUI.dialog;
    $(document).on('click','#sub',function(){
        dialog.notify('提交成功！', 5000, function(){
        });
    })
})
