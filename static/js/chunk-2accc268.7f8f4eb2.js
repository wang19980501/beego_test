(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2accc268"],{"01f9":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("f753"),i=a.n(n),o=a("2ca7"),r=a("5f87");function s(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,s){i.a.defaults.headers["content-type"]="application/json;charset=UTF-8",i()({method:"get",url:"/paperless"+t,params:a,responseType:"blob",headers:{token:Object(r["d"])()}}).then((function(t){n(t.data);var a=new Blob([t.data],{type:"application/vnd.ms-excel"}),i=e;if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(a,i);else{var r=document.createElement("a");r.href=window.URL.createObjectURL(a),r.download=i,r.click(),window.URL.revokeObjectURL(r.href)}Object(o["Message"])({message:"导出成功",type:"success",duration:1e3})}),(function(t){Object(o["Message"])({message:"导出失败",type:"error",duration:1e3}),s(t)}))}))}},"190b":function(t,e,a){a("149f")&&"g"!=/./g.flags&&a("064e").f(RegExp.prototype,"flags",{configurable:!0,get:a("f1fe")})},"2b45":function(t,e,a){"use strict";a("190b");var n=a("69b3"),i=a("f1fe"),o=a("149f"),r="toString",s=/./[r],c=function(t){a("bf16")(RegExp.prototype,r,t,!0)};a("238a")((function(){return"/a/b"!=s.call({source:"a",flags:"b"})}))?c((function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)})):s.name!=r&&c((function(){return s.call(this)}))},"39f7":function(t,e,a){},"3ca0":function(t,e,a){"use strict";var n=a("39f7"),i=a.n(n);i.a},"70da":function(t,e,a){"use strict";var n=a("e46b"),i=a("e6f5"),o=a("6bf0"),r=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);n(n.P+n.F*r,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},9406:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard peopleManagement"},[a("div",{staticClass:"clear-float"},[a("div",{staticClass:"float-l"},[a("div",{staticClass:"in-block"},[t._v("日期:\n                    "),a("span",{staticClass:"in-block"},[a("el-date-picker",{attrs:{"value-format":"yyyy年MM月dd日",type:"daterange",align:"right","unlink-panels":"","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},model:{value:t.meetingTime,callback:function(e){t.meetingTime=e},expression:"meetingTime"}})],1)]),t._v(" "),a("span",{staticClass:"in-block"},[a("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:t.fetchData}},[t._v(t._s(t.$t("table.search")))]),t._v(" "),a("el-button",{attrs:{icon:"el-icon-refresh",plain:""},on:{click:t.fetchData}},[t._v(t._s(t.$t("table.refresh")))])],1)]),t._v(" "),a("div",{staticClass:"float-r"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleDownload}},[t._v("导出报表")])],1)]),t._v(" "),a("div",{staticClass:"clear-float"},[a("div",{staticClass:"home-msg-box float-l mr-20"},[a("div",{staticClass:"home-msg-box-tit"},[t._v("会议室预约总数")]),t._v(" "),a("div",[a("span",{staticClass:"home-msg-box-num"},[t._v(t._s(this.allData.count.meetingCount))]),a("span",{staticClass:"home-msg-box-dan"},[t._v("次")])])]),t._v(" "),a("div",{staticClass:"home-msg-box float-l mr-20"},[a("div",{staticClass:"home-msg-box-tit"},[t._v("会议室使用总数")]),t._v(" "),a("div",[a("span",{staticClass:"home-msg-box-num"},[t._v(t._s(this.allData.count.executeCount))]),a("span",{staticClass:"home-msg-box-dan"},[t._v("次")])])]),t._v(" "),a("div",{staticClass:"home-msg-box float-l mr-20"},[a("div",{staticClass:"home-msg-box-tit"},[t._v("会议平均时长(统计)")]),t._v(" "),a("div",[a("span",{staticClass:"home-msg-box-num"},[t._v(t._s(this.allData.count.avgTime))]),a("span",{staticClass:"home-msg-box-dan"},[t._v("小时")])])]),t._v(" "),a("div",{staticClass:"home-msg-box float-l"},[a("div",{staticClass:"home-msg-box-tit"},[t._v("会议总时长(统计)")]),t._v(" "),a("div",[a("span",{staticClass:"home-msg-box-num"},[t._v(t._s(this.allData.count.sumTime))]),a("span",{staticClass:"home-msg-box-dan"},[t._v("小时")])])])]),t._v(" "),a("div",{staticClass:"clear-float mt-20"},[a("div",{staticClass:"line-box  float-l"},[a("span",{staticStyle:{width:"99px",height:"19px","font-size":"14px","font-family":"Microsoft YaHei","font-weight":"400","line-height":"19px",color:"rgba(23,23,37,1)",opacity:"1"}},[t._v("执行/预约占比 ")]),t._v(" "),a("el-button",{staticStyle:{"margin-left":"132px"},attrs:{plain:""},on:{click:t.changeYear}},[t._v("年")]),t._v(" "),a("el-button",{attrs:{plain:""},on:{click:t.changeMonth}},[t._v("月")]),t._v(" "),a("ve-line",{attrs:{data:t.chartData,extend:t.chartExtend}})],1),t._v(" "),a("div",{staticClass:"float-l ml-20",staticStyle:{width:"47%"}},[a("div",{staticClass:"ring-box mb-20"},[a("span",{staticStyle:{width:"99px",height:"19px","font-size":"14px","font-family":"Microsoft YaHei","font-weight":"400","line-height":"19px",color:"rgba(23,23,37,1)",opacity:"1"}},[t._v("当前会议时长 ")]),t._v(" "),a("ve-ring",{attrs:{data:t.chartData1,extend:t.chartExtend1}})],1),t._v(" "),a("div",{staticClass:"ring-box"},[a("span",{staticStyle:{width:"99px",height:"19px","font-size":"14px","font-family":"Microsoft YaHei","font-weight":"400","line-height":"19px",color:"rgba(23,23,37,1)",opacity:"1"}},[t._v("会议室使用次数 ")]),t._v(" "),a("ve-histogram",{attrs:{data:t.chartData2,extend:t.chartExtend2,height:"243px","legend-visible":!1}})],1)])]),t._v(" "),a("tl-table",{ref:"table",staticClass:"mt-10",attrs:{table:t.tableOption},on:{fetchData:t.fetchData}})],1)},i=[],o=(a("2b45"),a("70da"),a("e697"),a("cc57"),a("163d"),a("6d57"),{hasOperation:!1,hasSelect:!1,hasOnlySelect:!1,pagination:!1,height:200,hasSelectArray:[],tr:[{id:"1",label:"会议室名称",prop:"meetingRoomName",align:"left"},{id:"2",label:"预约次数",prop:"meetingRoomCount",align:"left"},{id:"3",label:"使用次数",prop:"meetingExecuteCount",align:"left"},{id:"4",label:"会议平均时长",prop:"meetingRoomAvg",align:"left"},{id:"5",label:"会议总时长",prop:"meetingRoomSum",align:"left"}],data:[]}),r=a("b775");function s(t){return Object(r["a"])({url:"/home/get",method:"POST",data:t})}var c=a("01f9"),l={name:"Dashboard",data:function(){var t=this;return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},meetingTime:[],tableOption:o,chartTitle:{text:"会议室预约总数",left:0,top:10,textStyle:{fontSize:14}},chartExtend:{legend:{orient:"vertical",right:10,top:0,icon:"circle",itemWidth:6,itemHeight:6,textStyle:{fontSize:14,color:"#44444F"}},color:["#0062FF","#3DD598"],tooltip:{trigger:"axis",axisPointer:{type:"line"},formatter:function(t){var e="";return t.forEach((function(t){e+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+t.color+'"></span>',e+=t.seriesName+":&nbsp&nbsp",e+=t.value[1],e+="<br/>"})),e+="&nbsp&nbsp&nbsp会议效率:&nbsp&nbsp"+Math.round(t[0].value[1]/t[1].value[1]*1e4)/100+"%",e},textStyle:{color:"#333333"},backgroundColor:"#ffffff"}},chartData:{columns:["日期","执行总数","预约总数"],rows:[]},chartTitle1:{text:"会议时长",left:0,top:27,textStyle:{fontSize:14}},chartData1:{columns:["时长","个数"],rows:[{时长:"0-30分钟",个数:0},{时长:"30-60分钟",个数:0},{时长:"60-90分钟",个数:0},{时长:"90-120分钟",个数:0},{时长:"120+分钟",个数:0}],total:0},chartExtend1:{series:{center:[145,93],radius:[50,60],label:{normal:{show:!1}}},tooltip:{trigger:"item",formatter:function(e){var a="";a=0!==t.chartData1.total?Math.round(Number(e.data.value)/t.chartData1.total*1e4)/100+"%":"0%";var n='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+e.color+'"></span>';return n+=e.data.name+"&nbsp&nbsp&nbsp"+e.data.value+"个&nbsp&nbsp&nbsp"+a,n},textStyle:{color:"#333333"},backgroundColor:"#ffffff"},legend:{orient:"vertical",right:10,top:20,icon:"circle",itemWidth:6,itemHeight:6,itemGap:12,formatter:function(e){var a="";t.chartData1&&(a=t.chartData1.rows.find((function(t){return t["时长"]===e}))["个数"]);var n="";n=0!==t.chartData1.total?Math.round(Number(a)/t.chartData1.total*1e4)/100+"%":"0%";var i=["{a|"+e+"}{b|"+a+"个}"+n];return i.join("\n")},textStyle:{rich:{fontSize:12,color:"#666666",a:{width:120},b:{width:70}}}},color:["#0062FF","#62DBE9","#3DD598","#FFB83D","#FF7450"]},chartData2:{columns:["会议室","使用次数"],rows:[],total:0},chartTitle2:{text:"会议室使用次数",left:0,top:0,textStyle:{fontSize:14}},chartExtend2:{xAxis:{axisLabel:{interval:0,formatter:function(t){return t.length>3?t.substring(0,3)+"...":t}}},grid:{left:10,top:30,bottom:80},series:{barWidth:8,label:{normal:{show:!1}}},tooltip:{trigger:"item",formatter:function(e){console.log(e);var a='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+e.color+'"></span>';return a+=e.name+":&nbsp&nbsp&nbsp"+e.value+"次",a+="<br/>",a+="&nbsp&nbsp&nbsp使用效率:&nbsp&nbsp"+Math.round(Number(e.value)/t.chartData2.total*1e4)/100+"%",a},textStyle:{color:"#333333"},backgroundColor:"#ffffff"}},ruleForm:{startTime:"",endTime:""},allData:{meetingTime:{count90:"",count60Avg:"",count120:"",count121:"",count30Avg:"",count121Avg:"",count90Avg:"",count120Avg:"",count30:0,count60:""},count:{sumTime:0,avgTime:0,executeCount:0,meetingCount:0},list:[{meetingRoomAvg:"",meetingRoomName:"",meetingRoomCount:"",meetingRoomSum:"",meetingExecuteCount:""}],meetingRate:"",monthList:[{name:"",count:0,executeCount:0,efficiency:""}],yearList:[{name:"",count:0,executeCount:0,efficiency:""}]}}},methods:{fetchData:function(){var t=this;this.meetingTime.length>0?(this.ruleForm.startTime=this.meetingTime[0],this.ruleForm.endTime=this.meetingTime[1]):this.getLastMonth(),s(this.ruleForm).then((function(e){t.clear(),e.data.list.length>0&&(t.allData=e.data,t.tableOption.data=e.data.list,t.chartData2.rows=e.data.list.map((function(t){return{会议室:t.meetingRoomName,使用次数:t.meetingExecuteCount}})),t.chartData1.rows=e.data.meetingTime.map((function(t){return{时长:t.name,个数:t.count}})),t.chartData1.total=e.data.meetingSum,t.chartData2.total=e.data.meetingRoomExexuteSum,t.changeYear())}))},changeYear:function(){this.chartData.rows=this.allData.yearList.map((function(t){return{日期:t.name,执行总数:t.executeCount,预约总数:t.count,执行率:t.efficiency}}))},changeMonth:function(){this.chartData.rows=this.allData.monthList.map((function(t){return{日期:t.name,执行总数:t.executeCount,预约总数:t.count,执行率:t.efficiency}}))},getLastMonth:function(){var t=new Date,e=t.getFullYear(),a=t.getMonth(),n=t.getDate(),i=a+1;0==a&&(e-=1,a=12),this.ruleForm.startTime=e+"年"+a.toString().padStart(2,"0")+"月"+n.toString().padStart(2,"0")+"日",this.ruleForm.endTime=e+"年"+i.toString().padStart(2,"0")+"月"+n.toString().padStart(2,"0")+"日",this.meetingTime=[this.ruleForm.startTime,this.ruleForm.endTime]},clear:function(){this.tableOption.data=[],this.chartData1={columns:["时长","个数"],rows:[{时长:"0-30分钟",个数:0},{时长:"30-60分钟",个数:0},{时长:"60-90分钟",个数:0},{时长:"90-120分钟",个数:0},{时长:"120+分钟",个数:0}],total:0},this.chartData2={columns:["会议室","使用次数"],rows:[],total:0},this.allData={meetingTime:{count90:"",count60Avg:"",count120:"",count121:"",count30Avg:"",count121Avg:"",count90Avg:"",count120Avg:"",count30:0,count60:""},count:{sumTime:0,avgTime:0,executeCount:0,meetingCount:0},list:[{meetingRoomAvg:"",meetingRoomName:"",meetingRoomCount:"",meetingRoomSum:"",meetingExecuteCount:""}],meetingRate:"",monthList:[{name:"",count:0,executeCount:0,efficiency:""}],yearList:[{name:"",count:0,executeCount:0,efficiency:""}]}},handleDownload:function(t,e){this.meetingTime.length>0&&(this.ruleForm.startTime=this.meetingTime[0],this.ruleForm.endTime=this.meetingTime[1]),Object(c["a"])("/home/exportStatistics?endTime="+this.ruleForm.endTime+"&startTime="+this.ruleForm.startTime,"报表.pdf")}}},m=l,u=(a("3ca0"),a("e90a")),h=Object(u["a"])(m,n,i,!1,null,"946d2ff8",null);e["default"]=h.exports},e697:function(t,e,a){"use strict";var n=a("e46b"),i=a("013f")(5),o="find",r=!0;o in[]&&Array(1)[o]((function(){r=!1})),n(n.P+n.F*r,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("0e8b")(o)},e6f5:function(t,e,a){var n=a("eafa"),i=a("f160"),o=a("f6b4");t.exports=function(t,e,a,r){var s=String(o(t)),c=s.length,l=void 0===a?" ":String(a),m=n(e);if(m<=c||""==l)return s;var u=m-c,h=i.call(l,Math.ceil(u/l.length));return h.length>u&&(h=h.slice(0,u)),r?h+s:s+h}},f160:function(t,e,a){"use strict";var n=a("ee21"),i=a("f6b4");t.exports=function(t){var e=String(i(this)),a="",o=n(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(a+=e);return a}}}]);