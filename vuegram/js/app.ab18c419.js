(function(e){function t(t){for(var s,r,o=t[0],l=t[1],c=t[2],u=0,m=[];u<o.length;u++)r=o[u],n[r]&&m.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);p&&p(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},n={app:0},i=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"14d4":function(e,t,a){e.exports=a.p+"img/vue_gram_logo_cp.6eb5553c.png"},"2d23":function(e,t,a){},"2eb7":function(e,t,a){"use strict";var s=a("2d23"),n=a.n(s);n.a},"2fe2":function(e,t,a){},"32a8":function(e,t,a){"use strict";var s=a("fd9d"),n=a.n(s);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("5c07"),a("53da"),a("2556"),a("d0f8");var s=a("fd9b"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"app-phone"},[s("div",{staticClass:"phone-header"},[2===e.step||3===e.step?s("a",{staticClass:"cancel-cta",on:{click:e.goToHome}},[e._v("Cancel")]):e._e(),s("img",{attrs:{src:a("14d4")}}),2===e.step?s("a",{staticClass:"next-cta",on:{click:function(t){e.step++}}},[e._v("Next")]):e._e(),3===e.step?s("a",{staticClass:"next-cta",on:{click:e.Share}},[e._v("Share")]):e._e()]),s("PhoneBody",{attrs:{PhoneProps:e.PhoneProps,step:e.step,Image:e.Image,Filters:e.Filters,FilterName:e.FilterName},model:{value:e.caption,callback:function(t){e.caption=t},expression:"caption"}}),s("div",{staticClass:"phone-footer"},[s("div",{staticClass:"home-cta"},[s("i",{staticClass:"fas fa-home fa-lg",on:{click:e.goToHome}})]),s("div",{staticClass:"upload-cta"},[s("input",{attrs:{type:"file",name:"file",id:"file",disabled:1!=e.step},on:{change:e.PostChange}}),e._m(0)])])],1)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"file"}},[a("i",{staticClass:"far fa-plus-square fa-lg"})])}],r=(a("3a23"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"phone-body"},[1===e.step?a("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"feed"},e._l(e.PhoneProps,function(e,t){return a("VuegramPost",{key:t,attrs:{post:e}})}),1):e._e(),2===e.step?a("div",[a("div",{staticClass:"selected-image",class:e.FilterName,style:{backgroundImage:"url("+e.Image+")"}}),a("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"filter-container"},e._l(e.Filters,function(t,s){return a("FilterUpdate",{key:s,attrs:{Image:e.Image,filter:t}})}),1)]):e._e(),3===e.step?a("div",[a("div",{staticClass:"selected-image",class:e.FilterName,style:{backgroundImage:"url("+e.Image+")"}}),a("div",{staticClass:"caption-container"},[a("textarea",{attrs:{placeholder:"Write a caption..."},on:{input:e.captionChange}})])]):e._e()])}),o=[],l=(a("b06f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vuegram-post"},[a("div",{staticClass:"header level"},[a("div",{staticClass:"level-left"},[a("figure",{staticClass:"image is-32x32"},[a("img",{attrs:{src:e.post.userImage,alt:""}})]),a("span",{staticClass:"username"},[e._v(e._s(e.post.username))])])]),a("div",{staticClass:"image-container",class:e.post.filter,style:"backgroundImage:url("+e.post.postImage+")",on:{dblclick:e.ClickLike}}),a("div",{staticClass:"content"},[a("div",{staticClass:"heart"},[a("i",{staticClass:"far fa-heart fa-lg",class:{fas:e.post.hasBeenLiked},on:{click:e.ClickLike}})]),a("p",{staticClass:"likes"},[e._v(e._s(e.post.likes)+" likes")]),a("p",{staticClass:"caption"},[a("span",[e._v(e._s(e.post.username))]),e._v("\n            "+e._s(e.post.caption)+"\n        ")])])])}),c=[],p={name:"VuegramPost",props:{post:Object},methods:{ClickLike:function(){this.post.hasBeenLiked?this.post.likes--:this.post.likes++,this.post.hasBeenLiked=!this.post.hasBeenLiked}}},u=p,m=(a("a2a1"),a("17cc")),f=Object(m["a"])(u,l,c,!1,null,null,null),d=f.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"filter-type"},[a("p",[e._v(e._s(e.filter.name))]),a("div",{staticClass:"img",class:e.filter.name,style:{backgroundImage:"url("+e.Image+")"},on:{click:e.FilterNameChange}})])},h=[],v=new s["a"],_={name:"FilterUpdate",props:{Image:String,filter:Object},methods:{FilterNameChange:function(){v.$emit("FilterNameChange",this.filter.name)}}},k=_,C=(a("bf76"),Object(m["a"])(k,g,h,!1,null,null,null)),b=C.exports,w={name:"PhoneBody",props:{PhoneProps:Array,Image:String,step:Number,Filters:Array,FilterName:String},components:{VuegramPost:d,FilterUpdate:b},methods:{captionChange:function(e){this.$emit("input",e.target.value)}}},y=w,I=(a("2eb7"),Object(m["a"])(y,r,o,!1,null,null,null)),P=I.exports,j=[{username:"liuluwei",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tropical_beach.jpg",likes:36,hasBeenLiked:!1,caption:"When you're ready for summer '18 ☀️",filter:"perpetua"},{username:"cc",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me2.png",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg",likes:20,hasBeenLiked:!1,caption:"Views from the six...",filter:"clarendon"},{username:"ice",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/puppers.jpg",likes:49,hasBeenLiked:!1,caption:"Current mood 🐶",filter:"lofi"},{username:"ice",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/puppers.jpg",likes:49,hasBeenLiked:!1,caption:"Current mood 🐶",filter:"lofi"}],F=[{name:"normal"},{name:"clarendon"},{name:"gingham"},{name:"moon"},{name:"lark"},{name:"reyes"},{name:"juno"},{name:"slumber"},{name:"aden"},{name:"perpetua"},{name:"mayfair"},{name:"rise"},{name:"hudson"},{name:"valencia"},{name:"xpro2"},{name:"willow"},{name:"lofi"},{name:"inkwell"},{name:"nashville"}],x={name:"app",data:function(){return{PhoneProps:j,step:1,Image:"",Filters:F,FilterName:"",caption:""}},created:function(){var e=this;v.$on("FilterNameChange",function(t){e.FilterName=t})},components:{PhoneBody:P},methods:{PostChange:function(e){var t=this;if(0!=e.target.files.length)if(/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(e.target.files[0].name)){var a=new FileReader;a.readAsDataURL(e.target.files[0]),a.onload=function(e){t.step=2,t.Image=e.target.result}}else alert("请上传图片文件")},goToHome:function(){this.step=1,this.Image="",this.FilterName=""},Share:function(){var e={username:"liuluwei",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",postImage:this.Image,likes:0,hasBeenLiked:!1,caption:this.caption,filter:this.FilterName};j.unshift(e),this.goToHome()}}},N=x,O=(a("32a8"),Object(m["a"])(N,n,i,!1,null,null,null)),L=O.exports,B=a("d9a3"),S=a.n(B);s["a"].use(S.a),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(L)}}).$mount("#app")},a2a1:function(e,t,a){"use strict";var s=a("aa04"),n=a.n(s);n.a},aa04:function(e,t,a){},bf76:function(e,t,a){"use strict";var s=a("2fe2"),n=a.n(s);n.a},fd9d:function(e,t,a){}});
//# sourceMappingURL=app.ab18c419.js.map