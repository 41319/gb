(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[16],{322:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n=null;return function(){for(var a=this,o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];clearTimeout(n),n=setTimeout((function(){e.apply(a,r)}),t)}}},323:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SensorTabIndex=t.SensorClassName=t.SizeSensorId=void 0;t.SizeSensorId="size-sensor-id";t.SensorClassName="size-sensor-object";t.SensorTabIndex="-1"},324:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var a,o,r;if(Array.isArray(t)){if((a=t.length)!=n.length)return!1;for(o=a;0!==o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((a=(r=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=a;0!==o--;)if(!Object.prototype.hasOwnProperty.call(n,r[o]))return!1;for(o=a;0!==o--;){var i=r[o];if(!e(t[i],n[i]))return!1}return!0}return t!==t&&n!==n}},326:function(e,t,n){"use strict";var a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},a(e,t)};function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var r=function(){return r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.create;Object.create;var i=n(131),c=n(1),s=n.n(c),l=n(330);function u(e,t){var n={};return t.forEach((function(t){n[t]=e[t]})),n}function d(e){return"function"===typeof e}var p=n(324),b=n.n(p),f=function(e){function t(t){var n=e.call(this,t)||this;return n.echarts=i,n}return o(t,e),t}(function(e){function t(t){var n=e.call(this,t)||this;return n.echarts=t.echarts,n.ele=null,n.isInitialResize=!0,n}return o(t,e),t.prototype.componentDidMount=function(){this.renderNewEcharts()},t.prototype.componentDidUpdate=function(e){var t=this.props.shouldSetOption;if(!d(t)||t(e,this.props)){if(!b()(e.theme,this.props.theme)||!b()(e.opts,this.props.opts)||!b()(e.onEvents,this.props.onEvents))return this.dispose(),void this.renderNewEcharts();var n=["option","notMerge","lazyUpdate","showLoading","loadingOption"];b()(u(this.props,n),u(e,n))||this.updateEChartsOption(),b()(e.style,this.props.style)&&b()(e.className,this.props.className)||this.resize()}},t.prototype.componentWillUnmount=function(){this.dispose()},t.prototype.getEchartsInstance=function(){return this.echarts.getInstanceByDom(this.ele)||this.echarts.init(this.ele,this.props.theme,this.props.opts)},t.prototype.dispose=function(){if(this.ele){try{Object(l.clear)(this.ele)}catch(e){console.warn(e)}this.echarts.dispose(this.ele)}},t.prototype.renderNewEcharts=function(){var e=this,t=this.props,n=t.onEvents,a=t.onChartReady,o=this.updateEChartsOption();this.bindEvents(o,n||{}),d(a)&&a(o),this.ele&&Object(l.bind)(this.ele,(function(){e.resize()}))},t.prototype.bindEvents=function(e,t){function n(t,n){"string"===typeof t&&d(n)&&e.on(t,(function(t){n(t,e)}))}for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n(a,t[a])},t.prototype.updateEChartsOption=function(){var e=this.props,t=e.option,n=e.notMerge,a=void 0!==n&&n,o=e.lazyUpdate,r=void 0!==o&&o,i=e.showLoading,c=e.loadingOption,s=void 0===c?null:c,l=this.getEchartsInstance();return l.setOption(t,a,r),i?l.showLoading(s):l.hideLoading(),l},t.prototype.resize=function(){var e=this.getEchartsInstance();if(!this.isInitialResize)try{e.resize()}catch(t){console.warn(t)}this.isInitialResize=!1},t.prototype.render=function(){var e=this,t=this.props,n=t.style,a=t.className,o=void 0===a?"":a,i=r({height:300},n);return s.a.createElement("div",{ref:function(t){e.ele=t},style:i,className:"echarts-for-react "+o})},t}(c.PureComponent));t.a=f},330:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ver=t.clear=t.bind=void 0;var a=n(331);t.bind=function(e,t){var n=(0,a.getSensor)(e);return n.bind(t),function(){n.unbind(t)}};t.clear=function(e){var t=(0,a.getSensor)(e);(0,a.removeSensor)(t)};t.ver="1.0.1"},331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeSensor=t.getSensor=void 0;var a,o=(a=n(332))&&a.__esModule?a:{default:a},r=n(333),i=n(323);var c={};t.getSensor=function(e){var t=e.getAttribute(i.SizeSensorId);if(t&&c[t])return c[t];var n=(0,o.default)();e.setAttribute(i.SizeSensorId,n);var a=(0,r.createSensor)(e);return c[n]=a,a};t.removeSensor=function(e){var t=e.element.getAttribute(i.SizeSensorId);e.element.removeAttribute(i.SizeSensorId),e.destroy(),t&&c[t]&&delete c[t]}},332:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=1;t.default=function(){return"".concat(a++)}},333:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var a=n(334),o=n(335),r="undefined"!==typeof ResizeObserver?o.createSensor:a.createSensor;t.createSensor=r},334:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var a,o=(a=n(322))&&a.__esModule?a:{default:a},r=n(323);t.createSensor=function(e){var t=void 0,n=[],a=(0,o.default)((function(){n.forEach((function(t){t(e)}))})),i=function(){t&&t.parentNode&&(t.contentDocument&&t.contentDocument.defaultView.removeEventListener("resize",a),t.parentNode.removeChild(t),t=void 0,n=[])};return{element:e,bind:function(o){t||(t=function(){"static"===getComputedStyle(e).position&&(e.style.position="relative");var t=document.createElement("object");return t.onload=function(){t.contentDocument.defaultView.addEventListener("resize",a),a()},t.style.display="block",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.height="100%",t.style.width="100%",t.style.overflow="hidden",t.style.pointerEvents="none",t.style.zIndex="-1",t.style.opacity="0",t.setAttribute("class",r.SensorClassName),t.setAttribute("tabindex",r.SensorTabIndex),t.type="text/html",e.appendChild(t),t.data="about:blank",t}()),-1===n.indexOf(o)&&n.push(o)},destroy:i,unbind:function(e){var a=n.indexOf(e);-1!==a&&n.splice(a,1),0===n.length&&t&&i()}}}},335:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var a,o=(a=n(322))&&a.__esModule?a:{default:a};t.createSensor=function(e){var t=void 0,n=[],a=(0,o.default)((function(){n.forEach((function(t){t(e)}))})),r=function(){t.disconnect(),n=[],t=void 0};return{element:e,bind:function(o){t||(t=function(){var t=new ResizeObserver(a);return t.observe(e),a(),t}()),-1===n.indexOf(o)&&n.push(o)},destroy:r,unbind:function(e){var a=n.indexOf(e);-1!==a&&n.splice(a,1),0===n.length&&t&&r()}}}},351:function(e,t,n){"use strict";n(15);var a=n(14),o=n(4),r=n(249),i=n(25),c=n(172),s=n(1),l=(n(42),n(293)),u=n(2),d=Object(o.a)(r.a)((function(){return{fontSize:"26px"}}));t.a=function(e){var t=e.dataArr,n=e.pageSize,o=(e.unmask,e.unmaskValue,e.handleClick),r=e.mask,p=void 0===r?"yyxyyyyy":r,b=(Object(l.a)("(min-width:600px)"),Object(i.a)().palette,Object(s.useState)(t)),f=Object(a.a)(b,2),h=(f[0],f[1],Object(s.useState)([])),j=Object(a.a)(h,2),m=j[0],g=j[1],v=Object(s.useState)([]),O=Object(a.a)(v,2),x=(O[0],O[1],Object(s.useState)(0)),y=Object(a.a)(x,2),w=(y[0],y[1],Object(s.useState)(0)),S=Object(a.a)(w,2),P=S[0],z=S[1],I=Object(s.useState)(!1),k=Object(a.a)(I,2),R=k[0],C=k[1],L=Object(s.useState)(5),M=Object(a.a)(L,2),N=M[0],T=(M[1],Object(s.useState)(0)),E=Object(a.a)(T,2),_=E[0],B=E[1],A=function(e){z(P+e)};return Object(s.useEffect)((function(){g(function(e,t){for(var n=[],a=0,o=e.length;a<o;)n.push(e.slice(a,a+=t));return n}(t,n))}),[t,n]),Object(s.useEffect)((function(){if(R){var e=setInterval((function(){B((function(e){var t=e+1;return console.log(t),t}))}),1e3);return function(){clearInterval(e)}}B(0)}),[m,R]),Object(s.useEffect)((function(){_%N===0&&z((function(e){return e<m.length-1?e+1:0}))}),[_]),Object(u.jsxs)(s.Fragment,{children:[!!R&&Object(u.jsxs)("h1",{children:["Changing every ",R," sec.To See the Full Number, can check our website."]}),Object(u.jsx)(c.a,{gap:"30px",display:"flex",flexWrap:"wrap",alignItems:"center",alignContent:"center",children:m.map((function(e,t){return t===P&&e.map((function(e){return Object(u.jsx)(d,{variant:"outlined","aria-haspopup":"true",onClick:function(){return o&&o(e)},children:Object(u.jsx)(c.a,{color:"9"===e.num[0]?"red":"blue",children:p.split("").map((function(t,n){return"x"===t?"X":e.num[n]}))})})}))}))}),Object(u.jsx)("br",{}),Object(u.jsxs)(c.a,{children:[Object(u.jsx)(d,{variant:"outlined","aria-haspopup":"true",onClick:function(){return A(-1)},disabled:0===P,children:"Prev"}),"Page ".concat(m.length?P+1:0," of ").concat(m.length),Object(u.jsx)(d,{variant:"outlined","aria-haspopup":"true",onClick:function(){return A(1)},disabled:P>=m.length-1,children:"Next"}),Object(u.jsxs)(d,{variant:"outlined","aria-haspopup":"true",onClick:function(){return C(!R)},children:[" ",R?"".concat(_%N," sec"):"Auto"]})]})]})}},357:function(e,t,n){"use strict";var a=n(6),o=n(5),r=n(3),i=n(1),c=n(7),s=n(77),l=n(305),u=n(10),d=n(12),p=n(49),b=n(61);function f(e){return Object(p.a)("MuiFab",e)}var h=Object(b.a)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),j=n(4),m=n(2),g=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],v=Object(j.a)(l.a,{name:"MuiFab",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["size".concat(Object(u.a)(n.size))],"inherit"===n.color&&t.colorInherit,t[Object(u.a)(n.size)],t[n.color]]}})((function(e){var t,n,o,i=e.theme,c=e.ownerState;return Object(r.a)({},i.typography.button,(t={minHeight:36,transition:i.transitions.create(["background-color","box-shadow","border-color"],{duration:i.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(i.vars||i).zIndex.fab,boxShadow:(i.vars||i).shadows[6],"&:active":{boxShadow:(i.vars||i).shadows[12]},color:i.vars?i.vars.palette.text.primary:null==(n=(o=i.palette).getContrastText)?void 0:n.call(o,i.palette.grey[300]),backgroundColor:(i.vars||i).palette.grey[300],"&:hover":{backgroundColor:(i.vars||i).palette.grey.A100,"@media (hover: none)":{backgroundColor:(i.vars||i).palette.grey[300]},textDecoration:"none"}},Object(a.a)(t,"&.".concat(h.focusVisible),{boxShadow:(i.vars||i).shadows[6]}),Object(a.a)(t,"&.".concat(h.disabled),{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground}),t),"small"===c.size&&{width:40,height:40},"medium"===c.size&&{width:48,height:48},"extended"===c.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===c.variant&&"small"===c.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===c.variant&&"medium"===c.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===c.color&&{color:"inherit"})}),(function(e){var t=e.theme,n=e.ownerState;return Object(r.a)({},"inherit"!==n.color&&"default"!==n.color&&null!=(t.vars||t).palette[n.color]&&{color:(t.vars||t).palette[n.color].contrastText,backgroundColor:(t.vars||t).palette[n.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[n.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[n.color].main}}})})),O=i.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiFab"}),a=n.children,i=n.className,l=n.color,p=void 0===l?"default":l,b=n.component,h=void 0===b?"button":b,j=n.disabled,O=void 0!==j&&j,x=n.disableFocusRipple,y=void 0!==x&&x,w=n.focusVisibleClassName,S=n.size,P=void 0===S?"large":S,z=n.variant,I=void 0===z?"circular":z,k=Object(o.a)(n,g),R=Object(r.a)({},n,{color:p,component:h,disabled:O,disableFocusRipple:y,size:P,variant:I}),C=function(e){var t=e.color,n=e.variant,a=e.classes,o=e.size,r={root:["root",n,"size".concat(Object(u.a)(o)),"inherit"===t?"colorInherit":t]};return Object(s.a)(r,f,a)}(R);return Object(m.jsx)(v,Object(r.a)({className:Object(c.a)(C.root,i),component:h,disabled:O,focusRipple:!y,focusVisibleClassName:Object(c.a)(C.focusVisible,w),ownerState:R,ref:t},k,{children:a}))}));t.a=O},374:function(e,t,n){"use strict";var a=n(6),o=n(5),r=n(3),i=n(1),c=n(7),s=n(77),l=n(12),u=n(4),d=n(49),p=n(61);function b(e){return Object(d.a)("MuiToolbar",e)}Object(p.a)("MuiToolbar",["root","gutters","regular","dense"]);var f=n(2),h=["className","component","disableGutters","variant"],j=Object(u.a)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableGutters&&t.gutters,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return Object(r.a)({position:"relative",display:"flex",alignItems:"center"},!n.disableGutters&&Object(a.a)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===n.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),m=i.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiToolbar"}),a=n.className,i=n.component,u=void 0===i?"div":i,d=n.disableGutters,p=void 0!==d&&d,m=n.variant,g=void 0===m?"regular":m,v=Object(o.a)(n,h),O=Object(r.a)({},n,{component:u,disableGutters:p,variant:g}),x=function(e){var t=e.classes,n={root:["root",!e.disableGutters&&"gutters",e.variant]};return Object(s.a)(n,b,t)}(O);return Object(f.jsx)(j,Object(r.a)({as:u,className:Object(c.a)(x.root,a),ref:t,ownerState:O},v))}));t.a=m},455:function(e,t,n){"use strict";var a,o,r,i,c,s,l,u,d=n(6),p=n(5),b=n(3),f=n(1),h=n(7),j=n(77),m=n(138),g=n(4),v=n(12),O=n(28),x=n(457),y=n(245),w=n(687),S=n(374),P=n(31),z=n(2),I=Object(P.a)(Object(z.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),k=Object(P.a)(Object(z.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),R=n(25),C=n(310),L=Object(P.a)(Object(z.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),M=Object(P.a)(Object(z.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),N=["backIconButtonProps","count","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton"],T=f.forwardRef((function(e,t){var n=e.backIconButtonProps,d=e.count,f=e.getItemAriaLabel,h=e.nextIconButtonProps,j=e.onPageChange,m=e.page,g=e.rowsPerPage,v=e.showFirstButton,O=e.showLastButton,x=Object(p.a)(e,N),y=Object(R.a)();return Object(z.jsxs)("div",Object(b.a)({ref:t},x,{children:[v&&Object(z.jsx)(C.a,{onClick:function(e){j(e,0)},disabled:0===m,"aria-label":f("first",m),title:f("first",m),children:"rtl"===y.direction?a||(a=Object(z.jsx)(L,{})):o||(o=Object(z.jsx)(M,{}))}),Object(z.jsx)(C.a,Object(b.a)({onClick:function(e){j(e,m-1)},disabled:0===m,color:"inherit","aria-label":f("previous",m),title:f("previous",m)},n,{children:"rtl"===y.direction?r||(r=Object(z.jsx)(k,{})):i||(i=Object(z.jsx)(I,{}))})),Object(z.jsx)(C.a,Object(b.a)({onClick:function(e){j(e,m+1)},disabled:-1!==d&&m>=Math.ceil(d/g)-1,color:"inherit","aria-label":f("next",m),title:f("next",m)},h,{children:"rtl"===y.direction?c||(c=Object(z.jsx)(I,{})):s||(s=Object(z.jsx)(k,{}))})),O&&Object(z.jsx)(C.a,{onClick:function(e){j(e,Math.max(0,Math.ceil(d/g)-1))},disabled:m>=Math.ceil(d/g)-1,"aria-label":f("last",m),title:f("last",m),children:"rtl"===y.direction?l||(l=Object(z.jsx)(M,{})):u||(u=Object(z.jsx)(L,{}))})]}))})),E=n(316),_=n(49),B=n(61);function A(e){return Object(_.a)("MuiTablePagination",e)}var F,W=Object(B.a)("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]),D=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton"],V=Object(g.a)(w.a,{name:"MuiTablePagination",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t=e.theme;return{overflow:"auto",color:(t.vars||t).palette.text.primary,fontSize:t.typography.pxToRem(14),"&:last-child":{padding:0}}})),G=Object(g.a)(S.a,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:function(e,t){return Object(b.a)(Object(d.a)({},"& .".concat(W.actions),t.actions),t.toolbar)}})((function(e){var t,n=e.theme;return t={minHeight:52,paddingRight:2},Object(d.a)(t,"".concat(n.breakpoints.up("xs")," and (orientation: landscape)"),{minHeight:52}),Object(d.a)(t,n.breakpoints.up("sm"),{minHeight:52,paddingRight:2}),Object(d.a)(t,"& .".concat(W.actions),{flexShrink:0,marginLeft:20}),t})),H=Object(g.a)("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:function(e,t){return t.spacer}})({flex:"1 1 100%"}),U=Object(g.a)("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:function(e,t){return t.selectLabel}})((function(e){var t=e.theme;return Object(b.a)({},t.typography.body2,{flexShrink:0})})),q=Object(g.a)(y.a,{name:"MuiTablePagination",slot:"Select",overridesResolver:function(e,t){var n;return Object(b.a)((n={},Object(d.a)(n,"& .".concat(W.selectIcon),t.selectIcon),Object(d.a)(n,"& .".concat(W.select),t.select),n),t.input,t.selectRoot)}})(Object(d.a)({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8},"& .".concat(W.select),{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"})),J=Object(g.a)(x.a,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:function(e,t){return t.menuItem}})({}),K=Object(g.a)("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:function(e,t){return t.displayedRows}})((function(e){var t=e.theme;return Object(b.a)({},t.typography.body2,{flexShrink:0})}));function X(e){var t=e.from,n=e.to,a=e.count;return"".concat(t,"\u2013").concat(n," of ").concat(-1!==a?a:"more than ".concat(n))}function Y(e){return"Go to ".concat(e," page")}var $=f.forwardRef((function(e,t){var n,a=Object(v.a)({props:e,name:"MuiTablePagination"}),o=a.ActionsComponent,r=void 0===o?T:o,i=a.backIconButtonProps,c=a.className,s=a.colSpan,l=a.component,u=void 0===l?w.a:l,d=a.count,g=a.getItemAriaLabel,x=void 0===g?Y:g,y=a.labelDisplayedRows,S=void 0===y?X:y,P=a.labelRowsPerPage,I=void 0===P?"Rows per page:":P,k=a.nextIconButtonProps,R=a.onPageChange,C=a.onRowsPerPageChange,L=a.page,M=a.rowsPerPage,N=a.rowsPerPageOptions,_=void 0===N?[10,25,50,100]:N,B=a.SelectProps,W=void 0===B?{}:B,$=a.showFirstButton,Q=void 0!==$&&$,Z=a.showLastButton,ee=void 0!==Z&&Z,te=Object(p.a)(a,D),ne=a,ae=function(e){var t=e.classes;return Object(j.a)({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},A,t)}(ne),oe=W.native?"option":J;u!==w.a&&"td"!==u||(n=s||1e3);var re=Object(E.a)(W.id),ie=Object(E.a)(W.labelId);return Object(z.jsx)(V,Object(b.a)({colSpan:n,ref:t,as:u,ownerState:ne,className:Object(h.a)(ae.root,c)},te,{children:Object(z.jsxs)(G,{className:ae.toolbar,children:[Object(z.jsx)(H,{className:ae.spacer}),_.length>1&&Object(z.jsx)(U,{className:ae.selectLabel,id:ie,children:I}),_.length>1&&Object(z.jsx)(q,Object(b.a)({variant:"standard",input:F||(F=Object(z.jsx)(O.c,{})),value:M,onChange:C,id:re,labelId:ie},W,{classes:Object(b.a)({},W.classes,{root:Object(h.a)(ae.input,ae.selectRoot,(W.classes||{}).root),select:Object(h.a)(ae.select,(W.classes||{}).select),icon:Object(h.a)(ae.selectIcon,(W.classes||{}).icon)}),children:_.map((function(e){return Object(f.createElement)(oe,Object(b.a)({},!Object(m.a)(oe)&&{ownerState:ne},{className:ae.menuItem,key:e.label?e.label:e,value:e.value?e.value:e}),e.label?e.label:e)}))})),Object(z.jsx)(K,{className:ae.displayedRows,children:S({from:0===d?0:L*M+1,to:-1===d?(L+1)*M:-1===M?d:Math.min(d,(L+1)*M),count:-1===d?-1:d,page:L})}),Object(z.jsx)(r,{className:ae.actions,backIconButtonProps:i,count:d,nextIconButtonProps:k,onPageChange:R,page:L,rowsPerPage:M,showFirstButton:Q,showLastButton:ee,getItemAriaLabel:x})]})}))}));t.a=$},662:function(e,t,n){"use strict";n.r(t);var a=n(9),o=n(14),r=n(6),i=n(4),c=n(249),s=n(25),l=n(172),u=n(271),d=n(1),p=(n(78),n(41)),b=n(2),f=(n(15),n(63),n(326),n(357)),h=n(306),j=n(256),m=(n(307),n(456),n(244),n(175),n(310),n(603),Object(i.a)(p.e)((function(e){var t=e.theme;return Object(r.a)({marginLeft:24,fontWeight:"500"},t.breakpoints.down("sm"),{marginLeft:4})})),Object(i.a)(f.a)((function(){return{marginLeft:0,boxShadow:"none",background:"#08ad6c !important",backgroundColor:"rgba(9, 182, 109, 1) !important"}})),Object(i.a)(f.a)((function(e){var t=e.theme;return{marginLeft:0,boxShadow:"none",color:"white !important",background:"".concat(t.palette.error.main," !important")}})),Object(i.a)(h.a)((function(){return{width:"32px !important",height:"32px !important"}})),n(682),Object(i.a)(j.a)((function(e){var t=e.theme;return Object(r.a)({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",padding:"24px !important",background:t.palette.background.paper},t.breakpoints.down("sm"),{padding:"16px !important"})})),Object(i.a)(l.a)((function(e){var t=e.theme;return{display:"flex",flexWrap:"wrap",alignItems:"center","& small":{color:t.palette.text.secondary},"& .icon":{opacity:.6,fontSize:"44px",color:t.palette.primary.main}}})),Object(i.a)("h6")((function(e){return{margin:0,marginTop:"4px",fontSize:"14px",fontWeight:"500",color:e.theme.palette.primary.main}})),n(229),Object(i.a)("div")((function(){return{display:"flex",flexWrap:"wrap",alignItems:"center"}})),Object(i.a)(f.a)((function(){return{width:"44px !important",height:"44px !important",boxShadow:"none !important"}})),Object(i.a)("h3")((function(e){return{margin:0,color:e.textcolor,fontWeight:"500",marginLeft:"12px"}})),Object(i.a)("h1")((function(e){return{margin:0,flexGrow:1,color:e.theme.palette.text.secondary}})),Object(i.a)("span")((function(e){return{fontSize:"13px",color:e.textcolor,marginLeft:"4px"}})),Object(i.a)("div")((function(){return{width:16,height:16,color:"#fff",display:"flex",overflow:"hidden",borderRadius:"300px ",justifyContent:"center","& .icon":{fontSize:"14px"}}})),n(684)),g=(n(245),n(457),n(685),n(686),n(687),n(688),Object(i.a)(l.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}})),Object(i.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}})),Object(i.a)(m.a)((function(){return{minWidth:400,whiteSpace:"pre","& small":{width:50,height:15,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-of-type":{paddingLeft:"16px !important"}}})),Object(i.a)("small")((function(e){return{width:50,height:15,color:"#fff",padding:"2px 8px",borderRadius:"4px",overflow:"hidden",background:e.bgcolor,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"}})),n(129)),v=(Object(i.a)(j.a)((function(e){var t=e.theme;return Object(r.a)({marginBottom:"24px",padding:"24px !important"},t.breakpoints.down("sm"),{paddingLeft:"16px !important"})})),Object(i.a)(j.a)((function(e){var t=e.theme;return Object(r.a)({boxShadow:"none",textAlign:"center",position:"relative",padding:"24px !important",background:"rgb(".concat(Object(g.a)(t.palette.primary.main),", 0.15) !important")},t.breakpoints.down("sm"),{padding:"16px !important"})})),Object(i.a)("p")((function(e){return{margin:0,paddingTop:"24px",paddingBottom:"24px",color:e.theme.palette.text.secondary}})),n(455),Object(i.a)(m.a)((function(){return{whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize",fontSize:"24px"}}}}})),n(351)),O=n(42),x=n(293),y=n(37),w=(n(82),n(80)),S=(Object(i.a)(c.a)((function(){return{fontSize:"26px"}})),Object(i.a)("div")((function(e){var t,n=e.theme;return t={margin:"30px",maxWidth:"1200px"},Object(r.a)(t,"margin","auto auto"),Object(r.a)(t,n.breakpoints.down("sm"),{margin:"16px"}),t}))),P=(Object(i.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",marginRight:".5rem",textTransform:"capitalize"}})),Object(i.a)("span")((function(e){return{fontSize:"0.875rem",color:e.theme.palette.text.secondary}})),Object(i.a)("h4")((function(e){return{fontSize:"1rem",fontWeight:"500",marginBottom:"16px",textTransform:"capitalize",color:e.theme.palette.text.secondary}})),Object(i.a)("img")((function(){return{width:"140px"}})));t.default=function(){Object(x.a)("(min-width:600px)"),Object(s.a)().palette;var e=Object(d.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(O.a)().updateSettings,c=Object(y.d)(),p=Object(o.a)(c,2),f=(p[0],p[1],new URLSearchParams(window.location.search)),h=f.get("endpoint"),j=f.get("blur"),m=f.get("auto"),g=f.get("page");Object(w.c)((function(e){var t;return(null===e||void 0===e||null===(t=e.application.data)||void 0===t?void 0:t.live)||[]}));Object(d.useEffect)((function(){i({layout1Settings:{topbar:{show:!j},leftSidebar:{mode:"close",show:!j}}})}),[]);var z=Object(d.useState)([]),I=Object(o.a)(z,2),k=I[0],R=I[1],C=Object(d.useState)([]),L=Object(o.a)(C,2),M=L[0],N=L[1],T=Object(d.useState)([]),E=Object(o.a)(T,2);E[0],E[1];Object(d.useEffect)((function(){fetch(h||"/limited.json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{num:e.num,original:"".concat(e.num,"}")})}));R(t)}))}),[h]);var _=Object(d.useState)(0),B=Object(o.a)(_,2),A=(B[0],B[1],Object(d.useState)(0)),F=Object(o.a)(A,2);F[0],F[1];return Object(d.useEffect)((function(){if(n){var e=k.filter((function(e){return e.original.includes(n)}));N(e)}else N(k)}),[k,n]),Object(b.jsx)(d.Fragment,{children:Object(b.jsxs)(S,{className:"analytics",children:[Object(b.jsxs)(l.a,{display:"flex",flexDirection:"row",alignItems:"center",alignContent:"center",children:[Object(b.jsx)(P,{src:"/assets/images/FullLogo_NoBuffer.png"}),Object(b.jsxs)(l.a,{marginLeft:"20px",children:[Object(b.jsx)("h1",{children:"New Nice Singapore Mobile Number For Sale"}),Object(b.jsx)("h1",{children:"Or Leave a comment, we will search for you from different Telco. (From $88 onwards)."})]})]}),Object(b.jsx)(l.a,{display:"flex",flexDirection:"row",children:Object(b.jsx)(l.a,{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center"})}),Object(b.jsx)(l.a,{width:"100%",display:"flex",flexDirection:"column",children:Object(b.jsxs)(l.a,{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center",children:[Object(b.jsx)("h1",{children:"Thousands of numbers to choose from. Even  more Number to choose when you whatsapp us."}),Object(b.jsx)(u.a,{autoFocus:!0,type:"text",name:"firstName",label:"Find Your Lucky Number",onChange:function(e){r(e.target.value)},value:n,validators:["required"],errorMessages:["this field is required"]})]})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(l.a,{width:"100%",display:"flex",children:Object(b.jsxs)(l.a,{display:"flex",width:"100%",flexDirection:"column",alignItems:"center",alignContent:"center",children:[Object(b.jsx)(v.a,{dataArr:M.slice(0,2999),pageSize:Number(g)||12,unmask:j,unmaskValue:n,handleClick:function(e){var t;return null===(t=window)||void 0===t?void 0:t.location.assign("https://api.whatsapp.com/send?phone=6587413159&text=I%20am%20interested%20in%20".concat(e.num))},auto:Number(m),mask:"yyyyyyyy"}),n&&Object(b.jsx)("h1",{children:"Please check our Tikok Profile for Url and Contact."})]})})]})})}}}]);
//# sourceMappingURL=16.1d080089.chunk.js.map