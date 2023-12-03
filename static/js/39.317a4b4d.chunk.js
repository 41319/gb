(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[39],{869:function(e,a,r){"use strict";r.r(a);var t=r(13),s=r(32),n=r(911),i=r(484),l=r(532),c=r(499),o=r(668),m=r(174),d=r(285),u=r(49),b=r(186),h=r(666),j=r(1),p=r(22),x=r(44),g=r(667),O=r(2),f=Object(m.a)(d.a)((function(){return{display:"flex",alignItems:"center"}})),v=Object(m.a)(f)((function(){return{justifyContent:"center"}})),w=Object(m.a)(v)((function(){return{height:"100%",padding:"32px",background:"rgba(0, 0, 0, 0.01)"}})),y=Object(m.a)(v)((function(){return{background:"#1A2038",minHeight:"100vh !important","& .card":{maxWidth:800,minHeight:400,margin:"1rem",display:"flex",borderRadius:12,alignItems:"center"}}})),B={email:"",password:"",username:"",remember:!0},C=g.a().shape({password:g.b().min(6,"Password must be 6 character length").required("Password is required!"),email:g.b().email("Invalid Email address").required("Email is required!")});a.default=function(){var e=Object(s.d)(),a=Object(b.a)().register,r=Object(p.f)(),m=Object(j.useState)(!1),g=Object(t.a)(m,2),v=g[0],S=g[1];return Object(O.jsx)(y,{children:Object(O.jsx)(i.a,{className:"card",children:Object(O.jsxs)(l.a,{container:!0,children:[Object(O.jsx)(l.a,{item:!0,sm:6,xs:12,children:Object(O.jsx)(w,{children:Object(O.jsx)("img",{width:"100%",alt:"Register",src:"/assets/images/illustrations/posting_photo.svg"})})}),Object(O.jsx)(l.a,{item:!0,sm:6,xs:12,children:Object(O.jsx)(d.a,{p:4,height:"100%",children:Object(O.jsx)(h.a,{onSubmit:function(e){S(!0);try{a(e.email,e.username,e.password),r("/"),S(!1)}catch(t){console.log(t),S(!1)}},initialValues:B,validationSchema:C,children:function(a){var r=a.values,t=a.errors,s=a.touched,i=a.handleChange,l=a.handleBlur,m=a.handleSubmit;return Object(O.jsxs)("form",{onSubmit:m,children:[Object(O.jsx)(c.a,{fullWidth:!0,size:"small",type:"text",name:"username",label:"Username",variant:"outlined",onBlur:l,value:r.username,onChange:i,helperText:s.username&&t.username,error:Boolean(t.username&&s.username),sx:{mb:3}}),Object(O.jsx)(c.a,{fullWidth:!0,size:"small",type:"email",name:"email",label:"Email",variant:"outlined",onBlur:l,value:r.email,onChange:i,helperText:s.email&&t.email,error:Boolean(t.email&&s.email),sx:{mb:3}}),Object(O.jsx)(c.a,{fullWidth:!0,size:"small",name:"password",type:"password",label:"Password",variant:"outlined",onBlur:l,value:r.password,onChange:i,helperText:s.password&&t.password,error:Boolean(t.password&&s.password),sx:{mb:2}}),Object(O.jsxs)(f,{gap:1,alignItems:"center",children:[Object(O.jsx)(o.a,{size:"small",name:"remember",onChange:i,checked:r.remember,sx:{padding:0}}),Object(O.jsx)(u.c,{fontSize:13,children:"I have read and agree to the terms of service."})]}),Object(O.jsx)(n.a,{type:"submit",color:"primary",loading:v,variant:"contained",sx:{mb:2,mt:3},children:"Regiser"}),Object(O.jsxs)(u.c,{children:["Already have an account?",Object(O.jsx)(x.c,{to:"/session/signin",style:{color:e.palette.primary.main,marginLeft:5},children:"Login"})]})]})}})})})]})})})}}}]);