/*! For license information please see commons-80e950885014f4d82b89.js.LICENSE.txt */
(self.webpackChunkazino_gatsby=self.webpackChunkazino_gatsby||[]).push([[351],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var l=o.apply(null,n);l&&e.push(l)}else if("object"===a)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},7408:function(e,t,n){"use strict";var r=n(4038),o=n(1531),a=n(5900),l=n.n(a),i=n(7294),s=n(9541),c=["xl","lg","md","sm","xs"],u=i.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,u=e.as,d=void 0===u?"div":u,f=(0,o.Z)(e,["bsPrefix","className","as"]),m=(0,s.vE)(n,"col"),h=[],p=[];return c.forEach((function(e){var t,n,r,o=f[e];if(delete f[e],"object"==typeof o&&null!=o){var a=o.span;t=void 0===a||a,n=o.offset,r=o.order}else t=o;var l="xs"!==e?"-"+e:"";t&&h.push(!0===t?""+m+l:""+m+l+"-"+t),null!=r&&p.push("order"+l+"-"+r),null!=n&&p.push("offset"+l+"-"+n)})),h.length||h.push(m),i.createElement(d,(0,r.Z)({},f,{ref:t,className:l().apply(void 0,[a].concat(h,p))}))}));u.displayName="Col",t.Z=u},6187:function(e,t,n){"use strict";var r=n(4038),o=n(1531),a=n(5900),l=n.n(a),i=n(7294),s=n(9541),c=i.forwardRef((function(e,t){var n=e.bsPrefix,a=e.fluid,c=e.as,u=void 0===c?"div":c,d=e.className,f=(0,o.Z)(e,["bsPrefix","fluid","as","className"]),m=(0,s.vE)(n,"container"),h="string"==typeof a?"-"+a:"-fluid";return i.createElement(u,(0,r.Z)({ref:t},f,{className:l()(d,a?""+m+h:m)}))}));c.displayName="Container",c.defaultProps={fluid:!1},t.Z=c},994:function(e,t,n){"use strict";var r=n(4038),o=n(1531),a=n(5900),l=n.n(a),i=n(7294),s=n(9541),c=["xl","lg","md","sm","xs"],u=i.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,u=e.noGutters,d=e.as,f=void 0===d?"div":d,m=(0,o.Z)(e,["bsPrefix","className","noGutters","as"]),h=(0,s.vE)(n,"row"),p=h+"-cols",v=[];return c.forEach((function(e){var t,n=m[e];delete m[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&v.push(""+p+r+"-"+t)})),i.createElement(f,(0,r.Z)({ref:t},m,{className:l().apply(void 0,[a,h,u&&"no-gutters"].concat(v))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},9541:function(e,t,n){"use strict";n.d(t,{vE:function(){return a}});var r=n(7294),o=r.createContext({});o.Consumer,o.Provider;function a(e,t){var n=(0,r.useContext)(o);return e||n[t]||t}},1900:function(e,t,n){"use strict";var r=n(1504),o=n(7294),a=(n(8454),n(4163),n(5444),n(5529)),l=n(994),i=n(7408);n(6646);t.Z=e=>{let{data:t,location:n,list:s,mask:c,query:u,title:d}=e;const{0:f,1:m}=(0,o.useState)([]),{0:h,1:p}=(0,o.useState)([]),{0:v,1:g}=(0,o.useState)(["All"]);return(0,o.useEffect)((()=>{const e=s.reduce(((e,t)=>(e[t.group]||!t.group||(e[t.group]=!0),e)),{});p(["All"].concat((0,r.Z)(Object.keys(e))))}),[s]),(0,o.useEffect)((()=>{m(s.filter((e=>v.includes("All")||v.includes(e.group))).filter((e=>e.number.includes(u))))}),[u,v]),o.createElement("div",{className:"container"},o.createElement(l.Z,null,o.createElement(i.Z,{lg:12,className:"mb-10 text-center"},h.map((e=>o.createElement("span",{style:{cursor:"pointer",fontSize:"24px"}},o.createElement("a",{onClick:()=>g([e]),class:"page-link badge badge-secondary"},e," ")))))),o.createElement(l.Z,null,o.createElement(i.Z,{lg:12,className:"mb-10 text-center"},f.length," number found")),o.createElement(a.Z,{title:d,items:c?f.map((e=>({number:"xxxx"+e.number.slice(4)}))):f}))}},4163:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),o=(n(5444),n(1999),n(6187)),a=n(994),l=n(7408),i=n.p+"static/logo-5f1c9b323dbbe6a4d9887de445ff4141.png";var s=e=>{let{onSearch:t,onCategory:n}=e;const{0:s,1:c}=(0,r.useState)(!1);return r.createElement("div",{className:"main-header__two .position-absolute .w-100"},r.createElement("div",{className:"main-header__top"},r.createElement(o.Z,null,r.createElement("p",null),r.createElement("div",{className:"main-header__social"},r.createElement("a",{href:"https://facebook.com/mobile413","aria-label":"facebook"},r.createElement("i",{className:"fab fa-facebook-square"}))))),r.createElement("div",{className:"header-upper"},r.createElement(o.Z,null,r.createElement("div",{className:"logo-box"},r.createElement("img",{src:i,alt:"",height:"80px"})),r.createElement("div",{className:"header-info__box"},r.createElement("div",{className:"header-info__box-content"},r.createElement("div",{className:"container"},r.createElement(a.Z,null,r.createElement(l.Z,{lg:12,className:"text-center"},"function"==typeof t&&r.createElement("input",{type:"text",id:"",onChange:e=>{t&&t(e.target.value)},placeholder:"Search Here..."})))))),r.createElement("div",{className:"header-info__box"},r.createElement("i",{className:"azino-icon-calling"}),""))),s&&r.createElement(o.Z,{className:"d-flex position-relative flex-row justify-content-between"},r.createElement(l.Z,{className:"position-absolute",style:{zIndex:10,backgroundColor:"gray"}},["All","I Ching Number","Huat","ABAB","AAA"].map((e=>r.createElement("span",{style:{cursor:"pointer",fontSize:"24px"}},r.createElement("a",{onClick:()=>n&&n(e),class:"page-link badge badge-secondary"},e," ")))))))}},6646:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var r=n(1504);const o={All:()=>!0,"I Ching":e=>{let{group:t}=e;return!!["A","B","CC","C"].includes(t)},ABAB:e=>{let{number:t}=e;return t[7]===t[5]&&t[4]===t[6]},AAA:e=>{let{number:t}=e;return!!(0,r.Z)(Array(9).keys()).map((e=>`${e}${e}${e}`)).find((e=>t.includes(e)))},Huat:e=>{let{number:t}=e;return!!t.includes("888")}}},5529:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(7294),o=n(6187),a=n(994),l=n(7408),i=n.p+"static/testimonials-map-1-1-330c0afb1eb047c0468a8fb59ffd3c08.png",s=n(4038);function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=n(5750),d=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function f(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(r=e[n],o=t[n],!(r===o||d(r)&&d(o)))return!1;var r,o;return!0}var m=function(e,t){var n;void 0===t&&(t=f);var r,o=[],a=!1;return function(){for(var l=[],i=0;i<arguments.length;i++)l[i]=arguments[i];return a&&n===this&&t(l,o)||(r=e.apply(this,l),a=!0,n=this,o=l),r}},h="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function p(e){cancelAnimationFrame(e.id)}function v(e,t){var n=h();var r={id:requestAnimationFrame((function o(){h()-n>=t?e.call(null):r.id=requestAnimationFrame(o)}))};return r}var g=-1;function _(e){if(void 0===e&&(e=!1),-1===g||e){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",document.body.appendChild(t),g=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return g}var y=null;function b(e){if(void 0===e&&(e=!1),null===y||e){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var r=document.createElement("div"),o=r.style;return o.width="100px",o.height="100px",t.appendChild(r),document.body.appendChild(t),t.scrollLeft>0?y="positive-descending":(t.scrollLeft=1,y=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),y}return y}var S=function(e,t){return e};function x(e){var t,n=e.getItemOffset,o=e.getEstimatedTotalSize,a=e.getItemSize,l=e.getOffsetForIndexAndAlignment,i=e.getStartIndexForOffset,d=e.getStopIndexForStartIndex,f=e.initInstanceProps,h=e.shouldResetStyleCacheOnItemSizeChange,g=e.validateProps;return t=function(e){function t(t){var r;return(r=e.call(this,t)||this)._instanceProps=f(r.props,c(r)),r._outerRef=void 0,r._resetIsScrollingTimeoutId=null,r.state={instance:c(r),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof r.props.initialScrollOffset?r.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},r._callOnItemsRendered=void 0,r._callOnItemsRendered=m((function(e,t,n,o){return r.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:n,visibleStopIndex:o})})),r._callOnScroll=void 0,r._callOnScroll=m((function(e,t,n){return r.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:n})})),r._getItemStyle=void 0,r._getItemStyle=function(e){var t,o=r.props,l=o.direction,i=o.itemSize,s=o.layout,c=r._getItemStyleCache(h&&i,h&&s,h&&l);if(c.hasOwnProperty(e))t=c[e];else{var u=n(r.props,e,r._instanceProps),d=a(r.props,e,r._instanceProps),f="horizontal"===l||"horizontal"===s,m="rtl"===l,p=f?u:0;c[e]=t={position:"absolute",left:m?void 0:p,right:m?p:void 0,top:f?0:u,height:f?"100%":d,width:f?d:"100%"}}return t},r._getItemStyleCache=void 0,r._getItemStyleCache=m((function(e,t,n){return{}})),r._onScrollHorizontal=function(e){var t=e.currentTarget,n=t.clientWidth,o=t.scrollLeft,a=t.scrollWidth;r.setState((function(e){if(e.scrollOffset===o)return null;var t=r.props.direction,l=o;if("rtl"===t)switch(b()){case"negative":l=-o;break;case"positive-descending":l=a-n-o}return l=Math.max(0,Math.min(l,a-n)),{isScrolling:!0,scrollDirection:e.scrollOffset<o?"forward":"backward",scrollOffset:l,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._onScrollVertical=function(e){var t=e.currentTarget,n=t.clientHeight,o=t.scrollHeight,a=t.scrollTop;r.setState((function(e){if(e.scrollOffset===a)return null;var t=Math.max(0,Math.min(a,o-n));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._outerRefSetter=function(e){var t=r.props.outerRef;r._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},r._resetIsScrollingDebounced=function(){null!==r._resetIsScrollingTimeoutId&&p(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=v(r._resetIsScrolling,150)},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},(function(){r._getItemStyleCache(-1,null)}))},r}(0,u.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return I(e,t),g(e),null};var y=t.prototype;return y.scrollTo=function(e){e=Math.max(0,e),this.setState((function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},y.scrollToItem=function(e,t){void 0===t&&(t="auto");var n=this.props,r=n.itemCount,o=n.layout,a=this.state.scrollOffset;e=Math.max(0,Math.min(e,r-1));var i=0;if(this._outerRef){var s=this._outerRef;i="vertical"===o?s.scrollWidth>s.clientWidth?_():0:s.scrollHeight>s.clientHeight?_():0}this.scrollTo(l(this.props,e,t,a,this._instanceProps,i))},y.componentDidMount=function(){var e=this.props,t=e.direction,n=e.initialScrollOffset,r=e.layout;if("number"==typeof n&&null!=this._outerRef){var o=this._outerRef;"horizontal"===t||"horizontal"===r?o.scrollLeft=n:o.scrollTop=n}this._callPropsCallbacks()},y.componentDidUpdate=function(){var e=this.props,t=e.direction,n=e.layout,r=this.state,o=r.scrollOffset;if(r.scrollUpdateWasRequested&&null!=this._outerRef){var a=this._outerRef;if("horizontal"===t||"horizontal"===n)if("rtl"===t)switch(b()){case"negative":a.scrollLeft=-o;break;case"positive-ascending":a.scrollLeft=o;break;default:var l=a.clientWidth,i=a.scrollWidth;a.scrollLeft=i-l-o}else a.scrollLeft=o;else a.scrollTop=o}this._callPropsCallbacks()},y.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&p(this._resetIsScrollingTimeoutId)},y.render=function(){var e=this.props,t=e.children,n=e.className,a=e.direction,l=e.height,i=e.innerRef,c=e.innerElementType,u=e.innerTagName,d=e.itemCount,f=e.itemData,m=e.itemKey,h=void 0===m?S:m,p=e.layout,v=e.outerElementType,g=e.outerTagName,_=e.style,y=e.useIsScrolling,b=e.width,x=this.state.isScrolling,I="horizontal"===a||"horizontal"===p,E=I?this._onScrollHorizontal:this._onScrollVertical,R=this._getRangeToRender(),w=R[0],C=R[1],N=[];if(d>0)for(var O=w;O<=C;O++)N.push((0,r.createElement)(t,{data:f,key:h(O,f),index:O,isScrolling:y?x:void 0,style:this._getItemStyle(O)}));var z=o(this.props,this._instanceProps);return(0,r.createElement)(v||g||"div",{className:n,onScroll:E,ref:this._outerRefSetter,style:(0,s.Z)({position:"relative",height:l,width:b,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},_)},(0,r.createElement)(c||u||"div",{children:N,ref:i,style:{height:I?"100%":z,pointerEvents:x?"none":void 0,width:I?z:"100%"}}))},y._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],n=e[1],r=e[2],o=e[3];this._callOnItemsRendered(t,n,r,o)}if("function"==typeof this.props.onScroll){var a=this.state,l=a.scrollDirection,i=a.scrollOffset,s=a.scrollUpdateWasRequested;this._callOnScroll(l,i,s)}},y._getRangeToRender=function(){var e=this.props,t=e.itemCount,n=e.overscanCount,r=this.state,o=r.isScrolling,a=r.scrollDirection,l=r.scrollOffset;if(0===t)return[0,0,0,0];var s=i(this.props,l,this._instanceProps),c=d(this.props,s,l,this._instanceProps),u=o&&"backward"!==a?1:Math.max(1,n),f=o&&"forward"!==a?1:Math.max(1,n);return[Math.max(0,s-u),Math.max(0,Math.min(t-1,c+f)),s,c]},t}(r.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var I=function(e,t){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},E=x({getItemOffset:function(e,t){return t*e.itemSize},getItemSize:function(e,t){return e.itemSize},getEstimatedTotalSize:function(e){var t=e.itemCount;return e.itemSize*t},getOffsetForIndexAndAlignment:function(e,t,n,r,o,a){var l=e.direction,i=e.height,s=e.itemCount,c=e.itemSize,u=e.layout,d=e.width,f="horizontal"===l||"horizontal"===u?d:i,m=Math.max(0,s*c-f),h=Math.min(m,t*c),p=Math.max(0,t*c-f+c+a);switch("smart"===n&&(n=r>=p-f&&r<=h+f?"auto":"center"),n){case"start":return h;case"end":return p;case"center":var v=Math.round(p+(h-p)/2);return v<Math.ceil(f/2)?0:v>m+Math.floor(f/2)?m:v;default:return r>=p&&r<=h?r:r<p?p:h}},getStartIndexForOffset:function(e,t){var n=e.itemCount,r=e.itemSize;return Math.max(0,Math.min(n-1,Math.floor(t/r)))},getStopIndexForStartIndex:function(e,t,n){var r=e.direction,o=e.height,a=e.itemCount,l=e.itemSize,i=e.layout,s=e.width,c=t*l,u="horizontal"===r||"horizontal"===i?s:o,d=Math.ceil((u+n-c)/l);return Math.max(0,Math.min(a-1,t+d-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){e.itemSize}});var R=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),w=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},C=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=r=w(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r._lastRenderedStartIndex=-1,r._lastRenderedStopIndex=-1,r._memoizedUnloadedRanges=[],r._onItemsRendered=function(e){var t=e.visibleStartIndex,n=e.visibleStopIndex;r._lastRenderedStartIndex=t,r._lastRenderedStopIndex=n,r._ensureRowsLoaded(t,n)},r._setRef=function(e){r._listRef=e},w(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),R(t,[{key:"resetloadMoreItemsCache",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._memoizedUnloadedRanges=[],e&&this._ensureRowsLoaded(this._lastRenderedStartIndex,this._lastRenderedStopIndex)}},{key:"componentDidMount",value:function(){0}},{key:"render",value:function(){return(0,this.props.children)({onItemsRendered:this._onItemsRendered,ref:this._setRef})}},{key:"_ensureRowsLoaded",value:function(e,t){var n=this.props,r=n.isItemLoaded,o=n.itemCount,a=n.minimumBatchSize,l=void 0===a?10:a,i=n.threshold,s=void 0===i?15:i,c=function(e){for(var t=e.isItemLoaded,n=e.itemCount,r=e.minimumBatchSize,o=e.startIndex,a=e.stopIndex,l=[],i=null,s=null,c=o;c<=a;c++)t(c)?null!==s&&(l.push(i,s),i=s=null):(s=c,null===i&&(i=c));if(null!==s){for(var u=Math.min(Math.max(s,i+r-1),n-1),d=s+1;d<=u&&!t(d);d++)s=d;l.push(i,s)}if(l.length)for(;l[1]-l[0]+1<r&&l[0]>0;){var f=l[0]-1;if(t(f))break;l[0]=f}return l}({isItemLoaded:r,itemCount:o,minimumBatchSize:l,startIndex:Math.max(0,e-s),stopIndex:Math.min(o-1,t+s)});(this._memoizedUnloadedRanges.length!==c.length||this._memoizedUnloadedRanges.some((function(e,t){return c[t]!==e})))&&(this._memoizedUnloadedRanges=c,this._loadUnloadedRanges(c))}},{key:"_loadUnloadedRanges",value:function(e){for(var t=this,n=this.props.loadMoreItems||this.props.loadMoreRows,r=function(r){var o=e[r],a=e[r+1],l=n(o,a);null!=l&&l.then((function(){if(function(e){var t=e.lastRenderedStartIndex,n=e.lastRenderedStopIndex,r=e.startIndex,o=e.stopIndex;return!(r>n||o<t)}({lastRenderedStartIndex:t._lastRenderedStartIndex,lastRenderedStopIndex:t._lastRenderedStopIndex,startIndex:o,stopIndex:a})){if(null==t._listRef)return;"function"==typeof t._listRef.resetAfterIndex?t._listRef.resetAfterIndex(o,!0):("function"==typeof t._listRef._getItemStyleCache&&t._listRef._getItemStyleCache(-1),t._listRef.forceUpdate())}}))},o=0;o<e.length;o+=2)r(o)}}]),t}(r.PureComponent),N=C;function O(e){let{hasNextPage:t,isNextPageLoading:n,items:o,loadNextPage:a,sortOrder:l}=e;const i=(0,r.useRef)(null),s=(0,r.useRef)(!1);(0,r.useEffect)((()=>{i.current&&s.current&&i.current.resetloadMoreItemsCache(),s.current=!0}),[l]);const c=t?o.length+1:o.length,u=n?()=>{}:a,d=e=>!t||e<o.length,f=e=>{let t,{index:n,style:a}=e;return t=d(n)?r.createElement(r.Fragment,null,o[n]):"Loading...",r.createElement("div",{style:a},t)};return(0,r.useEffect)((()=>{var e;if(s.current)return null==i||null===(e=i.current)||void 0===e?void 0:e.resetloadMoreItemsCache()}),[o]),r.createElement(N,{ref:i,isItemLoaded:d,itemCount:c,loadMoreItems:u},(e=>{let{onItemsRendered:t,ref:n}=e;return r.createElement(E,{className:"List",height:window.innerHeight-152-41,itemCount:c,itemSize:290,onItemsRendered:t,ref:n,width:"100%"},f)}))}var z=n(8454),P=n(5444);var k=e=>{let{items:t,title:n}=e;const{0:s,1:c}=(0,r.useState)(!1);return r.createElement(z.Z,null,r.createElement("section",{className:"testimonials-one pt-90",style:{backgroundImage:`url(${i})`}},r.createElement(o.Z,null,r.createElement(O,{hasNextPage:!1,isNextPageLoading:s,items:(u=t,u.map(((e,t)=>{let{image:i,progressCount:s,raised:c,goal:u,title:d,text:f,link:m,number:h}=e;return r.createElement(o.Z,{className:"m-10"},r.createElement(a.Z,null,r.createElement(l.Z,{lg:2}),r.createElement(l.Z,{lg:8},r.createElement("div",{className:"cause-card",key:`cause-card-key-${t}`},r.createElement("div",{className:"cause-card__inner",style:{height:"260px"}},r.createElement("div",{className:"cause-card__image"},r.createElement("img",{src:i,alt:""})),r.createElement("div",{className:"p-4"},r.createElement("h2",null," ",n),r.createElement("h3",null,h),r.createElement("div",{className:"cause-card__top"}),r.createElement("h3",null,r.createElement(P.rU,{to:m},d)),r.createElement("p",null,f),r.createElement("div",{className:"cause-card__bottom"},r.createElement(P.rU,{className:"thm-btn ml-auto",to:`https://wa.me/6587413159?text=I'm%20interested%20in%20${h}`},"Check this number"),"")))))))}))),sortOrder:"asc",loadNextPage:()=>{}}))));var u}},4038:function(e,t,n){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},1531:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=commons-80e950885014f4d82b89.js.map