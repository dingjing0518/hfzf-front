(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28f9cc8a"],{"259e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"whiteListManager"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-cascades"}),e._v("白名单\n      ")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.search(1)}}},[e._v("搜索")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){e.addVisible=!0}}},[e._v("添加")]),a("el-button",{staticClass:"sousuo",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.refresh}},[e._v("刷新")])],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center","class-name":"table"}}),a("el-table-column",{attrs:{type:"index",width:"55",align:"center",label:"序号","class-name":"table"}}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"table"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")]),a("el-button",{attrs:{type:"text",icon:"el-icon-star-off"},on:{click:function(a){return e.attention(t.$index,t.row)}}},[e._v("关注")]),a("el-button",{attrs:{type:"text",icon:"el-icon-star-off"},on:{click:function(a){return e.noattention(t.$index,t.row)}}},[e._v("取消关注")])]}}])}),a("el-table-column",{attrs:{prop:"name",label:"姓名","class-name":"table"}}),a("el-table-column",{attrs:{prop:"lincensePlateNumber",label:"车牌号","class-name":"table"}}),a("el-table-column",{attrs:{prop:"createTime",formatter:e.dateFormatter,label:"创建时间",sortable:"","class-name":"table"}}),a("el-table-column",{attrs:{prop:"isFlag",label:"关注","class-name":"table"}}),a("el-table-column",{attrs:{prop:"describtion",label:"备注","class-name":"table"}})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","current-page":e.cur_page,"page-size":e.pagesize,total:e.totalRecords,"page-sizes":[50,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"100px",rules:e.carFormRules}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),a("el-form-item",{attrs:{label:"车牌号",prop:"lincensePlateNumber"}},[a("el-input",{attrs:{placeholder:"请输入车牌号"},model:{value:e.editForm.lincensePlateNumber,callback:function(t){e.$set(e.editForm,"lincensePlateNumber",t)},expression:"editForm.lincensePlateNumber"}})],1),a("el-form-item",{attrs:{label:"是否关注",prop:"isFlag"}},[a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"类型"},model:{value:e.editForm.isFlag,callback:function(t){e.$set(e.editForm,"isFlag",t)},expression:"editForm.isFlag"}},[a("el-option",{key:"1",attrs:{label:"否",value:"未关注"}}),a("el-option",{key:"0",attrs:{label:"是",value:"已关注"}})],1)],1),a("el-form-item",{attrs:{label:"备注",prop:"describtion"}},[a("el-input",{attrs:{placeholder:"请添加备注"},model:{value:e.editForm.describtion,callback:function(t){e.$set(e.editForm,"describtion",t)},expression:"editForm.describtion"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"添加",visible:e.addVisible,width:"30%"},on:{"update:visible":function(t){e.addVisible=t}}},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,rules:e.carFormRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),a("el-form-item",{attrs:{label:"车牌号",prop:"lincensePlateNumber"}},[a("el-input",{attrs:{placeholder:"请输入车牌号"},model:{value:e.addForm.lincensePlateNumber,callback:function(t){e.$set(e.addForm,"lincensePlateNumber",t)},expression:"addForm.lincensePlateNumber"}})],1),a("el-form-item",{attrs:{label:"是否关注",prop:"isFlag"}},[a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"请选择类型"},model:{value:e.addForm.isFlag,callback:function(t){e.$set(e.addForm,"isFlag",t)},expression:"addForm.isFlag"}},[a("el-option",{key:"1",attrs:{label:"否",value:"未关注"}}),a("el-option",{key:"0",attrs:{label:"是",value:"已关注"}})],1)],1),a("el-form-item",{attrs:{label:"备注",prop:"describtion"}},[a("el-input",{attrs:{placeholder:"请添加备注"},model:{value:e.addForm.describtion,callback:function(t){e.$set(e.addForm,"describtion",t)},expression:"addForm.describtion"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.saveAdd}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[a("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},s=[],l=(a("c5f6"),a("386d"),a("7f7f"),a("a15e"),{name:"carManager",data:function(){return{tableData:[],cur_page:1,pagesize:50,totalRecords:0,totalPages:0,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,addVisible:!1,delVisible:!1,numberer:0,condition:0,editForm:{id:"",name:"",lincensePlateNumber:"",describtion:"",listType:"",createTime:"",isFlag:"",parkId:localStorage.getItem("parkId"),agentId:localStorage.getItem("agentId")},addForm:{id:"",name:"",lincensePlateNumber:"",describtion:"",listType:"",createTime:"",isFlag:"",parkId:localStorage.getItem("parkId"),agentId:localStorage.getItem("agentId")},attForm:{id:"",name:"",lincensePlateNumber:"",describtion:"",listType:"",createTime:"",isFlag:""},isflag:{isFlag:""},carFormRules:{lincensePlateNumber:[{message:"车牌号不能为空",required:!0,trigger:"blur"},{min:3,max:12,message:"请输入正确车牌号",trigger:"blur"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"不允许输入空格等特殊符号"}],name:[{message:"姓名不能为空",required:!0,trigger:"blur"},{min:2,max:5,message:"长度应在2-5个字之间",trigger:"blur"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"不允许输入空格等特殊符号"}],listType:[{min:0,max:10,message:"长度应在0-10个字之间",trigger:"blur"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"不允许输入空格等特殊符号"}],describtion:[{message:"请输入描述",required:!0,trigger:"blur"},{min:1,max:10,message:"长度应该在1-10个字符之间",trigger:"blur"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"不允许输入空格等特殊符号"}]},idx:-1,id:-1}},created:function(){this.getData()},computed:{data:function(){var e=this;return this.tableData.filter(function(t){for(var a=!1,i=0;i<e.del_list.length;i++)if(t.name===e.del_list[i].name){a=!0;break}if(!a&&t.address.indexOf(e.select_cate)>-1&&(t.name.indexOf(e.select_word)>-1||t.address.indexOf(e.select_word)>-1))return t})}},methods:{refresh:function(){this.editForm={},this.select_word="",this.addForm={},this.getData()},dateFormatterexpirationTime:function(e,t){var a=e.createTime;if(a){a=new Date(a);var i=a.getFullYear()+"-",s=a.getMonth()+1+"-",l=a.getDate();return i+s+l}return""},dateFormatter:function(e,t){var a=e.createTime;if(a){a=new Date(a);var i=a.getFullYear()+"-",s=a.getMonth()+1+"-",l=a.getDate();return i+s+l}return""},handleSizeChange:function(e){0==this.numberer?(this.pagesize=e,console.log(e),this.getData(1)):(this.pagesize=e,this.search(1))},handleCurrentChange:function(e){0==this.numberer?(this.cur_page=e,this.getData()):(this.cur_page=e,this.search(2))},getData:function(e){1==e&&(this.cur_page=1),this.numberer=0;var t=this;this.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/whiteList/selectWhiteListAll",method:"post",data:{pageNum:t.cur_page,pageSize:t.pagesize,parkId:localStorage.getItem("parkId")}}).then(function(e){e.status<=200&&(t.tableData=[],t.tableData=e.data.whiteListData,t.totalRecords=e.data.whiteListTotalRecords)}).catch(function(e){t.$message.error("查询失败: "+e),console.log(e)})},search:function(e){this.numberer=1,1==e&&(this.cur_page=1),this.is_search=!0;var t=this;this.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/whiteList/searchWhiteList",method:"post",data:{keyWord:t.select_word,pageNum:t.cur_page,pageSize:t.pagesize,parkId:Number(localStorage.getItem("parkId"))}}).then(function(e){e.status<=200&&(t.tableData=e.data.whiteListData,t.totalRecords=e.data.whiteListTotalRecords)}).catch(function(e){t.$message.error("查询失败: "+e),console.log(e)})},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e},handleEdit:function(e,t){this.idx=e,this.id=t.id,this.editForm={id:t.id,name:t.name,lincensePlateNumber:t.lincensePlateNumber,describtion:t.describtion,listType:t.listType,createTime:t.createTime,isFlag:t.isFlag},this.editVisible=!0},attention:function(e,t){var a=this;this.idx=e,this.id=t.id,this.attForm={id:t.id,name:t.name,lincensePlateNumber:t.lincensePlateNumber,describtion:t.describtion,listType:t.listType,createTime:t.createTime,isFlag:t.isFlag};var i=this.attForm;this.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/whiteList/updateFlagZero",method:"post",data:i}).then(function(e){e.status<=200&&a.$message.success("关注成功")}).catch(function(e){a.$message.error("关注失败！"),console.log(e)})},noattention:function(e,t){var a=this;this.idx=e,this.id=t.id,this.attForm={id:t.id,name:t.name,lincensePlateNumber:t.lincensePlateNumber,describtion:t.describtion,listType:t.listType,createTime:t.createTime,isFlag:t.isFlag};var i=this.attForm;this.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/whiteList/updateFlagOne",method:"post",data:i}).then(function(e){e.status<=200&&a.$message.success("取消成功")}).catch(function(e){a.$message.error("取消失败！"),console.log(e)})},handleDelete:function(e,t){this.idx=e,this.id=t.id,this.delVisible=!0},delAll:function(){var e=this.multipleSelection.length,t="";this.del_list=this.del_list.concat(this.multipleSelection);for(var a=0;a<e;a++)t+=this.multipleSelection[a].name+" ";this.$message.success("删除了"+t),this.multipleSelection=[]},handleSelectionChange:function(e){this.multipleSelection=e},saveEdit:function(){var e=this,t=this,a=this.editForm;this.$refs.editForm.validate(function(i){i?e.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/whiteList/updateByPrimaryKey",method:"post",data:a}).then(function(e){if(e.status<=200)if(t.editVisible=!1,t.$message.success("修改成功"),t.$message.success("修改第 ".concat(t.idx+1," 行成功")),t.tableData[t.idx].id===t.id)t.$set(t.tableData,t.idx,t.editForm);else for(var a=0;a<t.tableData.length;a++)if(t.tableData[a].id===t.id)return void t.$set(t.tableData,a,t.editForm)}).catch(function(e){t.$message.error("修改失败！"),console.log(e)}):t.$message.success("格式不正确")})},saveAdd:function(){var e=this,t=this,a=this.addForm;this.$refs.addForm.validate(function(i){i?e.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/whiteList/insert",method:"post",data:a}).then(function(e){e.status<=200&&(t.addVisible=!1,t.$message.success("添加成功"),t.getData())}).catch(function(e){t.$message.error("添加失败！"),console.log(e)}):t.$message.error("格式不正确")})},deleteRow:function(){var e=this;this.$axios({url:"http://58.210.33.107:8081/carmanager-TEST/whiteList/deleteByPrimaryKey",method:"post",data:{id:e.id}}).then(function(t){if(t.status<=200)if(e.$message.success("删除成功"),e.delVisible=!1,e.tableData[e.idx].id===e.id)e.tableData.splice(e.idx,1);else for(var a=0;a<e.tableData.length;a++)if(e.tableData[a].id===e.id)return void e.tableData.splice(a,1)}).catch(function(t){e.$message.success("查询失败！"),console.log(t)})}}}),r=l,n=(a("30e3"),a("2877")),o=Object(n["a"])(r,i,s,!1,null,"1ecc1246",null);t["default"]=o.exports},"30e3":function(e,t,a){"use strict";var i=a("a617"),s=a.n(i);s.a},a617:function(e,t,a){}}]);