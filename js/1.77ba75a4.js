(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"147e":function(t,a,n){},"35ff":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"flex column flex-center bg-primary",staticStyle:{"z-index":"0"}},[e("text-scroll",{attrs:{color:"text-white"}}),e("img",{staticClass:"anya-logo",attrs:{alt:"Anya logo",src:n("65ab")}}),e("q-btn",{staticClass:"anya-btn q-mt-xl",attrs:{color:"negative",label:"ENTER",to:t.homePage}})],1)},s=[],i=n("df2e"),l={name:"Entrance",components:{TextScroll:i["a"]},data:function(){return{animatedClass:"",homePage:{name:"Home"}}},methods:{handleTextAnimation:function(){var t=this;setInterval((function(){t.animatedClass="",setTimeout((function(){t.animatedClass="animated"}),10)}),1e4)}},created:function(){var t=this;setTimeout((function(){t.animatedClass="animated"}),0),this.handleTextAnimation()}},o=l,c=(n("e15e"),n("2877")),r=n("eebe"),u=n.n(r),f=n("9989"),m=n("9c40"),d=Object(c["a"])(o,e,s,!1,null,null,null);a["default"]=d.exports;u()(d,"components",{QPage:f["a"],QBtn:m["a"]})},"4f02":function(t,a,n){},"65ab":function(t,a,n){t.exports=n.p+"img/anya-logo-white.5e93caa4.png"},"9b91":function(t,a,n){"use strict";var e=n("4f02"),s=n.n(e);s.a},df2e:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"absolute-top-right absolute-bottom-left flex column justify-around overflow-hidden"},[n("p",{staticClass:"float-text char-6",class:t.color+" "+t.animatedClass},[t._v("\n\t\tDESIGN\n\t\t"),n("span",{staticClass:"tail"},[t._v("DESIGN")])]),n("p",{staticClass:"float-text char-7",class:t.color+" "+t.animatedClass},[t._v("\n\t\tDEVELOP\n\t\t"),n("span",{staticClass:"tail"},[t._v("DEVELOP")])]),n("p",{staticClass:"float-text char-8",class:t.color+" "+t.animatedClass},[t._v("\n\t\tINNOVATE\n\t\t"),n("span",{staticClass:"tail"},[t._v("INNOVATE")])])])},s=[],i={name:"TextScroll",props:{color:{type:String,default:"text-negative"}},data:function(){return{interval:null,animatedClass:""}},methods:{handleTextAnimation:function(){var t=this;setTimeout((function(){t.animatedClass="animated"}),0),this.interval=setInterval((function(){t.animatedClass="",setTimeout((function(){t.animatedClass="animated"}),15)}),15e3)}},created:function(){this.handleTextAnimation()},beforeDestroy:function(){clearInterval(this.interval)}},l=i,o=(n("9b91"),n("2877")),c=Object(o["a"])(l,e,s,!1,null,null,null);a["a"]=c.exports},e15e:function(t,a,n){"use strict";var e=n("147e"),s=n.n(e);s.a}}]);