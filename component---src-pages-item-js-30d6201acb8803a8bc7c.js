"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[196],{976:function(e,t,l){var n;l.r(t),l.d(t,{Head:function(){return k}});var a=l(4506),c=l(6540),r=l(2038),o=l(7528),s=l(134),u=l(5750),d=l(3660),i=(l(669),l(8785)),m=l.n(i),A=l(8050),E=l(1356),v=l(1783);const{useEffect:y,useState:b}=n||(n=l.t(c,2)),k=()=>c.createElement(o.A,{title:"Home"});t.default=()=>{var e;const{isLogin:t}=(0,u.A)(),[l,n]=b([]),[o,i]=b(null),[k,f]=b([]),[g,C]=b([]);y((()=>{const e=p(l[0]||{}),t=[{key:"data",label:"data",onRender:e=>c.createElement(c.Fragment,null,c.createElement(s.A,{onClick:async()=>{const t=await d.A.Cloud.run("getItemData",{id:e.objectId,key:e.type});i({obj:e,key:"data",val:t})}}," View"))}];f([].concat((0,a.A)(e),t))}),[l]);const j=()=>{i(null)};y((()=>{(async()=>{const e=await d.A.Cloud.run("getItemsMeta");n(e)})()}),[]);const p=e=>Object.keys(e).map((e=>({key:e,label:e,onRender:t=>c.createElement(c.Fragment,null,((e,t)=>{const l=t[e];return"string"==typeof l?l:l instanceof Object&&l.constructor===Object?c.createElement(s.A,{onClick:()=>i({key:e,obj:t,val:l})}," View"):void 0})(e,t))}))),w=l.reduce(((e,t,l,n)=>(e[t.type]=!0,e)),{}),I=async(e,t)=>{var l;await d.A.Cloud.run("updateItem",{objectId:null==e||null===(l=e.obj)||void 0===l?void 0:l.objectId,model:{[e.key]:null==t?void 0:t.updated_src}})};return c.createElement(r.A,{afterSearch:c.createElement(c.Fragment,null)},c.createElement("div",null,null===(e=Object.keys(w))||void 0===e?void 0:e.map((e=>c.createElement(s.A,null," ",e," ")))),c.createElement(v.A,null,c.createElement(E.A,{cols:k,data:l})),c.createElement(A.A,{fullscreen:!0,as:A.A.Dialog,centered:!0,show:o,onHide:j},c.createElement(A.A.Header,null,c.createElement(A.A.Title,{className:"h6"},"Information"),c.createElement(s.A,{variant:"close","aria-label":"Close",onClick:j})),c.createElement(A.A.Body,null,JSON.stringify(null==o?void 0:o.val),c.createElement(m(),{onDelete:e=>{I(o,e)},onAdd:e=>I(o,e),src:null==o?void 0:o.val,onEdit:e=>{I(o,e)}})),c.createElement(A.A.Footer,null,c.createElement(s.A,{variant:"link",className:"text-gray ms-auto",onClick:j},"Close"))))}}}]);
//# sourceMappingURL=component---src-pages-item-js-30d6201acb8803a8bc7c.js.map