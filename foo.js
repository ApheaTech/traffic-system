// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 182);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(16)
)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(18)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-option-list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cf8dbd68"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = {
    formatDate: function formatDate(time, format) {
        format = format || "yyyy-MM-dd hh:mm:ss";
        var d = new Date(); //创建时间对象
        var localTime = time; //当地时间戳
        var localOffset = d.getTimezoneOffset() * 60000; //获得当地时间偏移的毫秒数
        var utc = localTime + localOffset; //utc即GMT时间
        var offset = 8; //中国在东8区
        time = utc + 3600000 * offset; //真正的时间戳
        var date = new Date(time);
        var o = {
            "M+": date.getMonth() + 1, //month
            "d+": date.getDate(), //day
            "h+": date.getHours(), //hour
            "m+": date.getMinutes(), //minute
            "s+": date.getSeconds(), //second
            "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
            "S": date.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }return format;
    },
    isIPad: function isIPad() {
        return WXEnvironment && WXEnvironment.deviceModel.indexOf('iPad') === 0;
    },
    isIPhoneX: function isIPhoneX() {
        return WXEnvironment && (WXEnvironment.deviceModel === 'iPhone10,3' || WXEnvironment.deviceModel === 'iPhone10,6' || WXEnvironment.deviceModel === 'iPhone11,6');
    },
    isIPhone: function isIPhone() {
        return WXEnvironment && WXEnvironment.platform === 'iOS';
    },
    isAndroid: function isAndroid() {
        return WXEnvironment && WXEnvironment.platform === 'android';
    },

    // 适配
    fixStyle: function fixStyle() {
        var that = util;
        if (that.isIPhoneX()) {
            return {
                borderTopWidth: '80px',
                borderTopStyle: 'solid',
                borderTopColor: '#F39424'
            };
        } else if (that.isIPhone()) {
            return {
                borderTopWidth: '40px',
                borderTopStyle: 'solid',
                borderTopColor: '#F39424'
            };
        } else if (that.isAndroid()) {
            return {};
        } else {
            return {};
        }
    }
};

module.exports = util;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {"ion-alert":"&#xf101;","ion-alert-circled":"&#xf100;","ion-android-add":"&#xf2c7;","ion-android-add-circle":"&#xf359;","ion-android-alarm-clock":"&#xf35a;","ion-android-alert":"&#xf35b;","ion-android-apps":"&#xf35c;","ion-android-archive":"&#xf2c9;","ion-android-arrow-back":"&#xf2ca;","ion-android-arrow-down":"&#xf35d;","ion-android-arrow-dropdown":"&#xf35f;","ion-android-arrow-dropdown-circle":"&#xf35e;","ion-android-arrow-dropleft":"&#xf361;","ion-android-arrow-dropleft-circle":"&#xf360;","ion-android-arrow-dropright":"&#xf363;","ion-android-arrow-dropright-circle":"&#xf362;","ion-android-arrow-dropup":"&#xf365;","ion-android-arrow-dropup-circle":"&#xf364;","ion-android-arrow-forward":"&#xf30f;","ion-android-arrow-up":"&#xf366;","ion-android-attach":"&#xf367;","ion-android-bar":"&#xf368;","ion-android-bicycle":"&#xf369;","ion-android-boat":"&#xf36a;","ion-android-bookmark":"&#xf36b;","ion-android-bulb":"&#xf36c;","ion-android-bus":"&#xf36d;","ion-android-calendar":"&#xf2d1;","ion-android-call":"&#xf2d2;","ion-android-camera":"&#xf2d3;","ion-android-cancel":"&#xf36e;","ion-android-car":"&#xf36f;","ion-android-cart":"&#xf370;","ion-android-chat":"&#xf2d4;","ion-android-checkbox":"&#xf374;","ion-android-checkbox-blank":"&#xf371;","ion-android-checkbox-outline":"&#xf373;","ion-android-checkbox-outline-blank":"&#xf372;","ion-android-checkmark-circle":"&#xf375;","ion-android-clipboard":"&#xf376;","ion-android-close":"&#xf2d7;","ion-android-cloud":"&#xf37a;","ion-android-cloud-circle":"&#xf377;","ion-android-cloud-done":"&#xf378;","ion-android-cloud-outline":"&#xf379;","ion-android-color-palette":"&#xf37b;","ion-android-compass":"&#xf37c;","ion-android-contact":"&#xf2d8;","ion-android-contacts":"&#xf2d9;","ion-android-contract":"&#xf37d;","ion-android-create":"&#xf37e;","ion-android-delete":"&#xf37f;","ion-android-desktop":"&#xf380;","ion-android-document":"&#xf381;","ion-android-done":"&#xf383;","ion-android-done-all":"&#xf382;","ion-android-download":"&#xf2dd;","ion-android-drafts":"&#xf384;","ion-android-exit":"&#xf385;","ion-android-expand":"&#xf386;","ion-android-favorite":"&#xf388;","ion-android-favorite-outline":"&#xf387;","ion-android-film":"&#xf389;","ion-android-folder":"&#xf2e0;","ion-android-folder-open":"&#xf38a;","ion-android-funnel":"&#xf38b;","ion-android-globe":"&#xf38c;","ion-android-hand":"&#xf2e3;","ion-android-hangout":"&#xf38d;","ion-android-happy":"&#xf38e;","ion-android-home":"&#xf38f;","ion-android-image":"&#xf2e4;","ion-android-laptop":"&#xf390;","ion-android-list":"&#xf391;","ion-android-locate":"&#xf2e9;","ion-android-lock":"&#xf392;","ion-android-mail":"&#xf2eb;","ion-android-map":"&#xf393;","ion-android-menu":"&#xf394;","ion-android-microphone":"&#xf2ec;","ion-android-microphone-off":"&#xf395;","ion-android-more-horizontal":"&#xf396;","ion-android-more-vertical":"&#xf397;","ion-android-navigate":"&#xf398;","ion-android-notifications":"&#xf39b;","ion-android-notifications-none":"&#xf399;","ion-android-notifications-off":"&#xf39a;","ion-android-open":"&#xf39c;","ion-android-options":"&#xf39d;","ion-android-people":"&#xf39e;","ion-android-person":"&#xf3a0;","ion-android-person-add":"&#xf39f;","ion-android-phone-landscape":"&#xf3a1;","ion-android-phone-portrait":"&#xf3a2;","ion-android-pin":"&#xf3a3;","ion-android-plane":"&#xf3a4;","ion-android-playstore":"&#xf2f0;","ion-android-print":"&#xf3a5;","ion-android-radio-button-off":"&#xf3a6;","ion-android-radio-button-on":"&#xf3a7;","ion-android-refresh":"&#xf3a8;","ion-android-remove":"&#xf2f4;","ion-android-remove-circle":"&#xf3a9;","ion-android-restaurant":"&#xf3aa;","ion-android-sad":"&#xf3ab;","ion-android-search":"&#xf2f5;","ion-android-send":"&#xf2f6;","ion-android-settings":"&#xf2f7;","ion-android-share":"&#xf2f8;","ion-android-share-alt":"&#xf3ac;","ion-android-star":"&#xf2fc;","ion-android-star-half":"&#xf3ad;","ion-android-star-outline":"&#xf3ae;","ion-android-stopwatch":"&#xf2fd;","ion-android-subway":"&#xf3af;","ion-android-sunny":"&#xf3b0;","ion-android-sync":"&#xf3b1;","ion-android-textsms":"&#xf3b2;","ion-android-time":"&#xf3b3;","ion-android-train":"&#xf3b4;","ion-android-unlock":"&#xf3b5;","ion-android-upload":"&#xf3b6;","ion-android-volume-down":"&#xf3b7;","ion-android-volume-mute":"&#xf3b8;","ion-android-volume-off":"&#xf3b9;","ion-android-volume-up":"&#xf3ba;","ion-android-walk":"&#xf3bb;","ion-android-warning":"&#xf3bc;","ion-android-watch":"&#xf3bd;","ion-android-wifi":"&#xf305;","ion-aperture":"&#xf313;","ion-archive":"&#xf102;","ion-arrow-down-a":"&#xf103;","ion-arrow-down-b":"&#xf104;","ion-arrow-down-c":"&#xf105;","ion-arrow-expand":"&#xf25e;","ion-arrow-graph-down-left":"&#xf25f;","ion-arrow-graph-down-right":"&#xf260;","ion-arrow-graph-up-left":"&#xf261;","ion-arrow-graph-up-right":"&#xf262;","ion-arrow-left-a":"&#xf106;","ion-arrow-left-b":"&#xf107;","ion-arrow-left-c":"&#xf108;","ion-arrow-move":"&#xf263;","ion-arrow-resize":"&#xf264;","ion-arrow-return-left":"&#xf265;","ion-arrow-return-right":"&#xf266;","ion-arrow-right-a":"&#xf109;","ion-arrow-right-b":"&#xf10a;","ion-arrow-right-c":"&#xf10b;","ion-arrow-shrink":"&#xf267;","ion-arrow-swap":"&#xf268;","ion-arrow-up-a":"&#xf10c;","ion-arrow-up-b":"&#xf10d;","ion-arrow-up-c":"&#xf10e;","ion-asterisk":"&#xf314;","ion-at":"&#xf10f;","ion-backspace":"&#xf3bf;","ion-backspace-outline":"&#xf3be;","ion-bag":"&#xf110;","ion-battery-charging":"&#xf111;","ion-battery-empty":"&#xf112;","ion-battery-full":"&#xf113;","ion-battery-half":"&#xf114;","ion-battery-low":"&#xf115;","ion-beaker":"&#xf269;","ion-beer":"&#xf26a;","ion-bluetooth":"&#xf116;","ion-bonfire":"&#xf315;","ion-bookmark":"&#xf26b;","ion-bowtie":"&#xf3c0;","ion-briefcase":"&#xf26c;","ion-bug":"&#xf2be;","ion-calculator":"&#xf26d;","ion-calendar":"&#xf117;","ion-camera":"&#xf118;","ion-card":"&#xf119;","ion-cash":"&#xf316;","ion-chatbox":"&#xf11b;","ion-chatbox-working":"&#xf11a;","ion-chatboxes":"&#xf11c;","ion-chatbubble":"&#xf11e;","ion-chatbubble-working":"&#xf11d;","ion-chatbubbles":"&#xf11f;","ion-checkmark":"&#xf122;","ion-checkmark-circled":"&#xf120;","ion-checkmark-round":"&#xf121;","ion-chevron-down":"&#xf123;","ion-chevron-left":"&#xf124;","ion-chevron-right":"&#xf125;","ion-chevron-up":"&#xf126;","ion-clipboard":"&#xf127;","ion-clock":"&#xf26e;","ion-close":"&#xf12a;","ion-close-circled":"&#xf128;","ion-close-round":"&#xf129;","ion-closed-captioning":"&#xf317;","ion-cloud":"&#xf12b;","ion-code":"&#xf271;","ion-code-download":"&#xf26f;","ion-code-working":"&#xf270;","ion-coffee":"&#xf272;","ion-compass":"&#xf273;","ion-compose":"&#xf12c;","ion-connection-bars":"&#xf274;","ion-contrast":"&#xf275;","ion-crop":"&#xf3c1;","ion-cube":"&#xf318;","ion-disc":"&#xf12d;","ion-document":"&#xf12f;","ion-document-text":"&#xf12e;","ion-drag":"&#xf130;","ion-earth":"&#xf276;","ion-easel":"&#xf3c2;","ion-edit":"&#xf2bf;","ion-egg":"&#xf277;","ion-eject":"&#xf131;","ion-email":"&#xf132;","ion-email-unread":"&#xf3c3;","ion-erlenmeyer-flask":"&#xf3c5;","ion-erlenmeyer-flask-bubbles":"&#xf3c4;","ion-eye":"&#xf133;","ion-eye-disabled":"&#xf306;","ion-female":"&#xf278;","ion-filing":"&#xf134;","ion-film-marker":"&#xf135;","ion-fireball":"&#xf319;","ion-flag":"&#xf279;","ion-flame":"&#xf31a;","ion-flash":"&#xf137;","ion-flash-off":"&#xf136;","ion-folder":"&#xf139;","ion-fork":"&#xf27a;","ion-fork-repo":"&#xf2c0;","ion-forward":"&#xf13a;","ion-funnel":"&#xf31b;","ion-gear-a":"&#xf13d;","ion-gear-b":"&#xf13e;","ion-grid":"&#xf13f;","ion-hammer":"&#xf27b;","ion-happy":"&#xf31c;","ion-happy-outline":"&#xf3c6;","ion-headphone":"&#xf140;","ion-heart":"&#xf141;","ion-heart-broken":"&#xf31d;","ion-help":"&#xf143;","ion-help-buoy":"&#xf27c;","ion-help-circled":"&#xf142;","ion-home":"&#xf144;","ion-icecream":"&#xf27d;","ion-image":"&#xf147;","ion-images":"&#xf148;","ion-information":"&#xf14a;","ion-information-circled":"&#xf149;","ion-ionic":"&#xf14b;","ion-ios-alarm":"&#xf3c8;","ion-ios-alarm-outline":"&#xf3c7;","ion-ios-albums":"&#xf3ca;","ion-ios-albums-outline":"&#xf3c9;","ion-ios-americanfootball":"&#xf3cc;","ion-ios-americanfootball-outline":"&#xf3cb;","ion-ios-analytics":"&#xf3ce;","ion-ios-analytics-outline":"&#xf3cd;","ion-ios-arrow-back":"&#xf3cf;","ion-ios-arrow-down":"&#xf3d0;","ion-ios-arrow-forward":"&#xf3d1;","ion-ios-arrow-left":"&#xf3d2;","ion-ios-arrow-right":"&#xf3d3;","ion-ios-arrow-thin-down":"&#xf3d4;","ion-ios-arrow-thin-left":"&#xf3d5;","ion-ios-arrow-thin-right":"&#xf3d6;","ion-ios-arrow-thin-up":"&#xf3d7;","ion-ios-arrow-up":"&#xf3d8;","ion-ios-at":"&#xf3da;","ion-ios-at-outline":"&#xf3d9;","ion-ios-barcode":"&#xf3dc;","ion-ios-barcode-outline":"&#xf3db;","ion-ios-baseball":"&#xf3de;","ion-ios-baseball-outline":"&#xf3dd;","ion-ios-basketball":"&#xf3e0;","ion-ios-basketball-outline":"&#xf3df;","ion-ios-bell":"&#xf3e2;","ion-ios-bell-outline":"&#xf3e1;","ion-ios-body":"&#xf3e4;","ion-ios-body-outline":"&#xf3e3;","ion-ios-bolt":"&#xf3e6;","ion-ios-bolt-outline":"&#xf3e5;","ion-ios-book":"&#xf3e8;","ion-ios-book-outline":"&#xf3e7;","ion-ios-bookmarks":"&#xf3ea;","ion-ios-bookmarks-outline":"&#xf3e9;","ion-ios-box":"&#xf3ec;","ion-ios-box-outline":"&#xf3eb;","ion-ios-briefcase":"&#xf3ee;","ion-ios-briefcase-outline":"&#xf3ed;","ion-ios-browsers":"&#xf3f0;","ion-ios-browsers-outline":"&#xf3ef;","ion-ios-calculator":"&#xf3f2;","ion-ios-calculator-outline":"&#xf3f1;","ion-ios-calendar":"&#xf3f4;","ion-ios-calendar-outline":"&#xf3f3;","ion-ios-camera":"&#xf3f6;","ion-ios-camera-outline":"&#xf3f5;","ion-ios-cart":"&#xf3f8;","ion-ios-cart-outline":"&#xf3f7;","ion-ios-chatboxes":"&#xf3fa;","ion-ios-chatboxes-outline":"&#xf3f9;","ion-ios-chatbubble":"&#xf3fc;","ion-ios-chatbubble-outline":"&#xf3fb;","ion-ios-checkmark":"&#xf3ff;","ion-ios-checkmark-empty":"&#xf3fd;","ion-ios-checkmark-outline":"&#xf3fe;","ion-ios-circle-filled":"&#xf400;","ion-ios-circle-outline":"&#xf401;","ion-ios-clock":"&#xf403;","ion-ios-clock-outline":"&#xf402;","ion-ios-close":"&#xf406;","ion-ios-close-empty":"&#xf404;","ion-ios-close-outline":"&#xf405;","ion-ios-cloud":"&#xf40c;","ion-ios-cloud-download":"&#xf408;","ion-ios-cloud-download-outline":"&#xf407;","ion-ios-cloud-outline":"&#xf409;","ion-ios-cloud-upload":"&#xf40b;","ion-ios-cloud-upload-outline":"&#xf40a;","ion-ios-cloudy":"&#xf410;","ion-ios-cloudy-night":"&#xf40e;","ion-ios-cloudy-night-outline":"&#xf40d;","ion-ios-cloudy-outline":"&#xf40f;","ion-ios-cog":"&#xf412;","ion-ios-cog-outline":"&#xf411;","ion-ios-color-filter":"&#xf414;","ion-ios-color-filter-outline":"&#xf413;","ion-ios-color-wand":"&#xf416;","ion-ios-color-wand-outline":"&#xf415;","ion-ios-compose":"&#xf418;","ion-ios-compose-outline":"&#xf417;","ion-ios-contact":"&#xf41a;","ion-ios-contact-outline":"&#xf419;","ion-ios-copy":"&#xf41c;","ion-ios-copy-outline":"&#xf41b;","ion-ios-crop":"&#xf41e;","ion-ios-crop-strong":"&#xf41d;","ion-ios-download":"&#xf420;","ion-ios-download-outline":"&#xf41f;","ion-ios-drag":"&#xf421;","ion-ios-email":"&#xf423;","ion-ios-email-outline":"&#xf422;","ion-ios-eye":"&#xf425;","ion-ios-eye-outline":"&#xf424;","ion-ios-fastforward":"&#xf427;","ion-ios-fastforward-outline":"&#xf426;","ion-ios-filing":"&#xf429;","ion-ios-filing-outline":"&#xf428;","ion-ios-film":"&#xf42b;","ion-ios-film-outline":"&#xf42a;","ion-ios-flag":"&#xf42d;","ion-ios-flag-outline":"&#xf42c;","ion-ios-flame":"&#xf42f;","ion-ios-flame-outline":"&#xf42e;","ion-ios-flask":"&#xf431;","ion-ios-flask-outline":"&#xf430;","ion-ios-flower":"&#xf433;","ion-ios-flower-outline":"&#xf432;","ion-ios-folder":"&#xf435;","ion-ios-folder-outline":"&#xf434;","ion-ios-football":"&#xf437;","ion-ios-football-outline":"&#xf436;","ion-ios-game-controller-a":"&#xf439;","ion-ios-game-controller-a-outline":"&#xf438;","ion-ios-game-controller-b":"&#xf43b;","ion-ios-game-controller-b-outline":"&#xf43a;","ion-ios-gear":"&#xf43d;","ion-ios-gear-outline":"&#xf43c;","ion-ios-glasses":"&#xf43f;","ion-ios-glasses-outline":"&#xf43e;","ion-ios-grid-view":"&#xf441;","ion-ios-grid-view-outline":"&#xf440;","ion-ios-heart":"&#xf443;","ion-ios-heart-outline":"&#xf442;","ion-ios-help":"&#xf446;","ion-ios-help-empty":"&#xf444;","ion-ios-help-outline":"&#xf445;","ion-ios-home":"&#xf448;","ion-ios-home-outline":"&#xf447;","ion-ios-infinite":"&#xf44a;","ion-ios-infinite-outline":"&#xf449;","ion-ios-information":"&#xf44d;","ion-ios-information-empty":"&#xf44b;","ion-ios-information-outline":"&#xf44c;","ion-ios-ionic-outline":"&#xf44e;","ion-ios-keypad":"&#xf450;","ion-ios-keypad-outline":"&#xf44f;","ion-ios-lightbulb":"&#xf452;","ion-ios-lightbulb-outline":"&#xf451;","ion-ios-list":"&#xf454;","ion-ios-list-outline":"&#xf453;","ion-ios-location":"&#xf456;","ion-ios-location-outline":"&#xf455;","ion-ios-locked":"&#xf458;","ion-ios-locked-outline":"&#xf457;","ion-ios-loop":"&#xf45a;","ion-ios-loop-strong":"&#xf459;","ion-ios-medical":"&#xf45c;","ion-ios-medical-outline":"&#xf45b;","ion-ios-medkit":"&#xf45e;","ion-ios-medkit-outline":"&#xf45d;","ion-ios-mic":"&#xf461;","ion-ios-mic-off":"&#xf45f;","ion-ios-mic-outline":"&#xf460;","ion-ios-minus":"&#xf464;","ion-ios-minus-empty":"&#xf462;","ion-ios-minus-outline":"&#xf463;","ion-ios-monitor":"&#xf466;","ion-ios-monitor-outline":"&#xf465;","ion-ios-moon":"&#xf468;","ion-ios-moon-outline":"&#xf467;","ion-ios-more":"&#xf46a;","ion-ios-more-outline":"&#xf469;","ion-ios-musical-note":"&#xf46b;","ion-ios-musical-notes":"&#xf46c;","ion-ios-navigate":"&#xf46e;","ion-ios-navigate-outline":"&#xf46d;","ion-ios-nutrition":"&#xf470;","ion-ios-nutrition-outline":"&#xf46f;","ion-ios-paper":"&#xf472;","ion-ios-paper-outline":"&#xf471;","ion-ios-paperplane":"&#xf474;","ion-ios-paperplane-outline":"&#xf473;","ion-ios-partlysunny":"&#xf476;","ion-ios-partlysunny-outline":"&#xf475;","ion-ios-pause":"&#xf478;","ion-ios-pause-outline":"&#xf477;","ion-ios-paw":"&#xf47a;","ion-ios-paw-outline":"&#xf479;","ion-ios-people":"&#xf47c;","ion-ios-people-outline":"&#xf47b;","ion-ios-person":"&#xf47e;","ion-ios-person-outline":"&#xf47d;","ion-ios-personadd":"&#xf480;","ion-ios-personadd-outline":"&#xf47f;","ion-ios-photos":"&#xf482;","ion-ios-photos-outline":"&#xf481;","ion-ios-pie":"&#xf484;","ion-ios-pie-outline":"&#xf483;","ion-ios-pint":"&#xf486;","ion-ios-pint-outline":"&#xf485;","ion-ios-play":"&#xf488;","ion-ios-play-outline":"&#xf487;","ion-ios-plus":"&#xf48b;","ion-ios-plus-empty":"&#xf489;","ion-ios-plus-outline":"&#xf48a;","ion-ios-pricetag":"&#xf48d;","ion-ios-pricetag-outline":"&#xf48c;","ion-ios-pricetags":"&#xf48f;","ion-ios-pricetags-outline":"&#xf48e;","ion-ios-printer":"&#xf491;","ion-ios-printer-outline":"&#xf490;","ion-ios-pulse":"&#xf493;","ion-ios-pulse-strong":"&#xf492;","ion-ios-rainy":"&#xf495;","ion-ios-rainy-outline":"&#xf494;","ion-ios-recording":"&#xf497;","ion-ios-recording-outline":"&#xf496;","ion-ios-redo":"&#xf499;","ion-ios-redo-outline":"&#xf498;","ion-ios-refresh":"&#xf49c;","ion-ios-refresh-empty":"&#xf49a;","ion-ios-refresh-outline":"&#xf49b;","ion-ios-reload":"&#xf49d;","ion-ios-reverse-camera":"&#xf49f;","ion-ios-reverse-camera-outline":"&#xf49e;","ion-ios-rewind":"&#xf4a1;","ion-ios-rewind-outline":"&#xf4a0;","ion-ios-rose":"&#xf4a3;","ion-ios-rose-outline":"&#xf4a2;","ion-ios-search":"&#xf4a5;","ion-ios-search-strong":"&#xf4a4;","ion-ios-settings":"&#xf4a7;","ion-ios-settings-strong":"&#xf4a6;","ion-ios-shuffle":"&#xf4a9;","ion-ios-shuffle-strong":"&#xf4a8;","ion-ios-skipbackward":"&#xf4ab;","ion-ios-skipbackward-outline":"&#xf4aa;","ion-ios-skipforward":"&#xf4ad;","ion-ios-skipforward-outline":"&#xf4ac;","ion-ios-snowy":"&#xf4ae;","ion-ios-speedometer":"&#xf4b0;","ion-ios-speedometer-outline":"&#xf4af;","ion-ios-star":"&#xf4b3;","ion-ios-star-half":"&#xf4b1;","ion-ios-star-outline":"&#xf4b2;","ion-ios-stopwatch":"&#xf4b5;","ion-ios-stopwatch-outline":"&#xf4b4;","ion-ios-sunny":"&#xf4b7;","ion-ios-sunny-outline":"&#xf4b6;","ion-ios-telephone":"&#xf4b9;","ion-ios-telephone-outline":"&#xf4b8;","ion-ios-tennisball":"&#xf4bb;","ion-ios-tennisball-outline":"&#xf4ba;","ion-ios-thunderstorm":"&#xf4bd;","ion-ios-thunderstorm-outline":"&#xf4bc;","ion-ios-time":"&#xf4bf;","ion-ios-time-outline":"&#xf4be;","ion-ios-timer":"&#xf4c1;","ion-ios-timer-outline":"&#xf4c0;","ion-ios-toggle":"&#xf4c3;","ion-ios-toggle-outline":"&#xf4c2;","ion-ios-trash":"&#xf4c5;","ion-ios-trash-outline":"&#xf4c4;","ion-ios-undo":"&#xf4c7;","ion-ios-undo-outline":"&#xf4c6;","ion-ios-unlocked":"&#xf4c9;","ion-ios-unlocked-outline":"&#xf4c8;","ion-ios-upload":"&#xf4cb;","ion-ios-upload-outline":"&#xf4ca;","ion-ios-videocam":"&#xf4cd;","ion-ios-videocam-outline":"&#xf4cc;","ion-ios-volume-high":"&#xf4ce;","ion-ios-volume-low":"&#xf4cf;","ion-ios-wineglass":"&#xf4d1;","ion-ios-wineglass-outline":"&#xf4d0;","ion-ios-world":"&#xf4d3;","ion-ios-world-outline":"&#xf4d2;","ion-ipad":"&#xf1f9;","ion-iphone":"&#xf1fa;","ion-ipod":"&#xf1fb;","ion-jet":"&#xf295;","ion-key":"&#xf296;","ion-knife":"&#xf297;","ion-laptop":"&#xf1fc;","ion-leaf":"&#xf1fd;","ion-levels":"&#xf298;","ion-lightbulb":"&#xf299;","ion-link":"&#xf1fe;","ion-load-a":"&#xf29a;","ion-load-b":"&#xf29b;","ion-load-c":"&#xf29c;","ion-load-d":"&#xf29d;","ion-location":"&#xf1ff;","ion-lock-combination":"&#xf4d4;","ion-locked":"&#xf200;","ion-log-in":"&#xf29e;","ion-log-out":"&#xf29f;","ion-loop":"&#xf201;","ion-magnet":"&#xf2a0;","ion-male":"&#xf2a1;","ion-man":"&#xf202;","ion-map":"&#xf203;","ion-medkit":"&#xf2a2;","ion-merge":"&#xf33f;","ion-mic-a":"&#xf204;","ion-mic-b":"&#xf205;","ion-mic-c":"&#xf206;","ion-minus":"&#xf209;","ion-minus-circled":"&#xf207;","ion-minus-round":"&#xf208;","ion-model-s":"&#xf2c1;","ion-monitor":"&#xf20a;","ion-more":"&#xf20b;","ion-mouse":"&#xf340;","ion-music-note":"&#xf20c;","ion-navicon":"&#xf20e;","ion-navicon-round":"&#xf20d;","ion-navigate":"&#xf2a3;","ion-network":"&#xf341;","ion-no-smoking":"&#xf2c2;","ion-nuclear":"&#xf2a4;","ion-outlet":"&#xf342;","ion-paintbrush":"&#xf4d5;","ion-paintbucket":"&#xf4d6;","ion-paper-airplane":"&#xf2c3;","ion-paperclip":"&#xf20f;","ion-pause":"&#xf210;","ion-person":"&#xf213;","ion-person-add":"&#xf211;","ion-person-stalker":"&#xf212;","ion-pie-graph":"&#xf2a5;","ion-pin":"&#xf2a6;","ion-pinpoint":"&#xf2a7;","ion-pizza":"&#xf2a8;","ion-plane":"&#xf214;","ion-planet":"&#xf343;","ion-play":"&#xf215;","ion-playstation":"&#xf30a;","ion-plus":"&#xf218;","ion-plus-circled":"&#xf216;","ion-plus-round":"&#xf217;","ion-podium":"&#xf344;","ion-pound":"&#xf219;","ion-power":"&#xf2a9;","ion-pricetag":"&#xf2aa;","ion-pricetags":"&#xf2ab;","ion-printer":"&#xf21a;","ion-pull-request":"&#xf345;","ion-qr-scanner":"&#xf346;","ion-quote":"&#xf347;","ion-radio-waves":"&#xf2ac;","ion-record":"&#xf21b;","ion-refresh":"&#xf21c;","ion-reply":"&#xf21e;","ion-reply-all":"&#xf21d;","ion-ribbon-a":"&#xf348;","ion-ribbon-b":"&#xf349;","ion-sad":"&#xf34a;","ion-sad-outline":"&#xf4d7;","ion-scissors":"&#xf34b;","ion-search":"&#xf21f;","ion-settings":"&#xf2ad;","ion-share":"&#xf220;","ion-shuffle":"&#xf221;","ion-skip-backward":"&#xf222;","ion-skip-forward":"&#xf223;","ion-social-android":"&#xf225;","ion-social-android-outline":"&#xf224;","ion-social-angular":"&#xf4d9;","ion-social-angular-outline":"&#xf4d8;","ion-social-apple":"&#xf227;","ion-social-apple-outline":"&#xf226;","ion-social-bitcoin":"&#xf2af;","ion-social-bitcoin-outline":"&#xf2ae;","ion-social-buffer":"&#xf229;","ion-social-buffer-outline":"&#xf228;","ion-social-chrome":"&#xf4db;","ion-social-chrome-outline":"&#xf4da;","ion-social-codepen":"&#xf4dd;","ion-social-codepen-outline":"&#xf4dc;","ion-social-css3":"&#xf4df;","ion-social-css3-outline":"&#xf4de;","ion-social-designernews":"&#xf22b;","ion-social-designernews-outline":"&#xf22a;","ion-social-dribbble":"&#xf22d;","ion-social-dribbble-outline":"&#xf22c;","ion-social-dropbox":"&#xf22f;","ion-social-dropbox-outline":"&#xf22e;","ion-social-euro":"&#xf4e1;","ion-social-euro-outline":"&#xf4e0;","ion-social-facebook":"&#xf231;","ion-social-facebook-outline":"&#xf230;","ion-social-foursquare":"&#xf34d;","ion-social-foursquare-outline":"&#xf34c;","ion-social-freebsd-devil":"&#xf2c4;","ion-social-github":"&#xf233;","ion-social-github-outline":"&#xf232;","ion-social-google":"&#xf34f;","ion-social-google-outline":"&#xf34e;","ion-social-googleplus":"&#xf235;","ion-social-googleplus-outline":"&#xf234;","ion-social-hackernews":"&#xf237;","ion-social-hackernews-outline":"&#xf236;","ion-social-html5":"&#xf4e3;","ion-social-html5-outline":"&#xf4e2;","ion-social-instagram":"&#xf351;","ion-social-instagram-outline":"&#xf350;","ion-social-javascript":"&#xf4e5;","ion-social-javascript-outline":"&#xf4e4;","ion-social-linkedin":"&#xf239;","ion-social-linkedin-outline":"&#xf238;","ion-social-markdown":"&#xf4e6;","ion-social-nodejs":"&#xf4e7;","ion-social-octocat":"&#xf4e8;","ion-social-pinterest":"&#xf2b1;","ion-social-pinterest-outline":"&#xf2b0;","ion-social-python":"&#xf4e9;","ion-social-reddit":"&#xf23b;","ion-social-reddit-outline":"&#xf23a;","ion-social-rss":"&#xf23d;","ion-social-rss-outline":"&#xf23c;","ion-social-sass":"&#xf4ea;","ion-social-skype":"&#xf23f;","ion-social-skype-outline":"&#xf23e;","ion-social-snapchat":"&#xf4ec;","ion-social-snapchat-outline":"&#xf4eb;","ion-social-tumblr":"&#xf241;","ion-social-tumblr-outline":"&#xf240;","ion-social-tux":"&#xf2c5;","ion-social-twitch":"&#xf4ee;","ion-social-twitch-outline":"&#xf4ed;","ion-social-twitter":"&#xf243;","ion-social-twitter-outline":"&#xf242;","ion-social-usd":"&#xf353;","ion-social-usd-outline":"&#xf352;","ion-social-vimeo":"&#xf245;","ion-social-vimeo-outline":"&#xf244;","ion-social-whatsapp":"&#xf4f0;","ion-social-whatsapp-outline":"&#xf4ef;","ion-social-windows":"&#xf247;","ion-social-windows-outline":"&#xf246;","ion-social-wordpress":"&#xf249;","ion-social-wordpress-outline":"&#xf248;","ion-social-yahoo":"&#xf24b;","ion-social-yahoo-outline":"&#xf24a;","ion-social-yen":"&#xf4f2;","ion-social-yen-outline":"&#xf4f1;","ion-social-youtube":"&#xf24d;","ion-social-youtube-outline":"&#xf24c;","ion-soup-can":"&#xf4f4;","ion-soup-can-outline":"&#xf4f3;","ion-speakerphone":"&#xf2b2;","ion-speedometer":"&#xf2b3;","ion-spoon":"&#xf2b4;","ion-star":"&#xf24e;","ion-stats-bars":"&#xf2b5;","ion-steam":"&#xf30b;","ion-stop":"&#xf24f;","ion-thermometer":"&#xf2b6;","ion-thumbsdown":"&#xf250;","ion-thumbsup":"&#xf251;","ion-toggle":"&#xf355;","ion-toggle-filled":"&#xf354;","ion-transgender":"&#xf4f5;","ion-trash-a":"&#xf252;","ion-trash-b":"&#xf253;","ion-trophy":"&#xf356;","ion-tshirt":"&#xf4f7;","ion-tshirt-outline":"&#xf4f6;","ion-umbrella":"&#xf2b7;","ion-university":"&#xf357;","ion-unlocked":"&#xf254;","ion-upload":"&#xf255;","ion-usb":"&#xf2b8;","ion-videocamera":"&#xf256;","ion-volume-high":"&#xf257;","ion-volume-low":"&#xf258;","ion-volume-medium":"&#xf259;","ion-volume-mute":"&#xf25a;","ion-wand":"&#xf358;","ion-waterdrop":"&#xf25b;","ion-wifi":"&#xf25c;","ion-wineglass":"&#xf2b9;","ion-woman":"&#xf25d;","ion-wrench":"&#xf2ba;","ion-xbox":"&#xf30c;"}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(165)
)

