(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3B23":function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,o.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var o=a(n("RGQ0"));e.exports=t.default},"60Bi":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=r(n("q1tI")),s=r(n("Si88"));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1},n.closeModal=n.closeModal.bind(n),n.updateFocus=n.updateFocus.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"==typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"getQueryString",value:function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&null!==e[n]&&(t+=n+"="+e[n]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):"custom"===e.channel?e.url:void 0}},{key:"getPadding",value:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},{key:"render",value:function(){var e=this,t={paddingBottom:this.getPadding(this.props.ratio)};return o.default.createElement(s.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},(function(){return e.state.isOpen?o.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},o.default.createElement("div",{className:e.props.classNames.modalVideoBody},o.default.createElement("div",{className:e.props.classNames.modalVideoInner},o.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:t},o.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),e.props.children||o.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null}))}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),t}(o.default.Component);t.default=i,i.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",mute:0},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just openned the modal video",dismissBtnMessage:"Close the modal by clicking here"}}},"9IcX":function(e,t,n){"use strict";function a(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=a(e.className,t):e.setAttribute("class",a(e.className&&e.className.baseVal||"",t))}},RGQ0:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},S3Uj:function(e,t,n){"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n("17x9")),o=i(n("q1tI")),s=i(n("i8i4")),r=n("94VI");n("xfxO");function i(e){return e&&e.__esModule?e:{default:e}}t.UNMOUNTED="unmounted";t.EXITED="exited";t.ENTERING="entering";t.ENTERED="entered";t.EXITING="exiting";var l=function(e){var t,n;function a(t,n){var a;a=e.call(this,t,n)||this;var o,s=n.transitionGroup,r=s&&!s.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?r?(o="exited",a.appearStatus="entering"):o="entered":o=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",a.state={status:o},a.nextCallback=null,a}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=a.prototype;return r.getChildContext=function(){return{transitionGroup:null}},a.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null},r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!=typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},r.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=s.default.findDOMNode(this);"entering"===t?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},r.performEnter=function(e,t){var n=this,a=this.props.enter,o=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,s=this.getTimeouts(),r=o?s.appear:s.enter;t||a?(this.props.onEnter(e,o),this.safeSetState({status:"entering"},(function(){n.props.onEntering(e,o),n.onTransitionEnd(e,r,(function(){n.safeSetState({status:"entered"},(function(){n.props.onEntered(e,o)}))}))}))):this.safeSetState({status:"entered"},(function(){n.props.onEntered(e)}))},r.performExit=function(e){var t=this,n=this.props.exit,a=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,a.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var a=null==t&&!this.props.addEndListener;e&&!a?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},r.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,a=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children"]);if(delete a.in,delete a.mountOnEnter,delete a.unmountOnExit,delete a.appear,delete a.enter,delete a.exit,delete a.timeout,delete a.addEndListener,delete a.onEnter,delete a.onEntering,delete a.onEntered,delete a.onExit,delete a.onExiting,delete a.onExited,"function"==typeof n)return n(e,a);var s=o.default.Children.only(n);return o.default.cloneElement(s,a)},a}(o.default.Component);function u(){}l.contextTypes={transitionGroup:a.object},l.childContextTypes={transitionGroup:function(){}},l.propTypes={},l.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:u,onEntering:u,onEntered:u,onExit:u,onExiting:u,onExited:u},l.UNMOUNTED=0,l.EXITED=1,l.ENTERING=2,l.ENTERED=3,l.EXITING=4;var c=(0,r.polyfill)(l);t.default=c},Si88:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}t.default=e}(n("17x9"));var a=i(n("3B23")),o=i(n("9IcX")),s=i(n("q1tI")),r=i(n("S3Uj"));n("xfxO");function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,a.default)(e,t)}))},c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,o.default)(e,t)}))},d=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).onEnter=function(e,n){var a=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),u(e,a),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var a=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,a),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var a=t.getClassNames("appear").doneClassName,o=t.getClassNames("enter").doneClassName,s=n?a+" "+o:o;t.removeClasses(e,n?"appear":"enter"),u(e,s),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),u(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),u(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,a="string"==typeof n,o=a?(a&&n?n+"-":"")+e:n[e];return{className:o,activeClassName:a?o+"-active":n[e+"Active"],doneClassName:a?o+"-done":n[e+"Done"]}},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.removeClasses=function(e,t){var n=this.getClassNames(t),a=n.className,o=n.activeClassName,s=n.doneClassName;a&&c(e,a),o&&c(e,o),s&&c(e,s)},o.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,u(e,t))},o.render=function(){var e=l({},this.props);return delete e.classNames,s.default.createElement(r.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(s.default.Component);d.defaultProps={classNames:""},d.propTypes={};var p=d;t.default=p,e.exports=t.default},bgEZ:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),s=n("YVwf"),r=n.n(s),i=n("r6Fz"),l=n.n(i);n("p6Nx");t.a=function(){var e={slidesPerView:5,loop:!0,speed:1e3,spaceBetween:30,autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{1024:{slidesPerView:5},768:{slidesPerView:4},640:{slidesPerView:3},320:{slidesPerView:2}}};return o.a.createElement("section",{className:"brand-two "},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"block-title"},o.a.createElement("h2",{className:"block-title__title"},"Our company & partners")),o.a.createElement("div",{className:"brand-one__carousel"},o.a.createElement(r.a,e,o.a.createElement("div",{className:"item"},o.a.createElement("img",{src:l.a,alt:""})),o.a.createElement("div",{className:"item"},o.a.createElement("img",{src:l.a,alt:""})),o.a.createElement("div",{className:"item"},o.a.createElement("img",{src:l.a,alt:""})),o.a.createElement("div",{className:"item"},o.a.createElement("img",{src:l.a,alt:""})),o.a.createElement("div",{className:"item"},o.a.createElement("img",{src:l.a,alt:""})),o.a.createElement("div",{className:"item"},o.a.createElement("img",{src:l.a,alt:""})),o.a.createElement("div",{className:"item"},o.a.createElement("img",{src:l.a,alt:""})),o.a.createElement("div",{className:"item"},o.a.createElement("img",{src:l.a,alt:""})),o.a.createElement("div",{className:"item"},o.a.createElement("img",{src:l.a,alt:""})),o.a.createElement("div",{className:"item"},o.a.createElement("img",{src:l.a,alt:""}))))))}},r6Fz:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAAYBAMAAAAoiZ+4AAAAGFBMVEXMzMyWlpa+vr6xsbGjo6PFxcWcnJyqqqpHU4yCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAVUlEQVQ4jWNgGAWjYLgAJmFn9mIgzezMoEiGdmaRsKAwhtICljAGQ3KsFzBnFWYIU2AwZ2YkR7twQWggUDtzAaNgARnaxcrZnYGOZytnIMv2UTCcAQBhYwmdJV68YQAAAABJRU5ErkJggg=="},xfxO:function(e,t,n){"use strict";t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0;var a;(a=n("17x9"))&&a.__esModule;t.timeoutsShape=null;t.classNamesShape=null}}]);
//# sourceMappingURL=39679e557fd352a594c061f6900159a62ba1b45b-ab67d29601bb459605d5.js.map