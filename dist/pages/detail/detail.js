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
/*!********************!*\
  !*** multi detail ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! E:\pro\spa\src\pages\detail\detail.js */1);
	module.exports = __webpack_require__(/*! E:\pro\spa\src\pages\detail\detail.css */2);


/***/ }),
/* 1 */
/*!************************************!*\
  !*** ./src/pages/detail/detail.js ***!
  \************************************/
/***/ (function(module, exports) {

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


/***/ }),
/* 2 */
/*!*************************************!*\
  !*** ./src/pages/detail/detail.css ***!
  \*************************************/
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=detail.js.map