/* script */
__vue_exports__ = __webpack_require__(166)

/* template */
var __vue_template__ = __webpack_require__(167)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-popover.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6cded47b"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 框架中常用的工具方法
 */
var modal = weex.requireModule('modal');
var animation = weex.requireModule('animation');
var navigator = weex.requireModule('navigator');
var navigatorEx = weex.requireModule("NavigatorExModule");
var stream = weex.requireModule('stream');

var buiweex = {
    //components下的组件
    buiActionSheet: __webpack_require__(5),
    buiButton: __webpack_require__(9),
    buiCheckbox: __webpack_require__(13),
    buiCheckboxList: __webpack_require__(20),
    buiDialog: __webpack_require__(24),
    buiDropdown: __webpack_require__(28),
    buiHeader: __webpack_require__(32),
    buiIcon: __webpack_require__(37),
    buiImage: __webpack_require__(41),
    buiLazyRender: __webpack_require__(44),
    buiLoad: __webpack_require__(48),
    buiMask: __webpack_require__(52),
    buiPanel: __webpack_require__(56),
    buiRadio: __webpack_require__(60),
    buiRadioList: __webpack_require__(64),
    buiSearchbarCenter: __webpack_require__(68),
    buiSearchbarLeft: __webpack_require__(73),
    buiSwitch: __webpack_require__(78),
    buiTabbar: __webpack_require__(82),
    buiTip: __webpack_require__(85),
    buiVideo: __webpack_require__(89),
    buiContent: __webpack_require__(92),
    buiContentScroll: __webpack_require__(95),
    buiImageSlider: __webpack_require__(98),
    buiCell: __webpack_require__(102),
    buiPopup: __webpack_require__(106),
    buiNumberInput: __webpack_require__(110),
    buiRichcell: __webpack_require__(114),
    buiPopupShow: __webpack_require__(122),
    buiGridSelect: __webpack_require__(126),
    buiFlow: __webpack_require__(134),
    buiSwipeCell: __webpack_require__(138),
    icon: __webpack_require__(142),
    buiTabbarScroller: __webpack_require__(145),
    // buiEpSlider:require("../components/bui-ep-slider.vue"),
    buiTimeline: __webpack_require__(149),
    buiTimelineItem: __webpack_require__(153),
    buiTag: __webpack_require__(157),
    buiOptionList: __webpack_require__(0),
    buiDropload: __webpack_require__(161),
    buiPopover: __webpack_require__(3),
    buiPoptip: __webpack_require__(168),
    // buiCheckboxs: require("../components/bui-checkboxs.vue"),
    // buiRadios: require("../components/bui-radios.vue"),
    /**
     * 吐司信息
     * @param msg {string} 提示文本
     */
    toast: function toast(msg) {
        if (typeof msg !== 'string') {
            msg = JSON.stringify(msg);
        }
        modal.toast({
            message: msg || "",
            duration: 1
        });
    },


    /**
     * 弹出警告
     * @param msg {string} 提示文本
     * @param callback {function} 点击确定后回调函数
     * @param option {object} 参数
     * @param option.okTitle {string} 确定按钮文本
     */
    alert: function alert(msg, callback, option) {
        var okTitle = "确定";
        if (option) {
            if (option.okTitle) okTitle = option.okTitle;
        }
        if (typeof msg !== 'string') {
            msg = JSON.stringify(msg);
        }
        modal.alert({
            message: msg || "",
            duration: 1,
            okTitle: okTitle
        }, function (value) {
            callback && callback(value);
        });
    },


    /**
     * 弹出确认框
     * @param msg {string} 提示文本
     * @param callback {function} 点击确定/取消后回调函数
     * @param option {object} 参数
     * @param option.okTitle {string} 确定按钮文本
     * @param option.cancelTitle {string} 取消按钮文本
     */
    confirm: function confirm(msg, callback, option) {
        var okTitle = "确定",
            cancelTitle = "取消";
        if (option) {
            if (option.okTitle) okTitle = option.okTitle;
            if (option.cancelTitle) cancelTitle = option.cancelTitle;
        }
        modal.confirm({
            message: msg || "",
            duration: 0.4,
            okTitle: okTitle,
            cancelTitle: cancelTitle
        }, function (value) {
            callback && callback(value);
        });
    },


    /**
     * 显示一个组件（可设置动画）
     * @param params
     * @param callback
     */
    show: function show(params, callback) {
        var el = params.id;
        if (!el) {
            return;
        }
        var duration = params.duration;
        var transform = params.transform || 'translate(0, 0)';
        var transformOrigin = params.transformOrigin || 'center center';
        var timingFunction = params.timingFunction || 'ease';

        animation.transition(el, {
            styles: {
                opacity: '1',
                transform: transform,
                transformOrigin: transformOrigin
            },
            duration: duration || 0,
            timingFunction: timingFunction,
            delay: 0
        }, function () {
            callback && callback();
        });
    },


    /**
     * 隐藏一个组件(可设置动画)
     * @param params
     * @param callback
     */
    hide: function hide(params, callback) {
        var el = params.id;
        if (!el) {
            return;
        }
        var duration = params.duration;
        var transform = params.transform || 'translate(0, 0)';
        var transformOrigin = params.transformOrigin || 'center center';
        var timingFunction = params.timingFunction || 'ease';
        animation.transition(el, {
            styles: {
                opacity: '0',
                transform: transform,
                transformOrigin: transformOrigin
            },
            duration: duration || 0,
            timingFunction: timingFunction,
            delay: 0
        }, function () {
            callback && callback();
        });
    },


    /**
     * 获取当前上下文路径
     * @return {string} 当前上下文路径
     */
    getContextPath: function getContextPath() {
        var url = weex.config.bundleUrl;
        if (url.indexOf('?') > 0) {
            url = url.substring(0, url.indexOf('?'));
        }
        url = url.split('/').slice(0, -1).join('/');
        return url;
    },


    /**
     * 加载一个新的页面(bundleJS)
     * @method push
     * @param url {string} bundle js 地址
     * @param params {object} 传递的参数
     */
    push: function push(url, params, callback) {
        var paramsStr = "";
        var _this = buiweex;
        if (params) {
            for (var key in params) {
                paramsStr += key + "=" + encodeURIComponent(params[key]) + "&";
            }
        }
        if (url.indexOf('?') < 0 && paramsStr != "") {
            url += "?";
        }
        url += paramsStr;
        //link平台中使用navigatorEx,playground中使用navigator
        try {
            if (url.indexOf('http') == 0 || url.indexOf('file') == 0) navigatorEx.push(url);else {
                url = _this.getContextPath() + '/' + url;
                navigatorEx.push(url);
            }
        } catch (ex) {
            if (url.indexOf('http') == 0 || url.indexOf('file') == 0) {
                navigator.push({
                    url: url,
                    animated: 'true'
                }, callback);
            } else {
                url = _this.getContextPath() + '/' + url;
                navigator.push({
                    url: url,
                    animated: 'true'
                }, callback);
            }
        }
    },


    /**
     * 返回上个页面
     * @method pop
     * @param options {object} 配置参数
     * @param options.animated {bool} 是否需要过渡动画，默认true
     * @param options.level {int} 返回层级，默认1
     * @param callback {function} 回调函数
     */
    pop: function pop(callback, options) {
        options = options || {};
        navigator.pop({
            animated: options.animated || 'true',
            level: options.level || 1
        }, callback);
    },


    /**
     * 退出当前轻应用
     * @param options {object} 配置参数
     */
    close: function close(options) {
        options = options || {};
        try {
            navigatorEx.close();
        } catch (ex) {
            navigator.close({
                animated: options.animated || "true"
            });
        }
    },


    /**
     * 获取页面参数(bundleJS),从url查询参数中获取
     * @method getPageParams
     * @return {object} 返回json数据
     */
    getPageParams: function getPageParams() {
        var params = {};
        var url = weex.config.bundleUrl;
        var index = url.indexOf("?");
        if (index > 0) {
            var query = url.substring(index + 1);
            var temp = query.split('&');
            var key = void 0,
                value = void 0;
            for (var p in temp) {
                if (temp[p]) {
                    key = temp[p].split('=')[0];
                    value = temp[p].split('=')[1];
                    params[key] = decodeURIComponent(value);
                }
            }
        }
        return params;
    },


    /**
     * 发送POST请求
     * @method post
     * @param params {object} 请求参数
     * @param params.url {string} 请求的URL
     * @param params.headers {object} 请求头, Content-Type默认值是 application/x-www-form-urlencoded
     * @param params.type {string} 响应类型, json(默认),text
     * @param params.data {object} 请求数据，带到 HTTP body中
     * @return {Promise.<TResult>} 成功: resolve(data, status, statusText), 失败: reject(status, statusText)
     */
    post: function post(params) {
        var url = params.url || "";
        var headers = params.headers || {};
        var data = params.data;
        var type = params.type || "json";
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) == "object") {
            data = JSON.stringify(data);
        }
        // headers["Content-Type"]="application/x-www-form-urlencoded";
        // headers["Content-Type"]="application/json";
        return new Promise(function (resolve, reject) {
            stream.fetch({
                method: "POST",
                type: type,
                url: url,
                headers: headers,
                body: data
            }, function (res) {
                if (res.status >= 200 && res.status <= 299) {
                    resolve(res.data, res.status, res.statusText, res);
                } else {
                    reject(res.status, res.statusText);
                }
            });
        });
    },


    /**
     * 发送GET请求
     * @method get
     * @param params {object} 请求参数
     * @param params.url {string} 请求的URL
     * @param params.headers {object} 请求头
     * @param params.type {string} 响应类型, json(默认),text
     * @param params.data {object} 请求数据，自动拼接到url后面
     * @return {Promise.<TResult>} 成功: resolve(data, status, statusText), 失败: reject(status, statusText)
     */
    get: function get(params) {
        return new Promise(function (resolve, reject) {
            var url = params.url || "";
            var headers = params.headers || {};
            var data = params.data || {};
            var type = params.type || "json";
            if (url.indexOf("?") < 0) {
                url += "?";
            }
            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) == "object") {
                var dLength = Object.keys(data).length;
                for (var i = 0; i < dLength; i++) {
                    var key = Object.keys(data)[i];
                    var value = encodeURIComponent(data[key]);
                    url += key + '=' + value;
                    if (i != dLength - 1) {
                        url += "&";
                    }
                }
            }
            stream.fetch({
                method: "GET",
                type: type,
                url: url,
                headers: headers
            }, function (res) {
                if (res.status >= 200 && res.status <= 299) {
                    resolve(res.data, res.status, res.statusText, res);
                } else {
                    reject(res.status, res.statusText);
                }
            });
        });
    },


    /**
     * 适配viewport
     */
    fixViewport: function fixViewport() {
        var _this = buiweex;
        var meta = weex.requireModule('meta');
        var width = 750;

        if (_util2.default.isIPad()) {
            _this.alert(122);
            width = 1280;
        }

        meta.setViewport({
            width: width
        });
    },
    install: function install(Vue, options) {
        var that = buiweex;
        Vue.mixin({
            components: {
                'bui-header': that.buiHeader,
                'bui-icon': that.buiIcon,
                'bui-button': that.buiButton,
                'bui-image': that.buiImage,
                'bui-actionsheet': that.buiActionSheet,
                'bui-checkbox': that.buiCheckbox,
                'bui-checkbox-list': that.buiCheckboxList,
                'bui-dialog': that.buiDialog,
                'bui-dropdown': that.buiDropdown,
                'bui-lazy-render': that.buiLazyRender,
                'bui-load': that.buiLoad,
                'bui-mask': that.buiMask,
                'bui-panel': that.buiPanel,
                'bui-radio': that.buiRadio,
                'bui-radio-list': that.buiRadioList,
                'bui-searchbar-center': that.buiSearchbarCenter,
                'bui-searchbar-left': that.buiSearchbarLeft,
                'bui-switch': that.buiSwitch,
                'bui-tabbar': that.buiTabbar,
                'bui-tip': that.buiTip,
                'bui-video': that.buiVideo,
                'bui-content': that.buiContent,
                'bui-content-scroll': that.buiContentScroll,
                'bui-image-slider': that.buiImageSlider,
                'bui-cell': that.buiCell,
                'bui-popup': that.buiPopup,
                'bui-number-input': that.buiNumberInput,
                'bui-richcell': that.buiRichcell,
                'bui-popupshow': that.buiPopupShow,
                'bui-grid-select': that.buiGridSelect,
                'bui-flow': that.buiFlow,
                'bui-swipe-cell': that.buiSwipeCell,
                'icon': that.icon,
                'bui-tabbar-scroller': that.buiTabbarScroller,
                // 'bui-ep-slider': that.buiEpSlider,
                'bui-timeline': that.buiTimeline,
                'bui-timeline-item': that.buiTimelineItem,
                'bui-tag': that.buiTag,
                'bui-option-list': that.buiOptionList,
                'bui-dropload': that.buiDropload,
                'bui-popover': that.buiPopover,
                'bui-poptip': that.buiPoptip
                // 'bui-checkboxs': that.buiCheckboxs,
                // 'bui-radios': that.buiRadios,
            }
        });

        Vue.prototype.$alert = that.alert;

        Vue.prototype.$toast = that.toast;

        Vue.prototype.$confirm = that.confirm;

        Vue.prototype.$show = that.show;

        Vue.prototype.$hide = that.hide;

        Vue.prototype.$getContextPath = that.getContextPath;

        Vue.prototype.$push = that.push;

        Vue.prototype.$pop = that.pop;

        Vue.prototype.$close = that.close;

        Vue.prototype.$getPageParams = that.getPageParams;

        Vue.prototype.$post = that.post;

        Vue.prototype.$get = that.get;

        Vue.prototype.$formatDate = _util2.default.formatDate;

        Vue.prototype.$isIPad = _util2.default.isIPad();

        Vue.prototype.$isIPhoneX = _util2.default.isIPhoneX();

        Vue.prototype.$isIPhone = _util2.default.isIPhone();

        Vue.prototype.$isAndroid = _util2.default.isAndroid();

        Vue.prototype.$fixStyle = _util2.default.fixStyle();
    }
};

