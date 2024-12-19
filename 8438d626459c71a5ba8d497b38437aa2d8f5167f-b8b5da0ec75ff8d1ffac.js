"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[180],{8050:function(e,n,t){t.d(n,{A:function(){return ue}});var o,r=t(8168),a=t(8587),i=t(6942),s=t.n(i),l=t(8394),c=t(7828),d=t(1625),u=t(5019);function f(e){if((!o&&0!==o||e)&&c.A){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),o=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return o}var m=t(1244),v=t(1942),p=t(6540);function h(e){var n,t,o=(n=e,(t=(0,p.useRef)(n)).current=n,t);(0,p.useEffect)((function(){return function(){return o.current()}}),[])}var g=t(5797);function b(e){void 0===e&&(e=(0,d.A)());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(t){return e.body}}var y=t(6406),E=t(1284),A=t(5556),w=t.n(A),N=t(961),k=t(8880),x=t(4103),C=t(922),R=t(8995),S=t(2660);function F(e){return"window"in e&&e.window===e?e:"nodeType"in(n=e)&&n.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var n}function O(e){var n;return F(e)||(n=e)&&"body"===n.tagName.toLowerCase()?function(e){var n=F(e)?(0,d.A)():(0,d.A)(e),t=F(e)||n.defaultView;return n.body.clientWidth<t.innerWidth}(e):e.scrollHeight>e.clientHeight}var T=["template","script","style"],D=function(e,n,t){[].forEach.call(e.children,(function(e){var o,r,a;-1===n.indexOf(e)&&(r=(o=e).nodeType,a=o.tagName,1===r&&-1===T.indexOf(a.toLowerCase()))&&t(e)}))};function H(e,n){n&&(e?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden"))}var M,P=function(){function e(e){var n=void 0===e?{}:e,t=n.hideSiblingNodes,o=void 0===t||t,r=n.handleContainerOverflow,a=void 0===r||r;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=o,this.handleContainerOverflow=a,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=f()}var n=e.prototype;return n.isContainerOverflowing=function(e){var n=this.data[this.containerIndexFromModal(e)];return n&&n.overflowing},n.containerIndexFromModal=function(e){return n=this.data,t=function(n){return-1!==n.modals.indexOf(e)},o=-1,n.some((function(e,n){return!!t(e,n)&&(o=n,!0)})),o;var n,t,o},n.setContainerStyle=function(e,n){var t={overflow:"hidden"};e.style={overflow:n.style.overflow,paddingRight:n.style.paddingRight},e.overflowing&&(t.paddingRight=parseInt((0,S.A)(n,"paddingRight")||"0",10)+this.scrollbarSize+"px"),(0,S.A)(n,t)},n.removeContainerStyle=function(e,n){Object.assign(n.style,e.style)},n.add=function(e,n,t){var o=this.modals.indexOf(e),r=this.containers.indexOf(n);if(-1!==o)return o;if(o=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,n){var t=n.dialog,o=n.backdrop;D(e,[t,o],(function(e){return H(!0,e)}))}(n,e),-1!==r)return this.data[r].modals.push(e),o;var a={modals:[e],classes:t?t.split(/\s+/):[],overflowing:O(n)};return this.handleContainerOverflow&&this.setContainerStyle(a,n),a.classes.forEach(C.A.bind(null,n)),this.containers.push(n),this.data.push(a),o},n.remove=function(e){var n=this.modals.indexOf(e);if(-1!==n){var t=this.containerIndexFromModal(e),o=this.data[t],r=this.containers[t];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.classes.forEach(R.A.bind(null,r)),this.handleContainerOverflow&&this.removeContainerStyle(o,r),this.hideSiblingNodes&&function(e,n){var t=n.dialog,o=n.backdrop;D(e,[t,o],(function(e){return H(!1,e)}))}(r,e),this.containers.splice(t,1),this.data.splice(t,1);else if(this.hideSiblingNodes){var a=o.modals[o.modals.length-1],i=a.backdrop;H(!1,a.dialog),H(!1,i)}}},n.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),I=function(e){var n;return"undefined"==typeof document?null:null==e?(0,d.A)().body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),(null==(n=e)?void 0:n.nodeType)&&e||null)};function B(e){var n=e||(M||(M=new P),M),t=(0,p.useRef)({dialog:null,backdrop:null});return Object.assign(t.current,{add:function(e,o){return n.add(t.current,e,o)},remove:function(){return n.remove(t.current)},isTopModal:function(){return n.isTopModal(t.current)},setDialogRef:(0,p.useCallback)((function(e){t.current.dialog=e}),[]),setBackdropRef:(0,p.useCallback)((function(e){t.current.backdrop=e}),[])})}var z=(0,p.forwardRef)((function(e,n){var t=e.show,o=void 0!==t&&t,i=e.role,s=void 0===i?"dialog":i,l=e.className,d=e.style,u=e.children,f=e.backdrop,m=void 0===f||f,g=e.keyboard,A=void 0===g||g,w=e.onBackdropClick,C=e.onEscapeKeyDown,R=e.transition,S=e.backdropTransition,F=e.autoFocus,O=void 0===F||F,T=e.enforceFocus,D=void 0===T||T,H=e.restoreFocus,M=void 0===H||H,P=e.restoreFocusOptions,z=e.renderDialog,U=e.renderBackdrop,_=void 0===U?function(e){return p.createElement("div",e)}:U,j=e.manager,K=e.container,L=e.containerClassName,V=e.onShow,W=e.onHide,q=void 0===W?function(){}:W,G=e.onExit,J=e.onExited,Q=e.onExiting,X=e.onEnter,Y=e.onEntering,Z=e.onEntered,$=(0,a.A)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),ee=function(e,n){var t=(0,p.useState)((function(){return I(e)})),o=t[0],r=t[1];if(!o){var a=I(e);a&&r(a)}return(0,p.useEffect)((function(){n&&o&&n(o)}),[n,o]),(0,p.useEffect)((function(){var n=I(e);n!==o&&r(n)}),[e,o]),o}(K),ne=B(j),te=(0,k.A)(),oe=(0,x.A)(o),re=(0,p.useState)(!o),ae=re[0],ie=re[1],se=(0,p.useRef)(null);(0,p.useImperativeHandle)(n,(function(){return ne}),[ne]),c.A&&!oe&&o&&(se.current=b()),R||o||ae?o&&ae&&ie(!1):ie(!0);var le=(0,v.A)((function(){if(ne.add(ee,L),ve.current=(0,E.A)(document,"keydown",fe),me.current=(0,E.A)(document,"focus",(function(){return setTimeout(de)}),!0),V&&V(),O){var e=b(document);ne.dialog&&e&&!(0,y.A)(ne.dialog,e)&&(se.current=e,ne.dialog.focus())}})),ce=(0,v.A)((function(){var e;(ne.remove(),null==ve.current||ve.current(),null==me.current||me.current(),M)&&(null==(e=se.current)||null==e.focus||e.focus(P),se.current=null)}));(0,p.useEffect)((function(){o&&ee&&le()}),[o,ee,le]),(0,p.useEffect)((function(){ae&&ce()}),[ae,ce]),h((function(){ce()}));var de=(0,v.A)((function(){if(D&&te()&&ne.isTopModal()){var e=b();ne.dialog&&e&&!(0,y.A)(ne.dialog,e)&&ne.dialog.focus()}})),ue=(0,v.A)((function(e){e.target===e.currentTarget&&(null==w||w(e),!0===m&&q())})),fe=(0,v.A)((function(e){A&&27===e.keyCode&&ne.isTopModal()&&(null==C||C(e),e.defaultPrevented||q())})),me=(0,p.useRef)(),ve=(0,p.useRef)(),pe=R;if(!ee||!(o||pe&&!ae))return null;var he=(0,r.A)({role:s,ref:ne.setDialogRef,"aria-modal":"dialog"===s||void 0},$,{style:d,className:l,tabIndex:-1}),ge=z?z(he):p.createElement("div",he,p.cloneElement(u,{role:"document"}));pe&&(ge=p.createElement(pe,{appear:!0,unmountOnExit:!0,in:!!o,onExit:G,onExiting:Q,onExited:function(){ie(!0);for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];null==J||J.apply(void 0,n)},onEnter:X,onEntering:Y,onEntered:Z},ge));var be=null;if(m){var ye=S;be=_({ref:ne.setBackdropRef,onClick:ue}),ye&&(be=p.createElement(ye,{appear:!0,in:!!o},be))}return p.createElement(p.Fragment,null,N.createPortal(p.createElement(p.Fragment,null,be,ge),ee))})),U={show:w().bool,container:w().any,onShow:w().func,onHide:w().func,backdrop:w().oneOfType([w().bool,w().oneOf(["static"])]),renderDialog:w().func,renderBackdrop:w().func,onEscapeKeyDown:w().func,onBackdropClick:w().func,containerClassName:w().string,keyboard:w().bool,transition:w().elementType,backdropTransition:w().elementType,autoFocus:w().bool,enforceFocus:w().bool,restoreFocus:w().bool,restoreFocusOptions:w().shape({preventScroll:w().bool}),onEnter:w().func,onEntering:w().func,onEntered:w().func,onExit:w().func,onExiting:w().func,onExited:w().func,manager:w().instanceOf(P)};z.displayName="Modal",z.propTypes=U;var _=Object.assign(z,{Manager:P}),j=(t(9771),t(7387)),K=t(5003),L=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",V=".sticky-top",W=".navbar-toggler",q=function(e){function n(){return e.apply(this,arguments)||this}(0,j.A)(n,e);var t=n.prototype;return t.adjustAndStore=function(e,n,t){var o,r=n.style[e];n.dataset[e]=r,(0,S.A)(n,((o={})[e]=parseFloat((0,S.A)(n,e))+t+"px",o))},t.restore=function(e,n){var t,o=n.dataset[e];void 0!==o&&(delete n.dataset[e],(0,S.A)(n,((t={})[e]=o,t)))},t.setContainerStyle=function(n,t){var o=this;if(e.prototype.setContainerStyle.call(this,n,t),n.overflowing){var r=f();(0,K.A)(t,L).forEach((function(e){return o.adjustAndStore("paddingRight",e,r)})),(0,K.A)(t,V).forEach((function(e){return o.adjustAndStore("marginRight",e,-r)})),(0,K.A)(t,W).forEach((function(e){return o.adjustAndStore("marginRight",e,r)}))}},t.removeContainerStyle=function(n,t){var o=this;e.prototype.removeContainerStyle.call(this,n,t),(0,K.A)(t,L).forEach((function(e){return o.restore("paddingRight",e)})),(0,K.A)(t,V).forEach((function(e){return o.restore("marginRight",e)})),(0,K.A)(t,W).forEach((function(e){return o.restore("marginRight",e)}))},n}(P),G=t(9988),J=t(2471),Q=(0,J.A)("modal-body"),X=p.createContext({onHide:function(){}}),Y=t(3608),Z=p.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,i=e.contentClassName,l=e.centered,c=e.size,d=e.fullscreen,u=e.children,f=e.scrollable,m=(0,a.A)(e,["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"]),v=(t=(0,Y.oU)(t,"modal"))+"-dialog",h="string"==typeof d?t+"-fullscreen-"+d:t+"-fullscreen";return p.createElement("div",(0,r.A)({},m,{ref:n,className:s()(v,o,c&&t+"-"+c,l&&v+"-centered",f&&v+"-scrollable",d&&h)}),p.createElement("div",{className:s()(t+"-content",i)},u))}));Z.displayName="ModalDialog";var $=Z,ee=(0,J.A)("modal-footer"),ne=t(3788),te=p.forwardRef((function(e,n){var t=e.bsPrefix,o=e.closeLabel,i=e.closeVariant,l=e.closeButton,c=e.onHide,d=e.className,u=e.children,f=(0,a.A)(e,["bsPrefix","closeLabel","closeVariant","closeButton","onHide","className","children"]);t=(0,Y.oU)(t,"modal-header");var m=(0,p.useContext)(X),h=(0,v.A)((function(){m&&m.onHide(),c&&c()}));return p.createElement("div",(0,r.A)({ref:n},f,{className:s()(d,t)}),u,l&&p.createElement(ne.A,{"aria-label":o,variant:i,onClick:h}))}));te.displayName="ModalHeader",te.defaultProps={closeLabel:"Close",closeButton:!1};var oe,re=te,ae=(0,t(268).A)("h4"),ie=(0,J.A)("modal-title",{Component:ae}),se={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:$};function le(e){return p.createElement(G.A,e)}function ce(e){return p.createElement(G.A,e)}var de=p.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,i=e.style,b=e.dialogClassName,y=e.contentClassName,E=e.children,A=e.dialogAs,w=e["aria-labelledby"],N=e.show,k=e.animation,x=e.backdrop,C=e.keyboard,R=e.onEscapeKeyDown,S=e.onShow,F=e.onHide,O=e.container,T=e.autoFocus,D=e.enforceFocus,H=e.restoreFocus,M=e.restoreFocusOptions,P=e.onEntered,I=e.onExit,B=e.onExiting,z=e.onEnter,U=e.onEntering,j=e.onExited,K=e.backdropClassName,L=e.manager,V=(0,a.A)(e,["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"]),W=(0,p.useState)({}),G=W[0],J=W[1],Q=(0,p.useState)(!1),Z=Q[0],$=Q[1],ee=(0,p.useRef)(!1),ne=(0,p.useRef)(!1),te=(0,p.useRef)(null),re=(0,m.A)(),ae=re[0],ie=re[1],se=(0,v.A)(F);t=(0,Y.oU)(t,"modal"),(0,p.useImperativeHandle)(n,(function(){return{get _modal(){return ae}}}),[ae]);var de=(0,p.useMemo)((function(){return{onHide:se}}),[se]);function ue(){return L||(oe||(oe=new q),oe)}function fe(e){if(c.A){var n=ue().isContainerOverflowing(ae),t=e.scrollHeight>(0,d.A)(e).documentElement.clientHeight;J({paddingRight:n&&!t?f():void 0,paddingLeft:!n&&t?f():void 0})}}var me=(0,v.A)((function(){ae&&fe(ae.dialog)}));h((function(){(0,u.A)(window,"resize",me),te.current&&te.current()}));var ve=function(){ee.current=!0},pe=function(e){ee.current&&ae&&e.target===ae.dialog&&(ne.current=!0),ee.current=!1},he=function(){$(!0),te.current=(0,g.A)(ae.dialog,(function(){$(!1)}))},ge=function(e){"static"!==x?ne.current||e.target!==e.currentTarget?ne.current=!1:F():function(e){e.target===e.currentTarget&&he()}(e)},be=(0,p.useCallback)((function(e){return p.createElement("div",(0,r.A)({},e,{className:s()(t+"-backdrop",K,!k&&"show")}))}),[k,K,t]),ye=(0,r.A)({},i,G);k||(ye.display="block");return p.createElement(X.Provider,{value:de},p.createElement(_,{show:N,ref:ie,backdrop:x,container:O,keyboard:!0,autoFocus:T,enforceFocus:D,restoreFocus:H,restoreFocusOptions:M,onEscapeKeyDown:function(e){C||"static"!==x?C&&R&&R(e):(e.preventDefault(),he())},onShow:S,onHide:F,onEnter:function(e){e&&(e.style.display="block",fe(e));for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];z&&z.apply(void 0,[e].concat(t))},onEntering:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];U&&U.apply(void 0,[e].concat(t)),(0,l.Ay)(window,"resize",me)},onEntered:P,onExit:function(e){te.current&&te.current();for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];I&&I.apply(void 0,[e].concat(t))},onExiting:B,onExited:function(e){e&&(e.style.display="");for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];j&&j.apply(void 0,t),(0,u.A)(window,"resize",me)},manager:ue(),containerClassName:t+"-open",transition:k?le:void 0,backdropTransition:k?ce:void 0,renderBackdrop:be,renderDialog:function(e){return p.createElement("div",(0,r.A)({role:"dialog"},e,{style:ye,className:s()(o,t,Z&&t+"-static"),onClick:x?ge:void 0,onMouseUp:pe,"aria-labelledby":w}),p.createElement(A,(0,r.A)({},V,{onMouseDown:ve,className:b,contentClassName:y}),E))}}))}));de.displayName="Modal",de.defaultProps=se,de.Body=Q,de.Header=re,de.Title=ie,de.Footer=ee,de.Dialog=$,de.TRANSITION_DURATION=300,de.BACKDROP_TRANSITION_DURATION=150;var ue=de},669:function(e,n,t){t.d(n,{A:function(){return v}});var o=t(6540),r=t.t(o,2),a=(t(7528),t(8168)),i=t(8587),s=t(6942),l=t.n(s),c=t(3608),d=o.forwardRef((function(e,n){var t=e.bsPrefix,r=e.variant,s=e.animation,d=e.size,u=e.children,f=e.as,m=void 0===f?"div":f,v=e.className,p=(0,i.A)(e,["bsPrefix","variant","animation","size","children","as","className"]),h=(t=(0,c.oU)(t,"spinner"))+"-"+s;return o.createElement(m,(0,a.A)({ref:n},p,{className:l()(v,h,d&&h+"-"+d,r&&"text-"+r)}),u)}));d.displayName="Spinner";var u=d,f=o.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,s=e.striped,d=e.bordered,u=e.borderless,f=e.hover,m=e.size,v=e.variant,p=e.responsive,h=(0,i.A)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),g=(0,c.oU)(t,"table"),b=l()(r,g,v&&g+"-"+v,m&&g+"-"+m,s&&g+"-striped",d&&g+"-bordered",u&&g+"-borderless",f&&g+"-hover"),y=o.createElement("table",(0,a.A)({},h,{className:b,ref:n}));if(p){var E=g+"-responsive";return"string"==typeof p&&(E=E+"-"+p),o.createElement("div",{className:E},y)}return y}));const{useState:m}=r;var v=e=>{let{items:n,onItem:t,isLoading:r,cols:a,renderItem:i}=e;return r?o.createElement("div",{className:"text-center p-2"},o.createElement(u,{animation:"border",variant:"primary"})):o.createElement("div",{style:{}},o.createElement(f,null,o.createElement("thead",{className:"thead-light"},o.createElement("tr",null,null==a?void 0:a.map((e=>o.createElement("th",{className:"border-0 align-middle"}," ",e.label," "))))),o.createElement("tbody",null,null==n?void 0:n.map(((e,n)=>o.createElement("tr",{key:n},null==a?void 0:a.map((n=>o.createElement("td",{className:"border-0  align-middle"},n.onRender?n.onRender(e):e[n.key])))))))))}}}]);
//# sourceMappingURL=8438d626459c71a5ba8d497b38437aa2d8f5167f-b8b5da0ec75ff8d1ffac.js.map