(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function i(t,e){switch(r(e)){case"Function":return"function() { [native code] }";default:return e}}function u(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];console[t].apply(console,n)}function c(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var u=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[u].apply(console,e);var c=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(o){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),a="";if(c.length>1){var s=c.pop();a=c.join("---COMMA---"),0===s.indexOf(" at ")?a+=s:a+="---COMMA---"+s}else a=c[0];console[u](a)}n.r(e),n.d(e,"log",(function(){return u})),n.d(e,"default",(function(){return c}))},"2ad3":function(t,e,n){"use strict";n.r(e);var r=n("54b5");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);var i,u,c,a,s=n("f0c5"),f=Object(s["a"])(r["default"],i,u,!1,null,null,null,!1,c,a);e["default"]=f.exports},"39cc":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[n("image",{staticClass:t._$s(1,"sc","logo"),attrs:{_i:1}}),n("view",{staticClass:t._$s(2,"sc","text-area"),attrs:{_i:2}},[n("text",{staticClass:t._$s(3,"sc","title"),attrs:{_i:3}},[t._v(t._$s(3,"t0-0",t._s(t.title)))]),n("text",[t._v(t._$s(4,"t0-0",t._s(t.result)))]),n("button",{attrs:{_i:5},on:{click:function(e){return t.add()}}})])])},i=[]},"54b5":function(t,e,n){"use strict";n.r(e);var r=n("b0f3"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},6180:function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("8709").default)}))},8709:function(t,e,n){"use strict";n.r(e);var r=n("39cc"),o=n("bebf");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var u,c=n("f0c5"),a=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=a.exports},"8bbf":function(t,e){t.exports=Vue},"90d7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{title:"Hello",result:0}},onLoad:function(){},methods:{add:function(){var t=plus.android.runtimeMainActivity(),e=plus.android.importClass("android.content.Intent"),n=new e(t.getIntent());n.setClassName(t,"io.dcloud.HelloH5.TestActivity"),n.setFlags(e.FLAG_ACTIVITY_NEW_TASK),n.putExtra("uni_key","\u6765\u81eauniapp\u7684\u503c");var r=1e3;t.startActivityForResult(n,r),t.onActivityResult=function(t,e,n){t==r&&(alert(t),alert(e),alert(n))}}}};e.default=r},b0f3:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},bebf:function(t,e,n){"use strict";n.r(e);var r=n("90d7"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},c3cc:function(t,e,n){"use strict";n("6180");var r=i(n("2ad3")),o=i(n("8bbf"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}o.default.config.productionTip=!1,r.default.mpType="app";var s=new o.default(c({},r.default));s.$mount()},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,o,i,u,c,a,s){var f,l="function"===typeof t?t.options:t;if(a){l.components||(l.components={});var p=Object.prototype.hasOwnProperty;for(var d in a)p.call(a,d)&&!p.call(l.components,d)&&(l.components[d]=a[d])}if(s&&((s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(l.mixins||(l.mixins=[])).push(s)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),u?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},l._ssrRegister=f):o&&(f=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(l.functional){l._injectStyles=f;var v=l.render;l.render=function(t,e){return f.call(e),v(t,e)}}else{var _=l.beforeCreate;l.beforeCreate=_?[].concat(_,f):[f]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))}},[["c3cc","app-config"]]]);