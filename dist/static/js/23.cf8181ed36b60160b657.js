webpackJsonp([23],{"6QyR":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("iE9W");var n={name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return{right:"50px",bottom:"50px",width:"40px",height:"40px",borderRadius:"4px",lineHeight:"45px",boxShadow:"0px 0px 10px 1px #CCC",background:"#fff",opacity:.5}},transitionName:{type:String,default:"fade"}}},data:function(){return{visible:!1,interval:null}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=window.pageYOffset>this.visibilityHeight},backToTop:function(){var t=this,e=window.pageXOffset,i=0;this.interval=setInterval(function(){var n=Math.floor(t.easeInOutQuad(10*i,e,-e,500));n<=t.backPosition?(window.scrollTo(0,t.backPosition),clearInterval(t.interval)):window.scrollTo(0,n),i++},16.7)},easeInOutQuad:function(t,e,i,n){return(t/=n/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"back-to-top"},[e("transition",{attrs:{name:this.transitionName}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:this.customStyle,on:{click:this.backToTop}},[e("i",{staticClass:"el-icon-caret-top back-up-icon"})])])],1)},staticRenderFns:[]},a=i("VU/8")(n,o,!1,null,null,null);e.default=a.exports},iE9W:function(t,e){}});
//# sourceMappingURL=23.cf8181ed36b60160b657.js.map