(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-923c59f4"],{"1d1a":function(e,t,a){"use strict";var s=a("f456"),i=a.n(s);i.a},"23e1":function(e,t,a){},bf2f:function(e,t,a){"use strict";var s=a("23e1"),i=a.n(s);i.a},c8e3:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"carManager"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-cascades"}),e._v(" 公司管理\n      ")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.search(1)}}},[e._v("搜索")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){e.addVisible=!0}}},[e._v("添加")]),a("el-button",{staticClass:"sousuo",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.refresh}},[e._v("刷新")])],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",align:"center","class-name":"table"}}),a("el-table-column",{attrs:{type:"index",align:"center",label:"序号","class-name":"table"}}),a("el-table-column",{attrs:{prop:"jsName",label:"公司名称","class-name":"table"}}),a("el-table-column",{attrs:{prop:"jsSite",label:"公司地点","class-name":"table"}}),a("el-table-column",{attrs:{prop:"jsType",label:"公司类型","class-name":"table"}}),a("el-table-column",{attrs:{prop:"jsUsername",label:"联系人","class-name":"table"}}),a("el-table-column",{attrs:{prop:"jsPhone",label:"联系人电话","class-name":"table"}}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"table"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","current-page":e.cur_page,"page-size":e.pagesize,total:e.totalRecords,"page-sizes":[5,10,20,40],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"100px",rules:e.carFormRules}},[a("el-form-item",{attrs:{label:"公司名称",prop:"jsName"}},[a("el-input",{attrs:{placeholder:"请输入公司名称"},model:{value:e.editForm.jsName,callback:function(t){e.$set(e.editForm,"jsName",t)},expression:"editForm.jsName"}})],1),a("el-form-item",{attrs:{label:"公司地点",prop:"jsSite"}},[a("el-input",{attrs:{placeholder:"请输入公司地点"},model:{value:e.editForm.jsSite,callback:function(t){e.$set(e.editForm,"jsSite",t)},expression:"editForm.jsSite"}})],1),a("el-form-item",{attrs:{label:"公司地点",prop:"jsType"}},[a("el-input",{attrs:{placeholder:"请输入公司地点"},model:{value:e.editForm.jsType,callback:function(t){e.$set(e.editForm,"jsType",e._n(t))},expression:"editForm.jsType"}})],1),a("el-form-item",{attrs:{label:"联系人",prop:"jsUsername"}},[a("el-input",{attrs:{placeholder:"请输入联系人"},model:{value:e.editForm.jsUsername,callback:function(t){e.$set(e.editForm,"jsUsername",t)},expression:"editForm.jsUsername"}})],1),a("el-form-item",{attrs:{label:"联系人电话",prop:"jsPhone"}},[a("el-input",{attrs:{placeholder:"请输入联系人电话"},model:{value:e.editForm.jsPhone,callback:function(t){e.$set(e.editForm,"jsPhone",t)},expression:"editForm.jsPhone"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"添加",visible:e.addVisible,width:"30%"},on:{"update:visible":function(t){e.addVisible=t}}},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,rules:e.carFormRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"公司名称",prop:"jsName"}},[a("el-input",{attrs:{placeholder:"请输入公司名称"},model:{value:e.addForm.jsName,callback:function(t){e.$set(e.addForm,"jsName",t)},expression:"addForm.jsName"}})],1),a("el-form-item",{attrs:{label:"公司地点",prop:"jsSite"}},[a("el-input",{attrs:{placeholder:"请输入公司地点"},model:{value:e.addForm.jsSite,callback:function(t){e.$set(e.addForm,"jsSite",t)},expression:"addForm.jsSite"}})],1),a("el-form-item",{attrs:{label:"公司类型",prop:"jsType"}},[a("el-input",{attrs:{placeholder:"请输入公司类型"},model:{value:e.addForm.jsType,callback:function(t){e.$set(e.addForm,"jsType",t)},expression:"addForm.jsType"}})],1),a("el-form-item",{attrs:{label:"联系人",prop:"jsUsername"}},[a("el-input",{attrs:{placeholder:"请输入联系人"},model:{value:e.addForm.jsUsername,callback:function(t){e.$set(e.addForm,"jsUsername",t)},expression:"addForm.jsUsername"}})],1),a("el-form-item",{attrs:{label:"联系人电话",prop:"jsPhone"}},[a("el-input",{attrs:{placeholder:"请输入联系电话"},model:{value:e.addForm.jsPhone,callback:function(t){e.$set(e.addForm,"jsPhone",t)},expression:"addForm.jsPhone"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveAdd}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[a("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},i=[],l=(a("c5f6"),a("386d"),a("7f7f"),a("a15e"),{name:"carManager",data:function(){return{tableData:[],cur_page:1,pagesize:20,numberer:0,condition:0,totalRecords:0,totalPages:0,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,addVisible:!1,delVisible:!1,editForm:{id:"",jsName:"",jsSite:"",jsType:"",jsDepartment:"",jsUsername:"",jsPhone:""},addForm:{id:"",jsName:"",jsSite:"",jsType:"",jsDepartment:"",jsUsername:"",jsPhone:"",parkId:localStorage.getItem("parkId"),agentId:localStorage.getItem("agentId")},carFormRules:{jsName:[{message:"名称不能为空",required:!0,trigger:"blur"},{min:0,max:12,message:"请输入正确名称",trigger:"blur"}],jsPhone:[{message:"请输入联系电话",required:!0,trigger:"blur"},{min:11,max:11,message:"请输入11位联系电话",trigger:"blur"},{pattern:/^[0-9]+$/,message:"请输入正确的手机号"}],jsSite:[{min:0,max:10,message:"只能是0-10个字符",trigger:"blur"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"不允许输入空格等特殊符号"}],jsDepartment:[{min:0,max:10,message:"只能是0-10个字符",trigger:"blur"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"不允许输入空格等特殊符号"}],jsUsername:[{min:2,max:5,message:"只能是2到5个字符",trigger:"blur"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"不允许输入空格等特殊符号"}],jsType:[{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"不允许输入空格等特殊符号"}]},idx:-1,id:-1}},created:function(){this.getData()},computed:{data:function(){var e=this;return this.tableData.filter(function(t){for(var a=!1,s=0;s<e.del_list.length;s++)if(t.name===e.del_list[s].name){a=!0;break}if(!a&&t.address.indexOf(e.select_cate)>-1&&(t.name.indexOf(e.select_word)>-1||t.address.indexOf(e.select_word)>-1))return t})}},methods:{refresh:function(){this.getData(),this.editForm={},this.select_word="",this.addForm={}},batchImport:function(){axios.get("member/batchImport",{params:{scheduleType:scheduleType},responseType:"arraybuffer"}).then(function(e){var t=new Blob([e.data],{type:"application/x-xls"}),a=document.createElement("a");a.href=window.URL.createObjectURL(t),a.download=fileNames[scheduleType]+"_"+e.headers.datestr+".xls",a.click()})},batchExport:function(){var e=this;this.$axios({url:"http://www.jinshipark.com/member/batchExport",method:"post"}).then(function(t){console.log(t),t.status<=200&&e.$message.error("导出成功: "+error)}).catch(function(t){e.$message.error("导出失败: "+t),console.log(t)})},dateFormatterexpirationTime:function(e,t){var a=e.expirationTime;if(a){a=new Date(a);var s=a.getFullYear()+"-",i=a.getMonth()+1+"-",l=a.getDate();return s+i+l}return""},dateFormatter:function(e,t){var a=e.joinTime;if(a){a=new Date(a);var s=a.getFullYear()+"-",i=a.getMonth()+1+"-",l=a.getDate();return s+i+l}return""},handleSizeChange:function(e){0==this.numberer?(this.pagesize=e,console.log(e),this.getData(1)):(this.pagesize=e,this.search(1))},handleCurrentChange:function(e){0==this.numberer?(this.cur_page=e,this.getData()):(this.cur_page=e,this.search(2))},getData:function(e){1==e&&(this.cur_page=1);var t=this;this.numberer=0,this.$axios({url:"http://www.jinshipark.com/jinshiCompany/selectCompanyAll",method:"post",data:{pageNum:t.cur_page,pageSize:t.pagesize,parkId:localStorage.getItem("parkId")}}).then(function(e){e.status<=200&&(t.tableData=[],t.tableData=e.data.companyData,t.totalRecords=e.data.companyTotalRecords,console.log(e))}).catch(function(e){t.$message.error("查询失败: "+e),console.log(e)})},search:function(e){this.numberer=1,this.is_search=!0,1==e&&(this.cur_page=1);var t=this;this.$axios({url:"http://www.jinshipark.com/jinshiCompany/searchCompany",method:"post",data:{keyWord:t.select_word,pageNum:t.cur_page,pageSize:t.pagesize,parkId:localStorage.getItem("parkId")}}).then(function(e){e.status<=200&&(t.tableData=e.data.companyData,console.log(e,"78584"),t.totalRecords=e.data.companyTotalRecords)}).catch(function(e){t.$message.error("查询失败: "+e),console.log(e)})},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e},handleEdit:function(e,t){this.idx=e,this.id=t.id,this.editForm={id:t.id,jsName:t.jsName,jsSite:t.jsSite,jsType:t.jsType,jsDepartment:t.jsDepartment,jsUsername:t.jsUsername,jsPhone:t.jsPhone,parkId:Number(localStorage.getItem("parkId")),agentId:Number(localStorage.getItem("agentId"))},console.log(this.editForm,"编辑"),this.editVisible=!0},handleDelete:function(e,t){this.idx=e,this.id=t.id,this.delVisible=!0},delAll:function(){var e=this.multipleSelection.length,t="";this.del_list=this.del_list.concat(this.multipleSelection);for(var a=0;a<e;a++)t+=this.multipleSelection[a].name+" ";this.$message.success("删除了"+t),this.multipleSelection=[]},handleSelectionChange:function(e){this.multipleSelection=e},saveEdit:function(){var e=this,t=this,a=this.editForm;this.$refs.editForm.validate(function(s){s?e.$axios({url:"http://www.jinshipark.com/jinshiCompany/updateByCompany",method:"post",data:a}).then(function(e){if(e.status<=200)if(t.editVisible=!1,t.$message.success("修改成功"),t.$message.success("修改第 ".concat(t.idx+1," 行成功")),t.tableData[t.idx].id===t.id)t.$set(t.tableData,t.idx,t.editForm);else for(var a=0;a<t.tableData.length;a++)if(t.tableData[a].id===t.id)return void t.$set(t.tableData,a,t.editForm)}).catch(function(e){t.$message.success("修改失败！"),console.log(e)}):t.$message.success("格式不正确")})},saveAdd:function(){var e=this,t=this,a=this.addForm;this.$refs.addForm.validate(function(s){s?e.$axios({url:"http://www.jinshipark.com/jinshiCompany/insert",method:"post",data:a}).then(function(e){e.status<=200&&(t.addVisible=!1,console.log(e,"添加"),t.$message.success("添加成功"),t.getData())}).catch(function(e){t.$message.error("添加失败！"),console.log(e)}):t.$message.success("格式不正确")})},deleteRow:function(){var e=this;console.log(this.id),this.$axios({url:"http://www.jinshipark.com/jinshiCompany/deleteById",method:"post",data:{id:e.id}}).then(function(t){if(t.status<=200)if(e.$message.success("删除成功"),e.delVisible=!1,e.tableData[e.idx].id===e.id)e.tableData.splice(e.idx,1);else for(var a=0;a<e.tableData.length;a++)if(e.tableData[a].id===e.id)return void e.tableData.splice(a,1)}).catch(function(t){e.$message.success("查询失败！"),console.log(t)})}}}),r=l,o=(a("bf2f"),a("1d1a"),a("2877")),n=Object(o["a"])(r,s,i,!1,null,"0ce2176e",null);t["default"]=n.exports},f456:function(e,t,a){}}]);