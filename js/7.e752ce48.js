(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"1cba":function(t,e,a){"use strict";var r=a("8e6f"),n=a.n(r);n.a},4138:function(t,e,a){},"70d8":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("BackButton",{attrs:{iconColor:"white"}}),a("div",{staticClass:"img-cover",style:{backgroundImage:"url("+t.member.detail.image+")"}}),a("div",{staticClass:"member-container flex column"},[a("div",{staticClass:"avatar-container flex items-center justify-between"},[a("p",{staticClass:"text-white"},[t._v(t._s(t.member.name))]),a("img",{staticClass:"avatar-member",attrs:{src:t.member.image,alt:"anya-member-"+t.member.name}}),a("p",{staticClass:"text-white"},[t._v(t._s(t.member.role))])]),a("div",{staticClass:"flex row justify-between"},[a("div",{staticClass:"flex column col-xs-12 col-sm-4 q-mt-md"},[a("div",{staticClass:"text-center text-primary"},[a("q-icon",{attrs:{name:"school"}}),a("p",[t._v("EDUCATION and CERTIFICATES")])],1),t._l(t.member.detail.education,(function(e){return a("div",{key:t.member.name+"_"+e.grade,staticClass:"q-mt-lg text-center"},[a("p",{staticClass:"text-grey-6"},[t._v(t._s(e.grade))]),a("p",{staticClass:"text-grey-4"},[t._v(t._s(e.at))])])}))],2),a("div",{staticClass:"flex column col-xs-12 col-sm-4 q-mt-md"},[a("div",{staticClass:"text-center text-primary"},[a("q-icon",{attrs:{name:"school"}}),a("p",[t._v("SKILLS")])],1),t._l(t.member.detail.skills,(function(e){return a("p",{key:t.member.name+"_skill_"+e,staticClass:"text-center text-grey-6"},[t._v("\n\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t")])}))],2),a("div",{staticClass:"flex column col-xs-12 col-sm-4 q-mt-md"},[a("div",{staticClass:"text-center text-primary"},[a("q-icon",{attrs:{name:"school"}}),a("p",[t._v("CONTACT")])],1),a("p",{staticClass:"text-center text-grey-6 q-mt-lg"},[t._v("\n\t\t\t\t\t"+t._s(t.member.detail.email)+"\n\t\t\t\t")]),a("div",{staticClass:"flex justify-center q-mt-lg"},t._l(t.member.detail.otherContact,(function(e){return a("p",{key:t.member.name+"_"+e.name,staticClass:"text-grey-6 cursor-pointer"},[t._v("\n\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t")])})),0)])])])],1)},n=[],s=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),c=a.n(s),i=(a("7514"),a("2f62")),o=a("74c9");function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){c()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u={name:"Member",components:{BackButton:o["a"]},data:function(){return{member:{}}},created:function(){var t=this.$route.params.memberName,e=this.members.find((function(e){return e.route.params.memberName==t}));e?this.member=e:this.$router.push({name:"Team"})},computed:l({},Object(i["b"])(["members"]))},p=u,f=(a("bee9"),a("1cba"),a("2877")),b=a("eebe"),d=a.n(b),v=a("9989"),g=a("0016"),y=Object(f["a"])(p,r,n,!1,null,"31fed579",null);e["default"]=y.exports;d()(y,"components",{QPage:v["a"],QIcon:g["a"]})},"74c9":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-icon",{staticClass:"back-icon",attrs:{name:"keyboard_backspace",color:t.iconColor},on:{click:t.defaultGoBack}}),a("p",{staticClass:"page-name",class:t.textColor},[t._v(t._s(t.pageName))])],1)},n=[],s={name:"BackButton",props:{iconColor:{type:String,default:"primary"},textColor:{type:String,default:"text-negative"},pageName:{type:String,default:""},goBack:{type:Function,default:function(){return!0}}},methods:{defaultGoBack:function(){!1!==this.goBack()&&(window.history.length>1?this.$router.go(-1):this.$router.push("/"))}}},c=s,i=(a("91fa"),a("2877")),o=a("eebe"),m=a.n(o),l=a("0016"),u=Object(i["a"])(c,r,n,!1,null,null,null);e["a"]=u.exports;m()(u,"components",{QIcon:l["a"]})},"8e6f":function(t,e,a){},"91fa":function(t,e,a){"use strict";var r=a("4138"),n=a.n(r);n.a},bee9:function(t,e,a){"use strict";var r=a("c171"),n=a.n(r);n.a},c171:function(t,e,a){}}]);