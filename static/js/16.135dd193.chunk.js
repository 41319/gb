(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[16],{328:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n=null;return function(){for(var a=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];clearTimeout(n),n=setTimeout((function(){e.apply(a,o)}),t)}}},329:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SensorTabIndex=t.SensorClassName=t.SizeSensorId=void 0;t.SizeSensorId="size-sensor-id";t.SensorClassName="size-sensor-object";t.SensorTabIndex="-1"},330:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var a,r,o;if(Array.isArray(t)){if((a=t.length)!=n.length)return!1;for(r=a;0!==r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((a=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=a;0!==r--;)if(!Object.prototype.hasOwnProperty.call(n,o[r]))return!1;for(r=a;0!==r--;){var i=o[r];if(!e(t[i],n[i]))return!1}return!0}return t!==t&&n!==n}},332:function(e,t,n){"use strict";n(15);var a=n(14),r=n(4),o=n(177),i=n(25),c=n(124),s=n(264),l=n(178),u=n(322),d=n(1),p=(n(43),n(307)),b=n(52),f=n(40),h=n(2),j=Object(r.a)(o.a)((function(){return{fontSize:"26px"}}));t.a=function(e){var t=e.isLoading,n=e.dataArr,r=e.pageSize,o=(e.unmask,e.unmaskValue,e.handleClick),m=e.mask,g=void 0===m?"yyyyyyyy":m,v=e.displaySource,O=e.hideAuto,x=e.hideDl,y=(Object(p.a)("(min-width:600px)"),Object(i.a)().palette,Object(d.useState)(n)),w=Object(a.a)(y,2),S=(w[0],w[1],Object(d.useState)([])),P=Object(a.a)(S,2),I=P[0],k=P[1],z=Object(d.useState)([]),C=Object(a.a)(z,2),R=(C[0],C[1],Object(d.useState)(0)),L=Object(a.a)(R,2),M=(L[0],L[1],Object(d.useState)(0)),N=Object(a.a)(M,2),_=N[0],T=N[1],B=Object(d.useState)(!1),E=Object(a.a)(B,2),A=E[0],F=E[1],W=Object(d.useState)(5),D=Object(a.a)(W,2),V=D[0],G=(D[1],Object(d.useState)(0)),H=Object(a.a)(G,2),U=H[0],q=H[1],J=function(e){T(_+e)},K=Object(b.b)();Object(d.useEffect)((function(){k(function(e,t){for(var n=[],a=0,r=e.length;a<r;)n.push(e.slice(a,a+=t));return n}(n,r)),T(0)}),[n,r]),Object(d.useEffect)((function(){if(A){var e=setInterval((function(){q((function(e){var t=e+1;return console.log(t),t}))}),1e3);return function(){clearInterval(e)}}q(0)}),[I,A]),Object(d.useEffect)((function(){U%V===0&&T((function(e){return e<I.length-1?e+1:0}))}),[U]);var X={Gomo:"directions",Starhub:"star",Singtel:"music_note",M1:"brightness_7",MyRepublic:"domain",Simba:"title","singtel-changeNumber":"music_note"};return Object(h.jsxs)(d.Fragment,{children:[Object(h.jsxs)(c.a,{gap:"30px",display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:[t&&Object(h.jsx)(s.a,{}),!t&&I.map((function(e,t){return t===_&&e.map((function(e){return Object(h.jsx)(j,{variant:"outlined","aria-haspopup":"true",onClick:function(){return o&&o(e)},children:Object(h.jsxs)(c.a,{color:"9"===e.num[0]?"red":"blue",children:[g.split("").map((function(t,n){return"x"===t?"X":e.num[n]})),v&&Object(h.jsx)(l.a,{style:{fontSize:"14px"},children:X[e.sourceId]}),Object(h.jsx)(u.a,{onClick:function(t){t.stopPropagation(),navigator.clipboard.writeText(e.num)},children:Object(h.jsx)(l.a,{children:"content_copy"})})]})})}))}))]}),Object(h.jsx)("br",{}),Object(h.jsxs)(c.a,{display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",justifyContent:"center",children:[Object(h.jsx)(j,{variant:"outlined","aria-haspopup":"true",onClick:function(){return J(-1)},disabled:0===_,children:"Prev"}),"Page ".concat(I.length?_+1:0," of ").concat(I.length),Object(h.jsx)(j,{variant:"outlined","aria-haspopup":"true",onClick:function(){return J(1)},disabled:_>=I.length-1,children:"Next"}),!O&&Object(h.jsxs)(j,{variant:"outlined","aria-haspopup":"true",onClick:function(){return F(!A)},children:[" ",A?"".concat(U%V," sec"):"Auto"]}),!x&&Object(h.jsx)(j,{variant:"outlined","aria-haspopup":"true",onClick:function(){K(Object(f.l)({content:Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(c.a,{children:I.map((function(e,t){return e.map((function(e){return Object(h.jsxs)(c.a,{children:[" ",e.num]})}))}))})})}))},children:" Download"})]})]})}},336:function(e,t,n){"use strict";var a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},a(e,t)};function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};Object.create;Object.create;var i=n(132),c=n(1),s=n.n(c),l=n(339);function u(e,t){var n={};return t.forEach((function(t){n[t]=e[t]})),n}function d(e){return"function"===typeof e}var p=n(330),b=n.n(p),f=function(e){function t(t){var n=e.call(this,t)||this;return n.echarts=i,n}return r(t,e),t}(function(e){function t(t){var n=e.call(this,t)||this;return n.echarts=t.echarts,n.ele=null,n.isInitialResize=!0,n}return r(t,e),t.prototype.componentDidMount=function(){this.renderNewEcharts()},t.prototype.componentDidUpdate=function(e){var t=this.props.shouldSetOption;if(!d(t)||t(e,this.props)){if(!b()(e.theme,this.props.theme)||!b()(e.opts,this.props.opts)||!b()(e.onEvents,this.props.onEvents))return this.dispose(),void this.renderNewEcharts();var n=["option","notMerge","lazyUpdate","showLoading","loadingOption"];b()(u(this.props,n),u(e,n))||this.updateEChartsOption(),b()(e.style,this.props.style)&&b()(e.className,this.props.className)||this.resize()}},t.prototype.componentWillUnmount=function(){this.dispose()},t.prototype.getEchartsInstance=function(){return this.echarts.getInstanceByDom(this.ele)||this.echarts.init(this.ele,this.props.theme,this.props.opts)},t.prototype.dispose=function(){if(this.ele){try{Object(l.clear)(this.ele)}catch(e){console.warn(e)}this.echarts.dispose(this.ele)}},t.prototype.renderNewEcharts=function(){var e=this,t=this.props,n=t.onEvents,a=t.onChartReady,r=this.updateEChartsOption();this.bindEvents(r,n||{}),d(a)&&a(r),this.ele&&Object(l.bind)(this.ele,(function(){e.resize()}))},t.prototype.bindEvents=function(e,t){function n(t,n){"string"===typeof t&&d(n)&&e.on(t,(function(t){n(t,e)}))}for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n(a,t[a])},t.prototype.updateEChartsOption=function(){var e=this.props,t=e.option,n=e.notMerge,a=void 0!==n&&n,r=e.lazyUpdate,o=void 0!==r&&r,i=e.showLoading,c=e.loadingOption,s=void 0===c?null:c,l=this.getEchartsInstance();return l.setOption(t,a,o),i?l.showLoading(s):l.hideLoading(),l},t.prototype.resize=function(){var e=this.getEchartsInstance();if(!this.isInitialResize)try{e.resize()}catch(t){console.warn(t)}this.isInitialResize=!1},t.prototype.render=function(){var e=this,t=this.props,n=t.style,a=t.className,r=void 0===a?"":a,i=o({height:300},n);return s.a.createElement("div",{ref:function(t){e.ele=t},style:i,className:"echarts-for-react "+r})},t}(c.PureComponent));t.a=f},339:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ver=t.clear=t.bind=void 0;var a=n(340);t.bind=function(e,t){var n=(0,a.getSensor)(e);return n.bind(t),function(){n.unbind(t)}};t.clear=function(e){var t=(0,a.getSensor)(e);(0,a.removeSensor)(t)};t.ver="1.0.1"},340:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeSensor=t.getSensor=void 0;var a,r=(a=n(341))&&a.__esModule?a:{default:a},o=n(342),i=n(329);var c={};t.getSensor=function(e){var t=e.getAttribute(i.SizeSensorId);if(t&&c[t])return c[t];var n=(0,r.default)();e.setAttribute(i.SizeSensorId,n);var a=(0,o.createSensor)(e);return c[n]=a,a};t.removeSensor=function(e){var t=e.element.getAttribute(i.SizeSensorId);e.element.removeAttribute(i.SizeSensorId),e.destroy(),t&&c[t]&&delete c[t]}},341:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=1;t.default=function(){return"".concat(a++)}},342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var a=n(343),r=n(344),o="undefined"!==typeof ResizeObserver?r.createSensor:a.createSensor;t.createSensor=o},343:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var a,r=(a=n(328))&&a.__esModule?a:{default:a},o=n(329);t.createSensor=function(e){var t=void 0,n=[],a=(0,r.default)((function(){n.forEach((function(t){t(e)}))})),i=function(){t&&t.parentNode&&(t.contentDocument&&t.contentDocument.defaultView.removeEventListener("resize",a),t.parentNode.removeChild(t),t=void 0,n=[])};return{element:e,bind:function(r){t||(t=function(){"static"===getComputedStyle(e).position&&(e.style.position="relative");var t=document.createElement("object");return t.onload=function(){t.contentDocument.defaultView.addEventListener("resize",a),a()},t.style.display="block",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.height="100%",t.style.width="100%",t.style.overflow="hidden",t.style.pointerEvents="none",t.style.zIndex="-1",t.style.opacity="0",t.setAttribute("class",o.SensorClassName),t.setAttribute("tabindex",o.SensorTabIndex),t.type="text/html",e.appendChild(t),t.data="about:blank",t}()),-1===n.indexOf(r)&&n.push(r)},destroy:i,unbind:function(e){var a=n.indexOf(e);-1!==a&&n.splice(a,1),0===n.length&&t&&i()}}}},344:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var a,r=(a=n(328))&&a.__esModule?a:{default:a};t.createSensor=function(e){var t=void 0,n=[],a=(0,r.default)((function(){n.forEach((function(t){t(e)}))})),o=function(){t.disconnect(),n=[],t=void 0};return{element:e,bind:function(r){t||(t=function(){var t=new ResizeObserver(a);return t.observe(e),a(),t}()),-1===n.indexOf(r)&&n.push(r)},destroy:o,unbind:function(e){var a=n.indexOf(e);-1!==a&&n.splice(a,1),0===n.length&&t&&o()}}}},362:function(e,t,n){"use strict";var a=n(6),r=n(5),o=n(3),i=n(1),c=n(7),s=n(69),l=n(11),u=n(4),d=n(48),p=n(51);function b(e){return Object(d.a)("MuiToolbar",e)}Object(p.a)("MuiToolbar",["root","gutters","regular","dense"]);var f=n(2),h=["className","component","disableGutters","variant"],j=Object(u.a)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableGutters&&t.gutters,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return Object(o.a)({position:"relative",display:"flex",alignItems:"center"},!n.disableGutters&&Object(a.a)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===n.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),m=i.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiToolbar"}),a=n.className,i=n.component,u=void 0===i?"div":i,d=n.disableGutters,p=void 0!==d&&d,m=n.variant,g=void 0===m?"regular":m,v=Object(r.a)(n,h),O=Object(o.a)({},n,{component:u,disableGutters:p,variant:g}),x=function(e){var t=e.classes,n={root:["root",!e.disableGutters&&"gutters",e.variant]};return Object(s.a)(n,b,t)}(O);return Object(f.jsx)(j,Object(o.a)({as:u,className:Object(c.a)(x.root,a),ref:t,ownerState:O},v))}));t.a=m},363:function(e,t,n){"use strict";var a=n(6),r=n(5),o=n(3),i=n(1),c=n(7),s=n(69),l=n(318),u=n(10),d=n(11),p=n(48),b=n(51);function f(e){return Object(p.a)("MuiFab",e)}var h=Object(b.a)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),j=n(4),m=n(2),g=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],v=Object(j.a)(l.a,{name:"MuiFab",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["size".concat(Object(u.a)(n.size))],"inherit"===n.color&&t.colorInherit,t[Object(u.a)(n.size)],t[n.color]]}})((function(e){var t,n,r,i=e.theme,c=e.ownerState;return Object(o.a)({},i.typography.button,(t={minHeight:36,transition:i.transitions.create(["background-color","box-shadow","border-color"],{duration:i.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(i.vars||i).zIndex.fab,boxShadow:(i.vars||i).shadows[6],"&:active":{boxShadow:(i.vars||i).shadows[12]},color:i.vars?i.vars.palette.text.primary:null==(n=(r=i.palette).getContrastText)?void 0:n.call(r,i.palette.grey[300]),backgroundColor:(i.vars||i).palette.grey[300],"&:hover":{backgroundColor:(i.vars||i).palette.grey.A100,"@media (hover: none)":{backgroundColor:(i.vars||i).palette.grey[300]},textDecoration:"none"}},Object(a.a)(t,"&.".concat(h.focusVisible),{boxShadow:(i.vars||i).shadows[6]}),Object(a.a)(t,"&.".concat(h.disabled),{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground}),t),"small"===c.size&&{width:40,height:40},"medium"===c.size&&{width:48,height:48},"extended"===c.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===c.variant&&"small"===c.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===c.variant&&"medium"===c.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===c.color&&{color:"inherit"})}),(function(e){var t=e.theme,n=e.ownerState;return Object(o.a)({},"inherit"!==n.color&&"default"!==n.color&&null!=(t.vars||t).palette[n.color]&&{color:(t.vars||t).palette[n.color].contrastText,backgroundColor:(t.vars||t).palette[n.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[n.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[n.color].main}}})})),O=i.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiFab"}),a=n.children,i=n.className,l=n.color,p=void 0===l?"default":l,b=n.component,h=void 0===b?"button":b,j=n.disabled,O=void 0!==j&&j,x=n.disableFocusRipple,y=void 0!==x&&x,w=n.focusVisibleClassName,S=n.size,P=void 0===S?"large":S,I=n.variant,k=void 0===I?"circular":I,z=Object(r.a)(n,g),C=Object(o.a)({},n,{color:p,component:h,disabled:O,disableFocusRipple:y,size:P,variant:k}),R=function(e){var t=e.color,n=e.variant,a=e.classes,r=e.size,o={root:["root",n,"size".concat(Object(u.a)(r)),"inherit"===t?"colorInherit":t]};return Object(s.a)(o,f,a)}(C);return Object(m.jsx)(v,Object(o.a)({className:Object(c.a)(R.root,i),component:h,disabled:O,focusRipple:!y,focusVisibleClassName:Object(c.a)(R.focusVisible,w),ownerState:C,ref:t},z,{children:a}))}));t.a=O},372:function(e,t,n){"use strict";var a,r,o,i,c,s,l,u,d=n(6),p=n(5),b=n(3),f=n(1),h=n(7),j=n(69),m=n(142),g=n(4),v=n(11),O=n(28),x=n(481),y=n(251),w=n(709),S=n(362),P=n(31),I=n(2),k=Object(P.a)(Object(I.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),z=Object(P.a)(Object(I.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),C=n(25),R=n(322),L=Object(P.a)(Object(I.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),M=Object(P.a)(Object(I.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),N=["backIconButtonProps","count","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton"],_=f.forwardRef((function(e,t){var n=e.backIconButtonProps,d=e.count,f=e.getItemAriaLabel,h=e.nextIconButtonProps,j=e.onPageChange,m=e.page,g=e.rowsPerPage,v=e.showFirstButton,O=e.showLastButton,x=Object(p.a)(e,N),y=Object(C.a)();return Object(I.jsxs)("div",Object(b.a)({ref:t},x,{children:[v&&Object(I.jsx)(R.a,{onClick:function(e){j(e,0)},disabled:0===m,"aria-label":f("first",m),title:f("first",m),children:"rtl"===y.direction?a||(a=Object(I.jsx)(L,{})):r||(r=Object(I.jsx)(M,{}))}),Object(I.jsx)(R.a,Object(b.a)({onClick:function(e){j(e,m-1)},disabled:0===m,color:"inherit","aria-label":f("previous",m),title:f("previous",m)},n,{children:"rtl"===y.direction?o||(o=Object(I.jsx)(z,{})):i||(i=Object(I.jsx)(k,{}))})),Object(I.jsx)(R.a,Object(b.a)({onClick:function(e){j(e,m+1)},disabled:-1!==d&&m>=Math.ceil(d/g)-1,color:"inherit","aria-label":f("next",m),title:f("next",m)},h,{children:"rtl"===y.direction?c||(c=Object(I.jsx)(k,{})):s||(s=Object(I.jsx)(z,{}))})),O&&Object(I.jsx)(R.a,{onClick:function(e){j(e,Math.max(0,Math.ceil(d/g)-1))},disabled:m>=Math.ceil(d/g)-1,"aria-label":f("last",m),title:f("last",m),children:"rtl"===y.direction?l||(l=Object(I.jsx)(M,{})):u||(u=Object(I.jsx)(L,{}))})]}))})),T=n(327),B=n(48),E=n(51);function A(e){return Object(B.a)("MuiTablePagination",e)}var F,W=Object(E.a)("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]),D=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton"],V=Object(g.a)(w.a,{name:"MuiTablePagination",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t=e.theme;return{overflow:"auto",color:(t.vars||t).palette.text.primary,fontSize:t.typography.pxToRem(14),"&:last-child":{padding:0}}})),G=Object(g.a)(S.a,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:function(e,t){return Object(b.a)(Object(d.a)({},"& .".concat(W.actions),t.actions),t.toolbar)}})((function(e){var t,n=e.theme;return t={minHeight:52,paddingRight:2},Object(d.a)(t,"".concat(n.breakpoints.up("xs")," and (orientation: landscape)"),{minHeight:52}),Object(d.a)(t,n.breakpoints.up("sm"),{minHeight:52,paddingRight:2}),Object(d.a)(t,"& .".concat(W.actions),{flexShrink:0,marginLeft:20}),t})),H=Object(g.a)("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:function(e,t){return t.spacer}})({flex:"1 1 100%"}),U=Object(g.a)("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:function(e,t){return t.selectLabel}})((function(e){var t=e.theme;return Object(b.a)({},t.typography.body2,{flexShrink:0})})),q=Object(g.a)(y.a,{name:"MuiTablePagination",slot:"Select",overridesResolver:function(e,t){var n;return Object(b.a)((n={},Object(d.a)(n,"& .".concat(W.selectIcon),t.selectIcon),Object(d.a)(n,"& .".concat(W.select),t.select),n),t.input,t.selectRoot)}})(Object(d.a)({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8},"& .".concat(W.select),{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"})),J=Object(g.a)(x.a,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:function(e,t){return t.menuItem}})({}),K=Object(g.a)("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:function(e,t){return t.displayedRows}})((function(e){var t=e.theme;return Object(b.a)({},t.typography.body2,{flexShrink:0})}));function X(e){var t=e.from,n=e.to,a=e.count;return"".concat(t,"\u2013").concat(n," of ").concat(-1!==a?a:"more than ".concat(n))}function Q(e){return"Go to ".concat(e," page")}var Y=f.forwardRef((function(e,t){var n,a=Object(v.a)({props:e,name:"MuiTablePagination"}),r=a.ActionsComponent,o=void 0===r?_:r,i=a.backIconButtonProps,c=a.className,s=a.colSpan,l=a.component,u=void 0===l?w.a:l,d=a.count,g=a.getItemAriaLabel,x=void 0===g?Q:g,y=a.labelDisplayedRows,S=void 0===y?X:y,P=a.labelRowsPerPage,k=void 0===P?"Rows per page:":P,z=a.nextIconButtonProps,C=a.onPageChange,R=a.onRowsPerPageChange,L=a.page,M=a.rowsPerPage,N=a.rowsPerPageOptions,B=void 0===N?[10,25,50,100]:N,E=a.SelectProps,W=void 0===E?{}:E,Y=a.showFirstButton,Z=void 0!==Y&&Y,$=a.showLastButton,ee=void 0!==$&&$,te=Object(p.a)(a,D),ne=a,ae=function(e){var t=e.classes;return Object(j.a)({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},A,t)}(ne),re=W.native?"option":J;u!==w.a&&"td"!==u||(n=s||1e3);var oe=Object(T.a)(W.id),ie=Object(T.a)(W.labelId);return Object(I.jsx)(V,Object(b.a)({colSpan:n,ref:t,as:u,ownerState:ne,className:Object(h.a)(ae.root,c)},te,{children:Object(I.jsxs)(G,{className:ae.toolbar,children:[Object(I.jsx)(H,{className:ae.spacer}),B.length>1&&Object(I.jsx)(U,{className:ae.selectLabel,id:ie,children:k}),B.length>1&&Object(I.jsx)(q,Object(b.a)({variant:"standard",input:F||(F=Object(I.jsx)(O.c,{})),value:M,onChange:R,id:oe,labelId:ie},W,{classes:Object(b.a)({},W.classes,{root:Object(h.a)(ae.input,ae.selectRoot,(W.classes||{}).root),select:Object(h.a)(ae.select,(W.classes||{}).select),icon:Object(h.a)(ae.selectIcon,(W.classes||{}).icon)}),children:B.map((function(e){return Object(f.createElement)(re,Object(b.a)({},!Object(m.a)(re)&&{ownerState:ne},{className:ae.menuItem,key:e.label?e.label:e,value:e.value?e.value:e}),e.label?e.label:e)}))})),Object(I.jsx)(K,{className:ae.displayedRows,children:S({from:0===d?0:L*M+1,to:-1===d?(L+1)*M:-1===M?d:Math.min(d,(L+1)*M),count:-1===d?-1:d,page:L})}),Object(I.jsx)(o,{className:ae.actions,backIconButtonProps:i,count:d,nextIconButtonProps:z,onPageChange:C,page:L,rowsPerPage:M,showFirstButton:Z,showLastButton:ee,getItemAriaLabel:x})]})}))}));t.a=Y},425:function(e,t,n){"use strict";n(124),n(80),n(42),n(2)},426:function(e,t,n){"use strict";n(15),n(8),n(1),n(65),n(336),n(2)},427:function(e,t,n){"use strict";var a=n(6),r=n(4),o=n(363),i=n(319),c=(n(25),n(265),n(320),n(124),n(480),n(250),n(178),n(322),n(42));n(625),n(1),n(2),Object(r.a)(c.e)((function(e){var t=e.theme;return Object(a.a)({marginLeft:24,fontWeight:"500"},t.breakpoints.down("sm"),{marginLeft:4})})),Object(r.a)(o.a)((function(){return{marginLeft:0,boxShadow:"none",background:"#08ad6c !important",backgroundColor:"rgba(9, 182, 109, 1) !important"}})),Object(r.a)(o.a)((function(e){var t=e.theme;return{marginLeft:0,boxShadow:"none",color:"white !important",background:"".concat(t.palette.error.main," !important")}})),Object(r.a)(i.a)((function(){return{width:"32px !important",height:"32px !important"}}))},428:function(e,t,n){"use strict";var a=n(6),r=n(4),o=n(265),i=n(124);n(320),n(178),n(704),n(322),n(42),n(2),Object(r.a)(o.a)((function(e){var t=e.theme;return Object(a.a)({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",padding:"24px !important",background:t.palette.background.paper},t.breakpoints.down("sm"),{padding:"16px !important"})})),Object(r.a)(i.a)((function(e){var t=e.theme;return{display:"flex",flexWrap:"wrap",alignItems:"center","& small":{color:t.palette.text.secondary},"& .icon":{opacity:.6,fontSize:"44px",color:t.palette.primary.main}}})),Object(r.a)("h6")((function(e){return{margin:0,marginTop:"4px",fontSize:"14px",fontWeight:"500",color:e.theme.palette.primary.main}}))},429:function(e,t,n){"use strict";var a=n(4),r=n(363);n(25),n(233),n(320),n(265),n(178),n(2),Object(a.a)("div")((function(){return{display:"flex",flexWrap:"wrap",alignItems:"center"}})),Object(a.a)(r.a)((function(){return{width:"44px !important",height:"44px !important",boxShadow:"none !important"}})),Object(a.a)("h3")((function(e){return{margin:0,color:e.textcolor,fontWeight:"500",marginLeft:"12px"}})),Object(a.a)("h1")((function(e){return{margin:0,flexGrow:1,color:e.theme.palette.text.secondary}})),Object(a.a)("span")((function(e){return{fontSize:"13px",color:e.textcolor,marginLeft:"4px"}})),Object(a.a)("div")((function(){return{width:16,height:16,color:"#fff",display:"flex",overflow:"hidden",borderRadius:"300px ",justifyContent:"center","& .icon":{fontSize:"14px"}}}))},430:function(e,t,n){"use strict";var a=n(4),r=n(124),o=n(706);n(25),n(265),n(251),n(481),n(707),n(708),n(709),n(710),n(319),n(322),n(178),n(42),n(2),Object(a.a)(r.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}})),Object(a.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}})),Object(a.a)(o.a)((function(){return{minWidth:400,whiteSpace:"pre","& small":{width:50,height:15,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-of-type":{paddingLeft:"16px !important"}}})),Object(a.a)("small")((function(e){return{width:50,height:15,color:"#fff",padding:"2px 8px",borderRadius:"4px",overflow:"hidden",background:e.bgcolor,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"}}))},431:function(e,t,n){"use strict";var a=n(6),r=n(4),o=n(265),i=(n(177),n(127));n(2),Object(r.a)(o.a)((function(e){var t=e.theme;return Object(a.a)({marginBottom:"24px",padding:"24px !important"},t.breakpoints.down("sm"),{paddingLeft:"16px !important"})})),Object(r.a)(o.a)((function(e){var t=e.theme;return Object(a.a)({boxShadow:"none",textAlign:"center",position:"relative",padding:"24px !important",background:"rgb(".concat(Object(i.a)(t.palette.primary.main),", 0.15) !important")},t.breakpoints.down("sm"),{padding:"16px !important"})})),Object(r.a)("p")((function(e){return{margin:0,paddingTop:"24px",paddingBottom:"24px",color:e.theme.palette.text.secondary}}))},432:function(e,t,n){"use strict";n(14);var a=n(4),r=n(706);n(124),n(710),n(708),n(709),n(372),n(1),n(2),Object(a.a)(r.a)((function(){return{whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize",fontSize:"24px"}}}}}))},433:function(e,t,n){"use strict";n(15),n(14),n(124),n(285),n(1),n(2)},677:function(e,t,n){"use strict";n.r(t);var a=n(35),r=n(53),o=n(14),i=n(6),c=n(4),s=n(177),l=n(25),u=n(124),d=n(1),p=(n(425),n(426),n(427),n(428),n(429),n(430),n(431),n(432),n(332)),b=n(43),f=n(307),h=n(37),j=n(81),m=(n(52),n(433),n(2)),g=(Object(c.a)(s.a)((function(){return{fontSize:"26px"}})),Object(c.a)("div")((function(e){var t,n=e.theme;return t={margin:"30px",maxWidth:"1200px"},Object(i.a)(t,"margin","auto auto"),Object(i.a)(t,n.breakpoints.down("sm"),{margin:"16px"}),t}))),v=(Object(c.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",marginRight:".5rem",textTransform:"capitalize"}})),Object(c.a)("span")((function(e){return{fontSize:"0.875rem",color:e.theme.palette.text.secondary}})),Object(c.a)("h4")((function(e){return{fontSize:"1rem",fontWeight:"500",marginBottom:"16px",textTransform:"capitalize",color:e.theme.palette.text.secondary}})),Object(c.a)("img")((function(){return{width:"140px"}})));t.default=function(){Object(f.a)("(min-width:600px)"),Object(l.a)().palette;var e=Object(d.useState)("........"),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(b.a)().updateSettings,s=Object(h.d)(),O=Object(o.a)(s,2),x=(O[0],O[1],new URLSearchParams(window.location.search)),y=(x.get("endpoint"),x.get("blur")),w=x.get("auto"),S=x.get("page"),P=x.get("mask"),I=Object(d.useState)([]),k=Object(o.a)(I,2),z=(k[0],k[1],Object(d.useState)([])),C=Object(o.a)(z,2),R=C[0],L=C[1],M=Object(d.useState)([]),N=Object(o.a)(M,2),_=(N[0],N[1],Object(d.useState)(0)),T=Object(o.a)(_,2),B=(T[0],T[1],Object(d.useState)(0)),E=Object(o.a)(B,2),A=(E[0],E[1],Object(d.useState)({})),F=Object(o.a)(A,2),W=F[0],D=F[1],V=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.Cloud.run("searchNumbers",{query:t});case 2:n=e.sent,L(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.useEffect)(Object(r.a)(Object(a.a)().mark((function e(){var t,n,o;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({layout1Settings:{topbar:{show:!y},leftSidebar:{mode:"close",show:!0}}}),e.next=3,j.a.Cloud.run("getPublicItems",{key:"liveSettings.json"});case 3:return t=e.sent,D(null===t||void 0===t?void 0:t[0]),n=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var n,r,o,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.Cloud.run("getPublicItems",{key:"q",once:!0});case 2:o=e.sent,(c=null===(n=o[0])||void 0===n||null===(r=n.value)||void 0===r?void 0:r.padStart(8,"."))&&(i((function(e){return c||e})),V(c));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=setInterval(n,5e3),e.abrupt("return",(function(){clearInterval(o)}));case 8:case"end":return e.stop()}}),e)}))),[]),Object(m.jsx)(d.Fragment,{children:Object(m.jsxs)(g,{className:"analytics",children:[Object(m.jsxs)(u.a,{display:"flex",flexDirection:"row",alignItems:"center",alignContent:"center",children:[Object(m.jsx)(v,{src:"/assets/images/FullLogo_NoBuffer.png"}),Object(m.jsxs)(u.a,{marginLeft:"20px",children:[Object(m.jsxs)("h1",{style:{color:"#ff0000"},children:[" ",null===W||void 0===W?void 0:W.title1]}),Object(m.jsxs)("h1",{children:[" ",null===W||void 0===W?void 0:W.title2]})]})]}),Object(m.jsx)(u.a,{display:"flex",flexDirection:"row",children:Object(m.jsx)(u.a,{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center"})}),"",Object(m.jsx)(u.a,{width:"100%",marginTop:"160px",display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center",children:Object(m.jsx)("a",{href:"https://api.whatsapp.com/send?phone=6587413159&text=Singapore%20First%20Number%20Finding%20Service",children:Object(m.jsx)("img",{src:"/assets/images/qr.png",style:{maxWidth:"200px"}})})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(u.a,{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center",children:Object(m.jsx)("h1",{children:"We can do CarouPay, Cash On Delivery for Buyer Protection."})}),Object(m.jsx)(u.a,{width:"100%",display:"flex",children:Object(m.jsxs)(u.a,{display:"flex",width:"100%",flexDirection:"column",alignItems:"center",alignContent:"center",children:[Object(m.jsx)(p.a,{dataArr:R,pageSize:Number(S)||12,unmask:y,unmaskValue:n,handleClick:function(e){var t;return null===(t=window)||void 0===t?void 0:t.location.assign("https://api.whatsapp.com/send?phone=6587413159&text=I%20am%20interested%20in%20".concat(e.num))},auto:Number(w),mask:P||"yyyyyyyy"}),n&&Object(m.jsxs)("h1",{children:[" ",R.length," Number Found. ",R.length&&"Please PM us to see the number."]})]})})]})})}}}]);
//# sourceMappingURL=16.135dd193.chunk.js.map