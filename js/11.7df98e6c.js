(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"1fea":function(t,e,n){},4138:function(t,e,n){},"74c9":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-icon",{staticClass:"back-icon",attrs:{name:"keyboard_backspace",color:t.iconColor},on:{click:t.goBack}}),n("p",{staticClass:"page-name",class:t.textColor},[t._v(t._s(t.pageName))])],1)},a=[],c={name:"BackButton",props:{iconColor:{type:String,default:"primary"},textColor:{type:String,default:"text-negative"},pageName:{type:String,default:""}},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}}},o=c,s=(n("91fa"),n("2877")),i=n("eebe"),p=n.n(i),u=n("0016"),l=Object(s["a"])(o,r,a,!1,null,null,null);e["a"]=l.exports;p()(l,"components",{QIcon:u["a"]})},"7f1d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[n("BackButton",{attrs:{pageName:"PROJECTS"}}),n("div",{staticClass:"flex no-wrap scroll q-px-md"},t._l(t.projects,(function(e){return n("q-card",{key:e.name+"_project",staticClass:"project-card q-mx-md",on:{click:function(n){return t.openProjectPage(e)}}},[n("img",{attrs:{src:e.image}}),n("q-card-actions",{staticClass:"column q-pl-lg items-start bg-primary text-white"},[n("p",{staticClass:"name"},[t._v(t._s(e.name))]),n("p",{staticClass:"description"},[t._v(t._s(e.description))])])],1)})),1)],1)},a=[],c=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),o=n.n(c),s=n("2f62"),i=n("74c9");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={name:"Projects",components:{BackButton:i["a"]},computed:u({},Object(s["b"])(["projects"])),methods:{openProjectPage:function(t){this.$router.push(t.route)}}},f=l,d=(n("91a6"),n("2877")),m=n("eebe"),b=n.n(m),g=n("9989"),j=n("f09f"),O=n("4b7e"),y=Object(d["a"])(f,r,a,!1,null,null,null);e["default"]=y.exports;b()(y,"components",{QPage:g["a"],QCard:j["a"],QCardActions:O["a"]})},"91a6":function(t,e,n){"use strict";var r=n("1fea"),a=n.n(r);a.a},"91fa":function(t,e,n){"use strict";var r=n("4138"),a=n.n(r);a.a}}]);