(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0881":function(t,e,n){},4138:function(t,e,n){},"74c9":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-icon",{staticClass:"back-icon",attrs:{name:"keyboard_backspace",color:t.iconColor},on:{click:t.goBack}}),n("p",{staticClass:"page-name",style:{color:t.textColor}},[t._v("\n\t\t"+t._s(t.pageName)+"\n\t")])],1)},o=[],s={name:"BackButton",props:{iconColor:{type:String,default:"primary"},textColor:{type:String,default:"$negative"},pageName:{type:String,default:""}},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}}},r=s,i=(n("91fa"),n("2877")),c=n("eebe"),l=n.n(c),u=n("0016"),d=Object(i["a"])(r,a,o,!1,null,null,null);e["a"]=d.exports;l()(d,"components",{QIcon:u["a"]})},"78d6":function(t,e,n){t.exports=n.p+"img/anya-team.730e404f.png"},"849d":function(t,e,n){"use strict";var a=n("0881"),o=n.n(a);o.a},"91fa":function(t,e,n){"use strict";var a=n("4138"),o=n.n(a);o.a},a1d1:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("BackButton",{attrs:{iconColor:"white",textColor:"white",pageName:"ABOUT US"}}),a("img",{staticClass:"img-team",attrs:{src:n("78d6"),alt:"anya-team"}}),a("p",{staticClass:"about"},[t._v("\n\t\tANYA (Software Laboratory of Yarkar) was founded in 2017. ANYA works cover\n\t\tvarious areas such as design and development of full client systems,\n\t\tonline games, web based softwares, mobile applications and bot messengers.\n\t\tOur team consists experts, designers and developers graduated from Sharif\n\t\tUniversity, University of Tehran, Amirkabir University, and Massachusetts\n\t\tCollege of Art and Design. We seek new domains in the world of technology\n\t\tthat could lead us to a modern future.\n\t")])],1)},o=[],s=n("74c9"),r={name:"About",components:{BackButton:s["a"]}},i=r,c=(n("849d"),n("2877")),l=n("eebe"),u=n.n(l),d=n("9989"),p=Object(c["a"])(i,a,o,!1,null,null,null);e["default"]=p.exports;u()(p,"components",{QPage:d["a"]})}}]);