(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{4138:function(e,t,n){},"6fd2":function(e,t,n){},"740d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("BackButton",{attrs:{pageName:"OUR TEAM"}}),n("div",{staticClass:"flex no-wrap scroll"},e._l(e.members,(function(t){return n("div",{key:t.name+"_member",staticClass:"member-card q-px-md",on:{click:function(n){return e.openMemberPage(t)}}},[n("img",{attrs:{src:t.image}}),n("p",{staticClass:"name text-center text-primary"},[e._v(e._s(t.name))]),n("p",{staticClass:"role text-center text-grey-6"},[e._v(e._s(t.role))])])})),0)],1)},a=[],c=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),o=n.n(c),s=n("2f62"),i=n("74c9");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={name:"Team",components:{BackButton:i["a"]},computed:l({},Object(s["b"])(["members"])),methods:{openMemberPage:function(e){this.$router.push(e.route)}}},f=p,m=(n("8a76"),n("2877")),b=n("eebe"),d=n.n(b),g=n("9989"),y=Object(m["a"])(f,r,a,!1,null,null,null);t["default"]=y.exports;d()(y,"components",{QPage:g["a"]})},"74c9":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-icon",{staticClass:"back-icon",attrs:{name:"keyboard_backspace",color:e.iconColor},on:{click:e.defaultGoBack}}),n("p",{staticClass:"page-name",class:e.textColor},[e._v(e._s(e.pageName))])],1)},a=[],c={name:"BackButton",props:{iconColor:{type:String,default:"primary"},textColor:{type:String,default:"text-negative"},pageName:{type:String,default:""},goBack:{type:Function,default:function(){return!0}}},methods:{defaultGoBack:function(){!1!==this.goBack()&&(window.history.length>1?this.$router.go(-1):this.$router.push("/"))}}},o=c,s=(n("91fa"),n("2877")),i=n("eebe"),u=n.n(i),l=n("0016"),p=Object(s["a"])(o,r,a,!1,null,null,null);t["a"]=p.exports;u()(p,"components",{QIcon:l["a"]})},"8a76":function(e,t,n){"use strict";var r=n("6fd2"),a=n.n(r);a.a},"91fa":function(e,t,n){"use strict";var r=n("4138"),a=n.n(r);a.a}}]);