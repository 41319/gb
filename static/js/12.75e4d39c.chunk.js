(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[12],{487:function(e,t,n){"use strict";n(3);t.a=function(e,t){return function(){return null}}},540:function(e,t,n){"use strict";var r=n(284);t.a=r.a},541:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return o.a})),n.d(t,"createChainedFunction",(function(){return a.a})),n.d(t,"createSvgIcon",(function(){return i.a})),n.d(t,"debounce",(function(){return c.a})),n.d(t,"deprecatedPropType",(function(){return s})),n.d(t,"isMuiElement",(function(){return u.a})),n.d(t,"ownerDocument",(function(){return l.a})),n.d(t,"ownerWindow",(function(){return d.a})),n.d(t,"requirePropFactory",(function(){return f.a})),n.d(t,"setRef",(function(){return p})),n.d(t,"unstable_useEnhancedEffect",(function(){return m.a})),n.d(t,"unstable_useId",(function(){return b.a})),n.d(t,"unsupportedProp",(function(){return v.a})),n.d(t,"useControlled",(function(){return h.a})),n.d(t,"useEventCallback",(function(){return g.a})),n.d(t,"useForkRef",(function(){return O.a})),n.d(t,"useIsFocusVisible",(function(){return j.a})),n.d(t,"unstable_ClassNameGenerator",(function(){return x}));var r=n(282),o=n(11),a=n(545),i=n(78),c=n(177);var s=function(e,t){return function(){return null}},u=n(115),l=n(61),d=n(142),f=n(487),p=n(110).a,m=n(60),b=n(540),v=n(544),h=n(141),g=n(96),O=n(26),j=n(176),x={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.a.configure(e)}}},542:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},543:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(541)},544:function(e,t,n){"use strict";t.a=function(e,t,n,r,o){return null}},545:function(e,t,n){"use strict";var r=n(523);t.a=r.a},574:function(e,t,n){"use strict";var r=n(6),o=n(5),a=n(3),i=n(1),c=n(34),s=n(39),u=n(461),l=n(114),d=n(4),f=n(14),p=n(2),m=["component","direction","spacing","divider","children"];function b(e,t){var n=i.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,o){return e.push(r),o<n.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(o)})),e}),[])}var v=Object(d.a)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,o=Object(a.a)({display:"flex"},Object(c.b)({theme:n},Object(c.d)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var i=Object(s.a)(n),u=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e}),{}),d=Object(c.d)({values:t.direction,base:u}),f=Object(c.d)({values:t.spacing,base:u});o=Object(l.a)(o,Object(c.b)({theme:n},f,(function(e,n){return{"& > :not(style) + :not(style)":Object(r.a)({margin:0},"margin".concat((o=n?d[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),Object(s.d)(i,e))};var o})))}return o})),h=i.forwardRef((function(e,t){var n=Object(f.a)({props:e,name:"MuiStack"}),r=Object(u.a)(n),i=r.component,c=void 0===i?"div":i,s=r.direction,l=void 0===s?"column":s,d=r.spacing,h=void 0===d?0:d,g=r.divider,O=r.children,j=Object(o.a)(r,m),x={direction:l,spacing:h};return Object(p.jsx)(v,Object(a.a)({as:c,ownerState:x,ref:t},j,{children:g?b(O,g):O}))}));t.a=h},575:function(e,t,n){"use strict";var r=n(542);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(543)),a=n(2),i=(0,o.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=i},611:function(e,t,n){"use strict";n(1);var r=n(78),o=n(2);t.a=Object(r.a)(Object(o.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},683:function(e,t,n){"use strict";var r=n(3),o=n(5),a=n(1),i=n(280),c=n(177),s=n(26),u=n(30),l=n(64),d=n(142),f=n(2),p=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function m(e,t,n){var r,o=function(e,t,n){var r,o=t.getBoundingClientRect(),a=n&&n.getBoundingClientRect(),i=Object(d.a)(t);if(t.fakeTransform)r=t.fakeTransform;else{var c=i.getComputedStyle(t);r=c.getPropertyValue("-webkit-transform")||c.getPropertyValue("transform")}var s=0,u=0;if(r&&"none"!==r&&"string"===typeof r){var l=r.split("(")[1].split(")")[0].split(",");s=parseInt(l[4],10),u=parseInt(l[5],10)}return"left"===e?"translateX(".concat(a?a.right+s-o.left:i.innerWidth+s-o.left,"px)"):"right"===e?"translateX(-".concat(a?o.right-a.left-s:o.left+o.width-s,"px)"):"up"===e?"translateY(".concat(a?a.bottom+u-o.top:i.innerHeight+u-o.top,"px)"):"translateY(-".concat(a?o.top-a.top+o.height-u:o.top+o.height-u,"px)")}(e,t,"function"===typeof(r=n)?r():r);o&&(t.style.webkitTransform=o,t.style.transform=o)}var b=a.forwardRef((function(e,t){var n=Object(u.a)(),b={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},v={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},h=e.addEndListener,g=e.appear,O=void 0===g||g,j=e.children,x=e.container,E=e.direction,y=void 0===E?"down":E,k=e.easing,w=void 0===k?b:k,C=e.in,S=e.onEnter,L=e.onEntered,M=e.onEntering,R=e.onExit,T=e.onExited,A=e.onExiting,D=e.style,I=e.timeout,z=void 0===I?v:I,N=e.TransitionComponent,H=void 0===N?i.a:N,P=Object(o.a)(e,p),W=a.useRef(null),V=Object(s.a)(j.ref,W),q=Object(s.a)(V,t),B=function(e){return function(t){e&&(void 0===t?e(W.current):e(W.current,t))}},_=B((function(e,t){m(y,e,x),Object(l.b)(e),S&&S(e,t)})),F=B((function(e,t){var o=Object(l.a)({timeout:z,style:D,easing:w},{mode:"enter"});e.style.webkitTransition=n.transitions.create("-webkit-transform",Object(r.a)({},o)),e.style.transition=n.transitions.create("transform",Object(r.a)({},o)),e.style.webkitTransform="none",e.style.transform="none",M&&M(e,t)})),X=B(L),U=B(A),G=B((function(e){var t=Object(l.a)({timeout:z,style:D,easing:w},{mode:"exit"});e.style.webkitTransition=n.transitions.create("-webkit-transform",t),e.style.transition=n.transitions.create("transform",t),m(y,e,x),R&&R(e)})),K=B((function(e){e.style.webkitTransition="",e.style.transition="",T&&T(e)})),Y=a.useCallback((function(){W.current&&m(y,W.current,x)}),[y,x]);return a.useEffect((function(){if(!C&&"down"!==y&&"right"!==y){var e=Object(c.a)((function(){W.current&&m(y,W.current,x)})),t=Object(d.a)(W.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}}),[y,C,x]),a.useEffect((function(){C||Y()}),[C,Y]),Object(f.jsx)(H,Object(r.a)({nodeRef:W,onEnter:_,onEntered:X,onEntering:F,onExit:G,onExited:K,onExiting:U,addEndListener:function(e){h&&h(W.current,e)},appear:O,in:C,timeout:z},P,{children:function(e,t){return a.cloneElement(j,Object(r.a)({ref:q,style:Object(r.a)({visibility:"exited"!==e||C?void 0:"hidden"},D,j.props.style)},t))}}))}));t.a=b},709:function(e,t,n){"use strict";n.d(t,"a",(function(){return re})),n.d(t,"b",(function(){return oe}));var r=n(1),o=n.n(r),a=n(53),i=n(7),c=n(683),s=n(4),u=n(458),l=n(822),d=n(287),f=n(864);n(87);function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=o.a.createContext(),g={containerRoot:{},containerAnchorOriginTopCenter:{},containerAnchorOriginBottomCenter:{},containerAnchorOriginTopRight:{},containerAnchorOriginBottomRight:{},containerAnchorOriginTopLeft:{},containerAnchorOriginBottomLeft:{}},O={default:20,dense:4},j={default:6,dense:2},x={maxSnack:3,dense:!1,hideIconVariant:!1,variant:"default",autoHideDuration:5e3,anchorOrigin:{vertical:"bottom",horizontal:"left"},TransitionComponent:c.a,transitionDuration:{enter:225,exit:195}},E=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},y=function(e){return Object.keys(e).filter((function(e){return!g[e]})).reduce((function(t,n){var r;return m({},t,((r={})[n]=e[n],r))}),{})},k={TIMEOUT:"timeout",CLICKAWAY:"clickaway",MAXSNACK:"maxsnack",INSTRUCTED:"instructed"},w=function(e){return"containerAnchorOrigin"+e},C=function(e){var t=e.vertical,n=e.horizontal;return"anchorOrigin"+E(t)+E(n)},S=function(e){return"variant"+E(e)},L=function(e){return!!e||0===e},M=function(e){return"number"===typeof e||null===e};function R(e,t,n){return void 0===e&&(e={}),void 0===t&&(t={}),void 0===n&&(n={}),m({},n,{},t,{},e)}var T={root:"SnackbarContent-root"},A=Object(s.a)("div")((function(e){var t,n,r=e.theme;return(n={})["&."+T.root]=((t={display:"flex",flexWrap:"wrap",flexGrow:1})[r.breakpoints.up("sm")]={flexGrow:"initial",minWidth:288},t),n})),D=Object(r.forwardRef)((function(e,t){var n=e.className,r=b(e,["className"]);return o.a.createElement(A,Object.assign({ref:t,className:Object(i.a)(T.root,n)},r))})),I={right:"left",left:"right",bottom:"up",top:"down"},z=function(e){return"center"!==e.horizontal?I[e.horizontal]:I[e.vertical]},N=function(e){return o.a.createElement(d.a,Object.assign({},e),o.a.createElement("path",{d:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41\n        10.59L10 14.17L17.59 6.58L19 8L10 17Z"}))},H=function(e){return o.a.createElement(d.a,Object.assign({},e),o.a.createElement("path",{d:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"}))},P=function(e){return o.a.createElement(d.a,Object.assign({},e),o.a.createElement("path",{d:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,\n        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,\n        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"}))},W=function(e){return o.a.createElement(d.a,Object.assign({},e),o.a.createElement("path",{d:"M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,\n        0 22,12A10,10 0 0,0 12,2Z"}))},V={fontSize:20,marginInlineEnd:8},q={default:void 0,success:o.a.createElement(N,{style:V}),warning:o.a.createElement(H,{style:V}),error:o.a.createElement(P,{style:V}),info:o.a.createElement(W,{style:V})};function B(e,t){return e.reduce((function(e,n){return null==n?e:function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];var i=[].concat(o);t&&-1===i.indexOf(t)&&i.push(t),e.apply(this,i),n.apply(this,i)}}),(function(){}))}var _="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;function F(e){var t=Object(r.useRef)(e);return _((function(){t.current=e})),Object(r.useCallback)((function(){return t.current.apply(void 0,arguments)}),[])}var X=Object(r.forwardRef)((function(e,t){var n=e.children,o=e.autoHideDuration,a=e.ClickAwayListenerProps,i=e.disableWindowBlurListener,c=void 0!==i&&i,s=e.onClose,u=e.onMouseEnter,l=e.onMouseLeave,d=e.open,p=e.resumeHideDuration,v=b(e,["children","autoHideDuration","ClickAwayListenerProps","disableWindowBlurListener","onClose","onMouseEnter","onMouseLeave","open","resumeHideDuration"]),h=Object(r.useRef)(),g=F((function(){s&&s.apply(void 0,arguments)})),O=F((function(e){s&&null!=e&&(clearTimeout(h.current),h.current=setTimeout((function(){g(null,k.TIMEOUT)}),e))}));Object(r.useEffect)((function(){return d&&O(o),function(){clearTimeout(h.current)}}),[d,o,O]);var j=function(){clearTimeout(h.current)},x=Object(r.useCallback)((function(){null!=o&&O(null!=p?p:.5*o)}),[o,p,O]);return Object(r.useEffect)((function(){if(!c&&d)return window.addEventListener("focus",x),window.addEventListener("blur",j),function(){window.removeEventListener("focus",x),window.removeEventListener("blur",j)}}),[c,x,d]),Object(r.createElement)(f.a,m({onClickAway:function(e){s&&s(e,k.CLICKAWAY)}},a),Object(r.createElement)("div",m({onMouseEnter:function(e){u&&u(e),j()},onMouseLeave:function(e){l&&l(e),x()},ref:t},v),n))})),U="SnackbarItem",G={contentRoot:U+"-contentRoot",lessPadding:U+"-lessPadding",variantSuccess:U+"-variantSuccess",variantError:U+"-variantError",variantInfo:U+"-variantInfo",variantWarning:U+"-variantWarning",message:U+"-message",action:U+"-action",wrappedRoot:U+"-wrappedRoot"},K=Object(s.a)(X)((function(e){var t,n=e.theme,r=n.palette.mode||n.palette.type,o=Object(u.c)(n.palette.background.default,"light"===r?.8:.98);return(t={})["&."+G.wrappedRoot]={position:"relative",transform:"translateX(0)",top:0,right:0,bottom:0,left:0},t["."+G.contentRoot]=m({},n.typography.body2,{backgroundColor:o,color:n.palette.getContrastText(o),alignItems:"center",padding:"6px 16px",borderRadius:"4px",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"}),t["."+G.lessPadding]={paddingLeft:20},t["."+G.variantSuccess]={backgroundColor:"#43a047",color:"#fff"},t["."+G.variantError]={backgroundColor:"#d32f2f",color:"#fff"},t["."+G.variantInfo]={backgroundColor:"#2196f3",color:"#fff"},t["."+G.variantWarning]={backgroundColor:"#ff9800",color:"#fff"},t["."+G.message]={display:"flex",alignItems:"center",padding:"8px 0"},t["."+G.action]={display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8},t})),Y=function(e){var t=e.classes,n=b(e,["classes"]),a=Object(r.useRef)(),c=Object(r.useState)(!0),s=c[0],u=c[1];Object(r.useEffect)((function(){return function(){a.current&&clearTimeout(a.current)}}),[]);var d=B([n.snack.onClose,n.onClose],n.snack.key),f=n.style,p=n.ariaAttributes,v=n.className,h=n.hideIconVariant,g=n.iconVariant,O=n.snack,j=n.action,E=n.content,y=n.TransitionComponent,w=n.TransitionProps,L=n.transitionDuration,M=b(n,["style","dense","ariaAttributes","className","hideIconVariant","iconVariant","snack","action","content","TransitionComponent","TransitionProps","transitionDuration","onEnter","onEntered","onEntering","onExit","onExited","onExiting"]),T=O.key,A=O.open,I=O.className,N=O.variant,H=O.content,P=O.action,W=O.ariaAttributes,V=O.anchorOrigin,_=O.message,F=O.TransitionComponent,X=O.TransitionProps,U=O.transitionDuration,Y=b(O,["persist","key","open","entered","requestClose","className","variant","content","action","ariaAttributes","anchorOrigin","message","TransitionComponent","TransitionProps","transitionDuration","onEnter","onEntered","onEntering","onExit","onExited","onExiting"]),Z=m({},q,{},g)[N],Q=m({"aria-describedby":"notistack-snackbar"},R(W,p)),J=F||y||x.TransitionComponent,$=R(U,L,x.transitionDuration),ee=m({direction:z(V)},R(X,w)),te=P||j;"function"===typeof te&&(te=te(T));var ne=H||E;"function"===typeof ne&&(ne=ne(T,O.message));var re=["onEnter","onEntering","onEntered","onExit","onExiting","onExited"].reduce((function(e,t){var r;return m({},e,((r={})[t]=B([n.snack[t],n[t]],n.snack.key),r))}),{});return o.a.createElement(l.a,{unmountOnExit:!0,timeout:175,in:s,onExited:re.onExited},o.a.createElement(K,Object.assign({},M,Y,{open:A,className:Object(i.a)(t.root,G.wrappedRoot,t[C(V)]),onClose:d}),o.a.createElement(J,Object.assign({appear:!0,in:A,timeout:$},ee,{onExit:re.onExit,onExiting:re.onExiting,onExited:function(){a.current=setTimeout((function(){u(!s)}),125)},onEnter:re.onEnter,onEntering:re.onEntering,onEntered:B([re.onEntered,function(){n.snack.requestClose&&d(null,k.INSTRCUTED)}])}),ne||o.a.createElement(D,Object.assign({},Q,{role:"alert",style:f,className:Object(i.a)(G.contentRoot,G[S(N)],t[S(N)],v,I,!h&&Z&&G.lessPadding)}),o.a.createElement("div",{id:Q["aria-describedby"],className:G.message},h?null:Z,_),te&&o.a.createElement("div",{className:G.action},te)))))},Z="& > .MuiCollapse-container, & > .MuiCollapse-root",Q="& > .MuiCollapse-container > .MuiCollapse-wrapper, & > .MuiCollapse-root > .MuiCollapse-wrapper",J="SnackbarContainer",$={root:J+"-root",rootDense:J+"-rootDense",top:J+"-top",bottom:J+"-bottom",left:J+"-left",right:J+"-right",center:J+"-center"},ee=Object(s.a)("div")((function(e){var t,n,r,o,a,i,c=e.theme;return(i={})["&."+$.root]=((t={boxSizing:"border-box",display:"flex",maxHeight:"100%",position:"fixed",zIndex:c.zIndex.snackbar,height:"auto",width:"auto",transition:"top 300ms ease 0ms, right 300ms ease 0ms, bottom 300ms ease 0ms, left 300ms ease 0ms, margin 300ms ease 0ms, max-width 300ms ease 0ms",pointerEvents:"none"})[Z]={pointerEvents:"all"},t[Q]={padding:j.default+"px 0px",transition:"padding 300ms ease 0ms"},t.maxWidth="calc(100% - "+2*O.default+"px)",t[c.breakpoints.down("sm")]={width:"100%",maxWidth:"calc(100% - 32px)"},t),i["&."+$.rootDense]=((n={})[Q]={padding:j.dense+"px 0px"},n),i["&."+$.top]={top:O.default-j.default,flexDirection:"column"},i["&."+$.bottom]={bottom:O.default-j.default,flexDirection:"column-reverse"},i["&."+$.left]=((r={left:O.default})[c.breakpoints.up("sm")]={alignItems:"flex-start"},r[c.breakpoints.down("sm")]={left:"16px"},r),i["&."+$.right]=((o={right:O.default})[c.breakpoints.up("sm")]={alignItems:"flex-end"},o[c.breakpoints.down("sm")]={right:"16px"},o),i["&."+$.center]=((a={left:"50%",transform:"translateX(-50%)"})[c.breakpoints.up("sm")]={alignItems:"center"},a),i})),te=function(e){var t=e.className,n=e.anchorOrigin,r=e.dense,a=b(e,["className","anchorOrigin","dense"]),c=Object(i.a)($[n.vertical],$[n.horizontal],$.root,t,r&&$.rootDense);return o.a.createElement(ee,Object.assign({className:c},a))},ne=o.a.memo(te),re=function(e){var t,n,r,c,s;function u(t){var n;return(n=e.call(this,t)||this).enqueueSnackbar=function(e,t){void 0===t&&(t={});var r=t,o=r.key,a=r.preventDuplicate,i=b(r,["key","preventDuplicate"]),c=L(o),s=c?o:(new Date).getTime()+Math.random(),u=function(e,t,n){return function(r){return"autoHideDuration"===r?M(e.autoHideDuration)?e.autoHideDuration:M(t.autoHideDuration)?t.autoHideDuration:x.autoHideDuration:e[r]||t[r]||n[r]}}(i,n.props,x),l=m({key:s},i,{message:e,open:!0,entered:!1,requestClose:!1,variant:u("variant"),anchorOrigin:u("anchorOrigin"),autoHideDuration:u("autoHideDuration")});return i.persist&&(l.autoHideDuration=void 0),n.setState((function(t){if(void 0===a&&n.props.preventDuplicate||a){var r=function(t){return c?t.key===o:t.message===e},i=t.queue.findIndex(r)>-1,s=t.snacks.findIndex(r)>-1;if(i||s)return t}return n.handleDisplaySnack(m({},t,{queue:[].concat(t.queue,[l])}))})),s},n.handleDisplaySnack=function(e){return e.snacks.length>=n.maxSnack?n.handleDismissOldest(e):n.processQueue(e)},n.processQueue=function(e){var t=e.queue,n=e.snacks;return t.length>0?m({},e,{snacks:[].concat(n,[t[0]]),queue:t.slice(1,t.length)}):e},n.handleDismissOldest=function(e){if(e.snacks.some((function(e){return!e.open||e.requestClose})))return e;var t=!1,r=!1;e.snacks.reduce((function(e,t){return e+(t.open&&t.persist?1:0)}),0)===n.maxSnack&&(r=!0);var o=e.snacks.map((function(e){return t||e.persist&&!r?m({},e):(t=!0,e.entered?(e.onClose&&e.onClose(null,k.MAXSNACK,e.key),n.props.onClose&&n.props.onClose(null,k.MAXSNACK,e.key),m({},e,{open:!1})):m({},e,{requestClose:!0}))}));return m({},e,{snacks:o})},n.handleEnteredSnack=function(e,t,r){if(!L(r))throw new Error("handleEnteredSnack Cannot be called with undefined key");n.setState((function(e){return{snacks:e.snacks.map((function(e){return e.key===r?m({},e,{entered:!0}):m({},e)}))}}))},n.handleCloseSnack=function(e,t,r){if(n.props.onClose&&n.props.onClose(e,t,r),t!==k.CLICKAWAY){var o=void 0===r;n.setState((function(e){var t=e.snacks,n=e.queue;return{snacks:t.map((function(e){return o||e.key===r?e.entered?m({},e,{open:!1}):m({},e,{requestClose:!0}):m({},e)})),queue:n.filter((function(e){return e.key!==r}))}}))}},n.closeSnackbar=function(e){var t=n.state.snacks.find((function(t){return t.key===e}));L(e)&&t&&t.onClose&&t.onClose(null,k.INSTRUCTED,e),n.handleCloseSnack(null,k.INSTRUCTED,e)},n.handleExitedSnack=function(e,t,r){var o=t||r;if(!L(o))throw new Error("handleExitedSnack Cannot be called with undefined key");n.setState((function(e){var t=n.processQueue(m({},e,{snacks:e.snacks.filter((function(e){return e.key!==o}))}));return 0===t.queue.length?t:n.handleDismissOldest(t)}))},n.state={snacks:[],queue:[],contextValue:{enqueueSnackbar:n.enqueueSnackbar.bind(v(n)),closeSnackbar:n.closeSnackbar.bind(v(n))}},n}return n=e,(t=u).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,u.prototype.render=function(){var e=this,t=this.state.contextValue,n=this.props,r=n.iconVariant,c=n.dense,s=void 0===c?x.dense:c,u=n.hideIconVariant,l=void 0===u?x.hideIconVariant:u,d=n.domRoot,f=n.children,p=n.classes,v=void 0===p?{}:p,g=b(n,["maxSnack","preventDuplicate","variant","anchorOrigin","iconVariant","dense","hideIconVariant","domRoot","children","classes"]),O=this.state.snacks.reduce((function(e,t){var n,r,o=(r=t.anchorOrigin,""+E(r.vertical)+E(r.horizontal)),a=e[o]||[];return m({},e,((n={})[o]=[].concat(a,[t]),n))}),{}),j=Object.keys(O).map((function(t){var n=O[t];return o.a.createElement(ne,{key:t,dense:s,anchorOrigin:n[0].anchorOrigin,className:Object(i.a)(v.containerRoot,v[w(t)])},n.map((function(t){return o.a.createElement(Y,Object.assign({},g,{key:t.key,snack:t,dense:s,iconVariant:r,hideIconVariant:l,classes:y(v),onClose:e.handleCloseSnack,onExited:B([e.handleExitedSnack,e.props.onExited]),onEntered:B([e.handleEnteredSnack,e.props.onEntered])}))})))}));return o.a.createElement(h.Provider,{value:t},f,d?Object(a.createPortal)(j,d):j)},r=u,(c=[{key:"maxSnack",get:function(){return this.props.maxSnack||x.maxSnack}}])&&p(r.prototype,c),s&&p(r,s),u}(r.Component),oe=function(){return Object(r.useContext)(h)}},822:function(e,t,n){"use strict";var r=n(6),o=n(5),a=n(3),i=n(1),c=n(7),s=n(280),u=n(95),l=n(4),d=n(14),f=n(194),p=n(64),m=n(30),b=n(26),v=n(59),h=n(68);function g(e){return Object(v.a)("MuiCollapse",e)}Object(h.a)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var O=n(2),j=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],x=Object(l.a)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((function(e){var t=e.theme,n=e.ownerState;return Object(a.a)({height:0,overflow:"hidden",transition:t.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:t.transitions.create("width")},"entered"===n.state&&Object(a.a)({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})})),E=Object(l.a)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(e,t){return t.wrapper}})((function(e){var t=e.ownerState;return Object(a.a)({display:"flex",width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),y=Object(l.a)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(e,t){return t.wrapperInner}})((function(e){var t=e.ownerState;return Object(a.a)({width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),k=i.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiCollapse"}),l=n.addEndListener,v=n.children,h=n.className,k=n.collapsedSize,w=void 0===k?"0px":k,C=n.component,S=n.easing,L=n.in,M=n.onEnter,R=n.onEntered,T=n.onEntering,A=n.onExit,D=n.onExited,I=n.onExiting,z=n.orientation,N=void 0===z?"vertical":z,H=n.style,P=n.timeout,W=void 0===P?f.b.standard:P,V=n.TransitionComponent,q=void 0===V?s.a:V,B=Object(o.a)(n,j),_=Object(a.a)({},n,{orientation:N,collapsedSize:w}),F=function(e){var t=e.orientation,n=e.classes,r={root:["root","".concat(t)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(t)],wrapperInner:["wrapperInner","".concat(t)]};return Object(u.a)(r,g,n)}(_),X=Object(m.a)(),U=i.useRef(),G=i.useRef(null),K=i.useRef(),Y="number"===typeof w?"".concat(w,"px"):w,Z="horizontal"===N,Q=Z?"width":"height";i.useEffect((function(){return function(){clearTimeout(U.current)}}),[]);var J=i.useRef(null),$=Object(b.a)(t,J),ee=function(e){return function(t){if(e){var n=J.current;void 0===t?e(n):e(n,t)}}},te=function(){return G.current?G.current[Z?"clientWidth":"clientHeight"]:0},ne=ee((function(e,t){G.current&&Z&&(G.current.style.position="absolute"),e.style[Q]=Y,M&&M(e,t)})),re=ee((function(e,t){var n=te();G.current&&Z&&(G.current.style.position="");var r=Object(p.a)({style:H,timeout:W,easing:S},{mode:"enter"}),o=r.duration,a=r.easing;if("auto"===W){var i=X.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),K.current=i}else e.style.transitionDuration="string"===typeof o?o:"".concat(o,"ms");e.style[Q]="".concat(n,"px"),e.style.transitionTimingFunction=a,T&&T(e,t)})),oe=ee((function(e,t){e.style[Q]="auto",R&&R(e,t)})),ae=ee((function(e){e.style[Q]="".concat(te(),"px"),A&&A(e)})),ie=ee(D),ce=ee((function(e){var t=te(),n=Object(p.a)({style:H,timeout:W,easing:S},{mode:"exit"}),r=n.duration,o=n.easing;if("auto"===W){var a=X.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),K.current=a}else e.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");e.style[Q]=Y,e.style.transitionTimingFunction=o,I&&I(e)}));return Object(O.jsx)(q,Object(a.a)({in:L,onEnter:ne,onEntered:oe,onEntering:re,onExit:ae,onExited:ie,onExiting:ce,addEndListener:function(e){"auto"===W&&(U.current=setTimeout(e,K.current||0)),l&&l(J.current,e)},nodeRef:J,timeout:"auto"===W?null:W},B,{children:function(e,t){return Object(O.jsx)(x,Object(a.a)({as:C,className:Object(c.a)(F.root,h,{entered:F.entered,exited:!L&&"0px"===Y&&F.hidden}[e]),style:Object(a.a)(Object(r.a)({},Z?"minWidth":"minHeight",Y),H),ownerState:Object(a.a)({},_,{state:e}),ref:$},t,{children:Object(O.jsx)(E,{ownerState:Object(a.a)({},_,{state:e}),className:F.wrapper,ref:G,children:Object(O.jsx)(y,{ownerState:Object(a.a)({},_,{state:e}),className:F.wrapperInner,children:v})})}))}}))}));k.muiSupportAuto=!0;t.a=k},864:function(e,t,n){"use strict";var r=n(1),o=n(173),a=n(463),i=n(111),c=n(2);function s(e){return e.substring(2).toLowerCase()}t.a=function(e){var t=e.children,n=e.disableReactTree,u=void 0!==n&&n,l=e.mouseEvent,d=void 0===l?"onClick":l,f=e.onClickAway,p=e.touchEvent,m=void 0===p?"onTouchEnd":p,b=r.useRef(!1),v=r.useRef(null),h=r.useRef(!1),g=r.useRef(!1);r.useEffect((function(){return setTimeout((function(){h.current=!0}),0),function(){h.current=!1}}),[]);var O=Object(o.a)(t.ref,v),j=Object(a.a)((function(e){var t=g.current;g.current=!1;var n=Object(i.a)(v.current);!h.current||!v.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,n)||(b.current?b.current=!1:(e.composedPath?e.composedPath().indexOf(v.current)>-1:!n.documentElement.contains(e.target)||v.current.contains(e.target))||!u&&t||f(e))})),x=function(e){return function(n){g.current=!0;var r=t.props[e];r&&r(n)}},E={ref:O};return!1!==m&&(E[m]=x(m)),r.useEffect((function(){if(!1!==m){var e=s(m),t=Object(i.a)(v.current),n=function(){b.current=!0};return t.addEventListener(e,j),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,j),t.removeEventListener("touchmove",n)}}}),[j,m]),!1!==d&&(E[d]=x(d)),r.useEffect((function(){if(!1!==d){var e=s(d),t=Object(i.a)(v.current);return t.addEventListener(e,j),function(){t.removeEventListener(e,j)}}}),[j,d]),Object(c.jsx)(r.Fragment,{children:r.cloneElement(t,E)})}},865:function(e,t,n){"use strict";t.a={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00"}},881:function(e,t,n){"use strict";var r=n(6),o=n(5),a=n(3),i=n(1),c=n(7),s=n(95),u=n(458),l=n(4),d=n(14),f=n(11),p=n(288),m=n(59),b=n(68);function v(e){return Object(m.a)("MuiAlert",e)}var h,g=Object(b.a)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),O=n(535),j=n(78),x=n(2),E=Object(j.a)(Object(x.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),y=Object(j.a)(Object(x.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),k=Object(j.a)(Object(x.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),w=Object(j.a)(Object(x.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),C=n(611),S=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],L=Object(l.a)(p.a,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat(Object(f.a)(n.color||n.severity))]]}})((function(e){var t=e.theme,n=e.ownerState,o="light"===t.palette.mode?u.b:u.e,i="light"===t.palette.mode?u.e:u.b,c=n.color||n.severity;return Object(a.a)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},c&&"standard"===n.variant&&Object(r.a)({color:o(t.palette[c].light,.6),backgroundColor:i(t.palette[c].light,.9)},"& .".concat(g.icon),{color:"dark"===t.palette.mode?t.palette[c].main:t.palette[c].light}),c&&"outlined"===n.variant&&Object(r.a)({color:o(t.palette[c].light,.6),border:"1px solid ".concat(t.palette[c].light)},"& .".concat(g.icon),{color:"dark"===t.palette.mode?t.palette[c].main:t.palette[c].light}),c&&"filled"===n.variant&&{color:"#fff",fontWeight:t.typography.fontWeightMedium,backgroundColor:"dark"===t.palette.mode?t.palette[c].dark:t.palette[c].main})})),M=Object(l.a)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),R=Object(l.a)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0",minWidth:0,overflow:"auto"}),T=Object(l.a)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),A={success:Object(x.jsx)(E,{fontSize:"inherit"}),warning:Object(x.jsx)(y,{fontSize:"inherit"}),error:Object(x.jsx)(k,{fontSize:"inherit"}),info:Object(x.jsx)(w,{fontSize:"inherit"})},D=i.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiAlert"}),r=n.action,i=n.children,u=n.className,l=n.closeText,p=void 0===l?"Close":l,m=n.color,b=n.icon,g=n.iconMapping,j=void 0===g?A:g,E=n.onClose,y=n.role,k=void 0===y?"alert":y,w=n.severity,D=void 0===w?"success":w,I=n.variant,z=void 0===I?"standard":I,N=Object(o.a)(n,S),H=Object(a.a)({},n,{color:m,severity:D,variant:z}),P=function(e){var t=e.variant,n=e.color,r=e.severity,o=e.classes,a={root:["root","".concat(t).concat(Object(f.a)(n||r)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return Object(s.a)(a,v,o)}(H);return Object(x.jsxs)(L,Object(a.a)({role:k,elevation:0,ownerState:H,className:Object(c.a)(P.root,u),ref:t},N,{children:[!1!==b?Object(x.jsx)(M,{ownerState:H,className:P.icon,children:b||j[D]||A[D]}):null,Object(x.jsx)(R,{ownerState:H,className:P.message,children:i}),null!=r?Object(x.jsx)(T,{ownerState:H,className:P.action,children:r}):null,null==r&&E?Object(x.jsx)(T,{ownerState:H,className:P.action,children:Object(x.jsx)(O.a,{size:"small","aria-label":p,title:p,color:"inherit",onClick:E,children:h||(h=Object(x.jsx)(C.a,{fontSize:"small"}))})}):null]}))}));t.a=D},906:function(e,t,n){"use strict";var r=n(13),o=n(6),a=n(5),i=n(3),c=n(1),s=n(7),u=n(95),l=n(864),d=n(4),f=n(30),p=n(14),m=n(96),b=n(11),v=n(526),h=n(907),g=n(59),O=n(68);function j(e){return Object(g.a)("MuiSnackbar",e)}Object(O.a)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);var x=n(2),E=["onEnter","onExited"],y=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],k=Object(d.a)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["anchorOrigin".concat(Object(b.a)(n.anchorOrigin.vertical)).concat(Object(b.a)(n.anchorOrigin.horizontal))]]}})((function(e){var t=e.theme,n=e.ownerState;return Object(i.a)({zIndex:(t.vars||t).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===n.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===n.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===n.anchorOrigin.horizontal&&{justifyContent:"flex-end"},Object(o.a)({},t.breakpoints.up("sm"),Object(i.a)({},"top"===n.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===n.anchorOrigin.horizontal&&{left:"50%",right:"auto",transform:"translateX(-50%)"},"left"===n.anchorOrigin.horizontal&&{left:24,right:"auto"},"right"===n.anchorOrigin.horizontal&&{right:24,left:"auto"})))})),w=c.forwardRef((function(e,t){var n=Object(p.a)({props:e,name:"MuiSnackbar"}),o=Object(f.a)(),d={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},g=n.action,O=n.anchorOrigin,w=(O=void 0===O?{vertical:"bottom",horizontal:"left"}:O).vertical,C=O.horizontal,S=n.autoHideDuration,L=void 0===S?null:S,M=n.children,R=n.className,T=n.ClickAwayListenerProps,A=n.ContentProps,D=n.disableWindowBlurListener,I=void 0!==D&&D,z=n.message,N=n.onBlur,H=n.onClose,P=n.onFocus,W=n.onMouseEnter,V=n.onMouseLeave,q=n.open,B=n.resumeHideDuration,_=n.TransitionComponent,F=void 0===_?v.a:_,X=n.transitionDuration,U=void 0===X?d:X,G=n.TransitionProps,K=(G=void 0===G?{}:G).onEnter,Y=G.onExited,Z=Object(a.a)(n.TransitionProps,E),Q=Object(a.a)(n,y),J=Object(i.a)({},n,{anchorOrigin:{vertical:w,horizontal:C}}),$=function(e){var t=e.classes,n=e.anchorOrigin,r={root:["root","anchorOrigin".concat(Object(b.a)(n.vertical)).concat(Object(b.a)(n.horizontal))]};return Object(u.a)(r,j,t)}(J),ee=c.useRef(),te=c.useState(!0),ne=Object(r.a)(te,2),re=ne[0],oe=ne[1],ae=Object(m.a)((function(){H&&H.apply(void 0,arguments)})),ie=Object(m.a)((function(e){H&&null!=e&&(clearTimeout(ee.current),ee.current=setTimeout((function(){ae(null,"timeout")}),e))}));c.useEffect((function(){return q&&ie(L),function(){clearTimeout(ee.current)}}),[q,L,ie]);var ce=function(){clearTimeout(ee.current)},se=c.useCallback((function(){null!=L&&ie(null!=B?B:.5*L)}),[L,B,ie]);return c.useEffect((function(){if(!I&&q)return window.addEventListener("focus",se),window.addEventListener("blur",ce),function(){window.removeEventListener("focus",se),window.removeEventListener("blur",ce)}}),[I,se,q]),c.useEffect((function(){if(q)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){e.defaultPrevented||"Escape"!==e.key&&"Esc"!==e.key||H&&H(e,"escapeKeyDown")}}),[re,q,H]),!q&&re?null:Object(x.jsx)(l.a,Object(i.a)({onClickAway:function(e){H&&H(e,"clickaway")}},T,{children:Object(x.jsx)(k,Object(i.a)({className:Object(s.a)($.root,R),onBlur:function(e){N&&N(e),se()},onFocus:function(e){P&&P(e),ce()},onMouseEnter:function(e){W&&W(e),ce()},onMouseLeave:function(e){V&&V(e),se()},ownerState:J,ref:t,role:"presentation"},Q,{children:Object(x.jsx)(F,Object(i.a)({appear:!0,in:q,timeout:U,direction:"top"===w?"down":"up",onEnter:function(e,t){oe(!1),K&&K(e,t)},onExited:function(e){oe(!0),Y&&Y(e)}},Z,{children:M||Object(x.jsx)(h.a,Object(i.a)({message:z,action:g},A))}))}))}))}));t.a=w},907:function(e,t,n){"use strict";var r=n(6),o=n(5),a=n(3),i=n(1),c=n(7),s=n(95),u=n(458),l=n(4),d=n(14),f=n(288),p=n(59),m=n(68);function b(e){return Object(p.a)("MuiSnackbarContent",e)}Object(m.a)("MuiSnackbarContent",["root","message","action"]);var v=n(2),h=["action","className","message","role"],g=Object(l.a)(f.a,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t=e.theme,n="light"===t.palette.mode?.8:.98,o=Object(u.c)(t.palette.background.default,n);return Object(a.a)({},t.typography.body2,Object(r.a)({color:t.palette.getContrastText(o),backgroundColor:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:t.shape.borderRadius,flexGrow:1},t.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288}))})),O=Object(l.a)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0"}),j=Object(l.a)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),x=i.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiSnackbarContent"}),r=n.action,i=n.className,u=n.message,l=n.role,f=void 0===l?"alert":l,p=Object(o.a)(n,h),m=n,x=function(e){var t=e.classes;return Object(s.a)({root:["root"],action:["action"],message:["message"]},b,t)}(m);return Object(v.jsxs)(g,Object(a.a)({role:f,square:!0,elevation:6,className:Object(c.a)(x.root,i),ownerState:m,ref:t},p,{children:[Object(v.jsx)(O,{className:x.message,ownerState:m,children:u}),r?Object(v.jsx)(j,{className:x.action,ownerState:m,children:r}):null]}))}));t.a=x}}]);