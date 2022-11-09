/*! For license information please see 3f27271ed0ff9cc272561f9d10c7a00493d8de8e-b93ec7e7001b338ae10a.js.LICENSE.txt */
(self.webpackChunkinweb=self.webpackChunkinweb||[]).push([[83],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},6494:function(e){"use strict";e.exports=Object.assign},9541:function(e,t,n){"use strict";n.d(t,{Hz:function(){return a},cs:function(){return o},pi:function(){return l},vE:function(){return c},zG:function(){return u}});var r=n(7294);n(5893);var a=["xxl","xl","lg","md","sm","xs"],o="xs",i=r.createContext({prefixes:{},breakpoints:a,minBreakpoint:o});i.Consumer,i.Provider;function c(e,t){var n=(0,r.useContext)(i).prefixes;return e||n[t]||t}function l(){return(0,r.useContext)(i).breakpoints}function u(){return(0,r.useContext)(i).minBreakpoint}},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!o(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!o(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!o(e[u[l]],i[u[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.r(t),n.d(t,{Helmet:function(){return he}});var r,a,o,i,c=n(5697),l=n.n(c),u=n(4839),s=n.n(u),f=n(2993),d=n.n(f),m=n(7294),p=n(6494),h=n.n(p),y="bodyAttributes",v="htmlAttributes",g="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(b).map((function(e){return b[e]})),"charset"),w="cssText",T="href",O="http-equiv",_="innerHTML",C="itemprop",x="name",j="property",N="rel",A="src",S="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",L="defer",I="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",D=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),H=[b.NOSCRIPT,b.SCRIPT,b.STYLE],B="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Q(e,b.TITLE),n=Q(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,P);return t||r||void 0},W=function(e){return Q(e,M)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===N&&"canonical"===e[n].toLowerCase()||l===N&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==_&&c!==w&&c!==C||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=h()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;le(b.BODY,r),le(b.HTML,a),ce(f,d);var m={baseTag:ue(b.BASE,n),linkTags:ue(b.LINK,o),metaTags:ue(b.META,i),noscriptTags:ue(b.NOSCRIPT,c),scriptTags:ue(b.SCRIPT,u),styleTags:ue(b.STYLE,s)},p={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),l(e,p,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(b.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(B):n.getAttribute(B)!==i.join(",")&&n.setAttribute(B,i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===_)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[k[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,a=fe(n,r),[m.createElement(b.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case v:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=k[e]||e;if(n===_||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===_||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(b.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(v,a,r),link:de(b.LINK,o,r),meta:de(b.META,i,r),noscript:de(b.NOSCRIPT,c,r),script:de(b.SCRIPT,l,r),style:de(b.STYLE,u,r),title:de(b.TITLE,{title:f,titleAttributes:d},r)}},pe=s()((function(e){return{baseTag:V([T,S],e),bodyAttributes:$(y,e),defer:Q(e,L),encode:Q(e,I),htmlAttributes:$(v,e),linkTags:J(b.LINK,[N,T],e),metaTags:J(b.META,[x,E,O,j,C],e),noscriptTags:J(b.NOSCRIPT,[_],e),onChangeClientState:W(e),scriptTags:J(b.SCRIPT,[A,_],e),styleTags:J(b.STYLE,[w],e),title:G(e),titleAttributes:$(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),me)((function(){return null})),he=(a=pe,i=o=function(e){function t(){return U(this,t),Z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[q({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TITLE:return q({},a,((t={})[r.type]=i,t.titleAttributes=q({},o),t));case b.BODY:return q({},a,{bodyAttributes:q({},o)});case b.HTML:return q({},a,{htmlAttributes:q({},o)})}return q({},a,((n={})[r.type]=q({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=q({},t);return Object.keys(e).forEach((function(t){var r;n=q({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(z(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=q({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.createElement(a,r)},Y(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind,t.default=he},4839:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},6549:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.Helmet=void 0;var a=r(n(7071)),o=r(n(7294)),i=n(5414),c=n(8112),l=["children"];t.Helmet=function(e){var t=e.children,n=(0,a.default)(e,l),r=(0,c.useI18next)(),u=r.languages,s=r.language,f=r.originalPath,d=r.defaultLanguage,m=r.siteUrl,p=void 0===m?"":m,h=function(e){var t=p+(e===d?"":"/"+e)+f;return t.endsWith("/")?t:t+"/"};return o.default.createElement(i.Helmet,n,o.default.createElement("html",{lang:s}),o.default.createElement("link",{rel:"canonical",href:h(s)}),u.map((function(e){return o.default.createElement("link",{rel:"alternate",key:e,href:h(e),hrefLang:e})})),o.default.createElement("link",{rel:"alternate",href:h(d),hrefLang:"x-default"}),t)}},2562:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.Link=void 0;var a=r(n(434)),o=r(n(7071)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(7294)),c=n(9402),l=n(1597),u=n(7610),s=["language","to","onClick"];function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var d=i.default.forwardRef((function(e,t){var n=e.language,r=e.to,f=e.onClick,d=(0,o.default)(e,s),m=(0,i.useContext)(c.I18nextContext),p=n||m.language,h=""+function(e){return m.generateDefaultLanguagePage||e!==m.defaultLanguage?"/"+e:""}(p)+r;return i.default.createElement(l.Link,(0,a.default)({},d,{to:h,innerRef:t,hrefLang:p,onClick:function(e){n&&localStorage.setItem(u.LANGUAGE_KEY,n),f&&f(e)}}))}));t.Link=d},531:function(e,t,n){"use strict";t.__esModule=!0;var r=n(549);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}));var a=n(9402);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||(t[e]=a[e]))}));var o=n(8112);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||(t[e]=o[e]))}));var i=n(2562);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}));var c=n(6549);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===c[e]||(t[e]=c[e]))}))},8112:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.useI18next=void 0;var a=r(n(434)),o=n(549),i=n(7294),c=n(1597),l=n(9402),u=n(7610);t.useI18next=function(e,t){var n=(0,o.useTranslation)(e,t),r=n.i18n,s=n.t,f=n.ready,d=(0,i.useContext)(l.I18nextContext),m=d.routed,p=d.defaultLanguage,h=d.generateDefaultLanguagePage,y=function(e){return h||e!==p?"/"+e:""};return(0,a.default)({},d,{i18n:r,t:s,ready:f,navigate:function(e,t){var n=y(d.language),r=m?""+n+e:""+e;return(0,c.navigate)(r,t)},changeLanguage:function(e,t,n){var r=""+y(e)+(t||function(e){if(!m)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;return localStorage.setItem(u.LANGUAGE_KEY,e),(0,c.navigate)(r,n)}})}},7782:function(e,t,n){e.exports=n(531)},1018:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(7294),a=n(1597),o=n(3652),i=n(4118),c=n(4942),l=n(5987),u=n(5900),s=n.n(u),f=n(9541),d=n(5893),m=["bsPrefix","variant","animation","size","as","className"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=r.forwardRef((function(e,t){var n=e.bsPrefix,r=e.variant,a=e.animation,o=e.size,i=e.as,c=void 0===i?"div":i,u=e.className,p=(0,l.Z)(e,m);n=(0,f.vE)(n,"spinner");var y="".concat(n,"-").concat(a);return(0,d.jsx)(c,h(h({ref:t},p),{},{className:s()(u,y,o&&"".concat(y,"-").concat(o),r&&"text-".concat(r))}))}));y.displayName="Spinner";var v=y,g=n(7782),b=function(e){e.username,e.roles,e.profile;var t=(0,g.useTranslation)().t;return r.createElement(r.Fragment,null,r.createElement("header",null,r.createElement("div",{className:"header__area"},r.createElement("div",{className:"header__top d-none d-sm-block"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row align-items-center"},r.createElement("div",{className:"col-xl-6 col-lg-6 col-md-5 d-none d-md-block"},r.createElement("div",{className:"header__welcome"},r.createElement("span",null))),r.createElement("div",{className:"col-xl-6 col-lg-6 col-md-7"},r.createElement("div",{className:"header__action d-flex justify-content-center justify-content-md-end"},r.createElement("ul",null,r.createElement("li",null,r.createElement("select",null,r.createElement("option",null,"Malaysia"))))))))),r.createElement("div",{className:"header__info"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row align-items-center"},r.createElement("div",{className:"col-xl-4 col-lg-3"},r.createElement("div",{className:"header__info-left d-flex justify-content-center justify-content-sm-between align-items-center"},r.createElement("div",{className:"logo"},r.createElement("a",{href:"index.html"},r.createElement("h2",null,"GroupBuy"))),r.createElement("div",{className:"header__hotline align-items-center d-none d-sm-flex  d-lg-none d-xl-flex"},r.createElement("div",{className:"header__hotline-icon"},r.createElement("i",{className:"fal fa-headset"})),r.createElement("div",{className:"header__hotline-info"},r.createElement("span",null,"Hotline Free:"),r.createElement("h6",null,r.createElement("a",{href:"tel:06-900-6789-00"}," ",t("myHotline"))),r.createElement("h6",null,r.createElement("a",{href:"tel:06-900-6789-00"}," ",t("sgHotline"))))))),r.createElement("div",{className:"col-xl-8 col-lg-9"},r.createElement("div",{className:"header__info-right"},r.createElement("div",{className:"header__search f-left d-none d-sm-block"},r.createElement("form",{action:"#"},r.createElement("div",{className:"header__search-box"},r.createElement("input",{type:"text",placeholder:"Search For Products..."}),r.createElement("button",{type:"submit"},"Search")))),r.createElement("div",{className:"cart__mini-wrapper d-none d-md-flex f-right p-relative"},r.createElement("a",{href:"javascript:void(0);",className:"cart__toggle"},r.createElement("span",{className:"cart__total-item"},"01")),r.createElement("span",{className:"cart__content"},r.createElement("span",{className:"cart__my"},"My Cart:"),r.createElement("span",{className:"cart__total-price"},"$ 255.00")),r.createElement("div",{className:"cart__mini"},r.createElement("div",{className:"cart__close"},r.createElement("button",{type:"button",className:"cart__close-btn"},r.createElement("i",{className:"fal fa-times"}))),r.createElement("ul",null,r.createElement("li",null,r.createElement("div",{className:"cart__title"},r.createElement("h4",null,"My Cart"),r.createElement("span",null,"(1 Item in Cart)"))),r.createElement("li",null,r.createElement("div",{className:"cart__item d-flex justify-content-between align-items-center"},r.createElement("div",{className:"cart__inner d-flex"},r.createElement("div",{className:"cart__thumb"},r.createElement("a",{href:"product-details.html"},r.createElement("img",{src:"assets/img/shop/product/cart/cart-mini-1.jpg",alt:""}))),r.createElement("div",{className:"cart__details"},r.createElement("h6",null,r.createElement("a",{href:"product-details.html"}," ","Samsung C49J89: £875, Debenhams Plus"," ")),r.createElement("div",{className:"cart__price"},r.createElement("span",null,"$255.00")))),r.createElement("div",{className:"cart__del"},r.createElement("a",{href:"#"},r.createElement("i",{className:"fal fa-trash-alt"}))))),r.createElement("li",null,r.createElement("div",{className:"cart__sub d-flex justify-content-between align-items-center"},r.createElement("h6",null,"Car Subtotal"),r.createElement("span",{className:"cart__sub-total"},"$255.00"))),r.createElement("li",null,r.createElement("a",{href:"checkout.html",className:"t-y-btn w-100 mb-10"},"Proceed to checkout"),r.createElement("a",{href:"cart.html",className:"t-y-btn t-y-btn-border w-100 mb-10"},"view add edit cart")))))))))))))},E=(n(3494).default.i.withConfig({displayName:"Footer__Icon",componentId:"sc-16ltd3w-0"})(["position:fixed;right:40px;bottom:40px;font-size:48px;cursor:pointer;color:#075e54;"]),function(e){e.children,e.imgUrl,e.height,e.width;return r.createElement(r.Fragment,null,r.createElement("section",{className:"back-btn-top"},r.createElement("div",{className:"container-fluid p-0"},r.createElement("div",{className:"row gx-0"},r.createElement("div",{className:"col-xl-12"},r.createElement("div",{id:"scroll",className:"back-to-top-btn text-center"},r.createElement("a",{href:"javascript:void(0);"},"back to top")))))),r.createElement("footer",null,r.createElement("div",{className:"footer__area footer-bg"},r.createElement("div",{className:"footer__copyright pt-30 pb-35 footer-bottom-bg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row align-items-center"},r.createElement("div",{className:"col-xl-6 col-lg-6"},r.createElement("div",{className:"footer__copyright-text"},r.createElement("p",null,"Copyright © ",r.createElement("a",{href:"index.html"},"Groupbuy.")," All Rights Reserved.")))))))))}),w=["/signup","/login","/reset","/signup/","/login/","/reset/"],T=function(e){var t,n=e.children,c=r.useEffect,l=r.useState,u=l([]),s=u[0],f=u[1],d=l(null),m=d[0],p=d[1],h=((0,g.useTranslation)().t,r.useState(!1)),y=h[0],T=h[1],O=r.useState({theme:"",showLoading:function(e){T(e)}}),_=O[0],C=(O[1],null===i.c||void 0===i.c||null===(t=i.c.User)||void 0===t?void 0:t.current()),x=!!C;return c((function(){var e="undefined"!=typeof window?window.location.pathname:"";x&&(w.includes(e)&&x&&(console.log(e),(0,a.navigate)("/")),i.c.Cloud.run("getMyRole").then((function(e){f(e)})),i.c.Cloud.run("getMyProfile").then((function(e){p(e)})))}),[]),r.createElement(o.Z.Provider,{value:_},r.createElement(b,{roles:s,profile:null==m?void 0:m.get("data"),username:x&&C.get("email")}),r.createElement("main",null,n,y&&r.createElement("div",{className:"spotlight"},r.createElement(v,{animation:"border",role:"status"},r.createElement("span",{className:"visually-hidden"},"Loading...")))),r.createElement(E,null))}},3652:function(e,t,n){"use strict";var r=n(7294);t.Z=r.createContext({theme:"test2",showLoading:function(){console.log("default")}})},4942:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},5987:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(3366);function a(e,t){if(null==e)return{};var n,a,o=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},3366:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=3f27271ed0ff9cc272561f9d10c7a00493d8de8e-b93ec7e7001b338ae10a.js.map