(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e1f4187"],{"2d17":function(e,t,a){},3890:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("div",{staticClass:"temporaryPlay-seach bg-w"},[a("span",{staticClass:"in-block  mr-16  "},[a("span",{staticClass:"com-tit-m12"},[e._v("筛选条件: ")]),e._v(" "),a("span",{staticClass:"w-157 in-block"},[a("el-select",{on:{click:function(t){return e.fetchData(e.where)}},model:{value:e.where.status,callback:function(t){e.$set(e.where,"status",t)},expression:"where.status"}},[a("el-option",{attrs:{value:2,label:"全部"}}),e._v(" "),a("el-option",{attrs:{value:0,label:"未处理"}}),e._v(" "),a("el-option",{attrs:{value:-1,label:"已驳回"}}),e._v(" "),a("el-option",{attrs:{value:1,label:"已通过"}})],1)],1)]),e._v(" "),a("span",{staticClass:"in-block"},[a("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:function(t){return e.fetchData(e.where)}}},[e._v(e._s(e.$t("table.search")))]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-refresh",plain:""},on:{click:function(t){return e.fetchData(e.where)}}},[e._v(e._s(e.$t("table.refresh")))])],1)])]),e._v(" "),a("div",{staticClass:"temporaryPlay-table bg-w mt-8"},[a("div",{staticClass:"clear-float"},[e._m(0),e._v(" "),a("div",{staticClass:"float-r"},[a("el-button",{attrs:{plain:"",icon:"el-icon-delete"},on:{click:e.deleteMore}},[e._v("删除")]),e._v(" "),a("el-button",{attrs:{plain:""},on:{click:e.handleAllRejected}},[e._v("全部驳回")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleAllPass}},[e._v("全部通过")])],1)]),e._v(" "),a("tl-table",{staticClass:"mt-10",attrs:{table:e.tableOption},on:{fetchData:e.pagination,onHandleSelectionChange:e.handleSelectionChange,handleReject:e.handleReject,handleDelete:e.handleDelete,handlePass:e.handlePass},scopedSlots:e._u([{key:"meetingType",fn:function(t){return[e._v("\n                "+e._s(0===t.obj.row.meetingType?"常规会议":"保密会议")+"\n            ")]}},{key:"meetingApprovalStatus",fn:function(t){return[e._v("\n                "+e._s(0===t.obj.row.meetingApprovalStatus?"未处理":1===t.obj.row.meetingApprovalStatus?"已通过":"已驳回")+"\n            ")]}}])})],1),e._v(" "),a("DialogBox",{attrs:{dialog:e.dialog,width:"477px"},on:{submit:e.submit}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"115px"}},[a("el-form-item",{attrs:{label:"会驳回原因: ",prop:"region"}},[a("div",{staticClass:"w-150"},[a("el-select",{model:{value:e.ruleForm.flag,callback:function(t){e.$set(e.ruleForm,"flag",e._n(t))},expression:"ruleForm.flag"}},[a("el-option",{attrs:{value:0,label:"会议室已被占用"}}),e._v(" "),a("el-option",{attrs:{value:1,label:"会议室时间冲突"}})],1)],1)]),e._v(" "),a("div",{staticClass:"test-box"},[a("el-input",{staticStyle:{width:"100%"},attrs:{type:"textarea",maxlength:"100",resize:"none"},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}}),e._v(" "),a("div",{staticClass:"test-btn clear-float"},[a("el-button",{staticClass:"float-l",on:{click:function(t){e.ruleForm.content=""}}},[e._v(e._s(e.$t("label.clearText")))]),e._v(" "),a("div",{staticClass:"test-length float-r com-tit-m12"},[e._v(e._s(e.ruleForm.content.length)+"/100")])],1)],1)],1)],1)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:" float-l"},[a("div",{staticClass:"com-tit-m1"},[e._v("审批列表")])])}],i={hasOperation:!0,hasSelect:!0,hasOnlySelect:!1,pagination:!0,height:539,operation:{label:"操作",width:"",className:"",align:"left",data:[{label:"通过",Fun:"handlePass",id:"1",type:"text",isPlain:!0,status:"hidden"},{label:"驳回",Fun:"handleReject",id:"2",type:"text",isPlain:!0,status:"hidden"},{label:"删除",Fun:"handleDelete",id:"3",type:"text",isPlain:!0,status:"default"}]},tr:[{id:"1",label:"会议名称",prop:"meetingName",align:"left"},{id:"2",label:"会议室名称",prop:"meetingRoomName",align:"left"},{id:"3",label:"会议时间",prop:"meetingTime",align:"left"},{id:"4",label:"会议类型",prop:"meetingType",align:"left",isTemplate:!0},{id:"5",label:"申请人",prop:"createUserName",align:"left"},{id:"6",label:"申请时间",prop:"createTime",align:"left"},{id:"7",label:"状态",prop:"meetingApprovalStatus",align:"left",isTemplate:!0}],data:[]},s={onlineStatus:[{required:!0,message:"请选择",trigger:"change"}]},o=a("b775");function r(e){return Object(o["a"])({url:"/approval/list",method:"POST",data:e})}function c(e){return Object(o["a"])({url:"/approval/delete",method:"POST",data:e})}function u(e){return Object(o["a"])({url:"/approval/force/"+e,method:"get"})}function h(e){return Object(o["a"])({url:"/approval/approvalStatus",method:"POST",data:e})}function d(e){return Object(o["a"])({url:"/approval/allApproval",method:"POST",data:e})}var m=a("8e9a"),p={name:"index",data:function(){return{where:{pageIndex:1,pageSize:10,status:2},tableOption:i,rules:s,ruleForm:{content:"",meetingId:"",status:2,flag:""},dialog:{dialogVisible:!1,title:"驳回会议"},selectionArr:[],flag:""}},mounted:function(){var e=this;m["a"].$on("msgReload",(function(){e.fetchData()}))},methods:{pagination:function(e){this.where.pageSize=e.pageSize,this.where.pageIndex=e.pageIndex,this.fetchData()},fetchData:function(){var e=this;r(this.where).then((function(t){e.tableOption.pageTotal=t.data.page.total,t.data.list.map((function(e){0===e.meetingApprovalStatus?(e.show1=!0,e.show2=!0):(e.show1=!1,e.show2=!1)})),e.tableOption.data=t.data.list,console.log(e.tableOption.data)}))},handleDelete:function(e,t){this.isDelete([t.id])},deleteMore:function(){if(0!==this.selectionArr.length){var e=this.selectionArr.map((function(e){return e.id}));this.isDelete(e)}else this.$alertBox("pleaseChoose")},isDelete:function(e){var t=this;this.$confirmBox("delete").then((function(){c({ids:e}).then((function(e){t.$message({message:e.msg,type:"success",duration:1e3}),t.fetchData(t.where)}))}))},handleSelectionChange:function(e){this.selectionArr=e},handlePass:function(e,t){var a=this;this.clear(),this.ruleForm.status=1,this.ruleForm.meetingId=t.id,h(this.ruleForm).then((function(e){4017===e.code?a.$confirm(e.msg,"提示",{confirmButtonText:"强制通过",cancelButtonText:"取消",type:"warning"}).then((function(){u(t.id).then((function(e){a.$message({message:e.msg,type:"success",duration:1e3}),a.fetchData(a.where)}))})).catch((function(){})):a.fetchData(a.where)}))},handleAllPass:function(){var e=this;this.ruleForm.status=1,d(this.ruleForm).then((function(t){e.$message({message:t.msg,type:"success",duration:1e3}),e.fetchData(e.where)}))},handleReject:function(e,t){this.clear(),this.ruleForm.meetingId=t.id,this.dialog.dialogVisible=!0,this.flag=0},handleAllRejected:function(){this.clear(),this.dialog.dialogVisible=!0,this.flag=1},submit:function(){var e=this;0===this.ruleForm.flag?this.ruleForm.content="会议室已被占用":1===this.ruleForm.flag&&(this.ruleForm.content="会议室时间冲突"),this.ruleForm.status=-1,this.$refs.ruleForm.validate((function(t){if(!t)return!1;0===e.flag?h(e.ruleForm).then((function(t){e.$message({message:t.msg,type:"success",duration:1e3}),e.dialog.dialogVisible=!1,e.flag="",e.fetchData(e.where)})):d(e.ruleForm).then((function(t){e.$message({message:t.msg,type:"success",duration:1e3}),e.dialog.dialogVisible=!1,e.fetchData(e.where)}))}))},clear:function(){this.ruleForm={allFlag:"",content:"",meetingId:"",status:2,flag:""}}}},f=p,g=(a("c919"),a("e90a")),v=Object(g["a"])(f,l,n,!1,null,null,null);t["default"]=v.exports},c919:function(e,t,a){"use strict";var l=a("2d17"),n=a.n(l);n.a}}]);