module.exports = buiweex;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-actionsheet.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-35aaf5bf"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "bui-actionsheet-box": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "marginTop": 0,
    "marginRight": "50",
    "marginBottom": "50",
    "marginLeft": "50"
  },
  "bui-actionsheet-top": {
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "backgroundColor": "#ffffff"
  },
  "bui-actionsheet-bottom": {
    "marginTop": "15"
  },
  "bui-actionsheet-title": {
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30",
    "textAlign": "center",
    "fontSize": "28",
    "color": "#9ea7b4"
  },
  "bui-actionsheet-content": {
    "flex": 1
  },
  "bui-actionsheet-list": {
    "borderTopWidth": "1",
    "borderTopColor": "#d7dde4",
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30",
    "textAlign": "center",
    "fontSize": "34",
    "color": "#3399ff",
    "backgroundColor:active": "#f5f5f5"
  },
  "bui-actionsheet-btn": {
    "fontSize": "34",
    "color": "#3399ff",
    "fontWeight": "bold",
    "backgroundColor": "#ffffff",
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30",
    "textAlign": "center",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "backgroundColor:active": "#f5f5f5"
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
module.exports = {
    props: {
        title: {
            default: "请选择"
        },
        items: {
            type: Array
        },
        button: {
            default: "取消"
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        value: function value(val) {
            var _this = this;

            this.$emit('input', val);
            setTimeout(function () {
                if (val) {
                    _this._open();
                }
            }, 50);
        }
    },
    computed: {
        bottom: function bottom() {
            return (this.items.length + 1) * 100 + 80;
        }
    },
    methods: {
        show: function show() {},

        _animationFn: function _animationFn(translate, fn) {
            var el = this.$refs.actionsheetBox;
            animation.transition(el, {
                styles: {
                    transform: translate,
                    transformOrigin: 'center center'
                },
                duration: 200,
                timingFunction: "ease-in",
                delay: 0
            }, function () {
                fn && fn();
            });
        },
        _open: function _open() {
            var translate = 'translate(0px, -' + (this.bottom + 20) + 'px, 0px)';
            this._animationFn(translate);
        },
        _maskClick: function _maskClick() {
            var _this2 = this;

            var translate = 'translate(0px, ' + (this.bottom + 20) + 'px, 0px)';
            this._animationFn(translate, function () {
                _this2.$emit('input', false);
                _this2.$emit("maskClick");
            });
        },
        _itemClick: function _itemClick(item, index) {
            var _this3 = this;

            var translate = 'translate(0px, ' + (this.bottom + 20) + 'px, 0px)';
            this._animationFn(translate, function () {
                _this3.$emit('input', false);
                _this3.$emit('itemClick', item, index);
            });
        },
        _btnClick: function _btnClick() {
            var _this4 = this;

            var translate = 'translate(0px, ' + (this.bottom + 20) + 'px, 0px)';
            this._animationFn(translate, function () {
                _this4.$emit('input', false);
                _this4.$emit('cancel');
            });
        }
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.value) ? _c('div', [_c('bui-mask', {
    on: {
      "click": _vm._maskClick
    }
  }), _c('div', {
    ref: "actionsheetBox",
    staticClass: ["bui-actionsheet-box"],
    style: {
      'bottom': '-' + _vm.bottom + 'px'
    }
  }, [_c('div', {
    staticClass: ["bui-actionsheet-top"]
  }, [(_vm.title) ? _c('text', {
    staticClass: ["bui-actionsheet-title"]
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _c('div', {
    staticClass: ["bui-actionsheet-content"]
  }, _vm._l((_vm.items), function(item, index) {
    return _c('text', {
      key: index,
      staticClass: ["bui-actionsheet-list"],
      on: {
        "click": function($event) {
          _vm._itemClick(item, index)
        }
      }
    }, [_vm._v(_vm._s(item))])
  }))]), _c('div', {
    staticClass: ["bui-actionsheet-bottom"]
  }, [_c('text', {
    staticClass: ["bui-actionsheet-btn"],
    on: {
      "click": _vm._btnClick
    }
  }, [_vm._v(_vm._s(_vm.button))])])])], 1) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(12)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-button.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-42d6b968"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "btn-block": {
    "alignItems": "center",
    "justifyContent": "center",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "flexDirection": "row"
  },
  "btn-text": {
    "textOverflow": "ellipsis",
    "lines": 1,
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var STYLE_MAP = {
    default: {
        backgroundColor: '#FFFFFF',
        borderColor: '#A5A5A5',
        borderWidth: '1px'
    },
    text: {
        borderWidth: '0px'
    },
    highlight: {
        backgroundColor: '#FFFFFF',
        borderColor: '#EE9900',
        borderWidth: '1px'
    },
    primary: {
        backgroundColor: '#3399ff',
        borderColor: '#3399ff',
        borderWidth: '1px'
    },
    success: {
        backgroundColor: '#00cc66',
        borderColor: '#00cc66',
        borderWidth: '1px'
    },
    warning: {
        backgroundColor: '#ff9900',
        borderColor: '#ff9900',
        borderWidth: '1px'
    },
    danger: {
        backgroundColor: '#ff4e24',
        borderColor: '#ff4e24',
        borderWidth: '1px'
    }
};

var TEXT_STYLE_MAP = {
    default: {
        color: '#657180'
    },
    text: {
        color: '#657180'
    },
    highlight: {
        color: '#EE9900'
    },
    primary: {
        color: '#ffffff'
    },
    success: {
        color: '#ffffff'
    },
    warning: {
        color: '#ffffff'
    },
    danger: {
        color: '#ffffff'
    }
};

var BTN_SIZE_MAP = {
    small: {
        "width": "200px",
        "height": "60px",
        "padding-left": "10px",
        "padding-right": "10px"
    },
    large: {
        "width": "500px",
        "height": "100px",
        "padding-left": "25px",
        "padding-right": "25px"
    },
    default: {
        "width": "300px",
        "height": "88px",
        "padding-left": "25px",
        "padding-right": "25px"
    }
};
var TEXT_SIZE_MAP = {
    small: {
        "font-size": "30px"
    },
    large: {
        "font-size": "45px"
    },
    default: {
        "font-size": "36px"
    }
};

module.exports = {
    props: {
        size: {
            type: String,
            default: "default"
        },
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        btnStyle: Object,
        textStyle: Object
    },
    computed: {
        exBtnStyle: function exBtnStyle() {
            var type = this.type,
                disabled = this.disabled,
                btnStyle = this.btnStyle,
                size = this.size;


            var exBtnStyle = Object.assign(STYLE_MAP[type], BTN_SIZE_MAP[size], btnStyle);
            return disabled ? Object.assign({}, exBtnStyle, {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderWidth: 0
            }) : exBtnStyle;
        },
        exTextStyle: function exTextStyle() {
            var type = this.type,
                disabled = this.disabled,
                textStyle = this.textStyle,
                size = this.size;

            var exTextStyle = Object.assign(TEXT_STYLE_MAP[type], TEXT_SIZE_MAP[size], textStyle);
            return disabled ? Object.assign({}, exTextStyle, { color: '#ffffff' }) : exTextStyle;
        }
    },
    methods: {
        _click: function _click(e) {
            if (!this.disabled) this.$emit('click', e);
        },
        _longPress: function _longPress(e) {
            if (!this.disabled) this.$emit('longpress', e);
        }
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["btn-block"],
    style: _vm.exBtnStyle,
    on: {
      "longpress": _vm._longPress,
      "click": _vm._click
    }
  }, [_vm._t("default"), (_vm.value != '') ? _c('text', {
    staticClass: ["btn-text"],
    style: _vm.exTextStyle
  }, [_vm._v(_vm._s(_vm.value))]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(19)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-checkbox.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2fcc4edd"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  "radio-box": {
    "alignItems": "center"
  },
  "checkbox": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#e2e2e2",
    "backgroundColor:active": "#f5f5f5"
  },
  "radio-label": {
    "fontSize": "30"
  },
  "disabled": {
    "opacity": 0.5
  },
  "undisabled": {
    "opacity": 1
  },
  "switch-box": {
    "height": "80",
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "switch": {
    "position": "absolute",
    "right": 0,
    "top": "15"
  },
  "switch-label": {
    "fontSize": "30"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-fluid": {
    "flexWrap": "wrap"
  },
  "cb-flex-9": {
    "flex": 9
  },
  "cb-flex-1": {
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "flex-end"
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buiOptionList = __webpack_require__(0);

var _buiOptionList2 = _interopRequireDefault(_buiOptionList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    components: { 'bui-option-list': _buiOptionList2.default },
    props: {
        "items": {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        // 是否可选
        "disabled": {
            type: Boolean,
            default: false
        },
        "value": {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        "direction": {
            type: String,
            default: 'horizontal' // horizontal | vertical
        },
        //可选个数限制
        "limit": {
            type: [Number, String],
            default: 10
        },
        //单选
        "single": {
            type: Boolean,
            default: false
        },
        "containerStyle": {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        "textStyles": {
            type: Object
        },
        "textDirection": {
            type: String,
            default: "right"
        },
        "fontSize": {
            type: String,
            default: '30px'
        },
        "iconSize": {
            type: String,
            default: '48px'
        },
        // 正常状态文字色值
        "color": {
            type: String,
            default: '#9ea7b4'
        },
        // 选中状态文字色值
        "selectedColor": {
            type: String,
            default: '#00cc66'
        },
        "selectIcon": {
            type: String,
            default: "ion-ios-checkmark"
        },
        "unSelectedIcon": {
            type: String,
            default: "ion-ios-checkmark-outline"
        }
    },
    mounted: function mounted() {},
    data: function data() {
        return {
            newItems: this.initList()
        };
    },

    watch: {
        value: function value() {
            this.newItems = this.initList();
        }
    },
    computed: {
        customStyles: function customStyles() {
            return {
                "textDirection": this.textDirection,
                "direction": this.direction,
                "fontSize": this.fontSize,
                "iconSize": this.iconSize,
                "color": this.color,
                "selectedColor": this.selectedColor,
                "selectIcon": this.selectIcon,
                "unSelectedIcon": this.unSelectedIcon,
                "textStyles": this.textStyles,
                "leftColumn": this.leftColumn
            };
        },

        // boxStyle(){
        //     const { disabled } = this;
        //     return {
        //         opacity: disabled ? 0.5 : 1
        //     }
        // },
        cWrapperStyle: function cWrapperStyle() {
            var disabled = this.disabled;

            return {
                opacity: disabled ? 0.5 : 1,
                paddingTop: '15px',
                paddingBottom: '15px'
            };
        },
        changeDirection: function changeDirection() {
            return this.direction == "horizontal" ? "flex-row" : "flex-column";
        },
        leftColumn: function leftColumn() {
            return this.direction == "horizontal" ? false : true;
        }
    },
    created: function created() {},

    methods: {
        //数据赋值
        initList: function initList() {
            var _this = this;

            var selectedCount = 0;

            var newItems = this.items.map(function (item, i) {
                var disabled = item.disabled;

                disabled = !!disabled;
                // disabled为true时认为selected无效，同时单选模式下只认为第一个selected为true的为有效值
                // selected = !disabled && !!selected && (!single || selectedCount === 0);
                if (_this.value.indexOf(item.value) != -1) {
                    Vue.set(item, 'selected', true);
                    selectedCount += 1;
                } else {
                    Vue.set(item, 'selected', false);
                }
                return item;
            });
            this.selectedCount = selectedCount;
            return newItems;
        },

        //点击筛选操作
        select: function select(index) {
            if (this.disabled) return;
            var selected = this.newItems[index].selected;
            if (this.limit <= this.selectedCount && !selected) {
                this.$emit('overLimit', this.limit);
            } else {
                this.updateList(index);
                if (this.value.indexOf(this.newItems[index].value) != -1) {
                    this.value.splice(this.value.indexOf(this.newItems[index].value), 1);
                } else {
                    this.value.push(this.newItems[index].value);
                }
                this.$emit('selected', this.value, this.newItems.filter(function (item) {
                    return item.selected;
                }));
                this.$emit('input', this.value, this.newItems.filter(function (item) {
                    return item.selected;
                }));
                this.$emit("change", this.value, this.newItems.filter(function (item) {
                    return item.selected;
                }));
            }
        },

        //筛选时数据渲染
        updateList: function updateList(index) {
            var _this2 = this;

            var single = this.single;
            var selectedCount = 0;
            this.newItems = this.newItems.map(function (item, i) {
                if (_this2.single) {
                    item.selected = index === i && !item.selected;
                    _this2.value.splice(0, _this2.value.length);
                } else {
                    if (i === index) item.selected = !item.selected;
                }
                if (item.selected) selectedCount += 1;
                return item;
            });

            this.selectedCount = selectedCount;
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {
  "radio-box": {
    "alignItems": "center"
  },
  "checkbox": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#e2e2e2",
    "backgroundColor:active": "#f5f5f5"
  },
  "radio-label": {
    "fontSize": "30"
  },
  "disabled": {
    "opacity": 0.5
  },
  "undisabled": {
    "opacity": 1
  },
  "switch-box": {
    "height": "80",
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "switch": {
    "position": "absolute",
    "right": 0,
    "top": "15"
  },
  "switch-label": {
    "fontSize": "30"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-fluid": {
    "flexWrap": "wrap"
  },
  "cb-flex-9": {
    "flex": 9
  },
  "cb-flex-1": {
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "flex-end"
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
    props: {
        "textDirection": {
            type: String,
            default: "right"
        },
        "leftColumn": {
            type: Boolean,
            default: false
        },
        "index": {
            type: Number,
            default: -1
        },
        // 是否可选
        "disabled": {
            type: Boolean,
            default: false
        },
        // 是否选中
        "selected": {
            type: Boolean,
            default: false
        },
        // 标题
        "title": {
            type: String,
            default: ''
        },
        "fontSize": {
            type: String,
            default: '30px'
        },
        "iconSize": {
            type: String,
            default: '48px'
        },
        // 正常状态文字色值
        "color": {
            type: String,
            default: '#9ea7b4'
        },
        // 选中状态文字色值
        "selectedColor": {
            type: String,
            default: '#00cc66'
        },
        "selectIcon": {
            type: String,
            default: "ion-ios-checkmark"
        },
        "unSelectedIcon": {
            type: String,
            default: "ion-ios-checkmark-outline"
        },
        "textStyles": {
            type: Object
        }
    },
    computed: {
        //多格筛选项外框样式
        isOpacity: function isOpacity() {
            var disabled = this.disabled;

            return disabled ? 'disabled' : 'undisabled';
        },

        //多格筛选项文字样式
        cTitleStyle: function cTitleStyle() {
            var color = this.color,
                selectedColor = this.selectedColor,
                fontSize = this.fontSize;
            var selected = this.selected;

            return {
                "font-size": fontSize,
                "color": selected ? selectedColor : color,
                "marginLeft": '5px'
            };
        },
        lasetColor: function lasetColor() {
            var color = this.color,
                selectedColor = this.selectedColor;
            var selected = this.selected;

            return selected ? selectedColor : color;
        },
        iconName: function iconName() {
            var selectIcon = this.selectIcon,
                unSelectedIcon = this.unSelectedIcon;
            var selected = this.selected;

            return selected ? selectIcon : unSelectedIcon;
        },
        fullCell: function fullCell() {
            var leftColumn = this.leftColumn;

            return leftColumn ? 'cb-flex-9' : '';
        }
    },
    methods: {
        _click: function _click() {
            if (!this.disabled) {
                this.$emit('select', this.index);
            }
        }
    }
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["radio-box", "flex-row"],
    class: [_vm.isOpacity],
    attrs: {
      "accessible": true,
      "ariaLabel": (_vm.title + "," + (_vm.checked?'已选中':'未选中'))
    },
    on: {
      "click": _vm._click
    }
  }, [(_vm.textDirection === 'right') ? _c('bui-icon', {
    attrs: {
      "size": _vm.iconSize,
      "name": _vm.iconName,
      "color": _vm.lasetColor
    },
    on: {
      "click": _vm._click
    }
  }) : _vm._e(), _c('text', {
    staticClass: ["radio-label"],
    class: [_vm.fullCell],
    style: Object.assign({}, _vm.cTitleStyle, _vm.textStyles)
  }, [_vm._v(_vm._s(_vm.title || _vm.value))]), (_vm.textDirection === 'left') ? _c('bui-icon', {
    attrs: {
      "size": _vm.iconSize,
      "name": _vm.iconName,
      "color": _vm.lasetColor
    },
    on: {
      "click": _vm._click
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [_vm.changeDirection, 'flex-fluid']
  }, _vm._l((_vm.newItems), function(item, index) {
    return _c('bui-option-list', _vm._b({
      key: index,
      style: Object.assign({}, _vm.cWrapperStyle, _vm.containerStyle),
      attrs: {
        "index": index
      },
      on: {
        "select": function($event) {
          _vm.select(index)
        }
      }
    }, 'bui-option-list', Object.assign({}, _vm.customStyles, item), false))
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(21)
)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(23)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-checkbox-list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6355ae3e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  "radio-box": {
    "alignItems": "center"
  },
  "checkbox": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#e2e2e2",
    "backgroundColor:active": "#f5f5f5"
  },
  "radio-label": {
    "fontSize": "30"
  },
  "disabled": {
    "opacity": 0.5
  },
  "undisabled": {
    "opacity": 1
  },
  "switch-box": {
    "height": "80",
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "switch": {
    "position": "absolute",
    "right": 0,
    "top": "15"
  },
  "switch-label": {
    "fontSize": "30"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-fluid": {
    "flexWrap": "wrap"
  },
  "cb-flex-9": {
    "flex": 9
  },
  "cb-flex-1": {
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "flex-end"
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//

module.exports = {
    props: {
        "value": {
            type: Array
        },
        "items": {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        "fontSize": {
            type: [String, Number],
            default: 32
        },
        "iconSize": {
            type: [String, Number],
            default: 48
        },
        "selectedColor": {
            type: String,
            default: "#00cc66"
        },
        "unSelectedColor": {
            type: String,
            default: "#e2e2e2"
        }
    },
    data: function data() {
        return {};
    },

    methods: {
        select: function select(v) {
            if (v.disabled) return;
            var i = this.value.indexOf(v.value);
            if (i != -1) {
                // 已经存在，则将其删除
                this.value.splice(i, 1); // TODO: 这里直接操作了 props
            } else {
                // 不存在，则添加
                this.value.push(v.value); // TODO: 这里直接操作了 props
            }
            this.$emit("change", this.value);
            this.$emit("input", this.value);
        }
    }
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['flex-fluid']
  }, _vm._l((_vm.items), function(v) {
    return _c('div', {
      staticClass: ["radio-box", "checkbox", "flex-row"],
      class: [v.disabled ? 'disabled' : ''],
      on: {
        "click": function($event) {
          _vm.select(v)
        }
      }
    }, [_c('text', {
      staticClass: ["radio-label", "cb-flex-9"],
      style: {
        'font-size': _vm.fontSize
      }
    }, [_vm._v(_vm._s(v.title || v.value))]), (_vm.value.indexOf(v.value) != -1) ? _c('div', {
      staticClass: ["cb-flex-1"]
    }, [_c('bui-icon', {
      attrs: {
        "size": _vm.iconSize,
        "name": "ion-android-checkbox",
        "color": _vm.selectedColor
      },
      on: {
        "click": function($event) {
          _vm.select(v)
        }
      }
    })], 1) : _vm._e(), (_vm.value.indexOf(v.value) == -1) ? _c('div', {
      staticClass: ["cb-flex-1"]
    }, [_c('bui-icon', {
      attrs: {
        "size": _vm.iconSize,
        "name": "ion-android-checkbox-outline-blank",
        "color": _vm.unSelectedColor
      },
      on: {
        "click": function($event) {
          _vm.select(v)
        }
      }
    })], 1) : _vm._e()])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(25)
)

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(27)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-dialog.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-76a77e62"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
  "bui-dialog1": {
    "backgroundColor": "#ffffff",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "height": "200",
    "top": "300",
    "left": "50",
    "right": "50",
    "flex": 1
  },
  "bui-dialog": {
    "position": "fixed",
    "backgroundColor": "#ffffff",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "top": "300",
    "left": "50",
    "right": "50"
  },
  "bui-dialog-title": {
    "justifyContent": "center",
    "height": "80",
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "dialog-title-text": {
    "color": "#000000",
    "fontSize": "35"
  },
  "bui-dialog-content": {
    "height": "220",
    "paddingLeft": "30",
    "paddingRight": "30",
    "paddingBottom": "32"
  },
  "bui-dialog-footer": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "height": "90",
    "borderTopWidth": "1",
    "borderTopStyle": "solid",
    "borderTopColor": "#d7dde4"
  },
  "dialog-action-text": {
    "flex": 1,
    "textAlign": "center",
    "fontSize": "32",
    "color": "#3399ff",
    "borderRightWidth": "1",
    "borderRightStyle": "solid",
    "borderRightColor": "#d7dde4",
    "color:active": "#000000"
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
    props: {
        height: {
            type: [String, Number],
            default: 200
        },
        top: {
            type: [String, Number],
            default: 300
        },
        title: {
            type: String,
            default: "标题"
        },
        buttons: {
            type: String,
            default: "取消,确定"
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        value: function value(val) {
            this.$emit('input', val);
        }
    },
    computed: {
        getButtons: function getButtons() {
            return this.buttons.split(',');
        }
    },
    methods: {
        _click: function _click(text) {
            this.$emit("btnClick", text);
        },
        _maskClick: function _maskClick() {
            this.$emit('input', false);
            this.$emit("maskClick");
        }
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.value) ? _c('div', [_c('bui-mask', {
    on: {
      "click": _vm._maskClick
    }
  }), _c('div', {
    staticClass: ["bui-dialog"],
    style: {
      top: _vm.top
    }
  }, [_c('div', {
    staticClass: ["bui-dialog-title"]
  }, [_c('text', {
    staticClass: ["dialog-title-text"]
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: ["bui-dialog-content"],
    style: {
      height: _vm.height
    }
  }, [_c('scroller', [_vm._t("default")], 2)]), _c('div', {
    staticClass: ["bui-dialog-footer"]
  }, _vm._l((_vm.getButtons), function(btn) {
    return _c('text', {
      staticClass: ["dialog-action-text"],
      on: {
        "click": function($event) {
          _vm._click(btn)
        }
      }
    }, [_vm._v(_vm._s(btn))])
  }))])], 1) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(29)
)

/* script */
__vue_exports__ = __webpack_require__(30)

/* template */
var __vue_template__ = __webpack_require__(31)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-dropdown.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0067a02b"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {
  "bui-dropdown-box": {
    "position": "fixed",
    "opacity": 0,
    "transform": "scale(0.9, 0.9)"
  },
  "bui-dropdown-content": {
    "marginTop": "40",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "flex": 1
  },
  "bui-dropdown-arrow": {
    "position": "absolute"
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
var platform = weex.config.env.platform;
var colorWhite = "#ffffff";
module.exports = {
    data: function data() {
        return {
            width: "260px",
            left: "0px",
            top: "20px",
            arrowLeft: "40px",
            arrowTop: '1px',
            translatestyle: {},
            position: {
                width: '0px',
                height: '0px',
                left: '0px',
                right: '0px'
            }
        };
    },

    props: {
        up: {
            type: Boolean,
            default: false
        },
        value: {
            type: Boolean,
            default: false
        },
        bgColor: {
            type: String,
            default: colorWhite
        },
        center: {
            type: Boolean,
            default: false
        },
        autoWidth: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        value: function value(val) {
            this.$emit('input', val);
        }
    },
    methods: {
        show: function show(event, height) {
            var _this = this;

            this.value = true;
            this._reset();
            setTimeout(function () {
                _this._open(event, height);
            }, 50);
        },
        hide: function hide() {
            var _this2 = this;

            var el = this.$refs.dropdownBox;
            var translate = 'scale(0.9, 0.9)';
            this._animationFn(el, "0", translate, 'ease-out', function () {
                _this2.value = false;
                _this2.$emit('hide');
            });
        },
        _reset: function _reset() {
            this.width = "260px";
            this.arrowLeft = "40px";
            this.arrowTop = '1px';
        },
        _open: function _open(event, height) {
            var el = this.$refs.dropdownBox;
            this.position = event.position;
            //autoWidth默认true，宽度按触发元素宽度自适应，如果控制宽度可设置为false，宽度为260px
            if (this.autoWidth) {
                if (this.position.width >= 260) {
                    this.width = this.position.width;
                    if (this.center) {
                        this.arrowLeft = this.position.width / 2 - 20;
                        this.left = this.position.x;
                    } else {
                        if (750 - this.position.x < 260) {
                            this.left = this.position.x - (260 - (750 - this.position.x)) - 20;
                            this.arrowLeft = 260 - 80;
                        } else {
                            this.left = this.position.x + "px";
                        }
                    }
                } else {
                    if (this.center) {
                        this.arrowLeft = 260 / 2 - 20;
                        this.left = this.position.x - (260 - this.position.width) / 2;
                    } else {
                        if (750 - this.position.x < 260) {
                            this.left = this.position.x - (260 - (750 - this.position.x)) - 20;
                            this.arrowLeft = 260 - 80;
                        } else {
                            this.left = this.position.x + "px";
                        }
                    }
                }
            } else {
                if (this.center) {
                    this.arrowLeft = 260 / 2 - 20;
                    this.left = this.position.x + this.position.width / 2 - 130;
                } else {
                    if (this.position.x == 0) {
                        this.left = this.position.x + 20;
                    }
                    if (750 - this.position.x <= 260) {
                        this.left = this.position.x - (260 - (750 - this.position.x)) - 20;
                        this.arrowLeft = 260 - 80;
                    }
                }
            }

            if (platform == "android") {
                this.top = this.position.y - 60;
            } else if (platform == "iOS") {
                this.top = this.position.y - 20;
            }

            var translate;
            if (this.up) {
                this.top = this.top - (height - 0) - this.position.height;
                this.arrowTop = 1 - 0 + (height - 0) + 26;
                this.translatestyle = {
                    'transform': 'rotate(180deg)'
                };
                translate = "translate(0px, -65px)";
            } else {
                this.top = this.top - this.position.height;
                translate = "translate(0px, 50px)";
            }

            this._animationFn(el, "1", translate, 'ease-in');
        },
        _animationFn: function _animationFn(el, opacity, translate, timing, fn) {
            animation.transition(el, {
                styles: {
                    opacity: opacity,
                    transform: translate,
                    transformOrigin: 'center center'
                },
                duration: 200,
                timingFunction: timing,
                delay: 0
            }, function () {
                fn && fn();
            });
        },
        _maskClick: function _maskClick() {
            this.hide();
        }
    }
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.value) ? _c('div', {
    staticClass: ["bui-dropdown"]
  }, [_c('bui-mask', {
    on: {
      "click": _vm._maskClick
    }
  }), _c('div', {
    ref: "dropdownBox",
    staticClass: ["bui-dropdown-box"],
    style: {
      'left': _vm.left,
      'top': _vm.top,
      'width': _vm.width
    }
  }, [_c('div', {
    staticClass: ["bui-dropdown-content"],
    style: {
      'background-color': _vm.bgColor
    }
  }, [_vm._t("default")], 2), _c('bui-icon', {
    staticClass: ["bui-dropdown-arrow"],
    style: Object.assign({
      'left': _vm.arrowLeft,
      'top': _vm.arrowTop
    }, _vm.translatestyle),
    attrs: {
      "name": "ion-arrow-up-b",
      "size": "60px",
      "color": _vm.bgColor
    }
  })], 1)], 1) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(33)
)
__vue_styles__.push(__webpack_require__(34)
)

/* script */
__vue_exports__ = __webpack_require__(35)

/* template */
var __vue_template__ = __webpack_require__(36)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3f143927"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {
  "bui-header": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "bui-header-left": {
    "flex": 1,
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "10"
  },
  "bui-header-main": {
    "flex": 2,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "bui-header-right": {
    "flex": 1,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "paddingRight": "10"
  },
  "bui-header-title": {
    "fontSize": "34",
    "textAlign": "center",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "bui-header-text": {
    "fontSize": "34",
    "textAlign": "center"
  },
  "hot": {
    "paddingLeft": "10",
    "paddingRight": "10"
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-fluid": {
    "flexWrap": "wrap"
  },
  "center": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "column-center-top": {
    "alignItems": "center"
  },
  "column-center-bottom": {
    "justifyContent": "flex-end",
    "alignItems": "center"
  },
  "column-center-left": {
    "justifyContent": "center",
    "alignItems": "flex-start"
  },
  "column-center-right": {
    "justifyContent": "center",
    "alignItems": "flex-end"
  },
  "column-left-top": {
    "alignItems": "flex-start"
  },
  "column-right-top": {
    "alignItems": "flex-end"
  },
  "column-left-bottom": {
    "justifyContent": "flex-end",
    "alignItems": "flex-start"
  },
  "column-right-bottom": {
    "justifyContent": "flex-end",
    "alignItems": "flex-end"
  },
  "row-space-between": {
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "row-center-top": {
    "justifyContent": "center",
    "alignItems": "flex-start"
  },
  "row-center-bottom": {
    "justifyContent": "center",
    "alignItems": "flex-end"
  },
  "row-center-left": {
    "alignItems": "center"
  },
  "row-center-right": {
    "justifyContent": "flex-end",
    "alignItems": "center"
  },
  "row-left-top": {
    "alignItems": "flex-start"
  },
  "row-right-top": {
    "justifyContent": "flex-end",
    "alignItems": "flex-start"
  },
  "row-left-bottom": {
    "alignItems": "flex-end"
  },
  "row-right-bottom": {
    "justifyContent": "flex-end",
    "alignItems": "flex-end"
  },
  "span1": {
    "flex": 1
  },
  "span2": {
    "flex": 2
  },
  "span3": {
    "flex": 3
  },
  "span4": {
    "flex": 4
  },
  "span5": {
    "flex": 5
  },
  "span6": {
    "flex": 6
  },
  "span7": {
    "flex": 7
  },
  "span8": {
    "flex": 8
  },
  "span9": {
    "flex": 9
  },
  "span10": {
    "flex": 10
  },
  "span11": {
    "flex": 11
  },
  "span12": {
    "flex": 12
  },
  "flex1": {
    "flex": 1
  },
  "flex2": {
    "flex": 2
  },
  "flex3": {
    "flex": 3
  },
  "flex4": {
    "flex": 4
  },
  "flex5": {
    "flex": 5
  },
  "flex6": {
    "flex": 6
  },
  "flex7": {
    "flex": 7
  },
  "flex8": {
    "flex": 8
  },
  "flex9": {
    "flex": 9
  },
  "flex10": {
    "flex": 10
  },
  "flex11": {
    "flex": 11
  },
  "flex12": {
    "flex": 12
  },
  "p-a": {
    "position": "absolute"
  }
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var defaultItem = {
    icon: '',
    icons: '',
    text: ''
};

var platform = weex.config.env.platform.toLowerCase();
module.exports = {
    data: function data() {
        return {
            activeColor: "#b9c2cf"
        };
    },

    props: {
        title: {
            type: String,
            default: ""
        },
        leftItem: {
            type: Object,
            default: defaultItem
        },
        rightItem: {
            type: Object,
            default: defaultItem
        },
        textColor: {
            type: String,
            default: "#ffffff"
        },
        iconColor: {
            type: String,
            default: "#ffffff"
        },
        iconSize: {
            type: String,
            default: "48px"
        },
        backgroundColor: {
            type: String,
            default: "#4ca4fe"
        },
        height: {
            type: String,
            default: "44wx"
        },
        maxTitleWidth: {
            type: String,
            default: "400px"
        }
    },
    computed: {
        iosFixed: function iosFixed() {
            return platform === "ios";
        },
        fixedHeight: function fixedHeight() {
            return this.iosFixed && _util2.default.isIPhoneX() ? "44wx" : "20wx";
        }
    },
    methods: {
        _leftClick: function _leftClick(e) {
            this.$emit('leftClick', e);
        },
        _rightClick: function _rightClick(e) {
            this.$emit('rightClick', e);
        },
        _centerClick: function _centerClick(e) {
            this.$emit('centerClick', e);
        }
    }
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: {
      'background-color': _vm.backgroundColor
    }
  }, [(_vm.iosFixed) ? _c('div', {
    style: {
      'height': _vm.fixedHeight
    }
  }) : _vm._e(), _c('div', {
    staticClass: ["bui-header"],
    style: {
      'height': _vm.height
    }
  }, [_c('div', {
    staticClass: ["bui-header-left"],
    style: {
      'height': _vm.height
    }
  }, [(_vm.leftItem) ? _c('div', {
    staticClass: ["flex-row", "column-center-top", "hot"],
    style: {
      'height': _vm.height
    },
    on: {
      "click": function($event) {
        _vm._leftClick($event)
      }
    }
  }, [(_vm.leftItem.icon || _vm.leftItem.icons) ? _c('bui-icon', {
    attrs: {
      "activeColor": _vm.activeColor,
      "name": _vm.leftItem.icon || _vm.leftItem.icons,
      "size": _vm.iconSize,
      "color": _vm.iconColor
    },
    on: {
      "click": function($event) {
        _vm._leftClick($event)
      }
    }
  }) : _vm._e(), (_vm.leftItem.text) ? _c('text', {
    staticClass: ["bui-header-text"],
    style: {
      'color': _vm.textColor,
      'color:active': _vm.activeColor,
      'margin-left': '10px'
    },
    on: {
      "click": function($event) {
        _vm._leftClick($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.leftItem.text))]) : _vm._e()], 1) : _vm._e(), _vm._t("left")], 2), _c('div', {
    staticClass: ["bui-header-main"]
  }, [(_vm.title !== '') ? _c('div', {
    style: {
      width: _vm.maxTitleWidth
    }
  }, [_c('text', {
    staticClass: ["bui-header-title"],
    style: {
      'color': _vm.textColor
    },
    on: {
      "click": function($event) {
        _vm._centerClick($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.title))])]) : _vm._e(), _vm._t("center")], 2), _c('div', {
    staticClass: ["bui-header-right"],
    style: {
      'height': _vm.height
    }
  }, [(_vm.rightItem) ? _c('div', {
    staticClass: ["flex-row", "column-center-top", "hot"],
    style: {
      'height': _vm.height
    },
    on: {
      "click": function($event) {
        _vm._rightClick($event)
      }
    }
  }, [(_vm.rightItem.icon || _vm.rightItem.icons) ? _c('bui-icon', {
    attrs: {
      "activeColor": _vm.activeColor,
      "name": _vm.rightItem.icon || _vm.rightItem.icons,
      "size": _vm.iconSize,
      "color": _vm.iconColor
    },
    on: {
      "click": function($event) {
        _vm._rightClick($event)
      }
    }
  }) : _vm._e(), (_vm.rightItem.text) ? _c('text', {
    staticClass: ["bui-header-text"],
    style: {
      'color': _vm.textColor,
      'color:active': _vm.activeColor,
      'margin-left': '10px'
    },
    on: {
      "click": function($event) {
        _vm._rightClick($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.rightItem.text))]) : _vm._e()], 1) : _vm._e(), _vm._t("right")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(38)
)

/* script */
__vue_exports__ = __webpack_require__(39)

/* template */
var __vue_template__ = __webpack_require__(40)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-icon.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-04e87593"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = {
  "icon": {
    "textAlign": "center"
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var iconItems = __webpack_require__(2);
var fontFamily = "ionfont";
var domModule = weex.requireModule("dom");
module.exports = {
    beforeCreate: function beforeCreate() {
        var url = weex.config.bundleUrl;
        if (url.indexOf('?') > 0) {
            url = url.substring(0, url.indexOf('?'));
        }
        url = url.split('/').slice(0, -1).join('/');

        if (url.indexOf("http") != 0 && url.indexOf("file") != 0) {
            if (url.indexOf("/") == 0) {
                url = url.substring(url.indexOf("/") + 1);
            }
            url = "local://" + (url == "" ? '' : "/") + url;
        }
        url = url + "/font/ionicons.ttf";
        domModule.addRule('fontFace', {
            'fontFamily': fontFamily,
            'src': "url('" + url + "')"
        });
    },

    props: {
        name: {
            type: String,
            defalut: ''
        },
        color: {
            type: String,
            default: '#9ea7b4'
        },
        size: {
            type: [Number, String],
            default: 48
        },
        activeColor: {
            type: String
        }
    },
    computed: {
        getFontName: function getFontName() {
            var icon = iconItems[this.name];
            return this.decode(icon || '');
        },
        getStyle: function getStyle() {
            var style = {
                'color': this.color,
                'font-size': this.size,
                'font-family': fontFamily
            };
            if (this.activeColor) {
                style["color:active"] = this.activeColor;
            }
            return style;
        }
    },
    methods: {
        _click: function _click(e) {
            this.$emit("click", e);
        },
        decode: function decode(fontCode) {
            if (/^&#x/.test(fontCode)) {
                return String.fromCharCode(fontCode.replace(/^&#x/, '0x').replace(/;$/, ''));
            } else {
                return String.fromCharCode('0x' + fontCode);
            }
        }
    }
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["icon-block"],
    style: {
      width: _vm.size,
      height: _vm.size
    },
    on: {
      "click": function($event) {
        _vm._click($event)
      }
    }
  }, [_c('text', {
    staticClass: ["icon"],
    style: _vm.getStyle,
    on: {
      "click": function($event) {
        _vm._click($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.getFontName))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(42)

/* template */
var __vue_template__ = __webpack_require__(43)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-image.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//

module.exports = {
    computed: {
        imagePath: function imagePath() {
            if (this.src != "") {
                return this._isHttpOrFile(this.src) ? this.src : this._getContext() + this.src;
            }
        },
        placeholderPath: function placeholderPath() {
            if (this.placeholder != "") {
                return this._isHttpOrFile(this.placeholder) ? this.placeholder : this._getContext() + this.placeholder;
            }
        }
    },
    props: {
        width: {
            type: String
        },
        height: {
            type: String
        },
        src: {
            type: String
        },
        resize: {
            type: String,
            default: "stretch"
        },
        placeholder: {
            type: String,
            default: ""
        },
        radius: {
            type: [String, Number],
            default: "0px"
        }
    },
    methods: {
        _click: function _click(e) {
            this.$emit('click', e);
        },
        _load: function _load() {
            this.$emit('load');
        },
        _isHttpOrFile: function _isHttpOrFile(path) {
            //http file base64
            return path.indexOf("http") == 0 || path.indexOf("file") == 0 || path.indexOf("data:image") == 0;
        },
        _getContext: function _getContext() {
            var url = weex.config.bundleUrl;
            if (url.indexOf('?') > 0) {
                url = url.substring(0, url.indexOf('?'));
            }
            url = url.split('/').slice(0, -1).join('/');
            if (this._isHttpOrFile(url)) {
                return url;
            } else {
                if (url.indexOf("/") == 0) {
                    url = url.substring(url.indexOf("/") + 1);
                }
                url = "file:///android_asset" + (url == "" ? '' : "/") + url;
            }
            return url;
        }
    }
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('image', {
    style: {
      'border-radius': _vm.radius,
      'width': _vm.width,
      'height': _vm.height
    },
    attrs: {
      "src": _vm.imagePath,
      "placeholder": _vm.placeholderPath,
      "resize": _vm.resize
    },
    on: {
      "click": function($event) {
        _vm._click($event)
      },
      "load": function($event) {
        _vm._load()
      }
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(45)
)

/* script */
__vue_exports__ = __webpack_require__(46)

/* template */
var __vue_template__ = __webpack_require__(47)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-lazy-render.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2580a036"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = {
  "lazy-tip": {
    "textAlign": "center",
    "fontSize": "30"
  },
  "lazy-load-mask": {
    "height": "60",
    "paddingTop": "10",
    "opacity": 1
  }
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            show: true // 是否渲染组件
        };
    },

    props: {
        data: Array, // 需要在组件内渲染的数据
        maskClass: String, // 遮罩层样式
        tip: {
            type: String,
            default: function _default() {
                return '正在渲染,请稍候';
            }
        },
        time: { // 延迟渲染的时间
            type: Number,
            default: function _default() {
                return 10;
            }
        },
        limit: { // 超过多少条数据开启延迟渲染
            type: Number,
            default: function _default() {
                return 30;
            }
        },
        trackByData: Boolean, // 是否跟踪data的变化来渲染列表
        immediately: Boolean // 是否立即重新渲染
    },
    created: function created() {
        this.showLazy();
    },

    watch: {
        data: function data() {
            // 数据变化时重新渲染
            if (this.trackByData) {
                this.showLazy();
            }
        },

        // 路由变化,重新渲染
        $route: function $route() {
            if (!this.trackByData) {
                this.showLazy();
            }
        },

        // 立即重新变为true时,重新渲染
        immediately: function immediately() {
            if (this.immediately) {
                this.showLazy();
            }
        }
    },
    methods: {
        //延迟渲染数据,在数据渲染完成后触发loaded事件
        showLazy: function showLazy() {
            if (this.data && this.data.length > this.limit || !this.data) {
                // 如果数据存在并且数据的数量比限定的数量大,则开启延迟渲染 如果不是列表调用组件,也开启延迟渲染
                this.syncLoader();
            } else {
                // 其他情况,不开启延迟渲染
                this.show = true;
                this.$emit('loaded');
            }
        },

        //延迟渲染
        syncLoader: function syncLoader() {
            var _this = this;

            this.show = false;
            setTimeout(function () {
                _this.show = true;
                _this.$emit('loaded');
            }, parseInt(this.time));
        }
    }
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["lazy-load"]
  }, [(_vm.show) ? _vm._t("default") : _vm._e(), (!_vm.show) ? _c('div', {
    ref: "mask",
    class: [_vm.maskClass ? _vm.maskClass : 'lazy-load-mask']
  }, [_c('text', {
    staticClass: ["lazy-tip"]
  }, [_vm._v(_vm._s(_vm.tip))])]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(49)
)

/* script */
__vue_exports__ = __webpack_require__(50)

/* template */
var __vue_template__ = __webpack_require__(51)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-load.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c2340100"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = {
  "load-block": {
    "position": "fixed",
    "left": "280",
    "right": "280",
    "height": "150",
    "backgroundColor": "#000000",
    "opacity": 0.7,
    "top": "350",
    "paddingLeft": "20",
    "paddingRight": "20",
    "borderTopLeftRadius": "15",
    "borderTopRightRadius": "15",
    "borderBottomRightRadius": "15",
    "borderBottomLeftRadius": "15",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "load-text": {
    "color": "#ffffff",
    "fontSize": "30"
  },
  "load-icon": {
    "width": "64",
    "height": "64",
    "fontSize": "50",
    "textAlign": "center"
  }
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
module.exports = {
    props: {
        message: {
            type: String,
            default: '加载中...'
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            visible: false
        };
    },
    watch: {
        value: function value(val) {
            this.visible = val;
        },
        visible: function visible(val) {
            this.$emit('input', val);
        }
    },
    mounted: function mounted() {
        if (this.value) {
            this.visible = true;
        }
    },

    methods: {
        _maskClick: function _maskClick() {
            this.visible = false;
            this.$emit("maskClick");
        }
    }
};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible) ? _c('div', {
    attrs: {
      "value": _vm.value
    }
  }, [_c('bui-mask', {
    on: {
      "click": _vm._maskClick
    }
  }), _c('div', {
    staticClass: ["load-block"]
  }, [_c('bui-icon', {
    staticClass: ["load-icon"],
    attrs: {
      "name": "ion-load-b"
    }
  }), _c('text', {
    staticClass: ["load-text"]
  }, [_vm._v(_vm._s(_vm.message))])], 1)], 1) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(53)
)

/* script */
__vue_exports__ = __webpack_require__(54)

/* template */
var __vue_template__ = __webpack_require__(55)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-mask.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4149ce86"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = {
  "bui-mask": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0.2)"
  }
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//


module.exports = {
    props: {
        rgba: {
            type: [String, Number],
            default: '0.2'
        }
    },
    computed: {
        newRgba: function newRgba() {
            return this.rgba + '';
        }
    },
    methods: {
        _click: function _click() {
            this.$emit("click");
        }
    }
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bui-mask"],
    style: {
      'background-color': 'rgba(0,0,0,' + _vm.rgba + ')'
    },
    on: {
      "click": _vm._click
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(57)
)

/* script */
__vue_exports__ = __webpack_require__(58)

/* template */
var __vue_template__ = __webpack_require__(59)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-panel.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d56be04c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = {
  "panel": {
    "marginBottom": "20",
    "backgroundColor": "#ffffff",
    "borderColor": "#dddddd",
    "borderWidth": "1"
  },
  "panel-primary": {
    "borderColor": "#3399ff"
  },
  "panel-success": {
    "borderColor": "#00cc66"
  },
  "panel-info": {
    "borderColor": "#5BC0DE"
  },
  "panel-warning": {
    "borderColor": "#ff9900"
  },
  "panel-danger": {
    "borderColor": "#ff4e24"
  },
  "panel-header": {
    "backgroundColor": "#f5f5f5",
    "fontSize": "34",
    "color": "#464c5b"
  },
  "panel-header-primary": {
    "backgroundColor": "#3399ff",
    "color": "#ffffff"
  },
  "panel-header-success": {
    "backgroundColor": "#00cc66",
    "color": "#ffffff"
  },
  "panel-header-info": {
    "backgroundColor": "#5BC0DE",
    "color": "#ffffff"
  },
  "panel-header-warning": {
    "backgroundColor": "#ff9900",
    "color": "#ffffff"
  },
  "panel-header-danger": {
    "backgroundColor": "#ff4e24",
    "color": "#ffffff"
  }
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  props: {
    type: { default: 'default' },
    title: { default: '' },
    paddingBody: { default: 20 },
    paddingHead: { default: 20 },
    border: { default: 0 }
  }
};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['panel', 'panel-' + _vm.type],
    style: {
      borderWidth: _vm.border
    }
  }, [_c('text', {
    class: ['panel-header', 'panel-header-' + _vm.type],
    style: {
      paddingTop: _vm.paddingHead,
      paddingBottom: _vm.paddingHead,
      paddingLeft: _vm.paddingHead * 1.5,
      paddingRight: _vm.paddingHead * 1.5
    }
  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
    class: ['panel-body', 'panel-body-' + _vm.type],
    style: {
      paddingTop: _vm.paddingBody,
      paddingBottom: _vm.paddingBody,
      paddingLeft: _vm.paddingBody * 1.5,
      paddingRight: _vm.paddingBody * 1.5
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(61)
)

/* script */
__vue_exports__ = __webpack_require__(62)

/* template */
var __vue_template__ = __webpack_require__(63)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-radio.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-985b735e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = {
  "radio-box": {
    "alignItems": "center"
  },
  "checkbox": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#e2e2e2",
    "backgroundColor:active": "#f5f5f5"
  },
  "radio-label": {
    "fontSize": "30"
  },
  "disabled": {
    "opacity": 0.5
  },
  "undisabled": {
    "opacity": 1
  },
  "switch-box": {
    "height": "80",
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "switch": {
    "position": "absolute",
    "right": 0,
    "top": "15"
  },
  "switch-label": {
    "fontSize": "30"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-fluid": {
    "flexWrap": "wrap"
  },
  "cb-flex-9": {
    "flex": 9
  },
  "cb-flex-1": {
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "flex-end"
  }
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buiOptionList = __webpack_require__(0);

var _buiOptionList2 = _interopRequireDefault(_buiOptionList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    components: { 'bui-option-list': _buiOptionList2.default },
    props: {
        "items": {
            type: Array
        },
        // 是否可选
        "disabled": {
            type: Boolean,
            default: false
        },
        "value": {
            type: Array
        },
        "direction": {
            type: String,
            default: 'horizontal' // horizontal | vertical
        },
        "containerStyle": {
            type: Object
        },
        "textStyles": {
            type: Object
        },
        "textDirection": {
            type: String,
            default: "right"
        },
        "fontSize": {
            type: String,
            default: '30px'
        },
        "iconSize": {
            type: String,
            default: '48px'
        },
        // 正常状态文字色值
        "color": {
            type: String,
            default: '#9ea7b4'
        },
        // 选中状态文字色值
        "selectedColor": {
            type: String,
            default: '#00cc66'
        },
        "selectIcon": {
            type: String,
            default: "ion-android-radio-button-on"
        },
        "unSelectedIcon": {
            type: String,
            default: "ion-android-radio-button-off"
        }
    },
    data: function data() {
        return {
            newItems: this.initList()
        };
    },

    watch: {
        value: function value() {
            this.newItems = this.initList();
        }
    },
    computed: {
        customStyles: function customStyles() {
            return {
                "textDirection": this.textDirection,
                "direction": this.direction,
                "fontSize": this.fontSize,
                "iconSize": this.iconSize,
                "color": this.color,
                "selectedColor": this.selectedColor,
                "selectIcon": this.selectIcon,
                "unSelectedIcon": this.unSelectedIcon,
                "textStyles": this.textStyles,
                "leftColumn": this.leftColumn
            };
        },
        cWrapperStyle: function cWrapperStyle() {
            var disabled = this.disabled;

            return {
                opacity: disabled ? 0.5 : 1,
                paddingTop: '15px',
                paddingBottom: '15px'
            };
        },
        changeDirection: function changeDirection() {
            return this.direction == "horizontal" ? "flex-row" : "flex-column";
        },
        leftColumn: function leftColumn() {
            return this.direction == "horizontal" ? false : true;
        }
    },
    created: function created() {},

    methods: {
        //数据赋值
        initList: function initList() {
            var _this = this;

            var newItems = this.items.map(function (item, i) {
                var disabled = item.disabled;

                disabled = !!disabled;
                // disabled为true时认为selected无效，同时单选模式下只认为第一个selected为true的为有效值
                // selected = !disabled && !!selected && (!single || selectedCount === 0);
                if (_this.value == item.value) {
                    Vue.set(item, 'selected', true);
                } else {
                    Vue.set(item, 'selected', false);
                }
                return item;
            });
            return newItems;
        },

        //点击筛选操作
        select: function select(index) {
            if (this.disabled) return;
            this.updateList(index);
            this.$emit('selected', this.value, this.newItems.filter(function (item) {
                return item.selected;
            }));
            this.$emit('input', this.value, this.newItems.filter(function (item) {
                return item.selected;
            }));
            this.$emit("change", this.value, this.newItems.filter(function (item) {
                return item.selected;
            }));
        },

        //筛选时数据渲染
        updateList: function updateList(index) {
            var _this2 = this;

            this.newItems = this.newItems.map(function (item, i) {
                item.selected = index === i;
                _this2.value = _this2.newItems[index].value;
                return item;
            });
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [_vm.changeDirection, 'flex-fluid']
  }, _vm._l((_vm.newItems), function(item, index) {
    return _c('bui-option-list', _vm._b({
      key: index,
      style: Object.assign({}, _vm.cWrapperStyle, _vm.containerStyle),
      attrs: {
        "index": index
      },
      on: {
        "select": function($event) {
          _vm.select(index)
        }
      }
    }, 'bui-option-list', Object.assign({}, _vm.customStyles, item), false))
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(65)
)

/* script */
__vue_exports__ = __webpack_require__(66)

/* template */
var __vue_template__ = __webpack_require__(67)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-radio-list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4537816c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = {
  "radio-box": {
    "alignItems": "center"
  },
  "checkbox": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#e2e2e2",
    "backgroundColor:active": "#f5f5f5"
  },
  "radio-label": {
    "fontSize": "30"
  },
  "disabled": {
    "opacity": 0.5
  },
  "undisabled": {
    "opacity": 1
  },
  "switch-box": {
    "height": "80",
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "switch": {
    "position": "absolute",
    "right": 0,
    "top": "15"
  },
  "switch-label": {
    "fontSize": "30"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-fluid": {
    "flexWrap": "wrap"
  },
  "cb-flex-9": {
    "flex": 9
  },
  "cb-flex-1": {
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "flex-end"
  }
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//

module.exports = {
    props: {
        "disabled": {
            type: Boolean,
            default: false
        },
        "value": {
            type: String
        },
        "items": {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        "fontSize": {
            type: [String, Number],
            default: 32
        },
        "iconSize": {
            type: [String, Number],
            default: 48
        },
        "selectedColor": {
            type: String,
            default: "#00cc66"
        },
        "unSelectedColor": {
            type: String,
            default: "#e2e2e2"
        }
    },
    data: function data() {
        return {};
    },

    methods: {
        select: function select(v) {
            if (v.disabled || this.disabled) return;
            this.$emit("change", v.value);
            this.$emit("input", v.value);
        }
    }
};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['flex-fluid']
  }, _vm._l((_vm.items), function(v) {
    return _c('div', {
      staticClass: ["radio-box", "checkbox", "flex-row"],
      class: [(v.disabled || _vm.disabled) ? 'disabled' : ''],
      on: {
        "click": function($event) {
          _vm.select(v)
        }
      }
    }, [_c('text', {
      staticClass: ["radio-label", "cb-flex-9"],
      style: {
        'font-size': _vm.fontSize
      }
    }, [_vm._v(_vm._s(v.title || v.value))]), (v.value === _vm.value) ? _c('div', {
      staticClass: ["bui-icon-box", "cb-flex-1"]
    }, [_c('bui-icon', {
      attrs: {
        "size": _vm.iconSize,
        "name": "ion-android-checkbox",
        "color": _vm.selectedColor
      },
      on: {
        "click": function($event) {
          _vm.select(v)
        }
      }
    })], 1) : _vm._e(), (v.value !== _vm.value) ? _c('div', {
      staticClass: ["bui-icon-box", "cb-flex-1"]
    }, [_c('bui-icon', {
      attrs: {
        "size": _vm.iconSize,
        "name": "ion-android-checkbox-outline-blank",
        "color": _vm.unSelectedColor
      },
      on: {
        "click": function($event) {
          _vm.select(v)
        }
      }
    })], 1) : _vm._e()])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(69)
)
__vue_styles__.push(__webpack_require__(70)
)

/* script */
__vue_exports__ = __webpack_require__(71)

/* template */
var __vue_template__ = __webpack_require__(72)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-searchbar-center.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-14a35a11"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = {
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-fluid": {
    "flexWrap": "wrap"
  },
  "center": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "column-center-top": {
    "alignItems": "center"
  },
  "column-center-bottom": {
    "justifyContent": "flex-end",
    "alignItems": "center"
  },
  "column-center-left": {
    "justifyContent": "center",
    "alignItems": "flex-start"
  },
  "column-center-right": {
    "justifyContent": "center",
    "alignItems": "flex-end"
  },
  "column-left-top": {
    "alignItems": "flex-start"
  },
  "column-right-top": {
    "alignItems": "flex-end"
  },
  "column-left-bottom": {
    "justifyContent": "flex-end",
    "alignItems": "flex-start"
  },
  "column-right-bottom": {
    "justifyContent": "flex-end",
    "alignItems": "flex-end"
  },
  "row-space-between": {
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "row-center-top": {
    "justifyContent": "center",
    "alignItems": "flex-start"
  },
  "row-center-bottom": {
    "justifyContent": "center",
    "alignItems": "flex-end"
  },
  "row-center-left": {
    "alignItems": "center"
  },
  "row-center-right": {
    "justifyContent": "flex-end",
    "alignItems": "center"
  },
  "row-left-top": {
    "alignItems": "flex-start"
  },
  "row-right-top": {
    "justifyContent": "flex-end",
    "alignItems": "flex-start"
  },
  "row-left-bottom": {
    "alignItems": "flex-end"
  },
  "row-right-bottom": {
    "justifyContent": "flex-end",
    "alignItems": "flex-end"
  },
  "span1": {
    "flex": 1
  },
  "span2": {
    "flex": 2
  },
  "span3": {
    "flex": 3
  },
  "span4": {
    "flex": 4
  },
  "span5": {
    "flex": 5
  },
  "span6": {
    "flex": 6
  },
  "span7": {
    "flex": 7
  },
  "span8": {
    "flex": 8
  },
  "span9": {
    "flex": 9
  },
  "span10": {
    "flex": 10
  },
  "span11": {
    "flex": 11
  },
  "span12": {
    "flex": 12
  },
  "flex1": {
    "flex": 1
  },
  "flex2": {
    "flex": 2
  },
  "flex3": {
    "flex": 3
  },
  "flex4": {
    "flex": 4
  },
  "flex5": {
    "flex": 5
  },
  "flex6": {
    "flex": 6
  },
  "flex7": {
    "flex": 7
  },
  "flex8": {
    "flex": 8
  },
  "flex9": {
    "flex": 9
  },
  "flex10": {
    "flex": 10
  },
  "flex11": {
    "flex": 11
  },
  "flex12": {
    "flex": 12
  },
  "p-a": {
    "position": "absolute"
  }
}

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = {
  "bui-searchbar": {
    "paddingLeft": "20",
    "paddingTop": "15",
    "paddingRight": "20",
    "paddingBottom": "15"
  },
  "bui-input": {
    "backgroundColor": "#ffffff",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "paddingLeft": "20",
    "paddingTop": "15",
    "paddingRight": "20",
    "paddingBottom": "15"
  },
  "bui-search-icon-box-text": {
    "color": "#9ea7b4",
    "fontSize": "30",
    "paddingLeft": "15"
  },
  "bui-search-input-text": {
    "fontSize": "30",
    "height": "40",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "bui-search-search": {
    "fontSize": "30",
    "paddingLeft": "15",
    "paddingTop": "15",
    "paddingRight": "10",
    "paddingBottom": "15"
  },
  "bui-search-bg": {
    "backgroundColor": "#f5f5f5"
  },
  "bui-search-text-color": {
    "color": "#657180"
  }
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
    props: {
        "placeholder": {
            type: String,
            default: "请输入搜索内容"
        },
        "value": {
            type: String,
            default: ""
        },
        "autofocus": {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            deletestatus: false,
            searchstatus: false,
            autofocusNew: false,
            valueNew: ''
        };
    },
    methods: {
        //搜索框触发输入焦点
        onfocusFn: function onfocusFn() {
            this.searchstatus = true;
            this.autofocusNew = true;
        },

        //搜索获得输入焦点
        onfocus: function onfocus(event) {
            this.$emit("focus", event);
        },

        //搜索失去输入焦点
        onblur: function onblur(event) {
            this.autofocusNew = false;
            this.$emit('blur', event);
        },

        //搜索输入值更改
        oninput: function oninput(event) {
            this.valueNew = event.value;
            if (this.valueNew.length == 0) this.deletestatus = false;else this.deletestatus = true;
            this.$emit('input', event);
        },

        //清除搜索输入值
        onclear: function onclear(event) {
            this.autofocusNew = false;
            this.deletestatus = false;
            this.valueNew = "";
            this.$emit('clear');
        },

        //搜索
        search: function search() {
            this.$emit("search", this.valueNew);
        },

        //关闭键盘
        hideKeyboard: function hideKeyboard() {
            this.$refs.inputSearch.blur();
        }
    }
};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['flex-row', 'row-center-left', 'bui-searchbar', 'bui-search-bg'],
    on: {
      "click": _vm.onfocusFn
    }
  }, [_c('div', {
    class: ['flex-row', 'row-center-left', 'span1', 'bui-input']
  }, [_c('div', {
    staticClass: ["flex-row", "center"],
    class: [!_vm.searchstatus ? 'span1' : '']
  }, [(!_vm.deletestatus) ? _c('bui-icon', {
    attrs: {
      "name": "ion-ios-search-strong"
    },
    on: {
      "click": _vm.onfocusFn
    }
  }) : _vm._e(), (!_vm.searchstatus) ? _c('text', {
    staticClass: ["bui-search-icon-box-text"]
  }, [_vm._v("搜索")]) : _vm._e()], 1), (_vm.searchstatus) ? _c('input', {
    ref: "inputSearch",
    staticClass: ["span1", "bui-search-input-text"],
    attrs: {
      "returnKeyType": "search",
      "autofocus": _vm.autofocusNew,
      "type": "text",
      "placeholder": _vm.placeholder,
      "value": (_vm.valueNew)
    },
    on: {
      "focus": function($event) {
        _vm.onfocus($event)
      },
      "return": _vm.search,
      "blur": function($event) {
        _vm.onblur($event)
      },
      "input": [function($event) {
        _vm.valueNew = $event.target.attr.value
      }, function($event) {
        _vm.oninput($event)
      }]
    }
  }) : _vm._e(), (_vm.deletestatus) ? _c('bui-icon', {
    staticClass: ["bui-search-icon-delete"],
    attrs: {
      "name": "ion-ios-close-outline"
    },
    on: {
      "click": function($event) {
        _vm.onclear($event)
      }
    }
  }) : _vm._e()], 1), (_vm.searchstatus) ? _c('text', {
    class: ['bui-search-search', 'bui-search-text-color'],
    on: {
      "click": function($event) {
        _vm.search()
      }
    }
  }, [_vm._v("搜索")]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(74)
)
__vue_styles__.push(__webpack_require__(75)
)

/* script */
__vue_exports__ = __webpack_require__(76)

/* template */
var __vue_template__ = __webpack_require__(77)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-searchbar-left.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-797d1dc3"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = {
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-fluid": {
    "flexWrap": "wrap"
  },
  "center": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "column-center-top": {
    "alignItems": "center"
  },
  "column-center-bottom": {
    "justifyContent": "flex-end",
    "alignItems": "center"
  },
  "column-center-left": {
    "justifyContent": "center",
    "alignItems": "flex-start"
  },
  "column-center-right": {
    "justifyContent": "center",
    "alignItems": "flex-end"
  },
  "column-left-top": {
    "alignItems": "flex-start"
  },
  "column-right-top": {
    "alignItems": "flex-end"
  },
  "column-left-bottom": {
    "justifyContent": "flex-end",
    "alignItems": "flex-start"
  },
  "column-right-bottom": {
    "justifyContent": "flex-end",
    "alignItems": "flex-end"
  },
  "row-space-between": {
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "row-center-top": {
    "justifyContent": "center",
    "alignItems": "flex-start"
  },
  "row-center-bottom": {
    "justifyContent": "center",
    "alignItems": "flex-end"
  },
  "row-center-left": {
    "alignItems": "center"
  },
  "row-center-right": {
    "justifyContent": "flex-end",
    "alignItems": "center"
  },
  "row-left-top": {
    "alignItems": "flex-start"
  },
  "row-right-top": {
    "justifyContent": "flex-end",
    "alignItems": "flex-start"
  },
  "row-left-bottom": {
    "alignItems": "flex-end"
  },
  "row-right-bottom": {
    "justifyContent": "flex-end",
    "alignItems": "flex-end"
  },
  "span1": {
    "flex": 1
  },
  "span2": {
    "flex": 2
  },
  "span3": {
    "flex": 3
  },
  "span4": {
    "flex": 4
  },
  "span5": {
    "flex": 5
  },
  "span6": {
    "flex": 6
  },
  "span7": {
    "flex": 7
  },
  "span8": {
    "flex": 8
  },
  "span9": {
    "flex": 9
  },
  "span10": {
    "flex": 10
  },
  "span11": {
    "flex": 11
  },
  "span12": {
    "flex": 12
  },
  "flex1": {
    "flex": 1
  },
  "flex2": {
    "flex": 2
  },
  "flex3": {
    "flex": 3
  },
  "flex4": {
    "flex": 4
  },
  "flex5": {
    "flex": 5
  },
  "flex6": {
    "flex": 6
  },
  "flex7": {
    "flex": 7
  },
  "flex8": {
    "flex": 8
  },
  "flex9": {
    "flex": 9
  },
  "flex10": {
    "flex": 10
  },
  "flex11": {
    "flex": 11
  },
  "flex12": {
    "flex": 12
  },
  "p-a": {
    "position": "absolute"
  }
}

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = {
  "bui-searchbar": {
    "paddingLeft": "20",
    "paddingTop": "15",
    "paddingRight": "20",
    "paddingBottom": "15"
  },
  "bui-input": {
    "backgroundColor": "#ffffff",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "paddingLeft": "20",
    "paddingTop": "15",
    "paddingRight": "20",
    "paddingBottom": "15"
  },
  "bui-search-icon-box-text": {
    "color": "#9ea7b4",
    "fontSize": "30",
    "paddingLeft": "15"
  },
  "bui-search-input-text": {
    "fontSize": "30",
    "height": "40",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "bui-search-search": {
    "fontSize": "30",
    "paddingLeft": "15",
    "paddingTop": "15",
    "paddingRight": "10",
    "paddingBottom": "15"
  },
  "bui-search-bg": {
    "backgroundColor": "#f5f5f5"
  },
  "bui-search-text-color": {
    "color": "#657180"
  }
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
    props: {
        "placeholder": {
            type: String,
            default: "请输入搜索内容"
        },
        "value": {
            type: String,
            default: ""
        },
        "autofocus": {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            deletestatus: false,
            searchstatus: false,
            autofocusNew: false,
            valueNew: ''
        };
    },
    created: function created() {
        this.autofocusNew = this.autofocus;
        this.valueNew = this.value;
    },

    methods: {
        //搜索框触发输入焦点
        onfocusFn: function onfocusFn(event) {
            this.autofocusNew = true;
        },

        //搜索获得输入焦点
        onfocus: function onfocus(event) {
            this.searchstatus = true;
            this.$emit("focus", event);
        },

        //搜索失去输入焦点
        onblur: function onblur(event) {
            this.autofocusNew = false;
            this.$emit('blur', event);
        },

        //搜索输入值更改
        oninput: function oninput(event) {
            this.valueNew = event.value;
            if (this.valueNew.length == 0) this.deletestatus = false;else this.deletestatus = true;
            this.$emit('input', event);
        },

        //清除搜索输入值
        onclear: function onclear(event) {
            this.valueNew = "";
            this.autofocusNew = false;
            this.deletestatus = false;
            this.$emit('clear');
        },

        //搜索
        search: function search() {
            this.$emit("search", this.valueNew);
        },

        //关闭键盘
        hideKeyboard: function hideKeyboard() {
            this.$refs.inputsearch.blur();
        }
    }
};

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['flex-row', 'row-center-left', 'bui-searchbar', 'bui-search-bg'],
    on: {
      "click": function($event) {
        _vm.onfocusFn()
      }
    }
  }, [_c('div', {
    class: ['flex-row', 'row-center-left', 'span1', 'bui-input']
  }, [_c('bui-icon', {
    attrs: {
      "name": "ion-ios-search-strong"
    }
  }), _c('input', {
    ref: "inputsearch",
    staticClass: ["span1", "bui-search-input-text"],
    attrs: {
      "value": _vm.valueNew,
      "autofocus": _vm.autofocusNew,
      "returnKeyType": "search",
      "type": "text",
      "placeholder": _vm.placeholder
    },
    on: {
      "focus": function($event) {
        _vm.onfocus($event)
      },
      "blur": function($event) {
        _vm.onblur($event)
      },
      "input": function($event) {
        _vm.oninput($event)
      },
      "return": _vm.search
    }
  }), (_vm.deletestatus) ? _c('bui-icon', {
    staticClass: ["bui-search-icon-delete"],
    attrs: {
      "name": "ion-ios-close-outline"
    },
    on: {
      "click": function($event) {
        _vm.onclear($event)
      }
    }
  }) : _vm._e()], 1), (_vm.searchstatus) ? _c('text', {
    class: ['bui-search-search', 'bui-search-text-color'],
    on: {
      "click": function($event) {
        _vm.search()
      }
    }
  }, [_vm._v("搜索")]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(79)
)

/* script */
__vue_exports__ = __webpack_require__(80)

/* template */
var __vue_template__ = __webpack_require__(81)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-switch.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-96fb3b64"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = {
  "radio-box": {
    "alignItems": "center"
  },
  "checkbox": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#e2e2e2",
    "backgroundColor:active": "#f5f5f5"
  },
  "radio-label": {
    "fontSize": "30"
  },
  "disabled": {
    "opacity": 0.5
  },
  "undisabled": {
    "opacity": 1
  },
  "switch-box": {
    "height": "80",
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "switch": {
    "position": "absolute",
    "right": 0,
    "top": "15"
  },
  "switch-label": {
    "fontSize": "30"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-fluid": {
    "flexWrap": "wrap"
  },
  "cb-flex-9": {
    "flex": 9
  },
  "cb-flex-1": {
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "flex-end"
  }
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
    props: {
        "title": {
            type: String
        },
        "checked": {
            type: Boolean,
            default: false
        },
        "disabled": {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onchange: function onchange(event) {
            this.checked = event.value;
            this.$emit("change", this.checked);
        }
    }
};

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["switch-box"]
  }, [_c('switch', {
    staticClass: ["switch"],
    attrs: {
      "checked": _vm.checked,
      "disabled": _vm.disabled
    },
    on: {
      "change": _vm.onchange
    }
  }), (_vm.title) ? _c('text', {
    staticClass: ["switch-label"]
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(83)

/* template */
var __vue_template__ = __webpack_require__(84)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-tabbar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
    props: {
        tabItems: { default: [] },
        value: { type: Number, default: 0 },
        height: { default: "100px" },
        iconSize: { default: "45px" },
        titleSize: { default: '22px' },
        background: { default: '#f7f7f7' },
        selectedBackground: { default: '#f7f7f7' },
        normalColor: { default: '#818181' },
        selectedColor: { default: '#4ca4fe' },
        borderBottomColor: { default: '#4ca4fe' },
        containerStyle: { default: function _default() {
                return {};
            } },
        itemStyle: { default: function _default() {
                return {};
            } },
        showSelectedLine: { default: false }
    },
    methods: {
        "getContainerStyle": function getContainerStyle() {
            //合并样式
            var style = { 'flex-direction': 'row', 'height': this.height };
            style = Object.assign(style, this.containerStyle);
            return style;
        },
        "getItemStyle": function getItemStyle(item, index) {
            var selected = index === this.value;

            var backgroundColor = selected ? this.selectedBackground : this.background;

            var borderBottomColor = selected && this.showSelectedLine ? this.borderBottomColor : backgroundColor;

            var style = {
                'flex': 1,
                'align-items': 'center',
                'justify-content': 'center',
                'border-bottom-width': '5px',
                'border-bottom-style': 'solid',
                'border-bottom-color': borderBottomColor,
                'backgroundColor': backgroundColor
            };
            return Object.assign(style, this.itemStyle);
            return style;
        },
        "getTitleStyle": function getTitleStyle(item, index) {
            var selected = index === this.value;
            var style = {
                'color': selected ? this.selectedColor : this.normalColor,
                'font-size': this.titleSize
            };
            return style;
        },
        "itemClick": function itemClick(e, item, index) {
            this.value = index;
            this.$emit('input', index);
            this.$emit('change', index);
        }
    }
};

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: _vm.getContainerStyle()
  }, _vm._l((_vm.tabItems), function(item, index) {
    return _c('div', {
      key: index,
      style: _vm.getItemStyle(item, index),
      on: {
        "click": function($event) {
          _vm.itemClick($event, item, index)
        }
      }
    }, [(item.icon) ? _c('bui-icon', {
      attrs: {
        "name": item.icon,
        "color": index === _vm.value ? _vm.selectedColor : _vm.normalColor,
        "size": _vm.iconSize
      },
      on: {
        "click": function($event) {
          _vm.itemClick($event, item, index)
        }
      }
    }) : _vm._e(), (item.title) ? _c('text', {
      style: _vm.getTitleStyle(item, index),
      on: {
        "click": function($event) {
          _vm.itemClick($event, item, index)
        }
      }
    }, [_vm._v(_vm._s(item.title))]) : _vm._e()], 1)
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(86)
)

/* script */
__vue_exports__ = __webpack_require__(87)

/* template */
var __vue_template__ = __webpack_require__(88)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-tip.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ba5e4b1e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = {
  "tip": {
    "paddingLeft": "20",
    "paddingRight": "20",
    "paddingTop": "20",
    "paddingBottom": "20",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "marginBottom": "10"
  },
  "tip-txt": {
    "fontSize": "30"
  },
  "tip-success": {
    "backgroundColor": "#dff0d8",
    "borderColor": "#d6e9c6"
  },
  "tip-txt-success": {
    "color": "#3c763d"
  },
  "tip-info": {
    "backgroundColor": "#d9edf7",
    "borderColor": "#bce8f1"
  },
  "tip-txt-info": {
    "color": "#31708f"
  },
  "tip-warning": {
    "backgroundColor": "#fcf8e3",
    "borderColor": "#faebcc"
  },
  "tip-txt-warning": {
    "color": "#8a6d3b"
  },
  "tip-danger": {
    "backgroundColor": "#f2dede",
    "borderColor": "#ebccd1"
  },
  "tip-txt-danger": {
    "color": "#a94442"
  },
  "tip-common": {
    "backgroundColor": "#ffffff",
    "borderColor": "#ffffff"
  },
  "tip-txt-common": {
    "color": "#31708f"
  }
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//

module.exports = {
    props: {
        type: { default: 'success' },
        value: { default: '' }
    }
};

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['tip', 'tip-' + _vm.type]
  }, [(_vm.value) ? _c('text', {
    class: ['tip-txt', 'tip-txt-' + _vm.type]
  }, [_vm._v(_vm._s(_vm.value))]) : _vm._e(), _vm._t("value")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(90)

/* template */
var __vue_template__ = __webpack_require__(91)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-video.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
    props: {
        'src': { default: '' },
        'playstatus': { default: 'pause' },
        'autoplay': { default: false },
        'seek': { default: 0 }
    },
    data: function data() {
        return {};
    },
    methods: {
        "statusChange": function statusChange(status) {
            this.$emit(status);
        },
        "progress": function progress(res) {
            this.$emit("progress", res.total, res.progress);
        }
    }
};

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('video-ex', {
    attrs: {
      "src": _vm.src,
      "playstatus": _vm.playstatus,
      "autoplay": _vm.autoplay,
      "seek": _vm.seek
    },
    on: {
      "pause": function($event) {
        _vm.statusChange('pause')
      },
      "start": function($event) {
        _vm.statusChange('start')
      },
      "finish": function($event) {
        _vm.statusChange('finish')
      },
      "fail": function($event) {
        _vm.statusChange('fail')
      },
      "progress": _vm.progress
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(93)

/* template */
var __vue_template__ = __webpack_require__(94)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-content.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//

module.exports = {
    props: {
        padded: { default: false },
        padding: { default: "20px" }
    }
};

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: {
      'padding': _vm.padded == 'true' ? _vm.padding : '0px'
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(96)

/* template */
var __vue_template__ = __webpack_require__(97)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-content-scroll.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//

module.exports = {
    props: {
        padded: { default: false },
        padding: { default: "20px" }
    }
};

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    style: {
      'padding': _vm.padded == 'true' ? _vm.padding : '0px'
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(99)
)

/* script */
__vue_exports__ = __webpack_require__(100)

/* template */
var __vue_template__ = __webpack_require__(101)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-image-slider.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0de7f0a6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = {
  "indicator": {
    "width": "750",
    "height": "100",
    "position": "absolute",
    "bottom": 0,
    "left": 0,
    "itemColor": "#ffffff",
    "itemSelectedColor": "#747474",
    "itemSize": "20",
    "opacity": 0.8
  }
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
    props: {
        sliderStyle: {
            type: Object,
            default: {
                "width": "750px",
                "height": "400px"
            }
        },
        indicatorStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        items: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        interval: {
            type: Number,
            default: 6000 //ms
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        infinite: {
            type: Boolean,
            default: true
        },
        imgResize: {
            type: String,
            default: "stretch"
        },
        imgWidth: {
            type: [Number, String],
            default: 750
        },
        imgHeight: {
            type: [Number, String],
            default: 750
        },
        placeholder: {
            type: String,
            default: ""
        }
    },
    methods: {
        _change: function _change(e) {
            this.$emit("change", e);
        },
        _click: function _click(e, index) {
            this.$emit("itemClick", e, index);
        }
    }
};

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('slider', {
    style: _vm.sliderStyle,
    attrs: {
      "interval": _vm.interval,
      "autoPlay": _vm.autoplay,
      "infinite": _vm.infinite
    },
    on: {
      "change": _vm._change
    }
  }, [_vm._l((_vm.items), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('bui-image', {
      attrs: {
        "width": _vm.imgWidth,
        "resize": _vm.imgResize,
        "height": _vm.imgHeight,
        "placeholder": _vm.placeholder,
        "src": item.url
      },
      on: {
        "click": function($event) {
          _vm._click($event, index)
        }
      }
    })], 1)
  }), _c('indicator', {
    staticClass: ["indicator"],
    style: _vm.indicatorStyle
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(103)
)

/* script */
__vue_exports__ = __webpack_require__(104)

/* template */
var __vue_template__ = __webpack_require__(105)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-cell.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0b99b408"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = {
  "bui-cell": {
    "height": "100",
    "position": "relative",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "24",
    "paddingRight": "24",
    "backgroundColor": "#ffffff"
  },
  "cell-margin": {
    "marginBottom": "24"
  },
  "cell-title": {
    "flex": 1
  },
  "has-desc": {
    "paddingBottom": "18",
    "paddingTop": "18"
  },
  "cell-top-border": {
    "borderTopColor": "#eeeeee",
    "borderTopWidth": "1"
  },
  "cell-bottom-border": {
    "borderBottomColor": "#eeeeee",
    "borderBottomWidth": "1"
  },
  "cell-label-text": {
    "fontSize": "30",
    "color": "#666666",
    "width": "188",
    "marginRight": "10"
  },
  "cell-content": {
    "color": "#333333",
    "fontSize": "30",
    "lineHeight": "40"
  },
  "cell-desc-text": {
    "color": "#999999",
    "fontSize": "24",
    "lineHeight": "30",
    "marginTop": "4"
  }
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        label: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        desc: {
            type: String,
            default: ''
        },
        hasTopBorder: {
            type: Boolean,
            default: false
        },
        hasMargin: {
            type: Boolean,
            default: false
        },
        hasBottomBorder: {
            type: Boolean,
            default: true
        },
        cellStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },
    methods: {
        _cellClick: function _cellClick(e) {
            this.$emit('click', { e: e });
            this.$emit('cellClick', { e: e });
        }
    }
};

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['bui-cell', _vm.hasTopBorder ? 'cell-top-border' : '', _vm.hasBottomBorder ? 'cell-bottom-border' : '', _vm.hasMargin ? 'cell-margin' : '', _vm.desc ? 'has-desc' : ''],
    style: Object.assign({}, _vm.cellStyle),
    on: {
      "click": _vm._cellClick
    }
  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
    staticClass: ["cell-label-text"]
  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
    staticClass: ["cell-title"]
  }, [_vm._t("title", [(_vm.title) ? _c('text', {
    staticClass: ["cell-content"]
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), (_vm.desc) ? _c('text', {
    staticClass: ["cell-desc-text"]
  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("action"), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(107)
)

/* script */
__vue_exports__ = __webpack_require__(108)

/* template */
var __vue_template__ = __webpack_require__(109)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-popup.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6e263afc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = {
  "bui-popup": {
    "position": "fixed",
    "width": "750"
  },
  "top": {
    "left": 0,
    "right": 0
  },
  "bottom": {
    "left": 0,
    "right": 0
  },
  "left": {
    "bottom": 0,
    "top": 0
  },
  "right": {
    "bottom": 0,
    "top": 0
  }
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
    props: {
        rgba: {
            type: [String, Number]
        },
        value: {
            type: Boolean,
            default: false
        },
        pos: {
            type: String,
            default: 'bottom'
        },
        backgroundColor: {
            type: String,
            default: '#FFFFFF'
        },
        height: {
            type: [Number, String],
            default: 840
        },
        width: {
            type: [Number, String],
            default: 750
        }
    },
    watch: {
        value: function value(val) {
            this.$emit("input", val);
        }
    },
    computed: {
        isNeedShow: function isNeedShow() {
            var _this = this;

            setTimeout(function () {
                _this.appearPopup(_this.value);
            }, 50);
            return this.value;
        },
        popupHeight: function popupHeight() {
            this.appearPopup(this.value, 150);
            return this.height;
        },
        popupStyle: function popupStyle() {
            var pos = this.pos,
                width = this.width,
                height = this.height,
                backgroundColor = this.backgroundColor;

            var style = {
                width: width + 'px',
                backgroundColor: backgroundColor
            };
            if (pos == "top") {
                style = Object.assign(style, {
                    top: -height + 'px',
                    height: height + 'px'
                });
            }
            if (pos == "bottom") {
                style = Object.assign(style, {
                    bottom: -height + 'px',
                    height: height + 'px'
                });
            }
            if (pos == "left") {
                style = Object.assign(style, {
                    left: -width + 'px'
                });
            }
            if (pos == "right") {
                style = Object.assign(style, {
                    right: -width + 'px'
                });
            }
            return style;
        }
    },
    methods: {
        maskClick: function maskClick() {
            this.appearPopup(false);
        },
        appearPopup: function appearPopup(bool) {
            var _this2 = this;

            var popupEl = this.$refs['popupBox'];
            if (!popupEl) {
                return;
            }
            animation.transition(popupEl, {
                styles: {
                    transform: this.getTransform(this.pos, this.width, this.height, !bool)
                },
                duration: 300,
                delay: 0
            }, function () {
                if (!bool) {
                    _this2.$emit("input", false);
                }
            });
        },
        getTransform: function getTransform(pos, width, height, bool) {
            var _size = pos === 'top' || pos === 'bottom' ? height : width;
            var _transform = void 0;
            bool && (_size = 0);
            switch (pos) {
                case 'top':
                    _transform = 'translateY(' + _size + 'px)';
                    break;
                case 'bottom':
                    _transform = 'translateY(-' + _size + 'px)';
                    break;
                case 'left':
                    _transform = 'translateX(' + _size + 'px)';
                    break;
                case 'right':
                    _transform = 'translateX(-' + _size + 'px)';
                    break;
            }
            return _transform;
        }
    }
};

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.value) ? _c('div', [_c('bui-mask', {
    attrs: {
      "rgba": _vm.rgba
    },
    on: {
      "click": _vm.maskClick
    }
  }), _c('div', {
    ref: "popupBox",
    class: ['bui-popup', _vm.pos],
    style: _vm.popupStyle,
    attrs: {
      "height": _vm.popupHeight,
      "hack": _vm.isNeedShow
    }
  }, [_vm._t("default")], 2)], 1) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(111)
)

/* script */
__vue_exports__ = __webpack_require__(112)

/* template */
var __vue_template__ = __webpack_require__(113)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-number-input.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-53f354e0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = {
  "number-input": {
    "flexDirection": "row"
  },
  "number-control": {
    "backgroundColor": "#f5f5f5",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10",
    "justifyContent": "center",
    "alignItems": "center"
  }
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
    data: function data() {
        return {};
    },

    props: {
        value: {
            type: Number,
            default: 1
        },
        step: {
            type: Number,
            default: 1
        },
        controlSize: {
            default: 70
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        }
    },
    computed: {
        inputStyle: function inputStyle() {
            var extraWidth = 20;
            var digitWidth = 20;
            return {
                // TODO: 数字的宽度？
                width: digitWidth * this.value.toString().length + extraWidth,
                "margin-left": digitWidth,
                "margin-right": digitWidth - extraWidth
            };
        },
        controlStyle: function controlStyle() {
            return {
                width: this.controlSize,
                height: this.controlSize,
                "line-height": this.controlSize
            };
        }
    },
    watch: {
        value: function value(newValue) {
            this.$emit('input', Number(newValue));
            this.$emit("change", this.value);
        }
    },
    methods: {
        minusClicked: function minusClicked() {
            if (this.value <= Number(this.min)) return;
            this.value = Number(this.value) - Number(this.step);
        },
        plusClicked: function plusClicked() {
            if (this.value >= Number(this.max)) return;
            this.value = Number(this.value) + Number(this.step);
        }
    }
};

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["number-input"]
  }, [_c('bui-icon', {
    staticClass: ["number-control"],
    style: _vm.controlStyle,
    attrs: {
      "name": "ion-minus",
      "size": "35px"
    },
    on: {
      "click": _vm.minusClicked
    }
  }), _c('input', {
    style: _vm.inputStyle,
    attrs: {
      "type": "number",
      "disabled": "true",
      "value": (_vm.value)
    },
    on: {
      "input": function($event) {
        _vm.value = $event.target.attr.value
      }
    }
  }), _c('bui-icon', {
    staticClass: ["number-control"],
    style: _vm.controlStyle,
    attrs: {
      "name": "ion-plus",
      "size": "35px"
    },
    on: {
      "click": _vm.plusClicked
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(115)
)

/* script */
__vue_exports__ = __webpack_require__(116)

/* template */
var __vue_template__ = __webpack_require__(121)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-richcell.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e282bc50"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = {
  "rich-cell": {
    "alignItems": "center",
    "flexDirection": "row",
    "flexWrap": "wrap"
  }
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    components: {
        "bui-richcell-text": __webpack_require__(117)
    },
    props: {
        content: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        hasTextMargin: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        _click: function _click(e, obj) {
            this.$emit("click", e, obj);
        }
    },
    data: function data() {
        return {};
    }
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(118)
)

/* script */
__vue_exports__ = __webpack_require__(119)

/* template */
var __vue_template__ = __webpack_require__(120)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-richcell-text.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cd60959c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "fontSize": "28",
    "color": "#3d3d3d"
  },
  "black": {
    "color": "#3D3D3D"
  },
  "yellow": {
    "color": "#EE9900"
  },
  "blue": {
    "color": "#30A0FF"
  },
  "gray": {
    "color": "#A5A5A5"
  },
  "red": {
    "color": "#FF5000"
  },
  "margin-text": {
    "marginRight": "6"
  }
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//

module.exports = {
    props: {
        textValue: {
            type: String,
            default: ''
        },
        textTheme: {
            type: String,
            default: 'gray'
        },
        textStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        hasTextMargin: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        themeStyle: function themeStyle() {
            var style = {};
            var textStyle = this.textStyle;
            if (textStyle && textStyle.fontSize) {
                style = Object.assign(style, { fontSize: textStyle.fontSize + 'px', height: textStyle.fontSize * 1.2 + 'px' });
            }
            if (textStyle && textStyle.color) {
                style = Object.assign(style, { color: textStyle.color });
            }
            style = Object.assign(style, this.textStyle);
            return style;
        }
    },
    methods: {
        _click: function _click(e) {
            this.$emit("click", e);
        }
    }
};

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    class: ['text', _vm.textTheme, _vm.hasTextMargin ? 'margin-text' : ''],
    style: _vm.themeStyle,
    on: {
      "click": _vm._click
    }
  }, [_vm._v(_vm._s(_vm.textValue))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.content.length != 0) ? _c('div', {
    staticClass: ["rich-cell"]
  }, _vm._l((_vm.content), function(v, i) {
    return _c('div', {
      key: i
    }, [(v.type == 'text' && v.value) ? _c('bui-richcell-text', {
      attrs: {
        "textValue": v.value,
        "textStyle": v.style,
        "hasTextMargin": _vm.hasTextMargin,
        "textTheme": v.theme
      },
      on: {
        "click": function($event) {
          _vm._click($event, v)
        }
      }
    }) : _vm._e(), (v.type == 'icon' && v.icon) ? _c('bui-icon', {
      attrs: {
        "name": v.icon,
        "color": v.color,
        "size": v.size
      },
      on: {
        "click": function($event) {
          _vm._click($event, v)
        }
      }
    }) : _vm._e(), (v.type == 'image' && v.src) ? _c('bui-image', {
      attrs: {
        "src": v.src,
        "width": v.width,
        "height": v.height
      },
      on: {
        "click": function($event) {
          _vm._click($event, v)
        }
      }
    }) : _vm._e()], 1)
  })) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(123)
)

/* script */
__vue_exports__ = __webpack_require__(124)

/* template */
var __vue_template__ = __webpack_require__(125)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-popupshow.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-06761c02"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = {
  "bg": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0.2)"
  },
  "popupBox": {
    "position": "fixed",
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10",
    "borderBottomLeftRadius": "10"
  },
  "popupContent": {
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "arrow": {
    "position": "fixed",
    "left": "80",
    "bottom": "-40"
  }
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        bgColor: {
            type: String,
            default: '#ffffff'
        },
        bottom: {
            type: [Number, String],
            default: 50
        },
        left: {
            type: [Number, String],
            default: 0
        }
    },
    data: {
        position: {
            top: 0,
            left: 0
        }
    },
    watch: {
        value: function value(val) {
            this.$emit("input", val);
        }
    },
    computed: {
        hackShow: function hackShow() {
            var _this = this;

            setTimeout(function () {
                _this.appear();
            }, 50);
            return this.value;
        }
    },
    methods: {
        show: function show() {},
        maskClick: function maskClick() {
            this.dismiss();
        },
        appear: function appear() {
            var popupEl = this.$refs.popupBox;
            animation.transition(popupEl, {
                styles: {
                    transform: 'translate(0px,-' + 50 + 'px)'
                },
                duration: 300,
                timingFunction: 'ease-in',
                delay: 0
            }, function () {});
        },
        dismiss: function dismiss() {
            var _this2 = this;

            var popupEl = this.$refs.popupBox;
            animation.transition(popupEl, {
                styles: {
                    opacity: 0,
                    transform: 'translate(0px,0px)'
                },
                duration: 200,
                timingFunction: 'ease-out',
                delay: 0
            }, function () {
                _this2.$emit("input", false);
            });
        }
    }
};

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.value) ? _c('div', [_c('div', {
    staticClass: ["bg"],
    on: {
      "click": _vm.maskClick
    }
  }), _c('div', {
    ref: "popupBox",
    staticClass: ["popupBox"],
    style: {
      bottom: _vm.bottom,
      left: _vm.left,
      'background-color': _vm.bgColor
    },
    attrs: {
      "hack": _vm.hackShow
    }
  }, [_c('div', {
    staticClass: ["popupContent"]
  }, [_vm._t("default")], 2), _c('bui-icon', {
    staticClass: ["arrow"],
    attrs: {
      "name": "ion-arrow-down-b",
      "color": _vm.bgColor,
      "size": "60px"
    }
  })], 1)]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(127)
)

/* script */
__vue_exports__ = __webpack_require__(128)

/* template */
var __vue_template__ = __webpack_require__(133)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-grid-select.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-098ad139"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = {
  "bui-grid-select-box": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "flexWrap": "wrap"
  },
  "bui-grid-select": {
    "justifyContent": "center",
    "borderTopLeftRadius": "8",
    "borderTopRightRadius": "8",
    "borderBottomRightRadius": "8",
    "borderBottomLeftRadius": "8",
    "borderWidth": "2",
    "paddingLeft": "6",
    "paddingRight": "6"
  },
  "bui-grid-select-title": {
    "lines": 1,
    "lineHeight": "30",
    "textOverflow": "ellipsis",
    "textAlign": "center",
    "fontSize": "26"
  },
  "bui-grid-select-img": {
    "position": "absolute",
    "right": "1",
    "bottom": "-3"
  }
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buiOption = __webpack_require__(129);

var _buiOption2 = _interopRequireDefault(_buiOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    components: { 'bui-option': _buiOption2.default },
    props: {
        // 列数
        cols: {
            type: Number,
            default: 4
        },
        items: {
            type: Array
        },
        //单选
        single: {
            type: Boolean,
            default: false
        },
        //可选个数限制
        limit: {
            type: Number
        },
        customStyles: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },
    data: function data() {
        return {
            newItems: this.initList()
        };
    },

    watch: {
        items: function items() {
            this.newItems = this.initList();
        }
    },
    computed: {
        //补充层
        hackList: function hackList() {
            var items = this.items,
                cols = this.cols;

            var remainder = items.length % cols;
            var len = remainder ? cols - remainder : 0;
            return Array.apply(null, { length: len });
        }
    },
    created: function created() {
        // 行间距
        this.lineSpacing = this.customStyles.lineSpacing || '12px';
    },

    methods: {
        //数据赋值
        initList: function initList() {
            var single = this.single;
            var selectedCount = 0;

            var newItems = this.items.map(function (item, i) {
                var selected = item.selected,
                    disabled = item.disabled;

                disabled = !!disabled;
                // disabled为true时认为selected无效，同时单选模式下只认为第一个selected为true的为有效值
                selected = !disabled && !!selected && (!single || selectedCount === 0);
                if (item.selected) selectedCount += 1;
                return item;
            });
            this.selectedCount = selectedCount;
            return newItems;
        },

        //点击筛选操作
        select: function select(index) {
            if (this.newItems[index].disabled) return;
            var selected = this.newItems[index].selected;
            if (this.limit <= this.selectedCount && !selected) {
                this.$emit('overLimit', this.limit);
            } else {
                this.updateList(index);
                this.$emit('select', {
                    selectIndex: index,
                    selected: !selected,
                    selectedList: this.newItems.filter(function (item) {
                        return item.selected;
                    })
                });
            }
        },

        //筛选时数据渲染
        updateList: function updateList(index) {
            var single = this.single;
            var selectedCount = 0;
            this.newItems = this.newItems.map(function (item, i) {
                if (single) {
                    item.selected = index === i && !item.selected;
                } else {
                    if (i === index) item.selected = !item.selected;
                }
                if (item.selected) selectedCount += 1;
                return item;
            });
            this.selectedCount = selectedCount;
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(130)
)

/* script */
__vue_exports__ = __webpack_require__(131)

/* template */
var __vue_template__ = __webpack_require__(132)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-option.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1b14ab0f"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = {
  "bui-grid-select-box": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "flexWrap": "wrap"
  },
  "bui-grid-select": {
    "justifyContent": "center",
    "borderTopLeftRadius": "8",
    "borderTopRightRadius": "8",
    "borderBottomRightRadius": "8",
    "borderBottomLeftRadius": "8",
    "borderWidth": "2",
    "paddingLeft": "6",
    "paddingRight": "6"
  },
  "bui-grid-select-title": {
    "lines": 1,
    "lineHeight": "30",
    "textOverflow": "ellipsis",
    "textAlign": "center",
    "fontSize": "26"
  },
  "bui-grid-select-img": {
    "position": "absolute",
    "right": "1",
    "bottom": "-3"
  }
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
    props: {
        index: {
            type: Number,
            default: -1
        },
        // 是否选中
        selected: {
            type: Boolean,
            default: false
        },
        // 是否可选
        disabled: {
            type: Boolean,
            default: false
        },
        width: {
            type: String,
            default: '166px'
        },
        height: {
            type: String,
            default: '72px'
        },
        // 标题
        title: {
            type: String,
            default: ''
        },
        // 正常状态文字色值
        color: {
            type: String,
            default: '#3d3d3d'
        },
        // 选中状态文字色值
        selectedColor: {
            type: String,
            default: '#3399ff'
        },
        // 不可选状态文字色值
        disabledColor: {
            type: String,
            default: '#9b9b9b'
        },
        // 正常状态边框色值
        borderColor: {
            type: String,
            default: 'transparent'
        },
        // 选中状态边框色值
        selectedBorderColor: {
            type: String,
            default: '#3399ff'
        },
        // 不可选状态边框色值
        disabledBorderColor: {
            type: String,
            default: 'transparent'
        },
        // 正常状态背景色值
        backgroundColor: {
            type: String,
            default: '#f6f6f6'
        },
        // 选中状态背景色值
        selectedBackgroundColor: {
            type: String,
            default: '#ffffff'
        },
        // 不可选状态背景色值
        disabledBackgroundColor: {
            type: String,
            default: '#f6f6f6'
        },
        icon: {
            type: [String, Boolean],
            default: 'ion-backspace'
        }
    },
    computed: {
        //多格筛选项外框样式
        cWrapperStyle: function cWrapperStyle() {
            var width = this.width,
                height = this.height,
                borderColor = this.borderColor,
                selectedBorderColor = this.selectedBorderColor,
                disabledBorderColor = this.disabledBorderColor,
                backgroundColor = this.backgroundColor,
                selectedBackgroundColor = this.selectedBackgroundColor,
                disabledBackgroundColor = this.disabledBackgroundColor;
            var selected = this.selected,
                disabled = this.disabled;

            return {
                width: width,
                height: height,
                borderColor: disabled ? disabledBorderColor : selected ? selectedBorderColor : borderColor,
                backgroundColor: disabled ? disabledBackgroundColor : selected ? selectedBackgroundColor : backgroundColor
            };
        },

        //多格筛选项文字样式
        cTitleStyle: function cTitleStyle() {
            var color = this.color,
                selectedColor = this.selectedColor,
                disabledColor = this.disabledColor;
            var selected = this.selected,
                disabled = this.disabled;

            return {
                color: disabled ? disabledColor : selected ? selectedColor : color
            };
        }
    },
    methods: {
        _click: function _click() {
            if (!this.disabled) {
                this.$emit('select', this.index);
            }
        }
    }
};

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bui-grid-select"],
    style: _vm.cWrapperStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": (_vm.title + "," + (_vm.checked?'已选中':'未选中'))
    },
    on: {
      "click": _vm._click
    }
  }, [_c('text', {
    staticClass: ["bui-grid-select-title"],
    style: _vm.cTitleStyle
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.selected && !_vm.disabled && _vm.icon) ? _c('bui-icon', {
    staticClass: ["bui-grid-select-img"],
    attrs: {
      "color": _vm.selectedBorderColor,
      "name": _vm.icon,
      "size": "20px"
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bui-grid-select-box"]
  }, [_vm._l((_vm.newItems), function(item, index) {
    return _c('bui-option', _vm._b({
      key: index,
      style: {
        marginTop: index >= _vm.cols ? _vm.lineSpacing : null
      },
      attrs: {
        "index": index
      },
      on: {
        "select": function($event) {
          _vm.select(index)
        }
      }
    }, 'bui-option', Object.assign({}, _vm.customStyles, item), false))
  }), _vm._l((_vm.hackList), function(item, index) {
    return _c('bui-option', _vm._b({
      key: index,
      style: {
        opacity: 0,
        marginTop: index >= _vm.cols ? _vm.lineSpacing : null
      }
    }, 'bui-option', Object.assign({}, _vm.customStyles, item), false))
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(135)
)

/* script */
__vue_exports__ = __webpack_require__(136)

/* template */
var __vue_template__ = __webpack_require__(137)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-flow.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ac485070"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = {
  "bui-flow-box": {
    "paddingTop": "28",
    "paddingBottom": "24",
    "backgroundColor": "#ffffff"
  },
  "bui-flow-list": {
    "flexDirection": "row",
    "paddingLeft": "70",
    "paddingRight": "70"
  },
  "bui-flow-header": {
    "height": "40"
  },
  "bui-flow-main": {
    "paddingTop": "9",
    "paddingBottom": "42"
  },
  "bui-flow-line": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": "38",
    "width": "2",
    "backgroundColor": "#f0f0f0"
  },
  "bui-flow-header-point": {
    "position": "absolute",
    "top": "13",
    "left": "32",
    "width": "14",
    "height": "14",
    "backgroundColor": "#c4c4c4",
    "borderStyle": "solid",
    "borderWidth": "2",
    "borderColor": "#cfcfcf",
    "borderTopLeftRadius": "100",
    "borderTopRightRadius": "100",
    "borderBottomRightRadius": "100",
    "borderBottomLeftRadius": "100"
  },
  "bui-flow-header-title": {
    "fontSize": "30",
    "color": "#3d3d3d"
  },
  "desc-text": {
    "fontSize": "24",
    "color": "#a5a5a5",
    "marginBottom": "12"
  },
  "desc-date": {
    "fontSize": "24",
    "color": "#a5a5a5"
  },
  "highlight-point": {
    "top": "7",
    "left": "26",
    "width": "26",
    "height": "26",
    "backgroundColor": "#3399ff",
    "borderStyle": "solid",
    "borderWidth": "6",
    "borderColor": "#b9dcff"
  },
  "text-highlight-title": {
    "color": "#3399ff"
  }
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
    props: {
        //数据
        items: {
            type: Array
        },
        //自定义
        customStyles: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },
    watch: {},
    computed: {
        newItems: function newItems() {
            return this.initItems(this.items);
        }
    },
    methods: {
        _click: function _click(index) {
            this.$emit('click', index);
        },
        initItems: function initItems(items) {
            var _customStyles = this.customStyles,
                lineColor = _customStyles.lineColor,
                pointInnerColor = _customStyles.pointInnerColor,
                pointBorderColor = _customStyles.pointBorderColor,
                highlightTitleColor = _customStyles.highlightTitleColor,
                highlightPointInnerColor = _customStyles.highlightPointInnerColor,
                highlightPointBorderColor = _customStyles.highlightPointBorderColor;

            var len = items.length;
            var pre = Date.now();

            return items.map(function (item, index) {
                item.key = pre + '_' + index;
                item.pointStyle = {};
                item.lineStyle = {};
                item.titleStyle = {};

                if (lineColor) item.lineStyle.backgroundColor = lineColor;
                if (pointInnerColor) item.pointStyle.backgroundColor = pointInnerColor;
                if (pointBorderColor) item.pointStyle.borderColor = pointBorderColor;

                if (item.highlight) {
                    if (highlightTitleColor) item.titleStyle.color = highlightTitleColor;
                    if (highlightPointInnerColor) item.pointStyle.backgroundColor = highlightPointInnerColor;
                    if (highlightPointBorderColor) item.pointStyle.borderColor = highlightPointBorderColor;
                }
                return item;
            });
        }
    }
};

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bui-flow-box"]
  }, _vm._l((_vm.newItems), function(item, index) {
    return _c('div', {
      staticClass: ["bui-flow"],
      on: {
        "click": function($event) {
          _vm._click(index)
        }
      }
    }, [_c('div', {
      staticClass: ["bui-flow-header", "bui-flow-list"]
    }, [_c('div', {
      staticClass: ["bui-flow-line"],
      style: Object.assign({
        'top': (index == 0 ? '20px' : '0px'),
        'bottom': (index == _vm.newItems.length - 1 ? '20px' : '0px')
      }, item.lineStyle)
    }), _c('div', {
      staticClass: ["bui-flow-header-point"],
      class: [item.highlight ? 'highlight-point' : ''],
      style: item.pointStyle
    }), (item.title) ? _c('text', {
      staticClass: ["bui-flow-text", "bui-flow-header-title"],
      class: [item.highlight ? 'text-highlight-title' : ''],
      style: item.titleStyle
    }, [_vm._v(_vm._s(item.title))]) : _vm._e()]), _c('div', {
      staticClass: ["bui-flow-main", "bui-flow-list"],
      staticStyle: {
        backgroundColor: "#ffffff"
      }
    }, [_c('div', {
      staticClass: ["bui-flow-line"],
      style: Object.assign({
        'width': (index == _vm.newItems.length - 1 ? '0px' : '2px')
      }, item.lineStyle)
    }), _c('div', {
      staticClass: ["bui-flow-text", "bui-flow-main-desc"]
    }, [(item.desc) ? _c('text', {
      staticClass: ["desc-text"]
    }, [_vm._v(_vm._s(item.desc))]) : _vm._e(), (item.date) ? _c('text', {
      staticClass: ["desc-date"]
    }, [_vm._v(_vm._s(item.date))]) : _vm._e()])])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(139)
)

/* script */
__vue_exports__ = __webpack_require__(140)

/* template */
var __vue_template__ = __webpack_require__(141)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-swipe-cell.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-657921af"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = {
  "bui-list": {
    "flex": 1
  },
  "bui-cell": {
    "flexDirection": "row",
    "alignItems": "center",
    "height": "100",
    "borderBottomWidth": "1",
    "borderBottomColor": "#d7dde4",
    "borderBottomStyle": "solid",
    "backgroundColor:active": "#f5f5f5"
  },
  "bui-cell-large": {
    "flexDirection": "row",
    "height": "120",
    "borderBottomWidth": "1",
    "borderBottomColor": "#d7dde4",
    "borderBottomStyle": "solid",
    "backgroundColor:active": "#f5f5f5"
  },
  "bui-cell-swipe-menu": {
    "flexDirection": "row",
    "borderBottomWidth": "1",
    "borderBottomColor": "#d7dde4",
    "borderBottomStyle": "solid"
  },
  "bui-cell-xlarge": {
    "flexDirection": "row",
    "alignItems": "center",
    "height": "140",
    "borderBottomWidth": "1",
    "borderBottomColor": "#d7dde4",
    "borderBottomStyle": "solid",
    "backgroundColor:active": "#f5f5f5"
  },
  "bui-list-left": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingLeft": "20"
  },
  "bui-list-main": {
    "paddingLeft": "20",
    "flex": 1,
    "justifyContent": "center",
    "backgroundColor": "#ffffff"
  },
  "bui-list-right": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingRight": "20"
  },
  "bui-list-title": {
    "fontSize": "34",
    "color": "#464c5b",
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "bui-list-subtitle": {
    "fontSize": "30",
    "color": "#9ea7b4",
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "bui-list-thumb": {
    "width": "80",
    "height": "80"
  },
  "bui-list-action": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "300"
  },
  "bui-loading": {
    "width": "750",
    "height": "150",
    "alignItems": "center",
    "justifyContent": "center",
    "paddingTop": "10",
    "paddingBottom": "10"
  },
  "bui-refresh": {
    "justifyContent": "center",
    "flexDirection": "row",
    "width": "750",
    "height": "100",
    "alignItems": "center",
    "paddingTop": "10",
    "paddingBottom": "10"
  },
  "bui-loading-indicator": {
    "fontSize": "30",
    "textAlign": "center",
    "color": "#9ea7b4"
  },
  "bui-indicator": {
    "height": "60",
    "width": "60",
    "color": "#9ea7b4"
  },
  "bui-list-swipe": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0,
    "flexDirection": "row",
    "justifyContent": "flex-end"
  },
  "bui-list-swipe-btn": {
    "flexDirection": "row",
    "width": "120",
    "alignItems": "center",
    "justifyContent": "center",
    "textAlign": "center",
    "backgroundColor": "#c6c7c8"
  },
  "bgRed": {
    "backgroundColor": "#fa3300"
  },
  "bui-list-swipe-btn-text": {
    "fontSize": "30",
    "color": "#ffffff"
  },
  "bui-list-swipe-main": {
    "flexDirection": "row"
  },
  "bui-list-main-left": {
    "justifyContent": "center",
    "flex": 1
  },
  "bui-list-desc": {
    "fontSize": "25",
    "color": "#464c5b"
  }
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
var defaultAction = [{
    'title': '取消',
    'bgcolor': '#c6c7c8'
}, {
    'title': '删除',
    'bgcolor': '#fa3300'
}];

module.exports = {
    data: function data() {
        return {
            ss: ''
        };
    },
    props: {
        items: {
            type: Array,
            default: function _default() {
                return defaultAction;
            }
        },
        height: {
            type: String,
            default: '100px'
        },
        title: {
            type: String
        }
    },
    methods: {
        //操作点击事件
        _actionClick: function _actionClick(index) {
            var _this = this;

            this.close(function () {
                _this.$emit('actionClick', index);
            });
        },
        _swipe: function _swipe(e) {
            var _this2 = this;

            switch (e.direction) {
                case 'left':
                    this.open(function () {
                        _this2.$emit('swipeleft');
                    });
                    break;
                case 'right':
                    this.close(function () {
                        _this2.$emit('swiperight');
                    });
                    break;
            }
        },
        _click: function _click() {
            this.$emit('click');
            this.close();
        },
        close: function close(fn) {
            var translate = 'translate(0px, 0px)';
            var el = this.$refs.swipedom;
            this._animationFn(el, 1, translate, 'ease-in', function () {
                fn && fn();
            });
        },
        open: function open(fn) {
            var swipeDom = this.$refs.swipeBox;
            var lenDom = void 0;

            if (swipeDom.hasOwnProperty('pureChildren')) lenDom = swipeDom.pureChildren;else lenDom = this.$refs.swipeBox.children;

            var len = lenDom && lenDom.length || 0;
            var translate = 'translate(-' + 120 * len + 'px, 0px)';
            var el = this.$refs.swipedom;
            this._animationFn(el, 1, translate, 'ease-in', function () {
                fn && fn();
            });
        },
        _animationFn: function _animationFn(el, opacity, translate, timing, fn) {
            animation.transition(el, {
                styles: {
                    opacity: opacity,
                    transform: translate,
                    transformOrigin: 'center center'
                },
                duration: 200,
                timingFunction: timing,
                delay: 0
            }, function () {
                fn && fn();
            });
        }
    }
};

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bui-list-swipe-menu"]
  }, [_c('div', {
    staticClass: ["bui-cell-swipe-menu"],
    style: {
      'height': _vm.height
    }
  }, [_c('div', {
    ref: "swipeBox",
    staticClass: ["bui-list-swipe"]
  }, [_vm._t("action", _vm._l((_vm.items), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["bui-list-swipe-btn"],
      style: {
        'background-color': item.bgcolor
      },
      on: {
        "click": function($event) {
          _vm._actionClick(index)
        }
      }
    }, [_c('text', {
      staticClass: ["bui-list-swipe-btn-text"]
    }, [_vm._v(_vm._s(item.title))])])
  }))], 2), _c('div', {
    ref: "swipedom",
    staticClass: ["bui-list-main", "bui-list-swipe-main"],
    on: {
      "click": _vm._click,
      "swipe": function($event) {
        _vm._swipe($event)
      }
    }
  }, [_c('div', {
    staticClass: ["bui-list-main-left"]
  }, [_vm._t("content", [(_vm.title) ? _c('text', {
    staticClass: ["bui-list-title"]
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()])], 2)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(143)

/* template */
var __vue_template__ = __webpack_require__(144)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\icon.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//

var iconItems = __webpack_require__(2);
var fontFamily = "ionfont";
var domModule = weex.requireModule("dom");
module.exports = {
    beforeCreate: function beforeCreate() {
        var url = weex.config.bundleUrl;
        if (url.indexOf('?') > 0) {
            url = url.substring(0, url.indexOf('?'));
        }
        url = url.split('/').slice(0, -1).join('/');

        if (url.indexOf("http") != 0 && url.indexOf("file") != 0) {
            if (url.indexOf("/") == 0) {
                url = url.substring(url.indexOf("/") + 1);
            }
            url = "local://" + (url == "" ? '' : "/") + url;
        }
        url = url + "/font/ionicons.ttf";
        domModule.addRule('fontFace', {
            'fontFamily': fontFamily,
            'src': "url('" + url + "')"
        });
    },

    props: {
        name: {
            type: String,
            defalut: ''
        },
        color: {
            type: String,
            default: '#9ea7b4'
        },
        size: {
            type: [Number, String],
            default: 48
        },
        activeColor: {
            type: String
        }
    },
    computed: {
        getFontName: function getFontName() {
            var icon = iconItems[this.name];
            return this.decode(icon || '');
        },
        getStyle: function getStyle() {
            var style = {
                'color': this.color,
                'font-size': this.size,
                'font-family': fontFamily
            };
            if (this.activeColor) {
                style["color:active"] = this.activeColor;
            }
            return style;
        }
    },
    methods: {
        _click: function _click(e) {
            this.$emit("click", e);
        },
        decode: function decode(fontCode) {
            if (/^&#x/.test(fontCode)) {
                return String.fromCharCode(fontCode.replace(/^&#x/, '0x').replace(/;$/, ''));
            } else {
                return String.fromCharCode('0x' + fontCode);
            }
        }
    }
};

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    style: _vm.getStyle
  }, [_vm._v(_vm._s(_vm.getFontName))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(146)
)

/* script */
__vue_exports__ = __webpack_require__(147)

/* template */
var __vue_template__ = __webpack_require__(148)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-tabbar-scroller.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-69aae2c2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = {
  "tab-bar": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "tab-bar-item": {
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "alignItems": "center"
  },
  "tab-bar-text": {
    "marginTop": "10",
    "lines": 1,
    "textOverflow": "ellipsis"
  }
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');
// 默认配置
var tableDefaultStyle = {
    width: 150,
    height: 120,
    color: '#999',
    selectedColor: '#54AAFE',
    backgroundColor: '#fff',
    selectedBackgroundColor: '#fff',
    borderBottomColor: '#fff',
    selectedBorderBottomColor: '#54AAFE',
    borderBottomWidth: 3,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    selectedBorderTopColor: '#ccc',
    fontSize: 28
};
var imageDefaultStyle = {
    width: 50,
    height: 50,
    radius: 0
};
var iconDefaultStyle = {
    color: '#9ea7b4',
    selectedColor: '#54AAFE',
    size: 43
};
exports.default = {
    props: {
        tabs: {
            type: Array,
            defulat: function defulat() {
                return [];
            }
        },
        tabStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        imageStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        iconStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        width: {
            type: Number,
            default: 750
        },
        value: {
            type: Number,
            default: 0
        }

    },
    data: function data() {
        return {
            prevIndex: 0
        };
    },

    methods: {
        handleClick: function handleClick(e, item, index) {
            this.prevIndex = this.value;
            this.to(index);
            this.$emit('change', index);
            this.$emit('input', index);
        },
        to: function to(index) {
            var prev = this.prevIndex;
            var currentTabEl = this.$refs['tabbar-item' + index][0];
            this.value = index;
            var width = parseInt(this.tabStyles().width);
            var visibleNum = Math.floor(this.width / width);
            var tabsNum = this.tabs.length;
            var computedPage = tabsNum > visibleNum ? 2 : index;
            var offset = index + 1 >= visibleNum ? -(this.width - width) / 2 : -width * computedPage;
            if (prev > visibleNum || index > 1) {
                dom.scrollToElement(currentTabEl, {
                    offset: offset
                });
            }
            if (index <= 1 && prev > index) {
                dom.scrollToElement(currentTabEl, {
                    offset: -width * index
                });
            }
        },
        next: function next() {
            var index = this.value;
            if (index < this.tabs.length - 1) {
                index++;
            }
            this.to(index);
        },
        prev: function prev() {
            var index = this.value;
            if (index > 0) {
                index--;
            }
            this.to(index);
        },
        tabStyles: function tabStyles(index) {
            var selected = index == this.value;

            this.tabStyle = Object.assign(tableDefaultStyle, this.tabStyle);

            if (this.flexflow) {}

            var _tabStyle = this.tabStyle,
                width = _tabStyle.width,
                height = _tabStyle.height,
                selectedBackgroundColor = _tabStyle.selectedBackgroundColor,
                backgroundColor = _tabStyle.backgroundColor,
                borderBottomWidth = _tabStyle.borderBottomWidth,
                borderStyle = _tabStyle.borderStyle,
                selectedBorderBottomColor = _tabStyle.selectedBorderBottomColor,
                borderBottomColor = _tabStyle.borderBottomColor,
                borderTopWidth = _tabStyle.borderTopWidth,
                borderTopColor = _tabStyle.borderTopColor,
                selectedBorderTopColor = _tabStyle.selectedBorderTopColor;

            return {
                width: width + 'px',
                height: height + 'px',
                backgroundColor: selected ? selectedBackgroundColor : backgroundColor,
                borderBottomWidth: borderBottomWidth,
                borderBottomStyle: borderStyle,
                borderBottomColor: selected ? selectedBorderBottomColor : borderBottomColor,
                borderTopWidth: borderTopWidth,
                borderTopColor: selected ? selectedBorderTopColor : borderTopColor
            };
        },
        imageStyles: function imageStyles() {
            this.imageStyle = Object.assign(imageDefaultStyle, this.imageStyle);
            var _imageStyle = this.imageStyle,
                width = _imageStyle.width,
                height = _imageStyle.height,
                radius = _imageStyle.radius;

            return {
                width: width + 'px',
                height: height + 'px',
                radius: radius + 'px'
            };
        },
        iconStyles: function iconStyles() {
            this.iconStyle = Object.assign(iconDefaultStyle, this.iconStyle);
            var _iconStyle = this.iconStyle,
                color = _iconStyle.color,
                selectedColor = _iconStyle.selectedColor,
                size = _iconStyle.size;

            return {
                color: color,
                selectedColor: selectedColor,
                size: size
            };
        }
    },
    watch: {
        value: function value(newVal, oldValue) {
            this.prevIndex = oldValue || 0;
            this.to(newVal);
        }
    }
};

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["tab-bar"],
    style: {
      height: (_vm.tabStyles().height) + 'px',
      width: _vm.width + 'px'
    },
    attrs: {
      "showScrollbar": false,
      "scrollDirection": "horizontal"
    }
  }, _vm._l((_vm.tabs), function(item, index) {
    return _c('div', {
      ref: 'tabbar-item' + index,
      refInFor: true,
      staticClass: ["tab-bar-item"],
      style: _vm.tabStyles(index),
      on: {
        "click": function($event) {
          _vm.handleClick($event, item, index)
        }
      }
    }, [(item.pic || item.selectedPic) ? _c('bui-image', {
      staticClass: ["tab-bar-image"],
      attrs: {
        "src": index === _vm.value ? item.selectedPic || item.pic : item.pic,
        "width": _vm.imageStyles().width,
        "height": _vm.imageStyles().height,
        "radius": _vm.imageStyles().radius
      },
      on: {
        "click": function($event) {
          _vm.handleClick($event, item, index)
        }
      }
    }) : (item.icon) ? _c('bui-icon', {
      attrs: {
        "name": item.icon,
        "color": index === _vm.value ? _vm.iconStyles().selectedColor : _vm.iconStyles().color,
        "size": _vm.iconStyles().size
      },
      on: {
        "click": function($event) {
          _vm.handleClick($event, item, index)
        }
      }
    }) : _vm._e(), _c('text', {
      staticClass: ["tab-bar-text"],
      style: {
        color: index == _vm.value ? _vm.tabStyle.selectedColor : _vm.tabStyle.color,
        fontSize: _vm.tabStyle.fontSize
      }
    }, [_vm._v(_vm._s(item.title))])], 1)
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(150)
)

/* script */
__vue_exports__ = __webpack_require__(151)

/* template */
var __vue_template__ = __webpack_require__(152)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-timeline.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2c84cf4a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = {
  "bui-timeline": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "bui-timeline-item": {
    "paddingBottom": "35",
    "paddingLeft": 0,
    "paddingRight": 0,
    "paddingTop": 0,
    "position": "relative",
    "flexDirection": "row"
  },
  "bui-timeline-item-tail": {
    "backgroundColor": "#e3e8ee",
    "width": "1",
    "position": "absolute",
    "left": "12",
    "top": 0,
    "bottom": 0
  },
  "bui-timeline-item-tail-first": {
    "top": "10"
  },
  "bui-timeline-item-tail-last": {
    "width": 0
  },
  "bui-timeline-item-head": {
    "width": "25",
    "height": "25",
    "backgroundColor": "#ffffff",
    "borderTopLeftRadius": "25",
    "borderTopRightRadius": "25",
    "borderBottomRightRadius": "25",
    "borderBottomLeftRadius": "25",
    "borderWidth": "5",
    "borderStyle": "solid",
    "borderColor": "rgba(0,0,0,0)",
    "position": "absolute",
    "left": 0,
    "top": 0
  },
  "bui-timeline-item-head-blue": {
    "borderColor": "#3399ff"
  },
  "bui-timeline-item-head-red": {
    "borderColor": "#ff3300"
  },
  "bui-timeline-item-head-green": {
    "borderColor": "#00cc66"
  },
  "bui-timeline-item-head-gray": {
    "borderColor": "#c4c4c4"
  },
  "bui-timeline-item-head-custom": {
    "width": "40",
    "marginTop": "6",
    "paddingTop": "3",
    "paddingBottom": "3",
    "paddingLeft": 0,
    "paddingRight": 0,
    "textAlign": "center",
    "lineHeight": 1,
    "borderWidth": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "fontSize": "28",
    "position": "absolute",
    "left": "-13",
    "transform": "translateY(-50%)"
  },
  "bui-timeline-item-content": {
    "paddingBottom": "1",
    "paddingLeft": "45",
    "paddingTop": "1",
    "fontSize": "28"
  },
  "timeline-text": {
    "fontWeight": "bold",
    "fontSize": "32",
    "lineHeight": "32",
    "color": "#464c5b"
  }
}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//

var prefixCls = 'bui-timeline';
module.exports = {
    props: {
        pending: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes: function classes() {
            return ['' + prefixCls, this.pending ? prefixCls + '-pending' : ''];
        }
    }
};

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(154)
)

/* script */
__vue_exports__ = __webpack_require__(155)

/* template */
var __vue_template__ = __webpack_require__(156)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-timeline-item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d271a916"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = {
  "bui-timeline": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "bui-timeline-item": {
    "paddingBottom": "35",
    "paddingLeft": 0,
    "paddingRight": 0,
    "paddingTop": 0,
    "position": "relative",
    "flexDirection": "row"
  },
  "bui-timeline-item-tail": {
    "backgroundColor": "#e3e8ee",
    "width": "1",
    "position": "absolute",
    "left": "12",
    "top": 0,
    "bottom": 0
  },
  "bui-timeline-item-tail-first": {
    "top": "10"
  },
  "bui-timeline-item-tail-last": {
    "width": 0
  },
  "bui-timeline-item-head": {
    "width": "25",
    "height": "25",
    "backgroundColor": "#ffffff",
    "borderTopLeftRadius": "25",
    "borderTopRightRadius": "25",
    "borderBottomRightRadius": "25",
    "borderBottomLeftRadius": "25",
    "borderWidth": "5",
    "borderStyle": "solid",
    "borderColor": "rgba(0,0,0,0)",
    "position": "absolute",
    "left": 0,
    "top": 0
  },
  "bui-timeline-item-head-blue": {
    "borderColor": "#3399ff"
  },
  "bui-timeline-item-head-red": {
    "borderColor": "#ff3300"
  },
  "bui-timeline-item-head-green": {
    "borderColor": "#00cc66"
  },
  "bui-timeline-item-head-gray": {
    "borderColor": "#c4c4c4"
  },
  "bui-timeline-item-head-custom": {
    "width": "40",
    "marginTop": "6",
    "paddingTop": "3",
    "paddingBottom": "3",
    "paddingLeft": 0,
    "paddingRight": 0,
    "textAlign": "center",
    "lineHeight": 1,
    "borderWidth": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "fontSize": "28",
    "position": "absolute",
    "left": "-13",
    "transform": "translateY(-50%)"
  },
  "bui-timeline-item-content": {
    "paddingBottom": "1",
    "paddingLeft": "45",
    "paddingTop": "1",
    "fontSize": "28"
  },
  "timeline-text": {
    "fontWeight": "bold",
    "fontSize": "32",
    "lineHeight": "32",
    "color": "#464c5b"
  }
}

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//

var prefixCls = 'bui-timeline';

module.exports = {
    props: {
        color: {
            type: String,
            default: 'blue'
        },
        last: {
            type: Boolean,
            default: false
        },
        first: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '发布版本一'
        }
    },
    data: function data() {
        return {
            dot: false
        };
    },
    mounted: function mounted() {
        this.dot = this.$refs.dot.pureChildren.length ? true : false;
    },

    computed: {
        itemClasses: function itemClasses() {
            return [prefixCls + '-item'];
        },
        tailClasses: function tailClasses() {
            return [prefixCls + '-item-tail', this.first ? prefixCls + '-item-tail-first' : '', this.last ? prefixCls + '-item-tail-last' : ''];
        },
        headClasses: function headClasses() {
            return [prefixCls + '-item-head', this.dot ? prefixCls + '-item-head-custom' : '', this.headColorShow ? prefixCls + '-item-head-' + this.color : ''];
        },
        headColorShow: function headColorShow() {
            return this.color == 'blue' || this.color == 'red' || this.color == 'green' || this.color == 'gray';
        },
        customColor: function customColor() {
            var style = {};
            if (this.color) {
                if (!this.headColorShow) {
                    style = {
                        'border-color': this.color
                    };
                }
            }
            return style;
        },
        contentClasses: function contentClasses() {
            return [prefixCls + '-item-content'];
        }
    }
};

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.itemClasses
  }, [_c('div', {
    class: _vm.contentClasses
  }, [_vm._t("default", [_c('text', {
    staticClass: ["timeline-text"]
  }, [_vm._v(_vm._s(_vm.title))])])], 2), _c('div', {
    class: _vm.tailClasses
  }), _c('div', {
    ref: "dot",
    class: _vm.headClasses,
    style: _vm.customColor
  }, [_vm._t("dot")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(158)
)

/* script */
__vue_exports__ = __webpack_require__(159)

/* template */
var __vue_template__ = __webpack_require__(160)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-tag.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d6a97c20"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports = {
  "tag-item": {
    "height": "46",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "tag-border": {
    "borderBottomLeftRadius": "4",
    "borderBottomRightRadius": "4",
    "borderTopLeftRadius": "4",
    "borderTopRightRadius": "4"
  },
  "tag-hollow": {
    "borderWidth": "1"
  },
  "tag-image": {
    "height": "46"
  },
  "tag-special": {
    "borderWidth": "1",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "left-image": {
    "width": "40",
    "height": "40"
  },
  "tag-left": {
    "width": "44",
    "height": "44",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "tag-text": {
    "fontSize": "26",
    "height": "34",
    "lineHeight": "34",
    "paddingLeft": "16",
    "paddingRight": "16"
  }
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
    props: {
        type: {
            type: String,
            default: 'solid'
        },
        value: {
            type: [String, Number],
            default: '测试测试'
        },
        tagColor: {
            type: String,
            default: '#5da3f6'
        },
        fontColor: {
            type: String,
            default: '#333333'
        },
        specialIcon: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        }
    },
    data: function data() {
        return {
            imgWidth: 90
        };
    },

    computed: {
        showSolid: function showSolid() {
            var type = this.type,
                value = this.value;

            return type === 'solid' && value !== '';
        },
        showHollow: function showHollow() {
            var type = this.type,
                value = this.value;

            return type === 'hollow' && value !== '';
        },
        showSpecial: function showSpecial() {
            var type = this.type,
                value = this.value,
                specialIcon = this.specialIcon;

            return type === 'special' && value !== '' && specialIcon !== '';
        },
        showImage: function showImage() {
            var type = this.type,
                img = this.img;

            return type === 'image' && img !== '';
        },
        tagTextStyle: function tagTextStyle() {
            var tagColor = this.tagColor,
                showSolid = this.showSolid;

            return showSolid ? { backgroundColor: tagColor } : { borderColor: tagColor };
        }
    },
    methods: {
        onLoad: function onLoad(e) {
            if (e.success && e.size && e.size.naturalWidth > 0) {
                var width = e.size.naturalWidth;
                var height = e.size.naturalHeight;
                this.imgWidth = width * (46 / height);
            }
        },
        close: function close(event) {
            this.$emit('close', event);
        }
    }
};

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.showSolid || _vm.showHollow) ? _c('div', {
    class: ['tag-item', 'tag-border', _vm.showHollow && 'tag-hollow'],
    style: _vm.tagTextStyle
  }, [_c('text', {
    staticClass: ["tag-text"],
    style: {
      color: _vm.fontColor
    }
  }, [_vm._v(_vm._s(_vm.value))])]) : _vm._e(), (_vm.showImage) ? _c('bui-image', {
    staticClass: ["tag-image"],
    style: {
      width: _vm.imgWidth + 'px'
    },
    attrs: {
      "src": _vm.img,
      "ariaHidden": true
    },
    on: {
      "load": _vm.onLoad
    }
  }) : _vm._e(), (_vm.showSpecial) ? _c('div', {
    staticClass: ["tag-special", "tag-border"],
    style: {
      borderColor: _vm.tagColor
    },
    attrs: {
      "accessible": true,
      "ariaLabel": _vm.value
    }
  }, [_c('div', {
    staticClass: ["tag-left"],
    style: {
      backgroundColor: _vm.tagColor
    }
  }, [_c('bui-image', {
    staticClass: ["left-image"],
    attrs: {
      "src": _vm.specialIcon
    }
  })], 1), _c('text', {
    staticClass: ["tag-text"],
    style: {
      color: _vm.fontColor
    }
  }, [_vm._v(_vm._s(_vm.value))])]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(162)
)

/* script */
__vue_exports__ = __webpack_require__(163)

/* template */
var __vue_template__ = __webpack_require__(164)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-dropload.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-19597e6f"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = {
  "bui-weex-dropload": {
    "flex": 1,
    "display": "flex"
  },
  "bui-weex-dropload__refresh": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "paddingTop": "30",
    "paddingBottom": "30"
  },
  "bui-weex-dropload__text": {
    "color": "#3399ff",
    "fontSize": "30",
    "marginRight": "20"
  },
  "bui-weex-dropload__indicator": {
    "height": "40",
    "width": "40",
    "color": "#3399ff"
  },
  "bui-weex-dropload__loading": {
    "width": "750",
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "height": "100"
  }
}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
  name: 'bui-dropload',
  props: {
    distance: {
      type: Number,
      default: 100
    },
    hasRefresh: {
      type: Boolean,
      default: true
    },
    hasLoading: {
      type: Boolean,
      default: true
    },
    hasLoadmore: {
      type: Boolean,
      default: false
    },
    refreshTextMap: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    loadingTextMap: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    refreshTextStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    refreshIconStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    loadingTextStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    loadingIconStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    refreshStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    loadingStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    droploadStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      canLoadmore: true,
      isRefreshBack: false,
      refreshing: false,
      loadinging: false,
      refreshText: '',
      loadingText: '',
      loadmoreText: '加载更多',
      refreshTextDefault: {
        start: '下拉刷新',
        move: '释放立即刷新',
        success: '刷新完成',
        fail: '刷新失败，请重试'
      },
      loadingTextDefault: {
        start: '上拉加载更多',
        success: '加载完成',
        empty: '没有更多了',
        fail: '加载失败，请重试'
      }
    };
  },

  methods: {
    onrefresh: function onrefresh(event) {
      this.refreshing = true;
      this.$emit('refresh', this.refreshRecover);
    },
    refreshRecover: function refreshRecover() {
      var _this = this;

      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';

      this.isRefreshBack = true;
      switch (state) {
        case 'success':
          this.refreshText = this.refreshTextDefault.success;

          break;
        case 'fail':
          this.refreshText = this.refreshTextDefault.fail;
          break;
        default:
          this.refreshText = state;
          break;
      }
      setTimeout(function () {
        _this.refreshing = false;
        setTimeout(function () {
          _this.isRefreshBack = false;
          _this.refreshText = _this.refreshTextDefault.start;
        }, 200);
      }, 500);
    },
    onpullingdown: function onpullingdown(event) {
      if (Math.abs(event.pullingDistance) >= this.distance && !this.isRefreshBack) {

        this.refreshText = this.refreshTextDefault.move;
      }
    },
    loadingRecover: function loadingRecover() {
      var _this2 = this;

      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';

      switch (state) {
        case 'empty':
          this.loadingText = this.loadingTextDefault.empty;
          break;
        case 'success':
          this.loadingText = this.loadingTextDefault.success;
          break;
        case 'fail':
          this.loadingText = this.loadingTextDefault.fail;
          break;
        default:
          this.loadingText = state;
          break;
      }
      setTimeout(function () {
        _this2.loadinging = false;
        setTimeout(function () {
          _this2.loadingText = _this2.loadingTextDefault.start;
        }, 200);
      }, 1000);
    },
    onloading: function onloading(event) {
      this.loadinging = true;
      this.loadingText = this.loadingTextDefault.start;

      this.$emit('loading', this.loadingRecover);
    },
    onscroll: function onscroll(event) {
      this.$emit('scroll', event);
    },
    onloadmore: function onloadmore(event) {

      this.$refs.dropload.resetLoadmore();
      this.$emit('loadmore', event);
    },
    setRefreshTextMap: function setRefreshTextMap(val) {
      this.refreshTextDefault = Object.assign({}, this.refreshTextDefault, val || {});
      this.refreshText = this.refreshTextDefault.start;
    },
    setLoadingTextMap: function setLoadingTextMap(val) {
      this.loadingTextDefault = Object.assign({}, this.loadingTextDefault, val || {});
      this.loadingText = this.loadingTextDefault.start;
    }
  },
  created: function created() {
    this.setRefreshTextMap(this.refreshTextMap);
    this.setLoadingTextMap(this.loadingTextMap);
  },
  mounted: function mounted() {},

  computed: {
    refreshStyles: function refreshStyles() {
      // let width = this.$getWidth();
      var style = {
        width: '750px'
      };
      return Object.assign(this.refreshStyle, style);
    },
    loadingStyles: function loadingStyles() {
      // let width = this.$getWidth();
      var style = {
        width: '750px'
      };
      return Object.assign(this.loadingStyle, style);
    },
    loadingIconStyles: function loadingIconStyles() {
      var style = {
        opacity: this.loadinging ? 1 : 0
      };
      return Object.assign(this.loadingIconStyle, style);
    },
    loadingTextStyles: function loadingTextStyles() {
      var style = {
        opacity: this.loadinging ? 1 : 0
      };
      return Object.assign(this.loadingTextStyle, style);
    },
    isShowLoading: function isShowLoading() {

      if (this.$isIPhone) {
        return this.hasLoading && !this.refreshing;
      } else {
        return this.hasLoading;
      }
    }
  },
  watch: {
    refreshTextMap: function refreshTextMap(val) {

      this.setRefreshTextMap(val);
    },
    loadingTextMap: function loadingTextMap(val) {
      this.setLoadingTextMap(val);
    }
  }
};

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    ref: "dropload",
    staticClass: ["bui-weex-dropload"],
    style: _vm.droploadStyle,
    attrs: {
      "loadmoreoffset": 100
    },
    on: {
      "scroll": _vm.onscroll,
      "loadmore": _vm.onloadmore
    }
  }, [(_vm.hasRefresh) ? _c('refresh', {
    staticClass: ["bui-weex-dropload__refresh"],
    style: _vm.refreshStyles,
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh,
      "pullingdown": _vm.onpullingdown
    }
  }, [_c('text', {
    staticClass: ["bui-weex-dropload__text"],
    style: _vm.refreshTextStyle
  }, [_vm._v(_vm._s(_vm.refreshText))]), _c('loading-indicator', {
    staticClass: ["bui-weex-dropload__indicator"],
    style: _vm.refreshIconStyle
  })]) : _vm._e(), (_vm.$slots.content) ? _c('cell', {
    staticClass: ["bui-weex-dropload__cell"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_vm._t("content")], 2) : _vm._e(), (_vm.$slots.default) ? _vm._t("default") : _vm._e(), (_vm.isShowLoading) ? _c('loading', {
    staticClass: ["bui-weex-dropload__loading"],
    style: _vm.loadingStyles,
    attrs: {
      "display": _vm.loadinging ? 'show' : 'hide'
    },
    on: {
      "loading": _vm.onloading
    }
  }, [_c('text', {
    staticClass: ["bui-weex-dropload__text"],
    style: _vm.loadingTextStyles
  }, [_vm._v(_vm._s(_vm.loadingText))]), _c('loading-indicator', {
    staticClass: ["bui-weex-dropload__indicator"],
    style: _vm.loadingIconStyles
  })]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports = {
  "bui-weex-popover__mask": {
    "position": "fixed",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0,
    "backgroundColor": "#000000",
    "opacity": 0.5
  },
  "bui-weex-popover__wrap": {
    "position": "fixed",
    "opacity": 0
  },
  "bui-weex-popover__inner": {
    "position": "absolute",
    "left": "40",
    "top": "40",
    "right": "40",
    "bottom": "40",
    "backgroundColor": "#ffffff"
  },
  "bui-weex-popover__arrow": {
    "position": "absolute"
  },
  "bui-weex-popover__list": {
    "flex": 1
  },
  "bui-weex-popover__title": {
    "paddingTop": "8",
    "paddingBottom": "8",
    "fontSize": "30",
    "color": "#17233d",
    "textOverflow": "ellipsis",
    "lines": 1,
    "backgroundColor": "#ffffff"
  },
  "bui-weex-popover__content": {
    "fontSize": "26",
    "paddingTop": "8",
    "paddingBottom": "8",
    "color": "#515a6e",
    "backgroundColor": "#ffffff"
  }
}

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
/*const DEFAULT_CONTENT_STYLE = {
	borderRadius : 4,
	padding : 10,
}*/
exports.default = {
	props: {
		pos: {
			type: Object,
			default: function _default() {
				return {
					width: 0,
					height: 0,
					left: 0,
					top: 0,
					right: 0,
					bottom: 0
				};
			}
		},
		placement: {
			type: String,
			default: 'bottom'
		},
		width: {
			type: [Number, String],
			default: 300
		},
		height: {
			type: [Number, String],
			default: 300
		},
		offsetX: {
			type: [Number, String],
			default: 0
		},
		offsetY: {
			type: [Number, String],
			default: 0
		},
		autoClose: {
			type: Boolean,
			default: true
		},
		duration: {
			type: [Number, String],
			default: 100
		},
		hasArrow: {
			type: Boolean,
			default: true
		},
		value: {
			type: Boolean,
			default: false
		},
		arrowColor: {
			type: String,
			default: '#ffffff'
		},
		maskStyle: {
			type: Object,
			default: function _default() {
				return {};
			}
		},
		panelStyle: {
			type: Object,
			default: function _default() {
				return {};
			}
		}

	},
	data: function data() {
		return {
			visible: false

		};
	},

	methods: {
		handleFixClick: function handleFixClick(e) {},
		handleTrigger: function handleTrigger(e) {},
		handleMask: function handleMask() {
			if (this.autoClose) {
				this.hide();
			}
			this.$emit('onMask');
		},
		show: function show() {
			var _this = this;

			this.visible = true;
			setTimeout(function () {
				_this.animationShow();
			}, 40);
		},
		hide: function hide() {
			this.animationHide();
		},
		animationShow: function animationShow() {
			var el = this.$refs.el;
			if (!el) {
				return;
			}
			animation.transition(el, {
				styles: {
					opacity: 1
				},
				delay: 0,
				duration: this.duration,
				timingFunction: 'ease-out'

			}, function (e) {});
		},
		animationHide: function animationHide() {
			var _this2 = this;

			var el = this.$refs.el;
			if (!el) {
				return;
			}

			animation.transition(el, {
				styles: {
					opacity: 0
				},
				delay: 0,
				duration: this.duration,
				timingFunction: 'ease-out'

			}, function (e) {
				_this2.visible = false;
			});
		}
	},
	computed: {
		popoverStyles: function popoverStyles() {
			var placement = this.placement,
			    pos = this.pos,
			    width = this.width,
			    height = this.height;


			var style = this.getCalculatedOffset;
			style.width = width;
			style.height = height;
			return style;
		},
		getCalculatedOffset: function getCalculatedOffset() {
			var placement = this.placement,
			    pos = this.pos,
			    width = this.width,
			    height = this.height,
			    offsetX = this.offsetX,
			    offsetY = this.offsetY;

			var style = {};
			var top = void 0,
			    left = void 0;
			var padding = 40;
			switch (placement) {
				case 'bottom':
					top = pos.top + pos.height;
					left = pos.left + pos.width / 2 - width / 2;
					break;
				case 'bottom-start':
					top = pos.top + pos.height;
					left = pos.left - padding;
					break;
				case 'bottom-end':
					top = pos.top + pos.height;
					left = pos.right - width + padding;
					break;
				case 'top':
					top = pos.top - height;
					left = pos.left + pos.width / 2 - width / 2;
					break;
				case 'top-start':
					top = pos.top - height;
					left = pos.left - padding;
					break;
				case 'top-end':
					top = pos.top - height;
					left = pos.right - width + padding;
					break;
				case 'left':
					top = pos.top + pos.height / 2 - height / 2;
					left = pos.left - width;
					break;
				case 'left-start':
					top = pos.top - padding;
					left = pos.left - width;
					break;
				case 'left-end':
					top = pos.top - pos.height - padding;
					left = pos.left - width;
					break;
				case 'right':
					top = pos.top + pos.height / 2 - height / 2;
					left = pos.left + pos.width;
					break;
				case 'right-start':
					top = pos.top - padding;
					left = pos.left + pos.width;
					break;
				case 'right-end':
					top = pos.top - pos.height - padding;
					left = pos.left + pos.width;
					break;
				default:
					top = pos.top + pos.height;
					left = pos.left + pos.width / 2 - width / 2;
					break;

			}
			style.left = parseInt(left, 10) + offsetX;
			style.top = parseInt(top, 10) + offsetY;
			return style;
		},
		arrowStyles: function arrowStyles() {
			var placement = this.placement,
			    pos = this.pos,
			    width = this.width,
			    height = this.height,
			    offsetX = this.offsetX,
			    offsetY = this.offsetY;

			var arrowAdjust = 20;
			var style = {};
			var top = void 0,
			    left = void 0;
			switch (placement) {
				case 'bottom':
					top = 6;
					left = width / 2 - arrowAdjust;
					break;
				case 'bottom-start':
					top = 6;
					left = arrowAdjust * 2;
					break;
				case 'bottom-end':
					top = 6;
					left = width - arrowAdjust * 5;
					break;
				case 'top':
					top = height - 65;
					left = width / 2 - arrowAdjust;
					break;
				case 'top-start':
					top = height - 65;
					left = arrowAdjust * 2;
					break;
				case 'top-end':
					top = height - 65;
					left = width - arrowAdjust * 5;
					break;
				case 'left':
					top = height / 2 - arrowAdjust;
					left = width - arrowAdjust * 3 - 3;
					break;
				case 'left-start':
					top = arrowAdjust * 2;
					left = width - arrowAdjust * 3 - 3;
					break;
				case 'left-end':
					top = height - arrowAdjust * 5;
					left = width - arrowAdjust * 3 - 3;
					break;
				case 'right':
					top = height / 2 - arrowAdjust;
					left = 6;
					break;
				case 'right-start':
					top = arrowAdjust * 2;
					left = 6;
					break;
				case 'right-end':
					top = height - arrowAdjust * 5;
					left = 6;
					break;
				default:
					top = 6;
					left = width / 2 - arrowAdjust;
					break;
			}
			style.left = parseInt(left, 10);
			style.top = parseInt(top, 10);
			return style;
		},
		iconName: function iconName() {
			var placement = this.placement;


			switch (placement) {
				case 'bottom':
				case 'bottom-start':
				case 'bottom-end':
					return 'ion-android-arrow-dropup';
					break;
				case 'top':
				case 'top-start':
				case 'top-end':
					return 'ion-android-arrow-dropdown';
					break;
				case 'left':
				case 'left-start':
				case 'left-end':
					return 'ion-android-arrow-dropright';
					break;
				case 'right':
				case 'right-start':
				case 'right-end':
					return 'ion-android-arrow-dropleft';
					break;
				default:
					return 'ion-android-arrow-dropup';
					break;
			}
		},
		maskStyles: function maskStyles() {
			return this.maskStyle;
		},
		panelStyles: function panelStyles() {
			return Object.assign({
				borderRadius: 4,
				padding: 10
			}, this.panelStyle);
		}
	},
	created: function created() {
		this.value ? this.show() : this.hide();
	},
	mounted: function mounted() {},

	watch: {
		value: function value(val) {
			val ? this.show() : this.hide();
		},
		visible: function visible(val) {
			this.$emit('input', val);
		}
	}

};

/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bui-weex-popover"]
  }, [(_vm.visible) ? _c('div', {
    staticClass: ["bui-weex-popover__mask"],
    style: _vm.maskStyles,
    on: {
      "click": _vm.handleMask
    }
  }) : _vm._e(), (_vm.visible) ? _c('div', {
    ref: "el",
    staticClass: ["bui-weex-popover__wrap"],
    style: _vm.popoverStyles
  }, [(_vm.hasArrow) ? _c('bui-icon', {
    staticClass: ["bui-weex-popover__arrow"],
    style: _vm.arrowStyles,
    attrs: {
      "color": _vm.arrowColor,
      "size": "60",
      "name": _vm.iconName
    }
  }) : _vm._e(), _c('div', {
    staticClass: ["bui-weex-popover__inner"],
    style: _vm.panelStyles,
    on: {
      "click": _vm.handleFixClick
    }
  }, [_vm._t("default")], 2)], 1) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(169)
)

/* script */
__vue_exports__ = __webpack_require__(170)

/* template */
var __vue_template__ = __webpack_require__(171)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\node_modules\\_bui-weex@0.4.13@bui-weex\\src\\components\\bui-poptip.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1758a0c4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports = {
  "bui-weex-popover__mask": {
    "position": "fixed",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0,
    "backgroundColor": "#000000",
    "opacity": 0.5
  },
  "bui-weex-popover__wrap": {
    "position": "fixed",
    "opacity": 0
  },
  "bui-weex-popover__inner": {
    "position": "absolute",
    "left": "40",
    "top": "40",
    "right": "40",
    "bottom": "40",
    "backgroundColor": "#ffffff"
  },
  "bui-weex-popover__arrow": {
    "position": "absolute"
  },
  "bui-weex-popover__list": {
    "flex": 1
  },
  "bui-weex-popover__title": {
    "paddingTop": "8",
    "paddingBottom": "8",
    "fontSize": "30",
    "color": "#17233d",
    "textOverflow": "ellipsis",
    "lines": 1,
    "backgroundColor": "#ffffff"
  },
  "bui-weex-popover__content": {
    "fontSize": "26",
    "paddingTop": "8",
    "paddingBottom": "8",
    "color": "#515a6e",
    "backgroundColor": "#ffffff"
  }
}

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _buiPopover = __webpack_require__(3);

var _buiPopover2 = _interopRequireDefault(_buiPopover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
	props: {
		title: {
			type: String,
			default: ''
		},
		content: {
			type: String,
			default: ''
		},
		titleStyle: {
			type: Object,
			default: function _default() {
				return {};
			}
		},
		contentStyle: {
			type: Object,
			default: function _default() {
				return {};
			}
		}
	},
	data: function data() {
		return {};
	},

	computed: {
		titleStyles: function titleStyles() {
			return this.titleStyle;
		},
		contentStyles: function contentStyles() {
			return this.contentStyle;
		}
	},
	methods: {
		handleListClick: function handleListClick() {
			this.$emit('poptipClick');
		}
	},
	extends: _buiPopover2.default

};

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bui-weex-popover"]
  }, [(_vm.visible) ? _c('div', {
    staticClass: ["bui-weex-popover__mask"],
    style: _vm.maskStyles,
    on: {
      "click": _vm.handleMask
    }
  }) : _vm._e(), (_vm.visible) ? _c('div', {
    ref: "el",
    staticClass: ["bui-weex-popover__wrap"],
    style: _vm.popoverStyles
  }, [(_vm.hasArrow) ? _c('bui-icon', {
    staticClass: ["bui-weex-popover__arrow"],
    style: _vm.arrowStyles,
    attrs: {
      "color": _vm.arrowColor,
      "size": "60",
      "name": _vm.iconName
    }
  }) : _vm._e(), _c('div', {
    staticClass: ["bui-weex-popover__inner"],
    style: _vm.panelStyles,
    on: {
      "click": _vm.handleFixClick
    }
  }, [_c('list', {
    staticClass: ["bui-weex-popover__list"]
  }, [_c('header', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["bui-weex-popover__title"],
    style: _vm.titleStyles,
    attrs: {
      "value": _vm.title
    },
    on: {
      "click": _vm.handleListClick
    }
  })]), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["bui-weex-popover__content"],
    style: _vm.contentStyles,
    attrs: {
      "value": _vm.content
    },
    on: {
      "click": _vm.handleListClick
    }
  })])])])], 1) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _foo = __webpack_require__(183);

var _foo2 = _interopRequireDefault(_foo);

var _buiWeex = __webpack_require__(4);

var _buiWeex2 = _interopRequireDefault(_buiWeex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 入口*.vue文件，对象命名为"App"，在编译文件"webpack.common.conf.js"里引用
Vue.use(_buiWeex2.default);
// 引入bui-weex


new Vue(Vue.util.extend({ el: '#root' }, _foo2.default));

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(184)
)

/* script */
__vue_exports__ = __webpack_require__(185)

/* template */
var __vue_template__ = __webpack_require__(186)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\Master\\Android\\xh-xianyu\\src\\views\\foo.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-25848bc2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {};

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('bui-button', [_vm._v("biu")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);