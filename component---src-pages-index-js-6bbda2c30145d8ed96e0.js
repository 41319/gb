/*! For license information please see component---src-pages-index-js-6bbda2c30145d8ed96e0.js.LICENSE.txt */
(self.webpackChunkazino_gatsby=self.webpackChunkazino_gatsby||[]).push([[678],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var l=a.apply(null,n);l&&e.push(l)}else if("object"===o)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},8520:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var r=n(7294),a=n(8454),o=n(5444);n(1999);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var s=n(5900),c=n.n(s),u=r.createContext({});u.Consumer,u.Provider;function d(e,t){var n=(0,r.useContext)(u);return e||n[t]||t}var f=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.fluid,o=e.as,s=void 0===o?"div":o,u=e.className,f=i(e,["bsPrefix","fluid","as","className"]),m=d(n,"container"),h="string"==typeof a?"-"+a:"-fluid";return r.createElement(s,l({ref:t},f,{className:c()(u,a?""+m+h:m)}))}));f.displayName="Container",f.defaultProps={fluid:!1};var m=f,h=["xl","lg","md","sm","xs"],p=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,o=e.noGutters,s=e.as,u=void 0===s?"div":s,f=i(e,["bsPrefix","className","noGutters","as"]),m=d(n,"row"),p=m+"-cols",v=[];return h.forEach((function(e){var t,n=f[e];delete f[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&v.push(""+p+r+"-"+t)})),r.createElement(u,l({ref:t},f,{className:c().apply(void 0,[a,m,o&&"no-gutters"].concat(v))}))}));p.displayName="Row",p.defaultProps={noGutters:!1};var v=p,g=["xl","lg","md","sm","xs"],_=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,o=e.as,s=void 0===o?"div":o,u=i(e,["bsPrefix","className","as"]),f=d(n,"col"),m=[],h=[];return g.forEach((function(e){var t,n,r,a=u[e];if(delete u[e],"object"==typeof a&&null!=a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var l="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+f+l:""+f+l+"-"+t),null!=r&&h.push("order"+l+"-"+r),null!=n&&h.push("offset"+l+"-"+n)})),m.length||m.push(f),r.createElement(s,l({},u,{ref:t,className:c().apply(void 0,[a].concat(m,h))}))}));_.displayName="Col";var y=_,S=n.p+"static/logo-5f1c9b323dbbe6a4d9887de445ff4141.png";var b=e=>{let{onSearch:t,onCategory:n}=e;const{0:a,1:o}=(0,r.useState)(!1);return r.createElement("div",{className:"main-header__two .position-absolute .w-100"},r.createElement("div",{className:"main-header__top"},r.createElement(m,null,r.createElement("p",null),r.createElement("div",{className:"main-header__social"},r.createElement("a",{href:"https://facebook.com/mobile413","aria-label":"facebook"},r.createElement("i",{className:"fab fa-facebook-square"}))))),r.createElement("div",{className:"header-upper"},r.createElement(m,null,r.createElement("div",{className:"logo-box"},r.createElement("img",{src:S,alt:"",height:"80px"})),r.createElement("div",{className:"header-info__box"},r.createElement("div",{className:"header-info__box-content"},r.createElement("div",{className:"container"},r.createElement(v,null,r.createElement(y,{lg:12,className:"text-center"},r.createElement("input",{type:"text",id:"",onChange:e=>{t&&t(e.target.value)},placeholder:"Search Here..."})))))),r.createElement("div",{className:"header-info__box"},r.createElement("i",{className:"azino-icon-calling"}),r.createElement("div",{className:"header-info__box-content"},r.createElement("h3",null,"Phone"),r.createElement("p",null,r.createElement("a",{href:"tel:87413159"},"8741 3159")))))),a&&r.createElement(m,{className:"d-flex position-relative flex-row justify-content-between"},r.createElement(y,{className:"position-absolute",style:{zIndex:10,backgroundColor:"gray"}},["All","I Ching Number","Huat","ABAB","AAA"].map((e=>r.createElement("span",{style:{cursor:"pointer",fontSize:"24px"}},r.createElement("a",{onClick:()=>n&&n(e),class:"page-link badge badge-secondary"},e," ")))))))},x=n.p+"static/testimonials-map-1-1-330c0afb1eb047c0468a8fb59ffd3c08.png";function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var E=n(5750),R=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function w(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(r=e[n],a=t[n],!(r===a||R(r)&&R(a)))return!1;var r,a;return!0}var C=function(e,t){var n;void 0===t&&(t=w);var r,a=[],o=!1;return function(){for(var l=[],i=0;i<arguments.length;i++)l[i]=arguments[i];return o&&n===this&&t(l,a)||(r=e.apply(this,l),o=!0,n=this,a=l),r}},N="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function O(e){cancelAnimationFrame(e.id)}function z(e,t){var n=N();var r={id:requestAnimationFrame((function a(){N()-n>=t?e.call(null):r.id=requestAnimationFrame(a)}))};return r}var P=-1;function k(e){if(void 0===e&&(e=!1),-1===P||e){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",document.body.appendChild(t),P=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return P}var M=null;function A(e){if(void 0===e&&(e=!1),null===M||e){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var r=document.createElement("div"),a=r.style;return a.width="100px",a.height="100px",t.appendChild(r),document.body.appendChild(t),t.scrollLeft>0?M="positive-descending":(t.scrollLeft=1,M=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),M}return M}var T=function(e,t){return e};function L(e){var t,n=e.getItemOffset,a=e.getEstimatedTotalSize,o=e.getItemSize,i=e.getOffsetForIndexAndAlignment,s=e.getStartIndexForOffset,c=e.getStopIndexForStartIndex,u=e.initInstanceProps,d=e.shouldResetStyleCacheOnItemSizeChange,f=e.validateProps;return t=function(e){function t(t){var r;return(r=e.call(this,t)||this)._instanceProps=u(r.props,I(r)),r._outerRef=void 0,r._resetIsScrollingTimeoutId=null,r.state={instance:I(r),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof r.props.initialScrollOffset?r.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},r._callOnItemsRendered=void 0,r._callOnItemsRendered=C((function(e,t,n,a){return r.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:n,visibleStopIndex:a})})),r._callOnScroll=void 0,r._callOnScroll=C((function(e,t,n){return r.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:n})})),r._getItemStyle=void 0,r._getItemStyle=function(e){var t,a=r.props,l=a.direction,i=a.itemSize,s=a.layout,c=r._getItemStyleCache(d&&i,d&&s,d&&l);if(c.hasOwnProperty(e))t=c[e];else{var u=n(r.props,e,r._instanceProps),f=o(r.props,e,r._instanceProps),m="horizontal"===l||"horizontal"===s,h="rtl"===l,p=m?u:0;c[e]=t={position:"absolute",left:h?void 0:p,right:h?p:void 0,top:m?0:u,height:m?"100%":f,width:m?f:"100%"}}return t},r._getItemStyleCache=void 0,r._getItemStyleCache=C((function(e,t,n){return{}})),r._onScrollHorizontal=function(e){var t=e.currentTarget,n=t.clientWidth,a=t.scrollLeft,o=t.scrollWidth;r.setState((function(e){if(e.scrollOffset===a)return null;var t=r.props.direction,l=a;if("rtl"===t)switch(A()){case"negative":l=-a;break;case"positive-descending":l=o-n-a}return l=Math.max(0,Math.min(l,o-n)),{isScrolling:!0,scrollDirection:e.scrollOffset<a?"forward":"backward",scrollOffset:l,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._onScrollVertical=function(e){var t=e.currentTarget,n=t.clientHeight,a=t.scrollHeight,o=t.scrollTop;r.setState((function(e){if(e.scrollOffset===o)return null;var t=Math.max(0,Math.min(o,a-n));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._outerRefSetter=function(e){var t=r.props.outerRef;r._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},r._resetIsScrollingDebounced=function(){null!==r._resetIsScrollingTimeoutId&&O(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=z(r._resetIsScrolling,150)},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},(function(){r._getItemStyleCache(-1,null)}))},r}(0,E.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return U(e,t),f(e),null};var m=t.prototype;return m.scrollTo=function(e){e=Math.max(0,e),this.setState((function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},m.scrollToItem=function(e,t){void 0===t&&(t="auto");var n=this.props,r=n.itemCount,a=n.layout,o=this.state.scrollOffset;e=Math.max(0,Math.min(e,r-1));var l=0;if(this._outerRef){var s=this._outerRef;l="vertical"===a?s.scrollWidth>s.clientWidth?k():0:s.scrollHeight>s.clientHeight?k():0}this.scrollTo(i(this.props,e,t,o,this._instanceProps,l))},m.componentDidMount=function(){var e=this.props,t=e.direction,n=e.initialScrollOffset,r=e.layout;if("number"==typeof n&&null!=this._outerRef){var a=this._outerRef;"horizontal"===t||"horizontal"===r?a.scrollLeft=n:a.scrollTop=n}this._callPropsCallbacks()},m.componentDidUpdate=function(){var e=this.props,t=e.direction,n=e.layout,r=this.state,a=r.scrollOffset;if(r.scrollUpdateWasRequested&&null!=this._outerRef){var o=this._outerRef;if("horizontal"===t||"horizontal"===n)if("rtl"===t)switch(A()){case"negative":o.scrollLeft=-a;break;case"positive-ascending":o.scrollLeft=a;break;default:var l=o.clientWidth,i=o.scrollWidth;o.scrollLeft=i-l-a}else o.scrollLeft=a;else o.scrollTop=a}this._callPropsCallbacks()},m.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&O(this._resetIsScrollingTimeoutId)},m.render=function(){var e=this.props,t=e.children,n=e.className,o=e.direction,i=e.height,s=e.innerRef,c=e.innerElementType,u=e.innerTagName,d=e.itemCount,f=e.itemData,m=e.itemKey,h=void 0===m?T:m,p=e.layout,v=e.outerElementType,g=e.outerTagName,_=e.style,y=e.useIsScrolling,S=e.width,b=this.state.isScrolling,x="horizontal"===o||"horizontal"===p,I=x?this._onScrollHorizontal:this._onScrollVertical,E=this._getRangeToRender(),R=E[0],w=E[1],C=[];if(d>0)for(var N=R;N<=w;N++)C.push((0,r.createElement)(t,{data:f,key:h(N,f),index:N,isScrolling:y?b:void 0,style:this._getItemStyle(N)}));var O=a(this.props,this._instanceProps);return(0,r.createElement)(v||g||"div",{className:n,onScroll:I,ref:this._outerRefSetter,style:l({position:"relative",height:i,width:S,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:o},_)},(0,r.createElement)(c||u||"div",{children:C,ref:s,style:{height:x?"100%":O,pointerEvents:b?"none":void 0,width:x?O:"100%"}}))},m._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],n=e[1],r=e[2],a=e[3];this._callOnItemsRendered(t,n,r,a)}if("function"==typeof this.props.onScroll){var o=this.state,l=o.scrollDirection,i=o.scrollOffset,s=o.scrollUpdateWasRequested;this._callOnScroll(l,i,s)}},m._getRangeToRender=function(){var e=this.props,t=e.itemCount,n=e.overscanCount,r=this.state,a=r.isScrolling,o=r.scrollDirection,l=r.scrollOffset;if(0===t)return[0,0,0,0];var i=s(this.props,l,this._instanceProps),u=c(this.props,i,l,this._instanceProps),d=a&&"backward"!==o?1:Math.max(1,n),f=a&&"forward"!==o?1:Math.max(1,n);return[Math.max(0,i-d),Math.max(0,Math.min(t-1,u+f)),i,u]},t}(r.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var U=function(e,t){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},j=L({getItemOffset:function(e,t){return t*e.itemSize},getItemSize:function(e,t){return e.itemSize},getEstimatedTotalSize:function(e){var t=e.itemCount;return e.itemSize*t},getOffsetForIndexAndAlignment:function(e,t,n,r,a,o){var l=e.direction,i=e.height,s=e.itemCount,c=e.itemSize,u=e.layout,d=e.width,f="horizontal"===l||"horizontal"===u?d:i,m=Math.max(0,s*c-f),h=Math.min(m,t*c),p=Math.max(0,t*c-f+c+o);switch("smart"===n&&(n=r>=p-f&&r<=h+f?"auto":"center"),n){case"start":return h;case"end":return p;case"center":var v=Math.round(p+(h-p)/2);return v<Math.ceil(f/2)?0:v>m+Math.floor(f/2)?m:v;default:return r>=p&&r<=h?r:r<p?p:h}},getStartIndexForOffset:function(e,t){var n=e.itemCount,r=e.itemSize;return Math.max(0,Math.min(n-1,Math.floor(t/r)))},getStopIndexForStartIndex:function(e,t,n){var r=e.direction,a=e.height,o=e.itemCount,l=e.itemSize,i=e.layout,s=e.width,c=t*l,u="horizontal"===r||"horizontal"===i?s:a,d=Math.ceil((u+n-c)/l);return Math.max(0,Math.min(o-1,t+d-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){e.itemSize}});var D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},q=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return n=r=W(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r._lastRenderedStartIndex=-1,r._lastRenderedStopIndex=-1,r._memoizedUnloadedRanges=[],r._onItemsRendered=function(e){var t=e.visibleStartIndex,n=e.visibleStopIndex;r._lastRenderedStartIndex=t,r._lastRenderedStopIndex=n,r._ensureRowsLoaded(t,n)},r._setRef=function(e){r._listRef=e},W(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),D(t,[{key:"resetloadMoreItemsCache",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._memoizedUnloadedRanges=[],e&&this._ensureRowsLoaded(this._lastRenderedStartIndex,this._lastRenderedStopIndex)}},{key:"componentDidMount",value:function(){0}},{key:"render",value:function(){return(0,this.props.children)({onItemsRendered:this._onItemsRendered,ref:this._setRef})}},{key:"_ensureRowsLoaded",value:function(e,t){var n=this.props,r=n.isItemLoaded,a=n.itemCount,o=n.minimumBatchSize,l=void 0===o?10:o,i=n.threshold,s=void 0===i?15:i,c=function(e){for(var t=e.isItemLoaded,n=e.itemCount,r=e.minimumBatchSize,a=e.startIndex,o=e.stopIndex,l=[],i=null,s=null,c=a;c<=o;c++)t(c)?null!==s&&(l.push(i,s),i=s=null):(s=c,null===i&&(i=c));if(null!==s){for(var u=Math.min(Math.max(s,i+r-1),n-1),d=s+1;d<=u&&!t(d);d++)s=d;l.push(i,s)}if(l.length)for(;l[1]-l[0]+1<r&&l[0]>0;){var f=l[0]-1;if(t(f))break;l[0]=f}return l}({isItemLoaded:r,itemCount:a,minimumBatchSize:l,startIndex:Math.max(0,e-s),stopIndex:Math.min(a-1,t+s)});(this._memoizedUnloadedRanges.length!==c.length||this._memoizedUnloadedRanges.some((function(e,t){return c[t]!==e})))&&(this._memoizedUnloadedRanges=c,this._loadUnloadedRanges(c))}},{key:"_loadUnloadedRanges",value:function(e){for(var t=this,n=this.props.loadMoreItems||this.props.loadMoreRows,r=function(r){var a=e[r],o=e[r+1],l=n(a,o);null!=l&&l.then((function(){if(function(e){var t=e.lastRenderedStartIndex,n=e.lastRenderedStopIndex,r=e.startIndex,a=e.stopIndex;return!(r>n||a<t)}({lastRenderedStartIndex:t._lastRenderedStartIndex,lastRenderedStopIndex:t._lastRenderedStopIndex,startIndex:a,stopIndex:o})){if(null==t._listRef)return;"function"==typeof t._listRef.resetAfterIndex?t._listRef.resetAfterIndex(a,!0):("function"==typeof t._listRef._getItemStyleCache&&t._listRef._getItemStyleCache(-1),t._listRef.forceUpdate())}}))},a=0;a<e.length;a+=2)r(a)}}]),t}(r.PureComponent),F=q;function H(e){let{hasNextPage:t,isNextPageLoading:n,items:a,loadNextPage:o,sortOrder:l}=e;const i=(0,r.useRef)(null),s=(0,r.useRef)(!1);(0,r.useEffect)((()=>{i.current&&s.current&&i.current.resetloadMoreItemsCache(),s.current=!0}),[l]);const c=t?a.length+1:a.length,u=n?()=>{}:o,d=e=>!t||e<a.length,f=e=>{let t,{index:n,style:o}=e;return t=d(n)?r.createElement(r.Fragment,null,a[n]):"Loading...",r.createElement("div",{style:o},t)};return(0,r.useEffect)((()=>{var e;if(s.current)return null==i||null===(e=i.current)||void 0===e?void 0:e.resetloadMoreItemsCache()}),[a]),r.createElement(F,{ref:i,isItemLoaded:d,itemCount:c,loadMoreItems:u},(e=>{let{onItemsRendered:t,ref:n}=e;return r.createElement(j,{className:"List",height:window.innerHeight-152-41,itemCount:c,itemSize:290,onItemsRendered:t,ref:n,width:"100%"},f)}))}var B=e=>{let{items:t,title:n}=e;const{0:l,1:i}=(0,r.useState)(!1);return r.createElement(a.Z,null,r.createElement("section",{className:"testimonials-one pt-90",style:{backgroundImage:`url(${x})`}},r.createElement(m,null,r.createElement(H,{hasNextPage:!1,isNextPageLoading:l,items:(s=t,s.map(((e,t)=>{let{image:a,progressCount:l,raised:i,goal:s,title:c,text:u,link:d,number:f}=e;return r.createElement(m,{className:"m-10"},r.createElement(v,null,r.createElement(y,{lg:2}),r.createElement(y,{lg:8},r.createElement("div",{className:"cause-card",key:`cause-card-key-${t}`},r.createElement("div",{className:"cause-card__inner",style:{height:"260px"}},r.createElement("div",{className:"cause-card__image"},r.createElement("img",{src:a,alt:""})),r.createElement("div",{className:"p-4"},r.createElement("h2",null," ",n),r.createElement("h3",null,f),r.createElement("div",{className:"cause-card__top"}),r.createElement("h3",null,r.createElement(o.rU,{to:d},c)),r.createElement("p",null,u),r.createElement("div",{className:"cause-card__bottom"},r.createElement(o.rU,{className:"thm-btn ml-auto",to:`https://wa.me/6587413159?text=I'm%20interested%20in%20${f}`},"I want this!"),"")))))))}))),sortOrder:"asc",loadNextPage:()=>{}}))));var s},$=n(1504);const Z={All:()=>!0,"I Ching":e=>{let{group:t}=e;return!!["A","B","CC","C"].includes(t)},ABAB:e=>{let{number:t}=e;return t[7]===t[5]&&t[4]===t[6]},AAA:e=>{let{number:t}=e;return!!(0,$.Z)(Array(9).keys()).map((e=>`${e}${e}${e}`)).find((e=>t.includes(e)))},Huat:e=>{let{number:t}=e;return!!t.includes("888")}};var G=e=>{let{data:t,location:n,list:a,mask:o,query:l,title:i}=e;const{0:s,1:c}=(0,r.useState)([]),{0:u,1:d}=(0,r.useState)([]),{0:f,1:m}=(0,r.useState)(["All"]);return(0,r.useEffect)((()=>{const e=a.reduce(((e,t)=>(e[t.group]||!t.group||(e[t.group]=!0),e)),{});d(["All"].concat((0,$.Z)(Object.keys(e))))}),[a]),(0,r.useEffect)((()=>{c(a.filter((e=>f.includes("All")||f.includes(e.group))).filter((e=>e.number.includes(l))))}),[l,f]),r.createElement("div",{className:"container"},r.createElement(v,null,r.createElement(y,{lg:12,className:"mb-10 text-center"},u.map((e=>r.createElement("span",{style:{cursor:"pointer",fontSize:"24px"}},r.createElement("a",{onClick:()=>m([e]),class:"page-link badge badge-secondary"},e," ")))))),r.createElement(v,null,r.createElement(y,{lg:12,className:"mb-10 text-center"},s.length," number found")),r.createElement(B,{title:i,items:o?s.map((e=>({number:"xxxx"+e.number.slice(4)}))):s}))};var V=e=>{let{data:t,location:n}=e;const{0:a,1:o}=(0,r.useState)([]),l=t.products.edges.map(((e,t)=>{let{node:n}=e;return{...n}})).map((e=>({number:e.num,group:e.type}))),{0:i,1:s}=(0,r.useState)(""),{0:c,1:u}=(0,r.useState)("All");(0,r.useEffect)((()=>{o(l.filter((e=>!!Z[c]&&Z[c](e))).filter((e=>e.number.includes(i))))}),[i,c]);const d=!!new URLSearchParams(n.search).get("mask");return r.createElement(r.Fragment,null,r.createElement(b,{onSearch:s,onCategory:u}),r.createElement(G,{list:l,mask:d,query:i,title:"Singapore Number"}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-6bbda2c30145d8ed96e0.js.map