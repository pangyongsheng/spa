(function(){
    function Vipspa(){
        
    }
    Vipspa.prototype.start = function(config){  
        var self = this;
        self.routerMap = config.router;     //路由配置
        self.mainView = config.view;        //目标div
        self.errorTemplateId = config.errorTemplateId;      //错误id
        startRouter();
        window.onhashchange = function(){
            startRouter();
        };
    };
    var messageStack = [];
    // {
    //     'id': 'home_bindcard',
    //     'content': {
    //     }
    // }
    Vipspa.prototype.getMessage = function(id){
        var msg = {};
        $.each(messageStack,function(i,e){
            if(e.id===id){
                msg = e;
            }
        });
        return msg;
    };

    Vipspa.prototype.setMessage = function(obj){
        var _obj = JSON.parse(JSON.stringify(obj));
        $.each(messageStack,function(i,e){
            if(e.id===_obj.id){
                e = _obj;
                return false;
            }
        });
        messageStack.push(_obj);
    };
    Vipspa.prototype.delMessage = function(id){
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
    Vipspa.prototype.clearMessage = function(id){
        var index = 0;
        messageStack = [];
    };
    
    Vipspa.prototype.stringify = function(routerUrl,paramObj){
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
    Vipspa.prototype.parse = function(routerHash){
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
        var routerItem = vipspa.routerMap[routeObj.url];
        
        if(typeof routerItem==='undefined'){
            var defaultsRoute = vipspa.routerMap.defaults;
            routerItem = vipspa.routerMap[defaultsRoute];
            location.hash = defaultsRoute;
            return false;
        }
        
        $.ajax({
            type: 'GET',
            url: routerItem.templateUrl,
            dataType: 'html',
            success: function(data, status, xhr){
                //加载页面，动画分享
                if(routerItem.animate=='right'){
                    $(vipspa.mainView).html(data).children().addClass('page-from-right-to-center'); 
                    $(vipspa.mainView).children().animationEnd(function(){
                        console.info('x');
                    });  
                }else if(routerItem.animate=='left'){
                    $(vipspa.mainView).html(data).children().addClass('page-from-left-to-center');
                }else{
                    $(vipspa.mainView).html(data)
                }
                //console.log($(vipspa.mainView)
                loadScript(routerItem.controller);
                loadCss(routerItem.styles);
            },
            error: function(xhr, errorType, error){
                if($(vipspa.errorTemplateId).length===0){
                    return false;
                }
                var errHtml = $(vipspa.errorTemplateId).html();
                errHtml = errHtml.replace(/{{errStatus}}/,xhr.status);
                errHtml = errHtml.replace(/{{errContent}}/,xhr.responseText);
                $(vipspa.mainView).html(errHtml);
            }
        });
    }
   
    function startRouter  () {
        var hash = location.hash;
        var routeObj = vipspa.parse(hash);
        console.log(routeObj);
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
    //css事件处理
    function __dealCssEvent(eventNameArr, callback) {
        console.info(eventNameArr);
        var events = eventNameArr,
            i, dom = this;

        function fireCallBack(e) {
            if (e.target !== this) return;
            callback.call(this, e);
            for (i = 0; i < events.length; i++) {
                dom.off(events[i], fireCallBack);
            }
        }

        if (callback) {
            console.info('1');
            for (i = 0; i < events.length; i++) {
                dom.on(events[i], fireCallBack);
                console.log(dom);
            }
        }
    }

    //animation监听
    $.fn.animationEnd = function (callback) {
        console.log(callback);
        __dealCssEvent.call(this, ['webkitAnimationEnd', 'animationend'], callback);
        return this;
    };
    $.fn.transitionEnd = function (callback) {
        __dealCssEvent.call(this, ['webkitTransitionEnd', 'transitionend'], callback);
        return this;
    };

    window.vipspa = new Vipspa();
})();