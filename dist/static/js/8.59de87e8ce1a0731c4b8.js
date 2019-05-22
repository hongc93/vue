webpackJsonp([8],{"/cjz":function(e,t){},qQ1r:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{dialogVisible:!1,addForm:{name:"",sendDate:"",mobile:"",wechat:"",address:"",product:[{productName:[],productCount:""}],otherProduct:"",express:"",expressFee:"",birthday:"",sex:3,knowWay:""},addRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:3,max:8,message:"长度为3到8个字符",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"}],wechat:[{required:!0,message:"请输入微信",trigger:"blur"}],address:[{required:!0,message:"请输入地址",trigger:"blur"}],product:[{required:!0,message:"请输入货品",trigger:"blur"}]},knowWayOptions:[{label:"群聊",value:"0"},{label:"朋友",value:"1"},{label:"地推",value:"2"},{label:"其他",value:"4"}],productOptions:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"}]}]}],expressOptions:[{label:"品骏",value:"1"},{label:"中通",value:"2"},{label:"百世",value:"3"}]}},methods:{open:function(){this.dialogVisible=!0},handleCancel:function(){this.dialogVisible=!this.dialogVisible,this.$refs.addForm.resetFields()},handleReset:function(){this.$refs.addForm.resetFields()},addTryouter:function(){var e=this;this.$refs.addForm.validate(function(t){t?(e.dialogVisible=!1,e.$message({type:"success",message:"添加成功"})):e.$message.error("请输入正确的信息")})},addGoods:function(){var e=this;this.addForm.product.forEach(function(t){0!==t.productName.length?e.addForm.product.push({productName:[],count:0,keyId:Date.now()}):e.$message.error("请选择此商品名称后，方能追加！")})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{"append-to-body":"",visible:e.dialogVisible,"custom-class":"add-tryout",title:"添加试用装邮寄名单",width:"650px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"content"},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,rules:e.addRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"发货日期",prop:"sendDate"}},[a("el-date-picker",{staticStyle:{},attrs:{type:"date",placeholder:"请选择发货日期"},model:{value:e.addForm.sendDate,callback:function(t){e.$set(e.addForm,"sendDate",t)},expression:"addForm.sendDate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[a("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.addForm.mobile,callback:function(t){e.$set(e.addForm,"mobile",t)},expression:"addForm.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"微信",prop:"wechat"}},[a("el-input",{attrs:{placeholder:"请输入微信"},model:{value:e.addForm.wechat,callback:function(t){e.$set(e.addForm,"wechat",t)},expression:"addForm.wechat"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址",prop:"address"}},[a("el-input",{attrs:{placeholder:"请输入地址"},model:{value:e.addForm.address,callback:function(t){e.$set(e.addForm,"address",t)},expression:"addForm.address"}})],1),e._v(" "),e._l(e.addForm.product,function(t,r){return a("el-form-item",{key:r,attrs:{label:"货品"+(r+1)}},[a("el-cascader",{staticStyle:{width:"auto"},attrs:{options:e.productOptions},model:{value:t.productName,callback:function(a){e.$set(t,"productName",a)},expression:"item.productName"}}),e._v(" 数量："),a("el-input",{staticStyle:{width:"80px"},attrs:{placeholder:"1"},model:{value:t.productCount,callback:function(a){e.$set(t,"productCount",a)},expression:"item.productCount"}}),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:e.addGoods}},[e._v("添加")])],1)}),e._v(" "),a("el-form-item",{attrs:{label:"其他货品"}},[a("el-input",{staticStyle:{width:"auto"},model:{value:e.addForm.otherProduct,callback:function(t){e.$set(e.addForm,"otherProduct",t)},expression:"addForm.otherProduct"}}),e._v(" "),a("el-button",{attrs:{type:"text"}},[e._v("添加")])],1),e._v(" "),a("el-form-item",{attrs:{label:"快递",prop:"expressFee"}},[a("el-select",{attrs:{placeholder:"请输入快递"},model:{value:e.addForm.express,callback:function(t){e.$set(e.addForm,"express",t)},expression:"addForm.express"}},e._l(e.expressOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"快递费",prop:"expressFee"}},[a("el-input",{attrs:{placeholder:"请输入快递费"},model:{value:e.addForm.expressFee,callback:function(t){e.$set(e.addForm,"expressFee",t)},expression:"addForm.expressFee"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"宝出生日期",prop:"birthday"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"请选择宝出生日期"},model:{value:e.addForm.birthday,callback:function(t){e.$set(e.addForm,"birthday",t)},expression:"addForm.birthday"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"宝性别",prop:"birthday"}},[a("el-radio-group",{model:{value:e.addForm.sex,callback:function(t){e.$set(e.addForm,"sex",t)},expression:"addForm.sex"}},[a("el-radio",{attrs:{label:1}},[e._v("女")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("男")]),e._v(" "),a("el-radio",{attrs:{label:3}},[e._v("未知")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"认识途径",prop:"knowWay"}},[a("el-select",{model:{value:e.addForm.knowWay,callback:function(t){e.$set(e.addForm,"knowWay",t)},expression:"addForm.knowWay"}},e._l(e.knowWayOptions,function(e){return a("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})}),1)],1)],2)],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.handleCancel}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.handleReset}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addTryouter}},[e._v("确定")])],1)])},staticRenderFns:[]};var l={col:[{label:"客户名称",prop:"customName",width:"120",align:"center"},{label:"地址",prop:"address",minWidth:"240",align:"left"},{label:"电话",prop:"mobile",width:"120",align:"center"},{label:"微信",prop:"wechat",width:"120",align:"left"},{label:"货品",prop:"product",width:"200",align:"left"},{label:"其他货品",prop:"otherProduct",align:"left"},{label:"发货日期",prop:"date",width:"120",align:"center",sortable:!0},{label:"快递费",prop:"expressCost",width:"100",align:"right"},{label:"收费",prop:"income",width:"100",align:"right"},{label:"宝性别",prop:"sex",width:"100",align:"center"},{label:"宝出生日期",prop:"brithday",width:"120",align:"center",sortable:!0}],data:[{customName:"孔祥玉",address:"北京市朝阳区东军庄13号楼2单元603",mobile:"18633137221",product:"试用装",otherProduct:"",date:"20190113",expressCost:"8",income:"9.9",sex:"男",brithday:""},{customName:"刘琼",address:"湖南省桃江县灰山港镇向阳花小区58号",mobile:"15898494950",product:"试用装",otherProduct:"",date:"20190211",expressCost:"10",sex:"",brithday:""},{customName:"张鑫",address:"山西省晋中市榆次区 新建北街 御景城市花园",mobile:"18635405567",date:"20190227",expressCost:"8",income:"9.9",product:"试用装",otherProduct:"",sex:"",brithday:""},{customName:"高文凤",address:"门头沟区永定镇冯村信园小区2号楼1单元302",mobile:"13693593352",product:"试用装 蛋黄油",otherProduct:"",date:"20190305",expressCost:"8",income:"9.9",sex:"",brithday:""},{customName:" 宋欢欢",address:"房山区长阳镇首开熙悦汇小区7号楼801",mobile:"17744458565",product:"肤乐霜",otherProduct:"",date:"20190308",expressCost:"8",income:"9.9",sex:"",brithday:""},{customName:" 刘月",address:"房山区良乡四合巷小区",mobile:"13810301604",product:"肤乐霜",otherProduct:"",date:"20190313",expressCost:"8",income:"9.9",sex:"",brithday:""},{customName:" 付雷雷",address:"北京市房山区青龙湖镇坨里村南头",mobile:"13699149961",product:"9.9试用装 肤乐霜",otherProduct:"",date:"20190315",expressCost:"8",income:"9.9",sex:"",brithday:""},{customName:" 张晶",address:"北京市房山区良乡伊林郡二期6号楼303",mobile:"15600736088",product:"9.9试用装 硅霜",otherProduct:"",date:"20190315",expressCost:"8",income:"9.9",sex:"",brithday:""}]},d={name:"TryoutList",components:{WhiteBox:function(){return a.e(19).then(a.bind(null,"De+3"))},MyTable:function(){return a.e(18).then(a.bind(null,"JE0o"))},AddTryout:a("VU/8")(r,o,!1,function(e){a("/cjz")},null,null).exports},data:function(){return{tableData:l}},methods:{openDialog:function(e){this.$refs[e].open()}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tryout-list"},[a("white-box",{attrs:{width:"100%",title:"试用装邮寄"}},[a("div",{attrs:{slot:"title-right"},slot:"title-right"},[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:function(t){return e.openDialog("addTryout")}}},[e._v("添加")])],1),e._v(" "),a("template",{slot:"content"},[a("my-table",{attrs:{col:e.tableData.col,data:e.tableData.data,border:"",stripe:"",showIndex:"",operation:"",operationWidth:"100"},scopedSlots:e._u([{key:"operation",fn:function(t){return a("div",{},[a("el-button",{attrs:{type:"text"}},[e._v("转化为客户")])],1)}}])})],1)],2),e._v(" "),a("div",{staticClass:"dialogs"},[a("add-tryout",{ref:"addTryout"})],1)],1)},staticRenderFns:[]};var i=a("VU/8")(d,s,!1,function(e){a("rdSI")},"data-v-153269cd",null);t.default=i.exports},rdSI:function(e,t){}});
//# sourceMappingURL=8.59de87e8ce1a0731c4b8.js.map