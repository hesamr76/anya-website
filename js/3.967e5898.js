(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[["entrance"].indexOf(t.$route.name)<0?i("q-header",[i("q-toolbar",{staticClass:"no-shadow bg-white justify-between text-primary"},[i("div",{staticClass:"flex flex-center",on:{click:function(e){return t.goToHome()}}},[i("img",{staticClass:"q-my-lg",attrs:{src:a("e2ae"),alt:"anya logo",width:"55"}}),i("p",{staticClass:"company-name text-primary"},[t._v("ANYA")])]),i("q-icon",{staticClass:"cursor-pointer",attrs:{name:"menu",size:"40px"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}})],1)],1):t._e(),["entrance"].indexOf(t.$route.name)<0?i("q-drawer",{attrs:{overlay:"",elevated:"",side:"right",breakpoint:4400,"content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[i("q-list",[i("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("Essential Links")]),t._l(t.essentialLinks,(function(e){return i("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2)],1):t._e(),i("q-page-container",[i("transition",{attrs:{name:"moveInUp"}},[i("router-view")],1)],1),["entrance"].indexOf(t.$route.name)<0?i("q-footer",[i("q-toolbar",{staticClass:"no-shadow bg-white justify-between text-primary"},[i("p",{staticClass:"col-6 no-margin text-primary copy-right"},[t._v("\n\t\t\t\t© ANYACO 2020. ALL RIGHTS RESERVED\n\t\t\t")]),i("div",{staticClass:"col-6 flex row justify-end q-pa-md q-gutter-x-md"},[i("q-icon",{attrs:{size:"30px",name:"ion-logo-youtube"}}),i("q-icon",{attrs:{size:"30px",name:"ion-logo-facebook"}}),i("q-icon",{attrs:{size:"30px",name:"ion-logo-linkedin"}}),i("q-icon",{attrs:{size:"30px",name:"ion-logo-instagram"}})],1)])],1):t._e()],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:t.link}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.caption))])],1)],1)},r=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},c=o,l=a("2877"),N=a("eebe"),b=a.n(N),u=a("66e5"),m=a("4074"),p=a("0016"),k=a("0170"),X=Object(l["a"])(c,s,r,!1,null,null,null),d=X.exports;b()(X,"components",{QItem:u["a"],QItemSection:m["a"],QIcon:p["a"],QItemLabel:k["a"]});var A={name:"MainLayout",components:{EssentialLink:d},data:function(){return{leftDrawerOpen:!1,essentialLinks:[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"}]}},methods:{goToHome:function(){this.$router.push({name:"Home"})}}},E=A,f=(a("89d3"),a("4d5a")),g=a("e359"),v=a("65c6"),j=a("9404"),q=a("1c1c"),U=a("09e3"),Q=a("7ff0"),w=Object(l["a"])(E,i,n,!1,null,null,null);e["default"]=w.exports;b()(w,"components",{QLayout:f["a"],QHeader:g["a"],QToolbar:v["a"],QIcon:p["a"],QDrawer:j["a"],QList:q["a"],QItemLabel:k["a"],QPageContainer:U["a"],QFooter:Q["a"]})},"89d3":function(t,e,a){"use strict";var i=a("b0e3"),n=a.n(i);n.a},b0e3:function(t,e,a){},e2ae:function(t,e){t.exports="data:image/png;base64,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"}}]);