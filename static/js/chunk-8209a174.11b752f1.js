(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8209a174"],{3875:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"useHelp bg-w"},e._l(e.data,(function(t,n){return a("div",{key:n,staticClass:"in-block ponter",on:{click:function(t){return e.useHelpNext(n)}}},[a("span",{staticClass:"numbers",class:{active:e.clickNum>=n}},[e._v(e._s(n+1))]),e._v(" "),a("span",{staticClass:"in-block helpName",class:{active2:e.clickNum>=n}},[e._v(e._s(t))]),e._v(" "),4!==n?a("span",{staticClass:"helpLine in-block",class:{active3:e.clickNum>=n}}):e._e()])})),0),e._v(" "),a("div",{staticClass:"bg-w  useHelp-box "},e._l(e.data2,(function(t,n){return a("div",{directives:[{name:"show",rawName:"v-show",value:e.clickNum===n,expression:"clickNum === index"}],key:n},[a("div",{staticClass:"useHelp-box-one in-block",on:{click:function(a){return e.jump(t.page,t.routerId)}}},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":t.icon}}),e._v(" "),a("div",{staticClass:"title ponter"},[e._v(e._s(t.name))]),e._v(" "),e._m(0,!0)],1),e._v(" "),4!==n?a("div",{staticClass:"in-block"},[a("svg-icon",{staticClass:"left_right_raow ",attrs:{"icon-class":"left_right"}})],1):e._e(),e._v(" "),a("div",{staticClass:"in-block"},e._l(t.main,(function(t,n){return a("div",{key:n},[a("div",{staticClass:"useHelp-box-two ponter",on:{click:function(a){return e.jump(t.page,t.routerId)}}},[e._v("\n                        "+e._s(t.name)+"\n                    ")]),e._v(" "),a("div",{staticClass:"useHelp-box-tips"},[e._v("\n                        "+e._s(t.tips)+"\n                    ")])])})),0)])})),0)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticStyle:{color:"#999999","font-size":"14px"}},[a("span",{staticClass:"start mr-5"},[e._v("*")]),e._v("必须步骤")])}],s={name:"index",data:function(){return{clickNum:0,data:["创建会议室","创建会议","添加人员","创建议题","开启会议"],data2:[{icon:"establish_1",name:"创建会议室",page:"MeetingBefore",routerId:"0",main:[{name:"关联升降器组",tips:"按需步骤：可按照实际需求进行设置创建",page:"DeviceManagement",routerId:"1"},{name:"关联流媒体终端",tips:"按需步骤：可按照实际需求进行设置创建",page:"DeviceManagement",routerId:"2"},{name:"关联信息发布终端",tips:"按需步骤：可按照实际需求进行设置创建",page:"DeviceManagement",routerId:"3"}]},{icon:"establish_2",name:"创建会议",page:"MeetingBefore",routerId:"1",main:[{name:"创建会议标语",tips:"按需步骤：可按照实际需求进行设置创建",page:"MeetingBefore",routerId:"6"},{name:"创建议程",tips:"按需步骤：可按照实际需求进行设置创建",page:"MeetingBefore",routerId:"2"},{name:"创建投票",tips:"按需步骤：可按照实际需求进行设置创建",page:"MeetingBefore",routerId:"5"}]},{icon:"establish_3",name:"添加人员",page:"PeopleManagement",routerId:"0",main:[{name:"创建分组",tips:"按需步骤：可按照实际需求进行设置创建",page:"PeopleManagement",routerId:"1"}]},{icon:"establish_4",name:"创建议题",page:"MeetingBefore",routerId:"3",main:[{name:"上传资料",tips:"按需步骤：可按照实际需求进行设置创建",page:"MeetingBefore",routerId:"4"}]},{icon:"establish_5",name:"开启会议",page:"MeetingBefore",routerId:"1",main:[]}]}},methods:{useHelpNext:function(e){this.clickNum=e},jump:function(e,t){this.$router.push({name:e,query:{routerId:t}})}}},c=s,r=(a("3fe3"),a("e90a")),o=Object(r["a"])(c,n,i,!1,null,"183525fa",null);t["default"]=o.exports},"3fe3":function(e,t,a){"use strict";var n=a("d6a0"),i=a.n(n);i.a},d6a0:function(e,t,a){}}]);