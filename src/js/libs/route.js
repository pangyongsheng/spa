(function(){
    //创建R对象
    function R(){
    }
    R.prototype.start = function(config){
        var _this = this;
        _this.routerMap = config.router;                     //路由配置
        _this.mainView = config.view;                        //目标div
        _this.errorTemplateId = config.errorTemplateId;      //错误id
        startRouter();                                      //初始化
        window.onhashchange = function(){                   //监听路由变化
            startRouter();
        };
    };
    var messageStack = [];

    R.prototype.getMessage = function(id){
        var msg = {};
        $.each(messageStack,function(i,e){
            if(e.id===id){
                msg = e;
            }
        });
        return msg;
    };
    R.prototype.setMessage = function(obj){
        var _obj = JSON.parse(JSON.stringify(obj));
        $.each(messageStack,function(i,e){
            if(e.id===_obj.id){
                e = _obj;
                return false;
            }
        });
        messageStack.push(_obj);
    };
    R.prototype.delMessage = function(id){
        if(typeof id==='undefined'){
            return false;
        }
        var index = 0;
        $.each(messageStack,function(i,e){
            if(e.id===id){
                index = i;
            }
        });
        $.each(messageStack,function(i,e){
            if(i>index){
                messageStack[i-1] = e;
            }
        });
    };
    R.prototype.clearMessage = function(id){
        var index = 0;
        messageStack = [];
    };

    R.prototype.stringify = function(routerUrl,paramObj){
        var paramStr='' ,hash;
        for(var i in  paramObj){
            paramStr += i + '=' + encodeURIComponent(paramObj[i]) + '&';
        }
        if(paramStr === ''){
            hash = routerUrl;
        }
        else{
            paramStr = paramStr.substring(0,paramStr.length-1);
            hash = routerUrl + '?' + paramStr;
        }
        return hash;
    };
    R.prototype.parse = function(routerHash){
        var hash = typeof routerHash ==='undefined'?location.hash:routerHash;
        var obj = {
            url:'',
            param: {}
        };
        var param = {},url='';
        var pIndex = hash.indexOf('?');
        if(hash===''){
            return obj;
        }

        if(pIndex>-1){
            url = hash.substring(1,pIndex);
            var paramStr = hash.substring(pIndex+1);
            var paramArr = paramStr.split('&');

            $.each(paramArr,function(i,e){
                var item = e.split('='),
                    key,
                    val;
                key = item[0];
                val = item[1];
                if(key!==''){
                    param[key] = decodeURIComponent(val);
                }


            });
        }
        else{
            url = hash.substring(1);
            param = {};
        }
        return {
            url:url,
            param: param
        };
    };
    function routerAction (routeObj){

        var routerItem = router.routerMap[routeObj.url];

        if(typeof routerItem==='undefined'){
            var defaultsRoute = router.routerMap.defaults;
            routerItem = router.routerMap[defaultsRoute];
            location.hash = defaultsRoute;
            return false;
        }

        var routerAnimate=routeObj.param.animate ? routeObj.param.animate : routerItem.animate;

        $.ajax({
            type: 'GET',
            url: routerItem.templateUrl,
            dataType: 'html',
            success: function(data, status, xhr){
                //加载页面，动画分享

                if(routerAnimate=='right'){
                    $(router.mainView).html(data).children().addClass('page-from-right-to-center');

                }else if(routerAnimate=='left'){
                    $(router.mainView).html(data).children().addClass('page-from-left-to-center');
                }else{
                    $(router.mainView).html(data)
                }
                $(document).on('webkitAnimationEnd',router.mainView+'>div',function(){
                    $(this).removeClass('page-from-right-to-center');
                });
                //console.log($(router.mainView)
                loadScript(routerItem.controller);
                loadCss(routerItem.styles);
            },
            error: function(xhr, errorType, error){
                if($(router.errorTemplateId).length===0){
                    return false;
                }
                var errHtml = $(router.errorTemplateId).html();
                errHtml = errHtml.replace(/{{errStatus}}/,xhr.status);
                errHtml = errHtml.replace(/{{errContent}}/,xhr.responseText);
                $(router.mainView).html(errHtml);
            }
        });
    }

    function startRouter  () {
        var hash = location.hash;               //获取当前URL的锚部分
        var routeObj = router.parse(hash);
        //console.log(routeObj);
        routerAction(routeObj);
    }

    function loadScript(src, callback) {

        var script = document.createElement('script'),
            loaded;

        script.setAttribute('src', src);
        script.onreadystatechange = script.onload = function() {
            script.onreadystatechange = null;
            document.documentElement.removeChild(script);
            script = null;
            if (!loaded) {
                if(typeof callback==='function')
                    callback();
            }
            loaded = true;
        };

        document.documentElement.appendChild(script);
    }

    function loadCss(src,callback){
        if(!src) return;
        var head = document.getElementsByTagName('head')[0],
            cssURL = src,
            linkTag = document.createElement('link');

         linkTag.href = cssURL;
         linkTag.setAttribute('rel','stylesheet');
         linkTag.setAttribute('media','all');
         linkTag.setAttribute('type','text/css');

         head.appendChild(linkTag);
    }

    window.router = new R();
})();
