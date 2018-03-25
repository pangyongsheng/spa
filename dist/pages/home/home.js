/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi home ***!
  \******************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! E:\pro\spa\src\pages\home\home.js */3);
	module.exports = __webpack_require__(/*! E:\pro\spa\src\pages\home\home.css */4);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/*!********************************!*\
  !*** ./src/pages/home/home.js ***!
  \********************************/
/***/ (function(module, exports) {

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


/***/ }),
/* 4 */
/*!*********************************!*\
  !*** ./src/pages/home/home.css ***!
  \*********************************/
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=home.js.map