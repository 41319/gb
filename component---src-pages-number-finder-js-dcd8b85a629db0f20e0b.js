"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[993],{9906:function(e,a,t){t.d(a,{A:function(){return M}});var l=t(8168),r=t(8587),n=t(6942),i=t.n(n),s=t(6540),o=t(5556),c=t.n(o),m={type:c().string,tooltip:c().bool,as:c().elementType},d=s.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,o=e.className,c=e.type,m=void 0===c?"valid":c,d=e.tooltip,u=void 0!==d&&d,f=(0,r.A)(e,["as","className","type","tooltip"]);return s.createElement(n,(0,l.A)({},f,{ref:a,className:i()(o,m+"-"+(u?"tooltip":"feedback"))}))}));d.displayName="Feedback",d.propTypes=m;var u=d,f=t(5240),v=t(5189),p=t(3608),h=s.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.htmlFor,c=(0,r.A)(e,["bsPrefix","className","htmlFor"]),m=(0,s.useContext)(v.A).controlId;return t=(0,p.oU)(t,"form-check-label"),s.createElement("label",(0,l.A)({},c,{ref:a,htmlFor:o||m,className:i()(n,t)}))}));h.displayName="FormCheckLabel";var b=h,y=s.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,o=e.bsSwitchPrefix,c=e.inline,m=void 0!==c&&c,d=e.disabled,h=void 0!==d&&d,y=e.isValid,E=void 0!==y&&y,A=e.isInvalid,N=void 0!==A&&A,x=e.feedbackTooltip,g=void 0!==x&&x,w=e.feedback,k=e.className,I=e.style,C=e.title,F=void 0===C?"":C,S=e.type,P=void 0===S?"checkbox":S,R=e.label,L=e.children,z=e.as,U=void 0===z?"input":z,T=(0,r.A)(e,["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","as"]);n=(0,p.oU)(n,"form-check"),o=(0,p.oU)(o,"form-switch");var M=(0,s.useContext)(v.A).controlId,O=(0,s.useMemo)((function(){return{controlId:t||M}}),[M,t]),V=null!=R&&!1!==R&&!L,D=s.createElement(f.A,(0,l.A)({},T,{type:"switch"===P?"checkbox":P,ref:a,isValid:E,isInvalid:N,disabled:h,as:U}));return s.createElement(v.A.Provider,{value:O},s.createElement("div",{style:I,className:i()(k,R&&n,m&&n+"-inline","switch"===P&&o)},L||s.createElement(s.Fragment,null,D,V&&s.createElement(b,{title:F},R),(E||N)&&s.createElement(u,{type:E?"valid":"invalid",tooltip:g},w))))}));y.displayName="FormCheck",y.Input=f.A,y.Label=b;var E=y,A=(t(9771),s.forwardRef((function(e,a){var t,n,o,c=e.bsPrefix,m=e.type,d=e.size,u=e.htmlSize,f=e.id,h=e.className,b=e.isValid,y=void 0!==b&&b,E=e.isInvalid,A=void 0!==E&&E,N=e.plaintext,x=e.readOnly,g=e.as,w=void 0===g?"input":g,k=(0,r.A)(e,["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),I=(0,s.useContext)(v.A).controlId;(c=(0,p.oU)(c,"form-control"),N)?((n={})[c+"-plaintext"]=!0,t=n):((o={})[c]=!0,o[c+"-"+d]=d,t=o);return s.createElement(w,(0,l.A)({},k,{type:m,size:u,ref:a,readOnly:x,id:f||I,className:i()(h,t,y&&"is-valid",A&&"is-invalid","color"===m&&c+"-color")}))})));A.displayName="FormControl";var N=Object.assign(A,{Feedback:u}),x=s.forwardRef((function(e,a){var t=e.children,n=e.controlId,i=e.as,o=void 0===i?"div":i,c=(0,r.A)(e,["children","controlId","as"]),m=(0,s.useMemo)((function(){return{controlId:n}}),[n]);return s.createElement(v.A.Provider,{value:m},s.createElement(o,(0,l.A)({},c,{ref:a}),t))}));x.displayName="FormGroup";var g=x,w=t(3014),k=s.forwardRef((function(e,a){var t=e.as,n=void 0===t?"label":t,o=e.bsPrefix,c=e.column,m=e.srOnly,d=e.className,u=e.htmlFor,f=(0,r.A)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),h=(0,s.useContext)(v.A).controlId;o=(0,p.oU)(o,"form-label");var b="col-form-label";"string"==typeof c&&(b=b+" "+b+"-"+c);var y=i()(d,o,m&&"sr-only",c&&b);return u=u||h,c?s.createElement(w.A,(0,l.A)({as:"label",className:y,htmlFor:u},f)):s.createElement(n,(0,l.A)({ref:a,className:y,htmlFor:u},f))}));k.displayName="FormLabel",k.defaultProps={column:!1,srOnly:!1};var I=k,C=s.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=(0,r.A)(e,["bsPrefix","className"]);return t=(0,p.oU)(t,"form-range"),s.createElement("input",(0,l.A)({},o,{type:"range",ref:a,className:i()(n,t)}))}));C.displayName="FormRange";var F=C,S=s.forwardRef((function(e,a){var t=e.bsPrefix,n=e.size,o=e.htmlSize,c=e.className,m=e.isValid,d=void 0!==m&&m,u=e.isInvalid,f=void 0!==u&&u,v=(0,r.A)(e,["bsPrefix","size","htmlSize","className","isValid","isInvalid"]);return t=(0,p.oU)(t,"form-select"),s.createElement("select",(0,l.A)({},v,{size:o,ref:a,className:i()(c,t,n&&t+"-"+n,d&&"is-valid",f&&"is-invalid")}))}));S.displayName="FormSelect";var P=S,R=s.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,c=void 0===o?"small":o,m=e.muted,d=(0,r.A)(e,["bsPrefix","className","as","muted"]);return t=(0,p.oU)(t,"form-text"),s.createElement(c,(0,l.A)({},d,{ref:a,className:i()(n,t,m&&"text-muted")}))}));R.displayName="FormText";var L=R,z=s.forwardRef((function(e,a){return s.createElement(E,(0,l.A)({},e,{ref:a,type:"switch"}))}));z.displayName="Switch",z.Input=E.Input,z.Label=E.Label;var U=z,T=s.forwardRef((function(e,a){var t=e.className,n=e.validated,o=e.as,c=void 0===o?"form":o,m=(0,r.A)(e,["className","validated","as"]);return s.createElement(c,(0,l.A)({},m,{ref:a,className:i()(t,n&&"was-validated")}))}));T.displayName="Form",T.Group=g,T.Control=N,T.Check=E,T.Switch=U,T.Label=I,T.Text=L,T.Range=F,T.Select=P;var M=T},5240:function(e,a,t){var l=t(8168),r=t(8587),n=t(6942),i=t.n(n),s=t(6540),o=t(5189),c=t(3608),m=s.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,m=e.className,d=e.type,u=void 0===d?"checkbox":d,f=e.isValid,v=void 0!==f&&f,p=e.isInvalid,h=void 0!==p&&p,b=e.as,y=void 0===b?"input":b,E=(0,r.A)(e,["id","bsPrefix","className","type","isValid","isInvalid","as"]),A=(0,s.useContext)(o.A).controlId;return n=(0,c.oU)(n,"form-check-input"),s.createElement(y,(0,l.A)({},E,{ref:a,type:u,id:t||A,className:i()(m,n,v&&"is-valid",h&&"is-invalid")}))}));m.displayName="FormCheckInput",a.A=m},5189:function(e,a,t){var l=t(6540).createContext({controlId:void 0});a.A=l},7009:function(e,a,t){var l=t(8587),r=t(8168),n=t(6942),i=t.n(n),s=t(6540),o=t(2471),c=t(3608),m=t(5240),d=(0,o.A)("input-group-text",{Component:"span"}),u=s.forwardRef((function(e,a){var t=e.bsPrefix,n=e.size,o=e.className,m=e.as,d=void 0===m?"div":m,u=(0,l.A)(e,["bsPrefix","size","className","as"]);return t=(0,c.oU)(t,"input-group"),s.createElement(d,(0,r.A)({ref:a},u,{className:i()(o,t,n&&t+"-"+n)}))}));u.displayName="InputGroup";var f=(0,r.A)({},u,{Text:d,Radio:function(e){return s.createElement(d,null,s.createElement(m.A,(0,r.A)({type:"radio"},e)))},Checkbox:function(e){return s.createElement(d,null,s.createElement(m.A,(0,r.A)({type:"checkbox"},e)))}});a.A=f},8550:function(e,a,t){var l;t.r(a),t.d(a,{Head:function(){return A}});var r=t(6540),n=t(4794),i=(t(5995),t(2038)),s=t(7528),o=t(134),c=t(9906),m=t(7009),d=(t(1249),t(6784)),u=t(2630),f=t(3660),v=t(6462),p=t(5909),h=t(8050),b=t(5750);const{useState:y,useEffect:E}=l||(l=t.t(r,2)),A=()=>r.createElement(s.A,{title:"Home"});a.default=()=>{const e=(0,v.useLocation)(),a=new URLSearchParams(e.search),{isLogin:t}=(0,b.A)(),[l,s]=y([]),[A,N]=y(a.get("search")||""),[x,g]=y([]),[w,k]=y([]),[I,C]=y(null),[F,S]=y(!1),[P,R]=y(!1),[L,z]=y(null),U=async e=>{S(!0);const a=await f.A.Cloud.run("queryNumbers",{query:e});s(a.data),S(!1)};E((()=>{L&&C(r.createElement(r.Fragment,null,r.createElement("h2",{className:"text-center"},null==L?void 0:L.num),r.createElement("h2",{className:"text-center"},"Provider: ",null==L?void 0:L.sourceId),r.createElement("br",null),"Simply sign up 4 month plan under us from circles.life $30/monthly and we will help you secure this number and deliver it to you. Powerful plan which you can travel with peace of mind for romaing.",r.createElement("ul",null,r.createElement("li",null,"100GB Borderless (5G)"),r.createElement("li",null,r.createElement("b",null,"Data shared across 9 Countries")),r.createElement("li",null,"Singapore, Malaysia, Indonesia, Thailand, Taiwan, Hong Kong, Macau, Sri Lanka & Bangladesh"),r.createElement("li",null,r.createElement("b",null,"* Unlimited Local Talktime (Incoming & Outgoing)")),r.createElement("li",null,"* 25 SMS"))))}),[L]);["admin","user"].includes(null==t?void 0:t.role);r.useEffect((()=>{U(A),(async()=>{R(!0);const e=await f.A.Cloud.run("getMySuggestedNumber");g(e.checklist),k(e.suggestion),R(!1)})()}),[]);const T=async e=>{const a=await f.A.Cloud.run("querySpecificNumber",{_id:e._id});z(a)},M=()=>{z(null)},O=[{label:"Number",key:"num"},{label:"Last Seen",key:"date"},{label:"See",onRender:e=>r.createElement(o.A,{onClick:()=>T(e)},r.createElement(d.g,{icon:u.pS3}))}];return r.createElement(i.A,{afterSearch:r.createElement(r.Fragment,null)},r.createElement("h3",{className:"text-center"},"SG Mobile Number Finding"),r.createElement("h2",{className:"text-center"},r.createElement("a",{style:{color:"#25D366",textDecoration:"none"},href:`https://api.whatsapp.com/send?phone=6587413159&text=^${null==L?void 0:L.num}`},"whatsapp")," us to access our number list"),r.createElement("h3",null,"Monitoring List - ",r.createElement("span",{style:{color:"red"}},"We will Give You First Hand Information on your Monitoring List.")),r.createElement("h4",null," "),r.createElement("div",null,r.createElement("h4",null,x.join(", ")),r.createElement(p.A,{cols:O,isLoading:P,items:w,onItem:e=>{T(e)}})),r.createElement("h3",null,"Free Search For Other Number"),r.createElement("div",{className:"d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4 flex-column"},r.createElement(c.A,{className:""},r.createElement(c.A.Group,{id:"topbarSearch"},r.createElement(m.A,{className:"input-group-merge search-bar"},r.createElement(m.A.Text,null,r.createElement(d.g,{icon:u.MjD})),r.createElement(c.A.Control,{type:"text",name:"search",placeholder:"Search",value:A,onChange:e=>N(e.target.value)}),r.createElement(o.A,{onClick:async()=>{await U(A)},variant:"primary",size:"sm",className:"me-2"},"Find")))),r.createElement(p.A,{cols:O,isLoading:F,items:l,onItem:e=>T&&T(e)})),r.createElement(h.A,{as:h.A.Dialog,centered:!0,show:L,onHide:M},r.createElement(h.A.Header,null,r.createElement(h.A.Title,{className:"h6"},"Information"),r.createElement(o.A,{variant:"close","aria-label":"Close",onClick:M})),r.createElement(h.A.Body,null,I),r.createElement(h.A.Footer,null,r.createElement(o.A,{variant:"link",className:"text-gray ms-auto",onClick:M},"Close"),r.createElement(o.A,{variant:"#25D366",style:{backgroundColor:"#25D366",textDecoration:"none"},as:n.Link,to:`https://api.whatsapp.com/send?phone=6587413159&text=Enquiry on ${null==L?void 0:L.num}`},"Whatapps Us"))))}}}]);
//# sourceMappingURL=component---src-pages-number-finder-js-dcd8b85a629db0f20e0b.js.map