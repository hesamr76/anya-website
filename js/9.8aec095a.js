(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{4138:function(t,e,n){},"6fd2":function(t,e,n){},"740d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[n("BackButton",{attrs:{pageName:"OUR TEAM"}}),n("div",{staticClass:"flex no-wrap scroll q-px-md"},t._l(t.members,(function(e){return n("div",{key:e.name+"_member",staticClass:"member-card q-mx-md",on:{click:function(n){return t.openMemberPage(e)}}},[n("img",{attrs:{src:e.image}}),n("p",{staticClass:"name text-center text-primary"},[t._v("\n\t\t\t\t"+t._s(e.name)+"\n\t\t\t")]),n("p",{staticClass:"role text-center text-grey-6"},[t._v(t._s(e.role))])])})),0)],1)},a=[],o=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("b54a"),n("c47a")),c=n.n(o),s=n("2f62"),i=n("74c9");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={name:"Team",components:{BackButton:i["a"]},computed:u({},Object(s["b"])(["members"])),methods:{openMemberPage:function(t){this.$router.push(t.link)}}},m=p,f=(n("8a76"),n("2877")),b=n("eebe"),d=n.n(b),g=n("9989"),y=Object(f["a"])(m,r,a,!1,null,null,null);e["default"]=y.exports;d()(y,"components",{QPage:g["a"]})},"74c9":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-icon",{staticClass:"back-icon",attrs:{name:"keyboard_backspace",color:t.iconColor},on:{click:t.goBack}}),n("p",{staticClass:"page-name",style:{color:t.textColor}},[t._v("\n\t\t"+t._s(t.pageName)+"\n\t")])],1)},a=[],o={name:"BackButton",props:{iconColor:{type:String,default:"primary"},textColor:{type:String,default:"$negative"},pageName:{type:String,default:""}},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}}},c=o,s=(n("91fa"),n("2877")),i=n("eebe"),l=n.n(i),u=n("0016"),p=Object(s["a"])(c,r,a,!1,null,null,null);e["a"]=p.exports;l()(p,"components",{QIcon:u["a"]})},"8a76":function(t,e,n){"use strict";var r=n("6fd2"),a=n.n(r);a.a},"91fa":function(t,e,n){"use strict";var r=n("4138"),a=n.n(r);a.a}}]);