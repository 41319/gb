(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[39],{685:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(381),c=n(113),r=n(175),o=n(82),l=n(8),s=n(14),j=n(41),d=n(176),b=n(246),u=n(262),O=n(261),h=n(247),x=n(378),m=n(322),p=n(695),g=n(677),f=n(689),v=n(673),C=n(1),y=n.n(C),k=n(2),w=["onClose","value","open"],S=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function T(e){var t=e.onClose,n=e.value,a=e.open,i=Object(j.a)(e,w),c=Object(C.useState)(n),r=Object(s.a)(c,2),o=r[0],m=r[1],p=Object(C.useRef)(null);Object(C.useEffect)((function(){a||m(n)}),[n,a]);return Object(k.jsxs)(b.a,Object(l.a)(Object(l.a)({maxWidth:"xs",disableEscapeKeyDown:!0,TransitionProps:{onExiting:function(){null!==p.current&&p.current.focus()}},"aria-labelledby":"confirmation-dialog-title",open:a},i),{},{children:[Object(k.jsx)(h.a,{id:"confirmation-dialog-title",children:"Phone Ringtone"}),Object(k.jsx)(O.a,{dividers:!0,children:Object(k.jsx)(v.a,{ref:p,"aria-label":"Ringtone",name:"ringtone",value:o,onChange:function(e,t){return m(t)},children:S.map((function(e){return Object(k.jsx)(x.a,{value:e,control:Object(k.jsx)(f.a,{}),label:e},e)}))})}),Object(k.jsxs)(u.a,{children:[Object(k.jsx)(d.a,{variant:"outlined",color:"secondary",onClick:function(){return t()},children:"Cancel"}),Object(k.jsx)(d.a,{onClick:function(){return t(o)},color:"primary",children:"Ok"})]})]}))}var D=Object(c.a)("div")((function(e){return{width:"100%",maxWidth:360,backgroundColor:e.theme.palette.background.paper,"& .paper":{width:"80%",maxHeight:435}}}));function G(){var e=y.a.useState(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=y.a.useState("Dione"),c=Object(s.a)(i,2),r=c[0],o=c[1];return Object(k.jsx)(D,{children:Object(k.jsxs)(m.a,{component:"div",role:"list",children:[Object(k.jsx)(p.a,{button:!0,divider:!0,disabled:!0,role:"listitem",children:Object(k.jsx)(g.a,{primary:"Interruptions"})}),Object(k.jsx)(p.a,{button:!0,divider:!0,"aria-controls":"ringtone-menu","aria-label":"Phone ringtone",onClick:function(){a(!0)},role:"listitem",children:Object(k.jsx)(g.a,{primary:"Phone ringtone",secondary:r})}),Object(k.jsx)(p.a,{button:!0,divider:!0,disabled:!0,role:"listitem",children:Object(k.jsx)(g.a,{primary:"Default notification ringtone",secondary:"Tethys"})}),Object(k.jsx)(T,{keepMounted:!0,open:n,value:r,className:"paper",id:"ringtone-menu",onClose:function(e){a(!1),e&&o(e)}})]})})}var P=n(382),W=n.n(P),A=n(321),B=n(255),L=Object(c.a)(h.a)((function(e){var t=e.theme;return{margin:0,padding:t.spacing(2),"& .closeButton":{position:"absolute",right:t.spacing(1),top:t.spacing(1),color:t.palette.grey[500]}}})),z=function(e){var t=e.children,n=e.onClose;return Object(k.jsxs)(L,{disableTypography:!0,children:[Object(k.jsx)(B.a,{variant:"h6",children:t}),n?Object(k.jsx)(A.a,{"aria-label":"Close",className:"closeButton",onClick:n,children:Object(k.jsx)(W.a,{})}):null]})},N=Object(c.a)(O.a)((function(e){return{"&.root":{padding:e.theme.spacing(2)}}})),F=Object(c.a)(u.a)((function(e){return{"&.root":{margin:0,padding:e.theme.spacing(1)}}})),M=function(){var e=Object(C.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=function(){return a(!1)};return Object(k.jsxs)("div",{children:[Object(k.jsx)(d.a,{variant:"outlined",color:"secondary",onClick:function(){return a(!0)},children:"Open dialog"}),Object(k.jsxs)(b.a,{onClose:i,"aria-labelledby":"customized-dialog-title",open:n,children:[Object(k.jsx)(z,{id:"customized-dialog-title",onClose:i,children:"Modal title"}),Object(k.jsxs)(N,{dividers:!0,children:[Object(k.jsx)(B.a,{gutterBottom:!0,children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),Object(k.jsx)(B.a,{gutterBottom:!0,children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),Object(k.jsx)(B.a,{gutterBottom:!0,children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}),Object(k.jsx)(F,{children:Object(k.jsx)(d.a,{onClick:i,color:"primary",children:"Save changes"})})]})]})},R=n(715),V=n(445),E=y.a.forwardRef((function(e,t){return Object(k.jsx)(V.a,Object(l.a)({direction:"up",ref:t},e))}));function U(){var e=y.a.useState(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];function i(){a(!1)}return Object(k.jsxs)("div",{children:[Object(k.jsx)(d.a,{variant:"outlined",color:"primary",onClick:function(){a(!0)},children:"Slide in alert dialog"}),Object(k.jsxs)(b.a,{open:n,keepMounted:!0,onClose:i,TransitionComponent:E,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(k.jsx)(h.a,{id:"alert-dialog-slide-title",children:"Use Google's location service?"}),Object(k.jsx)(O.a,{children:Object(k.jsx)(R.a,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(k.jsxs)(u.a,{children:[Object(k.jsx)(d.a,{onClick:i,color:"primary",children:"Disagree"}),Object(k.jsx)(d.a,{onClick:i,color:"primary",children:"Agree"})]})]})]})}var q=n(112),H=n(284);function J(){var e=y.a.useState(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];function i(){a(!1)}return Object(k.jsxs)(q.a,{children:[Object(k.jsx)(d.a,{variant:"outlined",color:"primary",onClick:function(){a(!0)},children:"Open form dialog"}),Object(k.jsxs)(b.a,{open:n,onClose:i,"aria-labelledby":"form-dialog-title",children:[Object(k.jsx)(h.a,{id:"form-dialog-title",children:"Subscribe"}),Object(k.jsxs)(O.a,{children:[Object(k.jsx)(R.a,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),Object(k.jsx)(H.a,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0})]}),Object(k.jsxs)(u.a,{children:[Object(k.jsx)(d.a,{variant:"outlined",color:"secondary",onClick:i,children:"Cancel"}),Object(k.jsx)(d.a,{onClick:i,color:"primary",children:"Subscribe"})]})]})]})}var I=n(630),K=n(307),Y=n(361),Q=n(66),X=n(42),Z=y.a.forwardRef((function(e,t){return Object(k.jsx)(V.a,Object(l.a)({direction:"up",ref:t},e))}));function $(){var e=Object(Q.a)(),t=y.a.useState(!1),n=Object(s.a)(t,2),a=n[0],i=n[1];function c(){i(!1)}return Object(k.jsxs)(q.a,{children:[Object(k.jsx)(d.a,{variant:"outlined",color:"primary",onClick:function(){i(!0)},children:"Open full-screen dialog"}),Object(k.jsxs)(b.a,{fullScreen:!0,open:a,onClose:c,TransitionComponent:Z,children:[Object(k.jsx)(I.a,{sx:{position:"relative"},children:Object(k.jsxs)(Y.a,{children:[Object(k.jsx)(A.a,{edge:"start",color:"inherit",onClick:c,"aria-label":"Close",children:Object(k.jsx)(W.a,{})}),Object(k.jsx)(X.b,{sx:{flex:1,marginLeft:e.spacing(2)},children:"Sound"}),Object(k.jsx)(d.a,{color:"inherit",onClick:c,children:"save"})]})}),Object(k.jsxs)(m.a,{children:[Object(k.jsx)(p.a,{button:!0,children:Object(k.jsx)(g.a,{primary:"Phone ringtone",secondary:"Titania"})}),Object(k.jsx)(K.a,{}),Object(k.jsx)(p.a,{button:!0,children:Object(k.jsx)(g.a,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})}var _=n(257),ee=n(258),te=n(484),ne=n(251),ae=n(387),ie=Object(c.a)("div")((function(e){var t=e.theme;return{"& form":{display:"flex",margin:"auto",flexDirection:"column",width:"fit-content"},"& .formControl":{marginTop:t.spacing(2),minWidth:120},"& .formControlLabel":{marginTop:t.spacing(1)}}}));function ce(){var e=y.a.useState(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=y.a.useState(!0),c=Object(s.a)(i,2),r=c[0],o=c[1],l=y.a.useState("sm"),j=Object(s.a)(l,2),m=j[0],p=j[1];function g(){a(!1)}return Object(k.jsxs)(ie,{children:[Object(k.jsx)(d.a,{variant:"outlined",color:"primary",onClick:function(){a(!0)},children:"Open max-width dialog"}),Object(k.jsxs)(b.a,{open:n,fullWidth:r,maxWidth:m,onClose:g,"aria-labelledby":"max-width-dialog-title",children:[Object(k.jsx)(h.a,{id:"max-width-dialog-title",children:"Optional sizes"}),Object(k.jsxs)(O.a,{children:[Object(k.jsx)(R.a,{children:"You can set my maximum width and whether to adapt or not."}),Object(k.jsxs)("form",{noValidate:!0,children:[Object(k.jsxs)(_.a,{className:"formControl",children:[Object(k.jsx)(ee.a,{htmlFor:"max-width",children:"maxWidth"}),Object(k.jsxs)(ne.a,{value:m,onChange:function(e){p(e.target.value)},inputProps:{name:"max-width",id:"max-width"},children:[Object(k.jsx)(te.a,{value:!1,children:"false"}),Object(k.jsx)(te.a,{value:"xs",children:"xs"}),Object(k.jsx)(te.a,{value:"sm",children:"sm"}),Object(k.jsx)(te.a,{value:"md",children:"md"}),Object(k.jsx)(te.a,{value:"lg",children:"lg"}),Object(k.jsx)(te.a,{value:"xl",children:"xl"})]})]}),Object(k.jsx)(x.a,{className:"formControlLabel",label:"Full width",control:Object(k.jsx)(ae.a,{checked:r,onChange:function(e){o(e.target.checked)},value:"fullWidth"})})]})]}),Object(k.jsx)(u.a,{children:Object(k.jsx)(d.a,{onClick:g,color:"primary",children:"Close"})})]})]})}var re=n(306);function oe(){var e=y.a.useState(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(Q.a)(),c=Object(re.a)(i.breakpoints.down("sm"));function r(){a(!1)}return Object(k.jsxs)(q.a,{children:[Object(k.jsx)(d.a,{variant:"outlined",color:"primary",onClick:function(){a(!0)},children:"Open responsive dialog"}),Object(k.jsxs)(b.a,{fullScreen:c,open:n,onClose:r,"aria-labelledby":"responsive-dialog-title",children:[Object(k.jsx)(h.a,{id:"responsive-dialog-title",children:"Use Google's location service?"}),Object(k.jsx)(O.a,{children:Object(k.jsx)(R.a,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(k.jsxs)(u.a,{children:[Object(k.jsx)(d.a,{onClick:r,color:"primary",children:"Disagree"}),Object(k.jsx)(d.a,{onClick:r,color:"primary",autoFocus:!0,children:"Agree"})]})]})]})}function le(){var e=Object(C.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=function(){return a(!1)};return Object(k.jsxs)(q.a,{children:[Object(k.jsx)(d.a,{variant:"outlined",color:"primary",onClick:function(){return a(!0)},children:"Open alert dialog"}),Object(k.jsxs)(b.a,{open:n,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(k.jsx)(h.a,{id:"alert-dialog-title",children:"Use Google's location service?"}),Object(k.jsx)(O.a,{children:Object(k.jsx)(R.a,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(k.jsxs)(u.a,{children:[Object(k.jsx)(d.a,{onClick:i,color:"primary",children:"Disagree"}),Object(k.jsx)(d.a,{onClick:i,color:"primary",autoFocus:!0,children:"Agree"})]})]})]})}var se=n(520),je=n.n(se),de=n(519),be=n.n(de),ue=n(318),Oe=n(68),he=n(716),xe=["onClose","selectedValue"],me=["username@gmail.com","user02@gmail.com"];function pe(e){var t=e.onClose,n=e.selectedValue,a=Object(j.a)(e,xe);function i(e){t(e)}return Object(k.jsxs)(b.a,Object(l.a)(Object(l.a)({onClose:function(){t(n)},"aria-labelledby":"simple-dialog-title"},a),{},{children:[Object(k.jsx)(h.a,{id:"simple-dialog-title",children:"Set backup account"}),Object(k.jsxs)(m.a,{children:[me.map((function(e){return Object(k.jsxs)(p.a,{button:!0,onClick:function(){return i(e)},children:[Object(k.jsx)(he.a,{children:Object(k.jsx)(ue.a,{sx:{backgroundColor:Oe.a[100],color:Oe.a[600]},children:Object(k.jsx)(be.a,{})})}),Object(k.jsx)(g.a,{primary:e})]},e)})),Object(k.jsxs)(p.a,{button:!0,onClick:function(){return i("addAccount")},children:[Object(k.jsx)(he.a,{children:Object(k.jsx)(ue.a,{children:Object(k.jsx)(je.a,{})})}),Object(k.jsx)(g.a,{primary:"add account"})]})]})]}))}function ge(){var e=Object(C.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(C.useState)("user02@gmail.com"),c=Object(s.a)(i,2),r=c[0],o=c[1];return Object(k.jsxs)(q.a,{children:[Object(k.jsxs)(B.a,{variant:"subtitle1",children:["Selected: ",r]}),Object(k.jsx)("br",{}),Object(k.jsx)(d.a,{variant:"outlined",color:"primary",onClick:function(){return a(!0)},children:"Open simple dialog"}),Object(k.jsx)(pe,{selectedValue:r,open:n,onClose:function(e){a(!1),o(e)}})]})}var fe=Object(c.a)("div")((function(e){var t,n=e.theme;return t={margin:"30px"},Object(a.a)(t,n.breakpoints.down("sm"),{margin:"16px"}),Object(a.a)(t,"& .breadcrumb",Object(a.a)({marginBottom:"30px"},n.breakpoints.down("sm"),{marginBottom:"16px"})),t}));t.default=function(){return Object(k.jsxs)(fe,{children:[Object(k.jsx)(r.a,{className:"breadcrumb",children:Object(k.jsx)(o.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Dialog"}]})}),Object(k.jsxs)(i.a,{spacing:3,children:[Object(k.jsx)(o.k,{title:"simple Dialog",children:Object(k.jsx)(ge,{})}),Object(k.jsx)(o.k,{title:"alert dialog",children:Object(k.jsx)(le,{})}),Object(k.jsx)(o.k,{title:"transition",children:Object(k.jsx)(U,{})}),Object(k.jsx)(o.k,{title:"form dialog",children:Object(k.jsx)(J,{})}),Object(k.jsx)(o.k,{title:"customized dialog",children:Object(k.jsx)(M,{})}),Object(k.jsx)(o.k,{title:"full-screen dialog",children:Object(k.jsx)($,{})}),Object(k.jsx)(o.k,{title:"optimized size dialog",children:Object(k.jsx)(ce,{})}),Object(k.jsx)(o.k,{title:"responsive dialog",children:Object(k.jsx)(oe,{})}),Object(k.jsx)(o.k,{title:"confirmation dialog",children:Object(k.jsx)(G,{})})]})]})}}}]);
//# sourceMappingURL=39.f654ab3f.chunk.js.map