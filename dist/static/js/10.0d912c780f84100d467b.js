webpackJsonp([10],{GEMR:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("vgQg"),o={components:{},data:function(){return{dialogVisible:!1,productSeries:l.a,addPurchaseForm:{date:"",channel:"",product:[],count:"",size:"",unit:"box"},addPurchaseRules:{product:[{required:!0,message:"请选择产品",trigger:"blur"}],productSize:[{required:!0,message:"请选择产品规格",trigger:"blur"}]},sizeOptions:[{label:"S",value:"S"},{label:"M",value:"M"},{label:"L",value:"L"},{label:"XL",value:"XL"}]}},methods:{open:function(){this.dialogVisible=!0},submitForm:function(){var e=this;this.$refs.addPurchaseForm.validate(function(t){if(!t)return alert("请输入正确的信息"),!1;e.dialogVisible=!1,e.$emit("addProduct",e.addPurchaseForm)})},resetForm:function(){this.$refs.addPurchaseForm.resetFields()},addSuccess:function(){this.dialogVisible=!1}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{"append-to-body":"",visible:e.dialogVisible,title:"进货","custom-class":"add-purchase-dialog"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"content"},[a("el-form",{ref:"addPurchaseForm",attrs:{model:e.addPurchaseForm,rules:e.addPurchaseRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"进货日期：",prop:"name"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日"},model:{value:e.addPurchaseForm.date,callback:function(t){e.$set(e.addPurchaseForm,"date",t)},expression:"addPurchaseForm.date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"进货渠道："}},[a("el-input",{model:{value:e.addPurchaseForm.channel,callback:function(t){e.$set(e.addPurchaseForm,"channel",t)},expression:"addPurchaseForm.channel"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"产品：",prop:"product"}},[a("el-cascader",{attrs:{options:e.productSeries},model:{value:e.addPurchaseForm.product,callback:function(t){e.$set(e.addPurchaseForm,"product",t)},expression:"addPurchaseForm.product"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"规格：",prop:"productSize"}},[a("el-select",{attrs:{placeholder:"请选择产品规格"},model:{value:e.addPurchaseForm.size,callback:function(t){e.$set(e.addPurchaseForm,"size",t)},expression:"addPurchaseForm.size"}},e._l(e.sizeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"数量："}},[a("el-input-number",{attrs:{min:1},model:{value:e.addPurchaseForm.count,callback:function(t){e.$set(e.addPurchaseForm,"count",t)},expression:"addPurchaseForm.count"}}),e._v(" "),a("span",[e._v("(单位：\n          "),a("el-select",{staticStyle:{width:"80px"},model:{value:e.addPurchaseForm.unit,callback:function(t){e.$set(e.addPurchaseForm,"unit",t)},expression:"addPurchaseForm.unit"}},[a("el-option",{attrs:{label:"箱",value:"box"}}),e._v(" "),a("el-option",{attrs:{label:"包",value:"package"}}),e._v(" "),a("el-option",{attrs:{label:"瓶",value:"bottle"}}),e._v(" "),a("el-option",{attrs:{label:"盒",value:"case"}})],1),e._v("\n          )")],1)],1),e._v(" "),a("el-button",{attrs:{type:"text"}},[e._v("增加产品")])],1)],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.dialogVisible=!e.dialogVisible}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.resetForm}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确定")])],1)])},staticRenderFns:[]},i={components:{MyTable:function(){return a.e(18).then(a.bind(null,"JE0o"))}},data:function(){return{dialogVisible:!1,tableData:{col:[{prop:"productName",label:"产品名"},{prop:"productSize",label:"产品规格"},{prop:"productCount",label:"数量"}],data:[{productName:"丝柔亲体纸尿裤 (大包)",productSize:"L",productCount:2},{productName:"丝柔亲体纸尿裤 (大包)",productSize:"XL",productCount:1}]}}},methods:{open:function(){this.dialogVisible=!0}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{"append-to-body":"",visible:e.dialogVisible,title:"订货详情","custom-class":"purchase-detail-dialog"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"content"},[a("my-table",{attrs:{col:e.tableData.col,data:e.tableData.data,border:"",stripe:""}})],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!e.dialogVisible}}},[e._v("确定")])],1)])},staticRenderFns:[]},s={name:"PurchaseList",components:{WhiteBox:function(){return a.e(19).then(a.bind(null,"De+3"))},MyTable:function(){return a.e(18).then(a.bind(null,"JE0o"))},AddPurchaseDialog:a("VU/8")(o,r,!1,null,null,null).exports,PurchaseDetail:a("VU/8")(i,n,!1,null,null,null).exports},data:function(){return{tableData:{col:[{prop:"date",label:"订货日期"},{prop:"Channel",label:"订货渠道"}],data:[{date:"20181228",Channel:"系统"},{date:"20190422",Channel:"张羽"}]}}},methods:{openDialog:function(e){this.$refs[e].open()}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"purchase-list"},[a("white-box",{attrs:{width:"100%",title:"进货单"}},[a("template",{slot:"title-right"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:function(t){return e.openDialog("addPurchaseDialog")}}},[e._v("进货")])],1),e._v(" "),a("template",{slot:"content"},[a("my-table",{attrs:{col:e.tableData.col,data:e.tableData.data,border:"",stripe:"",operation:"",operationWidth:"200",operationAlign:"center"},scopedSlots:e._u([{key:"operation",fn:function(t){return a("div",{},[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.openDialog("purchaseDetail")}}},[e._v("订货详情")])],1)}}])})],1)],2),e._v(" "),a("div",{staticClass:"dialogs"},[a("add-purchase-dialog",{ref:"addPurchaseDialog"}),e._v(" "),a("purchase-detail",{ref:"purchaseDetail"})],1)],1)},staticRenderFns:[]};var u=a("VU/8")(s,d,!1,function(e){a("v4g4")},"data-v-be4111ea",null);t.default=u.exports},v4g4:function(e,t){}});
//# sourceMappingURL=10.0d912c780f84100d467b.js.map