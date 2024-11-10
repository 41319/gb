"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[993],{9906:function(e,a,t){t.d(a,{A:function(){return T}});var r=t(8168),l=t(8587),n=t(6942),i=t.n(n),s=t(6540),o=t(5556),c=t.n(o),m={type:c().string,tooltip:c().bool,as:c().elementType},d=s.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,o=e.className,c=e.type,m=void 0===c?"valid":c,d=e.tooltip,u=void 0!==d&&d,f=(0,l.A)(e,["as","className","type","tooltip"]);return s.createElement(n,(0,r.A)({},f,{ref:a,className:i()(o,m+"-"+(u?"tooltip":"feedback"))}))}));d.displayName="Feedback",d.propTypes=m;var u=d,f=t(5240),p=t(5189),v=t(3608),b=s.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.htmlFor,c=(0,l.A)(e,["bsPrefix","className","htmlFor"]),m=(0,s.useContext)(p.A).controlId;return t=(0,v.oU)(t,"form-check-label"),s.createElement("label",(0,r.A)({},c,{ref:a,htmlFor:o||m,className:i()(n,t)}))}));b.displayName="FormCheckLabel";var h=b,A=s.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,o=e.bsSwitchPrefix,c=e.inline,m=void 0!==c&&c,d=e.disabled,b=void 0!==d&&d,A=e.isValid,y=void 0!==A&&A,N=e.isInvalid,E=void 0!==N&&N,x=e.feedbackTooltip,w=void 0!==x&&x,g=e.feedback,k=e.className,I=e.style,F=e.title,C=void 0===F?"":F,P=e.type,S=void 0===P?"checkbox":P,R=e.label,L=e.children,z=e.as,U=void 0===z?"input":z,M=(0,l.A)(e,["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","as"]);n=(0,v.oU)(n,"form-check"),o=(0,v.oU)(o,"form-switch");var T=(0,s.useContext)(p.A).controlId,V=(0,s.useMemo)((function(){return{controlId:t||T}}),[T,t]),O=null!=R&&!1!==R&&!L,G=s.createElement(f.A,(0,r.A)({},M,{type:"switch"===S?"checkbox":S,ref:a,isValid:y,isInvalid:E,disabled:b,as:U}));return s.createElement(p.A.Provider,{value:V},s.createElement("div",{style:I,className:i()(k,R&&n,m&&n+"-inline","switch"===S&&o)},L||s.createElement(s.Fragment,null,G,O&&s.createElement(h,{title:C},R),(y||E)&&s.createElement(u,{type:y?"valid":"invalid",tooltip:w},g))))}));A.displayName="FormCheck",A.Input=f.A,A.Label=h;var y=A,N=(t(9771),s.forwardRef((function(e,a){var t,n,o,c=e.bsPrefix,m=e.type,d=e.size,u=e.htmlSize,f=e.id,b=e.className,h=e.isValid,A=void 0!==h&&h,y=e.isInvalid,N=void 0!==y&&y,E=e.plaintext,x=e.readOnly,w=e.as,g=void 0===w?"input":w,k=(0,l.A)(e,["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),I=(0,s.useContext)(p.A).controlId;(c=(0,v.oU)(c,"form-control"),E)?((n={})[c+"-plaintext"]=!0,t=n):((o={})[c]=!0,o[c+"-"+d]=d,t=o);return s.createElement(g,(0,r.A)({},k,{type:m,size:u,ref:a,readOnly:x,id:f||I,className:i()(b,t,A&&"is-valid",N&&"is-invalid","color"===m&&c+"-color")}))})));N.displayName="FormControl";var E=Object.assign(N,{Feedback:u}),x=s.forwardRef((function(e,a){var t=e.children,n=e.controlId,i=e.as,o=void 0===i?"div":i,c=(0,l.A)(e,["children","controlId","as"]),m=(0,s.useMemo)((function(){return{controlId:n}}),[n]);return s.createElement(p.A.Provider,{value:m},s.createElement(o,(0,r.A)({},c,{ref:a}),t))}));x.displayName="FormGroup";var w=x,g=t(3014),k=s.forwardRef((function(e,a){var t=e.as,n=void 0===t?"label":t,o=e.bsPrefix,c=e.column,m=e.srOnly,d=e.className,u=e.htmlFor,f=(0,l.A)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),b=(0,s.useContext)(p.A).controlId;o=(0,v.oU)(o,"form-label");var h="col-form-label";"string"==typeof c&&(h=h+" "+h+"-"+c);var A=i()(d,o,m&&"sr-only",c&&h);return u=u||b,c?s.createElement(g.A,(0,r.A)({as:"label",className:A,htmlFor:u},f)):s.createElement(n,(0,r.A)({ref:a,className:A,htmlFor:u},f))}));k.displayName="FormLabel",k.defaultProps={column:!1,srOnly:!1};var I=k,F=s.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=(0,l.A)(e,["bsPrefix","className"]);return t=(0,v.oU)(t,"form-range"),s.createElement("input",(0,r.A)({},o,{type:"range",ref:a,className:i()(n,t)}))}));F.displayName="FormRange";var C=F,P=s.forwardRef((function(e,a){var t=e.bsPrefix,n=e.size,o=e.htmlSize,c=e.className,m=e.isValid,d=void 0!==m&&m,u=e.isInvalid,f=void 0!==u&&u,p=(0,l.A)(e,["bsPrefix","size","htmlSize","className","isValid","isInvalid"]);return t=(0,v.oU)(t,"form-select"),s.createElement("select",(0,r.A)({},p,{size:o,ref:a,className:i()(c,t,n&&t+"-"+n,d&&"is-valid",f&&"is-invalid")}))}));P.displayName="FormSelect";var S=P,R=s.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,c=void 0===o?"small":o,m=e.muted,d=(0,l.A)(e,["bsPrefix","className","as","muted"]);return t=(0,v.oU)(t,"form-text"),s.createElement(c,(0,r.A)({},d,{ref:a,className:i()(n,t,m&&"text-muted")}))}));R.displayName="FormText";var L=R,z=s.forwardRef((function(e,a){return s.createElement(y,(0,r.A)({},e,{ref:a,type:"switch"}))}));z.displayName="Switch",z.Input=y.Input,z.Label=y.Label;var U=z,M=s.forwardRef((function(e,a){var t=e.className,n=e.validated,o=e.as,c=void 0===o?"form":o,m=(0,l.A)(e,["className","validated","as"]);return s.createElement(c,(0,r.A)({},m,{ref:a,className:i()(t,n&&"was-validated")}))}));M.displayName="Form",M.Group=w,M.Control=E,M.Check=y,M.Switch=U,M.Label=I,M.Text=L,M.Range=C,M.Select=S;var T=M},5240:function(e,a,t){var r=t(8168),l=t(8587),n=t(6942),i=t.n(n),s=t(6540),o=t(5189),c=t(3608),m=s.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,m=e.className,d=e.type,u=void 0===d?"checkbox":d,f=e.isValid,p=void 0!==f&&f,v=e.isInvalid,b=void 0!==v&&v,h=e.as,A=void 0===h?"input":h,y=(0,l.A)(e,["id","bsPrefix","className","type","isValid","isInvalid","as"]),N=(0,s.useContext)(o.A).controlId;return n=(0,c.oU)(n,"form-check-input"),s.createElement(A,(0,r.A)({},y,{ref:a,type:u,id:t||N,className:i()(m,n,p&&"is-valid",b&&"is-invalid")}))}));m.displayName="FormCheckInput",a.A=m},5189:function(e,a,t){var r=t(6540).createContext({controlId:void 0});a.A=r},7009:function(e,a,t){var r=t(8587),l=t(8168),n=t(6942),i=t.n(n),s=t(6540),o=t(2471),c=t(3608),m=t(5240),d=(0,o.A)("input-group-text",{Component:"span"}),u=s.forwardRef((function(e,a){var t=e.bsPrefix,n=e.size,o=e.className,m=e.as,d=void 0===m?"div":m,u=(0,r.A)(e,["bsPrefix","size","className","as"]);return t=(0,c.oU)(t,"input-group"),s.createElement(d,(0,l.A)({ref:a},u,{className:i()(o,t,n&&t+"-"+n)}))}));u.displayName="InputGroup";var f=(0,l.A)({},u,{Text:d,Radio:function(e){return s.createElement(d,null,s.createElement(m.A,(0,l.A)({type:"radio"},e)))},Checkbox:function(e){return s.createElement(d,null,s.createElement(m.A,(0,l.A)({type:"checkbox"},e)))}});a.A=f},8550:function(e,a,t){var r;t.r(a),t.d(a,{Head:function(){return y}});var l=t(6540),n=t(4794),i=(t(5995),t(2038)),s=t(7528),o=t(134),c=t(9906),m=t(7009),d=(t(1249),t(6784)),u=t(2630),f=t(3660),p=t(6462),v=t(5909),b=t(8050),h=t(5750);const{useState:A}=r||(r=t.t(l,2)),y=()=>l.createElement(s.A,{title:"Home"});a.default=()=>{const e=(0,p.useLocation)(),a=new URLSearchParams(e.search),{isLogin:t}=(0,h.A)(),[r,s]=A([]),[y,N]=A(a.get("search")||""),[E,x]=A([]),[w,g]=A([]),[k,I]=A(null),[F,C]=A(!1),[P,S]=A(!1),R=async e=>{C(!0);const a=await f.A.Cloud.run("queryNumbers",{query:e});s(a.data),C(!1)},L=["admin","user"].includes(null==t?void 0:t.role);l.useEffect((()=>{R(y),(async()=>{S(!0);const e=await f.A.Cloud.run("getMySuggestedNumber");x(e.checklist),g(e.suggestion),S(!1)})()}),[]);const z=async e=>{if(L){const a=await f.A.Cloud.run("querySpecificNumber",{_id:e._id});I(l.createElement(l.Fragment,null,a.num," is detected at  ",a.sourceId," on ",a.date,l.createElement("br",null),l.createElement("a",{style:{color:"#25D366",textDecoration:"none"},href:"https://api.whatsapp.com/send?phone=6587413159&text=Find Mobile Number"},"whatsapp")," us if you need help getting the number"))}else{const a="https://api.whatsapp.com/send?phone=6587413159&text="+encodeURIComponent(`Enquiry on ${e.num} with id ${e._id}`);(0,n.navigate)(a)}},U=()=>{I(null)},M=[{label:"Number",key:"num"},{label:"Last Seen",key:"date"},{label:"See",onRender:e=>l.createElement(o.A,{onClick:()=>z(e)},l.createElement(d.g,{icon:u.pS3}))}];return l.createElement(i.A,{afterSearch:l.createElement(l.Fragment,null)},l.createElement("h3",{className:"text-center"},"SG Mobile Number Finding"),l.createElement("h2",{className:"text-center"},l.createElement("a",{style:{color:"#25D366",textDecoration:"none"},href:"https://api.whatsapp.com/send?phone=6587413159&text=Find Mobile Number"},"whatsapp")," us to access our number list"),l.createElement("h3",null,"Monitoring List - ",l.createElement("span",{style:{color:"red"}},"We will Give You First Hand Information on your Monitoring List.")),l.createElement("h4",null," "),l.createElement("div",null,l.createElement("h4",null,E.join(", ")),l.createElement(v.A,{cols:M,isLoading:P,items:w,onItem:e=>{z(e)}})),l.createElement("h3",null,"Free Search For Other Number"),l.createElement("div",{className:"d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4 flex-column"},l.createElement(c.A,{className:""},l.createElement(c.A.Group,{id:"topbarSearch"},l.createElement(m.A,{className:"input-group-merge search-bar"},l.createElement(m.A.Text,null,l.createElement(d.g,{icon:u.MjD})),l.createElement(c.A.Control,{type:"text",name:"search",placeholder:"Search",value:y,onChange:e=>N(e.target.value)}),l.createElement(o.A,{onClick:async()=>{await R(y)},variant:"primary",size:"sm",className:"me-2"},"Find")))),l.createElement(v.A,{cols:M,isLoading:F,items:r,onItem:e=>z&&z(e)})),l.createElement(b.A,{as:b.A.Dialog,centered:!0,show:k,onHide:U},l.createElement(b.A.Header,null,l.createElement(b.A.Title,{className:"h6"},"Information"),l.createElement(o.A,{variant:"close","aria-label":"Close",onClick:U})),l.createElement(b.A.Body,null,k),l.createElement(b.A.Footer,null,l.createElement(o.A,{variant:"secondary",onClick:U},"I Got It"),l.createElement(o.A,{variant:"link",className:"text-gray ms-auto",onClick:U},"Close"))))}}}]);
//# sourceMappingURL=component---src-pages-number-finder-js-2c31a2c610ab702e2ea9.js.map