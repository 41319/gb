(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[19],{328:function(e,t,n){"use strict";var a=n(8),r=(n(15),n(14)),o=n(41),i=n(4),c=n(177),s=n(25),l=n(112),u=n(178),d=n(322),p=n(1),b=(n(43),n(307)),f=n(53),h=(n(40),n(345)),j=n(2),m=["showPrice","hideCopy","isLoading","dataArr","pageSize","unmask","unmaskValue","handleClick","mask","displaySource","hideAuto","hideDl"],O=Object(i.a)(c.a)((function(){return{fontSize:"26px"}}));t.a=function(e){e.showPrice;var t=e.hideCopy,n=e.isLoading,i=e.dataArr,c=e.pageSize,g=(e.unmask,e.unmaskValue,e.handleClick),v=e.mask,x=void 0===v?"yyyyyyyy":v,y=e.displaySource,w=(e.hideAuto,e.hideDl,Object(o.a)(e,m)),S=(Object(b.a)("(min-width:600px)"),Object(s.a)().palette,Object(p.useState)(i)),I=Object(r.a)(S,2),P=(I[0],I[1],Object(p.useState)([])),C=Object(r.a)(P,2),k=C[0],z=C[1],R=Object(p.useState)([]),L=Object(r.a)(R,2),M=(L[0],L[1],Object(p.useState)(0)),N=Object(r.a)(M,2),E=(N[0],N[1],Object(p.useState)(0)),A=Object(r.a)(E,2),_=(A[0],A[1]),T=Object(p.useState)(!1),B=Object(r.a)(T,2),D=B[0],F=(B[1],Object(p.useState)(5)),W=Object(r.a)(F,2),V=W[0],G=(W[1],Object(p.useState)(0)),H=Object(r.a)(G,2),U=H[0],q=H[1],J=Object(p.useState)(88),K=Object(r.a)(J,2),Q=K[0];K[1],Object(f.b)();Object(p.useEffect)((function(){}),[k,Q]);Object(p.useEffect)((function(){z(function(e,t){for(var n=[],a=0,r=e.length;a<r;)n.push(e.slice(a,a+=t));return n}(i,c)),_(0)}),[i,c]),Object(p.useEffect)((function(){if(D){var e=setInterval((function(){q((function(e){var t=e+1;return console.log(t),t}))}),1e3);return function(){clearInterval(e)}}q(0)}),[k,D]),Object(p.useEffect)((function(){U%V===0&&_((function(e){return e<k.length-1?e+1:0}))}),[U]);var X={Gomo:"directions",Starhub:"star",Singtel:"music_note",M1:"brightness_7",MyRepublic:"domain",Simba:"title","singtel-changeNumber":"music_note"};return Object(j.jsx)(p.Fragment,{children:Object(j.jsx)(l.a,{children:Object(j.jsx)(h.a,Object(a.a)(Object(a.a)({hideDl:!0,hideAuto:!0},w),{},{pageSize:c,isLoading:n,dataArr:i,renderItem:function(e){return Object(j.jsx)(O,{variant:"outlined","aria-haspopup":"true",onClick:function(){return g&&g(e)},children:Object(j.jsxs)(l.a,{color:"9"===e.num[0]?"red":"blue",children:[x.split("").map((function(t,n){return"x"===t?"X":e.num[n]})),y&&Object(j.jsx)(u.a,{style:{fontSize:"14px"},children:X[e.sourceId]}),!t&&Object(j.jsx)(d.a,{onClick:function(t){t.stopPropagation(),navigator.clipboard.writeText(e.num)},children:Object(j.jsx)(u.a,{children:"content_copy"})})]})})}}))})})}},329:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n=null;return function(){for(var a=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];clearTimeout(n),n=setTimeout((function(){e.apply(a,o)}),t)}}},330:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SensorTabIndex=t.SensorClassName=t.SizeSensorId=void 0;t.SizeSensorId="size-sensor-id";t.SensorClassName="size-sensor-object";t.SensorTabIndex="-1"},331:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var a,r,o;if(Array.isArray(t)){if((a=t.length)!=n.length)return!1;for(r=a;0!==r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((a=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=a;0!==r--;)if(!Object.prototype.hasOwnProperty.call(n,o[r]))return!1;for(r=a;0!==r--;){var i=o[r];if(!e(t[i],n[i]))return!1}return!0}return t!==t&&n!==n}},334:function(e,t,n){"use strict";var a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},a(e,t)};function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};Object.create;Object.create;var i=n(133),c=n(1),s=n.n(c),l=n(339);function u(e,t){var n={};return t.forEach((function(t){n[t]=e[t]})),n}function d(e){return"function"===typeof e}var p=n(331),b=n.n(p),f=function(e){function t(t){var n=e.call(this,t)||this;return n.echarts=i,n}return r(t,e),t}(function(e){function t(t){var n=e.call(this,t)||this;return n.echarts=t.echarts,n.ele=null,n.isInitialResize=!0,n}return r(t,e),t.prototype.componentDidMount=function(){this.renderNewEcharts()},t.prototype.componentDidUpdate=function(e){var t=this.props.shouldSetOption;if(!d(t)||t(e,this.props)){if(!b()(e.theme,this.props.theme)||!b()(e.opts,this.props.opts)||!b()(e.onEvents,this.props.onEvents))return this.dispose(),void this.renderNewEcharts();var n=["option","notMerge","lazyUpdate","showLoading","loadingOption"];b()(u(this.props,n),u(e,n))||this.updateEChartsOption(),b()(e.style,this.props.style)&&b()(e.className,this.props.className)||this.resize()}},t.prototype.componentWillUnmount=function(){this.dispose()},t.prototype.getEchartsInstance=function(){return this.echarts.getInstanceByDom(this.ele)||this.echarts.init(this.ele,this.props.theme,this.props.opts)},t.prototype.dispose=function(){if(this.ele){try{Object(l.clear)(this.ele)}catch(e){console.warn(e)}this.echarts.dispose(this.ele)}},t.prototype.renderNewEcharts=function(){var e=this,t=this.props,n=t.onEvents,a=t.onChartReady,r=this.updateEChartsOption();this.bindEvents(r,n||{}),d(a)&&a(r),this.ele&&Object(l.bind)(this.ele,(function(){e.resize()}))},t.prototype.bindEvents=function(e,t){function n(t,n){"string"===typeof t&&d(n)&&e.on(t,(function(t){n(t,e)}))}for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n(a,t[a])},t.prototype.updateEChartsOption=function(){var e=this.props,t=e.option,n=e.notMerge,a=void 0!==n&&n,r=e.lazyUpdate,o=void 0!==r&&r,i=e.showLoading,c=e.loadingOption,s=void 0===c?null:c,l=this.getEchartsInstance();return l.setOption(t,a,o),i?l.showLoading(s):l.hideLoading(),l},t.prototype.resize=function(){var e=this.getEchartsInstance();if(!this.isInitialResize)try{e.resize()}catch(t){console.warn(t)}this.isInitialResize=!1},t.prototype.render=function(){var e=this,t=this.props,n=t.style,a=t.className,r=void 0===a?"":a,i=o({height:300},n);return s.a.createElement("div",{ref:function(t){e.ele=t},style:i,className:"echarts-for-react "+r})},t}(c.PureComponent));t.a=f},339:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ver=t.clear=t.bind=void 0;var a=n(340);t.bind=function(e,t){var n=(0,a.getSensor)(e);return n.bind(t),function(){n.unbind(t)}};t.clear=function(e){var t=(0,a.getSensor)(e);(0,a.removeSensor)(t)};t.ver="1.0.1"},340:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeSensor=t.getSensor=void 0;var a,r=(a=n(341))&&a.__esModule?a:{default:a},o=n(342),i=n(330);var c={};t.getSensor=function(e){var t=e.getAttribute(i.SizeSensorId);if(t&&c[t])return c[t];var n=(0,r.default)();e.setAttribute(i.SizeSensorId,n);var a=(0,o.createSensor)(e);return c[n]=a,a};t.removeSensor=function(e){var t=e.element.getAttribute(i.SizeSensorId);e.element.removeAttribute(i.SizeSensorId),e.destroy(),t&&c[t]&&delete c[t]}},341:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=1;t.default=function(){return"".concat(a++)}},342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var a=n(343),r=n(344),o="undefined"!==typeof ResizeObserver?r.createSensor:a.createSensor;t.createSensor=o},343:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var a,r=(a=n(329))&&a.__esModule?a:{default:a},o=n(330);t.createSensor=function(e){var t=void 0,n=[],a=(0,r.default)((function(){n.forEach((function(t){t(e)}))})),i=function(){t&&t.parentNode&&(t.contentDocument&&t.contentDocument.defaultView.removeEventListener("resize",a),t.parentNode.removeChild(t),t=void 0,n=[])};return{element:e,bind:function(r){t||(t=function(){"static"===getComputedStyle(e).position&&(e.style.position="relative");var t=document.createElement("object");return t.onload=function(){t.contentDocument.defaultView.addEventListener("resize",a),a()},t.style.display="block",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.height="100%",t.style.width="100%",t.style.overflow="hidden",t.style.pointerEvents="none",t.style.zIndex="-1",t.style.opacity="0",t.setAttribute("class",o.SensorClassName),t.setAttribute("tabindex",o.SensorTabIndex),t.type="text/html",e.appendChild(t),t.data="about:blank",t}()),-1===n.indexOf(r)&&n.push(r)},destroy:i,unbind:function(e){var a=n.indexOf(e);-1!==a&&n.splice(a,1),0===n.length&&t&&i()}}}},344:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var a,r=(a=n(329))&&a.__esModule?a:{default:a};t.createSensor=function(e){var t=void 0,n=[],a=(0,r.default)((function(){n.forEach((function(t){t(e)}))})),o=function(){t.disconnect(),n=[],t=void 0};return{element:e,bind:function(r){t||(t=function(){var t=new ResizeObserver(a);return t.observe(e),a(),t}()),-1===n.indexOf(r)&&n.push(r)},destroy:o,unbind:function(e){var a=n.indexOf(e);-1!==a&&n.splice(a,1),0===n.length&&t&&o()}}}},345:function(e,t,n){"use strict";n(15);var a=n(14),r=n(4),o=n(177),i=n(25),c=n(112),s=n(264),l=n(1),u=(n(43),n(307)),d=n(53),p=n(40),b=n(2),f=Object(r.a)(o.a)((function(){return{fontSize:"26px"}}));t.a=function(e){var t=e.content2,n=e.renderItem,r=(e.showPrice,e.hideCopy,e.isLoading),h=e.dataArr,j=e.pageSize,m=void 0===j?15:j,O=(e.unmask,e.unmaskValue,e.handleClick,e.mask,e.displaySource,e.hideAuto),g=e.hideDl,v=(Object(u.a)("(min-width:600px)"),Object(i.a)().palette,Object(l.useState)(h)),x=Object(a.a)(v,2),y=(x[0],x[1],Object(l.useState)([])),w=Object(a.a)(y,2),S=w[0],I=w[1],P=Object(l.useState)([]),C=Object(a.a)(P,2),k=(C[0],C[1],Object(l.useState)(0)),z=Object(a.a)(k,2),R=(z[0],z[1],Object(l.useState)(0)),L=Object(a.a)(R,2),M=L[0],N=L[1],E=Object(l.useState)(!1),A=Object(a.a)(E,2),_=A[0],T=A[1],B=Object(l.useState)(5),D=Object(a.a)(B,2),F=D[0],W=(D[1],Object(l.useState)(0)),V=Object(a.a)(W,2),G=V[0],H=V[1],U=Object(l.useState)(88),q=Object(a.a)(U,2),J=q[0],K=(q[1],function(e){N(M+e)}),Q=Object(d.b)();Object(l.useEffect)((function(){}),[S,J]);var X=function(e,t){Q(Object(p.l)({content:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(c.a,{children:e.map((function(e,t){return e.map((function(e){return Object(b.jsxs)(c.a,{children:[" ",e.num]})}))}))})}),actionPanel:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(o.a,{onClick:function(){!function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}("mobile413.txt",function(e){return console.log(e),e.map((function(e){return e.num.slice(0,4)+" "+e.num.slice(4)+" Price"})).join("\r\n")}(h))},color:"primary",autoFocus:!0,children:"Download"})})}))};Object(l.useEffect)((function(){I(function(e,t){for(var n=[],a=0,r=e.length;a<r;)n.push(e.slice(a,a+=t));return n}(h,m)),N(0)}),[h,m]),Object(l.useEffect)((function(){if(_){var e=setInterval((function(){H((function(e){var t=e+1;return console.log(t),t}))}),1e3);return function(){clearInterval(e)}}H(0)}),[S,_]),Object(l.useEffect)((function(){G%F===0&&N((function(e){return e<S.length-1?e+1:0}))}),[G]);return Object(b.jsxs)(l.Fragment,{children:[Object(b.jsx)(c.a,{display:"flex",width:"100%",flexDirection:"column",alignItems:"center",alignContent:"center",children:t}),Object(b.jsx)(c.a,{gap:"30px",display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:S.map((function(e,t){return t===M&&e.map((function(e){return n&&n(e)}))}))}),Object(b.jsx)(c.a,{display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:r?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(s.a,{})}):Object(b.jsx)(c.a,{height:"40px"})}),Object(b.jsxs)(c.a,{display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:[Object(b.jsx)(f,{variant:"outlined","aria-haspopup":"true",onClick:function(){return K(-1)},disabled:0===M,children:"Prev"}),"Page ".concat(S.length?M+1:0," of ").concat(S.length),Object(b.jsx)(f,{variant:"outlined","aria-haspopup":"true",onClick:function(){return K(1)},disabled:M>=S.length-1,children:"Next"}),!O&&Object(b.jsxs)(f,{variant:"outlined","aria-haspopup":"true",onClick:function(){return T(!_)},children:[" ",_?"".concat(G%F," sec"):"Auto"]}),!g&&Object(b.jsx)(f,{variant:"outlined","aria-haspopup":"true",onClick:function(){X(S)},children:" Download"})]}),Object(b.jsx)(c.a,{display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:Object(b.jsxs)("h5",{children:[" ",h.length," result found"]})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})}},363:function(e,t,n){"use strict";var a=n(6),r=n(5),o=n(3),i=n(1),c=n(7),s=n(70),l=n(11),u=n(4),d=n(48),p=n(52);function b(e){return Object(d.a)("MuiToolbar",e)}Object(p.a)("MuiToolbar",["root","gutters","regular","dense"]);var f=n(2),h=["className","component","disableGutters","variant"],j=Object(u.a)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableGutters&&t.gutters,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return Object(o.a)({position:"relative",display:"flex",alignItems:"center"},!n.disableGutters&&Object(a.a)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===n.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),m=i.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiToolbar"}),a=n.className,i=n.component,u=void 0===i?"div":i,d=n.disableGutters,p=void 0!==d&&d,m=n.variant,O=void 0===m?"regular":m,g=Object(r.a)(n,h),v=Object(o.a)({},n,{component:u,disableGutters:p,variant:O}),x=function(e){var t=e.classes,n={root:["root",!e.disableGutters&&"gutters",e.variant]};return Object(s.a)(n,b,t)}(v);return Object(f.jsx)(j,Object(o.a)({as:u,className:Object(c.a)(x.root,a),ref:t,ownerState:v},g))}));t.a=m},364:function(e,t,n){"use strict";var a=n(6),r=n(5),o=n(3),i=n(1),c=n(7),s=n(70),l=n(318),u=n(10),d=n(11),p=n(48),b=n(52);function f(e){return Object(p.a)("MuiFab",e)}var h=Object(b.a)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),j=n(4),m=n(2),O=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],g=Object(j.a)(l.a,{name:"MuiFab",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["size".concat(Object(u.a)(n.size))],"inherit"===n.color&&t.colorInherit,t[Object(u.a)(n.size)],t[n.color]]}})((function(e){var t,n,r,i=e.theme,c=e.ownerState;return Object(o.a)({},i.typography.button,(t={minHeight:36,transition:i.transitions.create(["background-color","box-shadow","border-color"],{duration:i.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(i.vars||i).zIndex.fab,boxShadow:(i.vars||i).shadows[6],"&:active":{boxShadow:(i.vars||i).shadows[12]},color:i.vars?i.vars.palette.text.primary:null==(n=(r=i.palette).getContrastText)?void 0:n.call(r,i.palette.grey[300]),backgroundColor:(i.vars||i).palette.grey[300],"&:hover":{backgroundColor:(i.vars||i).palette.grey.A100,"@media (hover: none)":{backgroundColor:(i.vars||i).palette.grey[300]},textDecoration:"none"}},Object(a.a)(t,"&.".concat(h.focusVisible),{boxShadow:(i.vars||i).shadows[6]}),Object(a.a)(t,"&.".concat(h.disabled),{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground}),t),"small"===c.size&&{width:40,height:40},"medium"===c.size&&{width:48,height:48},"extended"===c.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===c.variant&&"small"===c.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===c.variant&&"medium"===c.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===c.color&&{color:"inherit"})}),(function(e){var t=e.theme,n=e.ownerState;return Object(o.a)({},"inherit"!==n.color&&"default"!==n.color&&null!=(t.vars||t).palette[n.color]&&{color:(t.vars||t).palette[n.color].contrastText,backgroundColor:(t.vars||t).palette[n.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[n.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[n.color].main}}})})),v=i.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiFab"}),a=n.children,i=n.className,l=n.color,p=void 0===l?"default":l,b=n.component,h=void 0===b?"button":b,j=n.disabled,v=void 0!==j&&j,x=n.disableFocusRipple,y=void 0!==x&&x,w=n.focusVisibleClassName,S=n.size,I=void 0===S?"large":S,P=n.variant,C=void 0===P?"circular":P,k=Object(r.a)(n,O),z=Object(o.a)({},n,{color:p,component:h,disabled:v,disableFocusRipple:y,size:I,variant:C}),R=function(e){var t=e.color,n=e.variant,a=e.classes,r=e.size,o={root:["root",n,"size".concat(Object(u.a)(r)),"inherit"===t?"colorInherit":t]};return Object(s.a)(o,f,a)}(z);return Object(m.jsx)(g,Object(o.a)({className:Object(c.a)(R.root,i),component:h,disabled:v,focusRipple:!y,focusVisibleClassName:Object(c.a)(R.focusVisible,w),ownerState:z,ref:t},k,{children:a}))}));t.a=v},373:function(e,t,n){"use strict";var a,r,o,i,c,s,l,u,d=n(6),p=n(5),b=n(3),f=n(1),h=n(7),j=n(70),m=n(142),O=n(4),g=n(11),v=n(28),x=n(485),y=n(251),w=n(713),S=n(363),I=n(31),P=n(2),C=Object(I.a)(Object(P.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),k=Object(I.a)(Object(P.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),z=n(25),R=n(322),L=Object(I.a)(Object(P.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),M=Object(I.a)(Object(P.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),N=["backIconButtonProps","count","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton"],E=f.forwardRef((function(e,t){var n=e.backIconButtonProps,d=e.count,f=e.getItemAriaLabel,h=e.nextIconButtonProps,j=e.onPageChange,m=e.page,O=e.rowsPerPage,g=e.showFirstButton,v=e.showLastButton,x=Object(p.a)(e,N),y=Object(z.a)();return Object(P.jsxs)("div",Object(b.a)({ref:t},x,{children:[g&&Object(P.jsx)(R.a,{onClick:function(e){j(e,0)},disabled:0===m,"aria-label":f("first",m),title:f("first",m),children:"rtl"===y.direction?a||(a=Object(P.jsx)(L,{})):r||(r=Object(P.jsx)(M,{}))}),Object(P.jsx)(R.a,Object(b.a)({onClick:function(e){j(e,m-1)},disabled:0===m,color:"inherit","aria-label":f("previous",m),title:f("previous",m)},n,{children:"rtl"===y.direction?o||(o=Object(P.jsx)(k,{})):i||(i=Object(P.jsx)(C,{}))})),Object(P.jsx)(R.a,Object(b.a)({onClick:function(e){j(e,m+1)},disabled:-1!==d&&m>=Math.ceil(d/O)-1,color:"inherit","aria-label":f("next",m),title:f("next",m)},h,{children:"rtl"===y.direction?c||(c=Object(P.jsx)(C,{})):s||(s=Object(P.jsx)(k,{}))})),v&&Object(P.jsx)(R.a,{onClick:function(e){j(e,Math.max(0,Math.ceil(d/O)-1))},disabled:m>=Math.ceil(d/O)-1,"aria-label":f("last",m),title:f("last",m),children:"rtl"===y.direction?l||(l=Object(P.jsx)(M,{})):u||(u=Object(P.jsx)(L,{}))})]}))})),A=n(327),_=n(48),T=n(52);function B(e){return Object(_.a)("MuiTablePagination",e)}var D,F=Object(T.a)("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]),W=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton"],V=Object(O.a)(w.a,{name:"MuiTablePagination",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t=e.theme;return{overflow:"auto",color:(t.vars||t).palette.text.primary,fontSize:t.typography.pxToRem(14),"&:last-child":{padding:0}}})),G=Object(O.a)(S.a,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:function(e,t){return Object(b.a)(Object(d.a)({},"& .".concat(F.actions),t.actions),t.toolbar)}})((function(e){var t,n=e.theme;return t={minHeight:52,paddingRight:2},Object(d.a)(t,"".concat(n.breakpoints.up("xs")," and (orientation: landscape)"),{minHeight:52}),Object(d.a)(t,n.breakpoints.up("sm"),{minHeight:52,paddingRight:2}),Object(d.a)(t,"& .".concat(F.actions),{flexShrink:0,marginLeft:20}),t})),H=Object(O.a)("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:function(e,t){return t.spacer}})({flex:"1 1 100%"}),U=Object(O.a)("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:function(e,t){return t.selectLabel}})((function(e){var t=e.theme;return Object(b.a)({},t.typography.body2,{flexShrink:0})})),q=Object(O.a)(y.a,{name:"MuiTablePagination",slot:"Select",overridesResolver:function(e,t){var n;return Object(b.a)((n={},Object(d.a)(n,"& .".concat(F.selectIcon),t.selectIcon),Object(d.a)(n,"& .".concat(F.select),t.select),n),t.input,t.selectRoot)}})(Object(d.a)({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8},"& .".concat(F.select),{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"})),J=Object(O.a)(x.a,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:function(e,t){return t.menuItem}})({}),K=Object(O.a)("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:function(e,t){return t.displayedRows}})((function(e){var t=e.theme;return Object(b.a)({},t.typography.body2,{flexShrink:0})}));function Q(e){var t=e.from,n=e.to,a=e.count;return"".concat(t,"\u2013").concat(n," of ").concat(-1!==a?a:"more than ".concat(n))}function X(e){return"Go to ".concat(e," page")}var Y=f.forwardRef((function(e,t){var n,a=Object(g.a)({props:e,name:"MuiTablePagination"}),r=a.ActionsComponent,o=void 0===r?E:r,i=a.backIconButtonProps,c=a.className,s=a.colSpan,l=a.component,u=void 0===l?w.a:l,d=a.count,O=a.getItemAriaLabel,x=void 0===O?X:O,y=a.labelDisplayedRows,S=void 0===y?Q:y,I=a.labelRowsPerPage,C=void 0===I?"Rows per page:":I,k=a.nextIconButtonProps,z=a.onPageChange,R=a.onRowsPerPageChange,L=a.page,M=a.rowsPerPage,N=a.rowsPerPageOptions,_=void 0===N?[10,25,50,100]:N,T=a.SelectProps,F=void 0===T?{}:T,Y=a.showFirstButton,Z=void 0!==Y&&Y,$=a.showLastButton,ee=void 0!==$&&$,te=Object(p.a)(a,W),ne=a,ae=function(e){var t=e.classes;return Object(j.a)({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},B,t)}(ne),re=F.native?"option":J;u!==w.a&&"td"!==u||(n=s||1e3);var oe=Object(A.a)(F.id),ie=Object(A.a)(F.labelId);return Object(P.jsx)(V,Object(b.a)({colSpan:n,ref:t,as:u,ownerState:ne,className:Object(h.a)(ae.root,c)},te,{children:Object(P.jsxs)(G,{className:ae.toolbar,children:[Object(P.jsx)(H,{className:ae.spacer}),_.length>1&&Object(P.jsx)(U,{className:ae.selectLabel,id:ie,children:C}),_.length>1&&Object(P.jsx)(q,Object(b.a)({variant:"standard",input:D||(D=Object(P.jsx)(v.c,{})),value:M,onChange:R,id:oe,labelId:ie},F,{classes:Object(b.a)({},F.classes,{root:Object(h.a)(ae.input,ae.selectRoot,(F.classes||{}).root),select:Object(h.a)(ae.select,(F.classes||{}).select),icon:Object(h.a)(ae.selectIcon,(F.classes||{}).icon)}),children:_.map((function(e){return Object(f.createElement)(re,Object(b.a)({},!Object(m.a)(re)&&{ownerState:ne},{className:ae.menuItem,key:e.label?e.label:e,value:e.value?e.value:e}),e.label?e.label:e)}))})),Object(P.jsx)(K,{className:ae.displayedRows,children:S({from:0===d?0:L*M+1,to:-1===d?(L+1)*M:-1===M?d:Math.min(d,(L+1)*M),count:-1===d?-1:d,page:L})}),Object(P.jsx)(o,{className:ae.actions,backIconButtonProps:i,count:d,nextIconButtonProps:k,onPageChange:z,page:L,rowsPerPage:M,showFirstButton:Z,showLastButton:ee,getItemAriaLabel:x})]})}))}));t.a=Y},688:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n(6),o=n(4),i=n(177),c=n(25),s=n(112),l=n(1),u=(n(82),n(42)),d=n(2),p=(n(15),n(8),n(66),n(334),n(364)),b=n(319),f=n(265),h=(n(320),n(484),n(250),n(178),n(322),n(629),Object(o.a)(u.e)((function(e){var t=e.theme;return Object(r.a)({marginLeft:24,fontWeight:"500"},t.breakpoints.down("sm"),{marginLeft:4})})),Object(o.a)(p.a)((function(){return{marginLeft:0,boxShadow:"none",background:"#08ad6c !important",backgroundColor:"rgba(9, 182, 109, 1) !important"}})),Object(o.a)(p.a)((function(e){var t=e.theme;return{marginLeft:0,boxShadow:"none",color:"white !important",background:"".concat(t.palette.error.main," !important")}})),Object(o.a)(b.a)((function(){return{width:"32px !important",height:"32px !important"}})),n(708),Object(o.a)(f.a)((function(e){var t=e.theme;return Object(r.a)({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",padding:"24px !important",background:t.palette.background.paper},t.breakpoints.down("sm"),{padding:"16px !important"})})),Object(o.a)(s.a)((function(e){var t=e.theme;return{display:"flex",flexWrap:"wrap",alignItems:"center","& small":{color:t.palette.text.secondary},"& .icon":{opacity:.6,fontSize:"44px",color:t.palette.primary.main}}})),Object(o.a)("h6")((function(e){return{margin:0,marginTop:"4px",fontSize:"14px",fontWeight:"500",color:e.theme.palette.primary.main}})),n(233),Object(o.a)("div")((function(){return{display:"flex",flexWrap:"wrap",alignItems:"center"}})),Object(o.a)(p.a)((function(){return{width:"44px !important",height:"44px !important",boxShadow:"none !important"}})),Object(o.a)("h3")((function(e){return{margin:0,color:e.textcolor,fontWeight:"500",marginLeft:"12px"}})),Object(o.a)("h1")((function(e){return{margin:0,flexGrow:1,color:e.theme.palette.text.secondary}})),Object(o.a)("span")((function(e){return{fontSize:"13px",color:e.textcolor,marginLeft:"4px"}})),Object(o.a)("div")((function(){return{width:16,height:16,color:"#fff",display:"flex",overflow:"hidden",borderRadius:"300px ",justifyContent:"center","& .icon":{fontSize:"14px"}}})),n(710)),j=(n(251),n(485),n(711),n(712),n(713),n(714),Object(o.a)(s.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}})),Object(o.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}})),Object(o.a)(h.a)((function(){return{minWidth:400,whiteSpace:"pre","& small":{width:50,height:15,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-of-type":{paddingLeft:"16px !important"}}})),Object(o.a)("small")((function(e){return{width:50,height:15,color:"#fff",padding:"2px 8px",borderRadius:"4px",overflow:"hidden",background:e.bgcolor,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"}})),n(127)),m=(Object(o.a)(f.a)((function(e){var t=e.theme;return Object(r.a)({marginBottom:"24px",padding:"24px !important"},t.breakpoints.down("sm"),{paddingLeft:"16px !important"})})),Object(o.a)(f.a)((function(e){var t=e.theme;return Object(r.a)({boxShadow:"none",textAlign:"center",position:"relative",padding:"24px !important",background:"rgb(".concat(Object(j.a)(t.palette.primary.main),", 0.15) !important")},t.breakpoints.down("sm"),{padding:"16px !important"})})),Object(o.a)("p")((function(e){return{margin:0,paddingTop:"24px",paddingBottom:"24px",color:e.theme.palette.text.secondary}})),n(373),Object(o.a)(h.a)((function(){return{whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize",fontSize:"24px"}}}}})),n(328)),O=n(43),g=n(307),v=n(37),x=(n(54),n(53)),y=(Object(o.a)(i.a)((function(){return{fontSize:"26px"}})),Object(o.a)("div")((function(e){var t,n=e.theme;return t={margin:"30px",maxWidth:"1200px"},Object(r.a)(t,"margin","auto auto"),Object(r.a)(t,n.breakpoints.down("sm"),{margin:"16px"}),t}))),w=(Object(o.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",marginRight:".5rem",textTransform:"capitalize"}})),Object(o.a)("span")((function(e){return{fontSize:"0.875rem",color:e.theme.palette.text.secondary}})),Object(o.a)("h4")((function(e){return{fontSize:"1rem",fontWeight:"500",marginBottom:"16px",textTransform:"capitalize",color:e.theme.palette.text.secondary}})),Object(o.a)("img")((function(){return{width:"140px"}})));t.default=function(){Object(g.a)("(min-width:600px)"),Object(c.a)().palette;var e=Object(l.useState)(""),t=Object(a.a)(e,2),n=t[0],r=(t[1],Object(O.a)().updateSettings),o=Object(v.d)(),i=Object(a.a)(o,2),u=(i[0],i[1],new URLSearchParams(window.location.search)),p=(u.get("endpoint"),u.get("blur")),b=u.get("auto"),f=u.get("mask"),h=Object(x.c)((function(e){var t;return(null===e||void 0===e||null===(t=e.application.data)||void 0===t?void 0:t.live)||[]}));Object(l.useEffect)((function(){r({layout1Settings:{topbar:{show:!p},leftSidebar:{mode:"close",show:!p}}})}),[]);var j=Object(l.useState)([]),S=Object(a.a)(j,2),I=S[0],P=(S[1],Object(l.useState)([])),C=Object(a.a)(P,2),k=(C[0],C[1]),z=Object(l.useState)([]),R=Object(a.a)(z,2),L=(R[0],R[1],u.get("page")),M=Object(l.useState)(0),N=Object(a.a)(M,2),E=(N[0],N[1],Object(l.useState)(0)),A=Object(a.a)(E,2);A[0],A[1];return Object(l.useEffect)((function(){if(n){var e=I.filter((function(e){return e.original.includes(n)}));k(e)}else k(I)}),[I,n]),Object(d.jsx)(l.Fragment,{children:Object(d.jsxs)(y,{className:"analytics",children:[Object(d.jsx)(s.a,{display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center",children:Object(d.jsxs)(s.a,{children:[Object(d.jsx)(w,{src:"/assets/images/FullLogo_NoBuffer.png"}),Object(d.jsx)(w,{src:"/assets/images/qr.png"})]})}),Object(d.jsx)(s.a,{display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center",children:""}),Object(d.jsx)(s.a,{display:"flex",flexDirection:"row",children:Object(d.jsx)(s.a,{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center"})}),Object(d.jsx)(s.a,{width:"100%",display:"flex",flexDirection:"column",children:Object(d.jsxs)(s.a,{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center",children:[Object(d.jsx)("h1",{children:"Singapore First Number Finding Service. (Scan QR to contact us)"}),Object(d.jsx)("h1",{style:{color:"#ff0000"},children:"Exclusive Mobile Number For Sale."}),Object(d.jsx)("h1",{style:{color:"#ff0000"},children:"Due to livestream requirement, we hide the first number. 9 Fire and 8 Water."})]})}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(s.a,{width:"100%",display:"flex",children:Object(d.jsx)(s.a,{display:"flex",width:"100%",flexDirection:"column",alignItems:"center",alignContent:"center",children:Object(d.jsx)(m.a,{dataArr:h,pageSize:Number(L)||12,unmask:p,unmaskValue:n,handleClick:function(e){var t;return null===(t=window)||void 0===t?void 0:t.location.assign("https://api.whatsapp.com/send?phone=6587413159&text=I%20am%20interested%20in%20".concat(e.num))},auto:Number(b),mask:f||"yyyyyyyy"})})}),Object(d.jsx)(s.a,{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center",children:Object(d.jsx)("h1",{children:"We can do CarouPay, Cash On Delivery for Buyer Protection."})})]})})}}}]);
//# sourceMappingURL=19.ae2cf69a.chunk.js.map