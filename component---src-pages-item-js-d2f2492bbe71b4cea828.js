"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[196],{976:function(e,t,l){var n;l.r(t),l.d(t,{Head:function(){return v}});var a=l(4506),c=l(6540),r=l(2038),o=l(7528),s=l(134),d=l(5750),u=l(3660),i=(l(669),l(8785)),m=l.n(i),A=l(8050),E=l(1356),y=l(1783);const{useEffect:b,useState:k}=n||(n=l.t(c,2)),v=()=>c.createElement(o.A,{title:"Home"});t.default=()=>{var e;const{isLogin:t}=(0,d.A)(),[l,n]=k([]),[o,i]=k(null),[v,f]=k([]),[g,C]=k([]),j=async()=>{const e=await u.A.Cloud.run("getItemsMeta");n(e)};b((()=>{const e=w(l[0]||{}),t=[{key:"data",label:"data",onRender:e=>c.createElement(c.Fragment,null,c.createElement(s.A,{onClick:async()=>{const t=await u.A.Cloud.run("getItemData",{id:e.objectId,key:e.type});i({obj:e,key:"data",val:t})}}," View"))},{key:"delete",label:"delete",onRender:e=>c.createElement(c.Fragment,null,c.createElement(s.A,{onClick:async()=>{await u.A.Cloud.run("deleteItems",{ids:[e.objectId]});j()}}," Delete"))}];f([].concat((0,a.A)(e),t))}),[l]);const p=()=>{i(null)};b((()=>{j()}),[]);const w=e=>Object.keys(e).map((e=>({key:e,label:e,onRender:t=>c.createElement(c.Fragment,null,((e,t)=>{const l=t[e];return"string"==typeof l?l:l instanceof Object&&l.constructor===Object?c.createElement(s.A,{onClick:()=>i({key:e,obj:t,val:l})}," View"):void 0})(e,t))}))),I=l.reduce(((e,t,l,n)=>(e[t.type]=!0,e)),{}),h=async(e,t)=>{var l;await u.A.Cloud.run("updateItem",{objectId:null==e||null===(l=e.obj)||void 0===l?void 0:l.objectId,model:{[e.key]:null==t?void 0:t.updated_src}})};return c.createElement(r.A,{afterSearch:c.createElement(c.Fragment,null)},c.createElement("div",null,null===(e=Object.keys(I))||void 0===e?void 0:e.map((e=>c.createElement(s.A,null," ",e," ")))),c.createElement(y.A,null,c.createElement(E.A,{cols:v,data:l})),c.createElement(A.A,{fullscreen:!0,as:A.A.Dialog,centered:!0,show:o,onHide:p},c.createElement(A.A.Header,null,c.createElement(A.A.Title,{className:"h6"},"Information"),c.createElement(s.A,{variant:"close","aria-label":"Close",onClick:p})),c.createElement(A.A.Body,null,JSON.stringify(null==o?void 0:o.val),c.createElement(m(),{onDelete:e=>{h(o,e)},onAdd:e=>h(o,e),src:null==o?void 0:o.val,onEdit:e=>{h(o,e)}})),c.createElement(A.A.Footer,null,c.createElement(s.A,{variant:"link",className:"text-gray ms-auto",onClick:p},"Close"))))}}}]);
//# sourceMappingURL=component---src-pages-item-js-d2f2492bbe71b4cea828.js.map