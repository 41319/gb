"use strict";(self.webpackChunkazino_gatsby=self.webpackChunkazino_gatsby||[]).push([[524],{3957:function(e,t,a){a.r(t);var n=a(7294),r=(a(8454),a(4163)),c=(a(5529),a(6646));a(1900);t.default=e=>{let{data:t,location:a}=e;const{0:l,1:s}=(0,n.useState)(40),{0:u,1:m}=(0,n.useState)(0),{0:i,1:o}=(0,n.useState)([]),b=t.products.edges.map(((e,t)=>{let{node:a}=e;return{...a}})).map((e=>({number:e.num,group:e.type}))),{0:h,1:E}=(0,n.useState)(""),{0:f,1:d}=(0,n.useState)("All");(0,n.useEffect)((()=>{o(b.slice(u*l,u*l+40).filter((e=>!!c.u[f]&&c.u[f](e))).filter((e=>e.number.includes(h))))}),[h,f,u]);new URLSearchParams(a.search).get("mask");const p=()=>Math.ceil(b.length/l);return(0,n.useEffect)((()=>{setTimeout((()=>{u+1<p()?m(u+1):m(0)}),1e4)}),[u]),n.createElement(n.Fragment,null,n.createElement(r.Z,{onSearch:E,onCategory:d}),n.createElement("div",{className:"container"},n.createElement("div",{className:"number_container"},n.createElement("h2",null,"SG Mobile Number For Sale ")),n.createElement("div",{className:"number_container"},n.createElement("h2",null," Number May Exist for only for a Few Hour. Grab it Fast ")),n.createElement("div",{className:"number_container"},n.createElement("h2",{style:{margin:"20px auto "}}," Check Our Profile For Contact Details to Purchase the Number ")),n.createElement("div",{className:"number_container"},i.map((e=>n.createElement("h3",{className:"number-pick"}," ",(e=>e.slice(0,4)+"-"+e.slice(4))(e.number)," ")))),n.createElement("div",{className:"number_container"},"Page ",u+1," of ",p())))}}}]);
//# sourceMappingURL=component---src-pages-live-js-aaf9ea4293c8267646ad.js.map