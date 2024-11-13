"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[942],{791:function(e,a,t){t.d(a,{A:function(){return w}});var l=t(8168),n=t(8587),r=t(6942),c=t.n(r),m=t(6540),o=t(3608),s=t(2471),i=t(268),u=t(2797),d=m.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.variant,i=e.as,u=void 0===i?"img":i,d=(0,n.A)(e,["bsPrefix","className","variant","as"]),A=(0,o.oU)(t,"card-img");return m.createElement(u,(0,l.A)({ref:a,className:c()(s?A+"-"+s:A,r)},d))}));d.displayName="CardImg",d.defaultProps={variant:null};var A=d,f=(0,i.A)("h5"),b=(0,i.A)("h6"),E=(0,s.A)("card-body"),g=(0,s.A)("card-title",{Component:f}),v=(0,s.A)("card-subtitle",{Component:b}),p=(0,s.A)("card-link",{Component:"a"}),N=(0,s.A)("card-text",{Component:"p"}),x=(0,s.A)("card-header"),y=(0,s.A)("card-footer"),h=(0,s.A)("card-img-overlay"),C=m.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.bg,i=e.text,d=e.border,A=e.body,f=e.children,b=e.as,g=void 0===b?"div":b,v=(0,n.A)(e,["bsPrefix","className","bg","text","border","body","children","as"]),p=(0,o.oU)(t,"card"),N=(0,m.useMemo)((function(){return{cardHeaderBsPrefix:p+"-header"}}),[p]);return m.createElement(u.A.Provider,{value:N},m.createElement(g,(0,l.A)({ref:a},v,{className:c()(r,p,s&&"bg-"+s,i&&"text-"+i,d&&"border-"+d)}),A?m.createElement(E,null,f):f))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=A,C.Title=g,C.Subtitle=v,C.Body=E,C.Link=p,C.Text=N,C.Header=x,C.Footer=y,C.ImgOverlay=h;var w=C},2797:function(e,a,t){var l=t(6540).createContext(null);l.displayName="CardContext",a.A=l},268:function(e,a,t){var l=t(8168),n=t(6540),r=t(6942),c=t.n(r);a.A=function(e){return n.forwardRef((function(a,t){return n.createElement("div",(0,l.A)({},a,{ref:t,className:c()(a.className,e)}))}))}},5750:function(e,a,t){var l=t(6540),n=t(5887);a.A=()=>(0,l.useContext)(n.A)},8486:function(e,a,t){t.r(a);var l=t(6540),n=t(6784),r=t(2630),c=t(9219),m=t(3196),o=t(3014),s=t(9906),i=t(7009),u=t(134),d=t(791),A=t(4794),f=t(5750),b=t(4010),E=t(9976);a.default=()=>{const{register:e}=(0,f.A)(),{0:a,1:t}=(0,l.useState)(""),{0:g,1:v}=(0,l.useState)({username:"",password:"",contact:"",fullName:""}),p=(e,a)=>{v({...g,[a]:e.target.value})};return l.createElement("main",null,l.createElement("section",{className:"d-flex align-items-center my-5 mt-lg-6 mb-lg-5"},l.createElement(c.A,null,l.createElement(m.A,{className:"justify-content-center form-bg-image",style:{backgroundImage:`url(${E.A})`}},l.createElement(o.A,{xs:12,className:"d-flex align-items-center justify-content-center"},l.createElement("div",{className:"mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500"},l.createElement("div",{className:"text-center text-md-center mb-4 mt-md-0"},l.createElement(b.A,null),l.createElement("h3",{className:"mb-0"},"Create an account")),l.createElement(s.A,{className:"mt-4"},l.createElement(s.A.Group,{id:"email",className:"mb-4"},l.createElement(s.A.Label,null,"Full Name"),l.createElement(i.A,null,l.createElement(i.A.Text,null,l.createElement(n.g,{icon:r.X46})),l.createElement(s.A.Control,{value:null==g?void 0:g.fullName,onChange:e=>p(e,"fullName"),autoFocus:!0,required:!0,type:"text",placeholder:"John Doe"}))),l.createElement(s.A.Group,{id:"email",className:"mb-4"},l.createElement(s.A.Label,null,"Mobile Number"),l.createElement(i.A,null,l.createElement(i.A.Text,null,l.createElement(n.g,{icon:r.KKr})),l.createElement(s.A.Control,{value:null==g?void 0:g.contact,onChange:e=>p(e,"contact"),required:!0,type:"text",placeholder:"mobile number"}))),l.createElement(s.A.Group,{id:"email",className:"mb-4"},l.createElement(s.A.Label,null,"Your Email"),l.createElement(i.A,null,l.createElement(i.A.Text,null,l.createElement(n.g,{icon:r.y_8})),l.createElement(s.A.Control,{value:null==g?void 0:g.username,onChange:e=>p(e,"username"),required:!0,type:"email",placeholder:"example@company.com"}))),l.createElement(s.A.Group,{id:"password",className:"mb-4"},l.createElement(s.A.Label,null,"Your Password"),l.createElement(i.A,null,l.createElement(i.A.Text,null,l.createElement(n.g,{icon:r.HEq})),l.createElement(s.A.Control,{value:null==g?void 0:g.password,onChange:e=>p(e,"password"),required:!0,type:"password",placeholder:"Password"}))),l.createElement(u.A,{onClick:async()=>{try{await e(null==g?void 0:g.username,null==g?void 0:g.password,null==g?void 0:g.fullName,null==g?void 0:g.contact).then((e=>(0,A.navigate)("/signin")))}catch(a){t(a.message)}},variant:"primary",className:"w-100"},"Sign up"),l.createElement("div",{className:"text-center",style:{color:"red"}},a)),l.createElement("div",{className:"d-flex justify-content-center align-items-center mt-4"},l.createElement("span",{className:"fw-normal"},"Already have an account?",l.createElement(d.A.Link,{as:A.Link,to:"/signin",className:"fw-bold"}," Login here ")))))))))}},9976:function(e,a,t){a.A=t.p+"static/signin-454f944b6a4061b0ac2932fc2ba2de17.svg"}}]);
//# sourceMappingURL=component---src-pages-register-js-fc113f36d96ae6e963ae.js.map