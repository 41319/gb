"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[196],{976:function(e,t,a){var n;a.r(t),a.d(t,{Head:function(){return v}});var l=a(4506),c=a(6540),r=a(2038),o=a(7528),s=a(134),u=a(5750),d=a(3660),i=(a(669),a(8785)),m=a.n(i),E=a(8050),A=a(1356),y=a(1783);const{useEffect:b,useState:k}=n||(n=a.t(c,2)),v=()=>c.createElement(o.A,{title:"Home"});t.default=()=>{var e;const{isLogin:t}=(0,u.A)(),[a,n]=k([]),[o,i]=k(null),[v,f]=k([]),[g,C]=k([]);b((()=>{const e=p(a[0]||{}),t=[{key:"data",label:"data",onRender:e=>c.createElement(c.Fragment,null,c.createElement(s.A,{onClick:async()=>{const t=await d.A.Cloud.run("getItems",{id:e.objectId,key:e.type});i({obj:e,key:"data",val:t})}}," View"))}];f([].concat((0,l.A)(e),t))}),[a]);const j=()=>{i(null)};b((()=>{(async()=>{const e=await d.A.Cloud.run("getItemsMeta");n(e)})()}),[]);const p=e=>Object.keys(e).map((e=>({key:e,label:e,onRender:t=>c.createElement(c.Fragment,null,((e,t)=>{const a=t[e];return"string"==typeof a?a:a instanceof Object&&a.constructor===Object?c.createElement(s.A,{onClick:()=>i({key:e,obj:t,val:t[e]})}," View"):void 0})(e,t))}))),w=a.reduce(((e,t,a,n)=>(e[t.type]=!0,e)),{});return c.createElement(r.A,{afterSearch:c.createElement(c.Fragment,null)},c.createElement("div",null,null===(e=Object.keys(w))||void 0===e?void 0:e.map((e=>c.createElement(s.A,null," ",e," ")))),c.createElement(y.A,null,c.createElement(A.A,{cols:v,data:a})),c.createElement(E.A,{fullscreen:!0,as:E.A.Dialog,centered:!0,show:o,onHide:j},c.createElement(E.A.Header,null,c.createElement(E.A.Title,{className:"h6"},"Information"),c.createElement(s.A,{variant:"close","aria-label":"Close",onClick:j})),c.createElement(E.A.Body,null,c.createElement(m(),{src:o,onEdit:e=>{(async(e,t)=>{var a;await d.A.Cloud.run("updateItem",{objectId:null==e||null===(a=e.obj)||void 0===a?void 0:a.objectId,model:{[e.key]:null==t?void 0:t.updated_src}})})(o,e)}})),c.createElement(E.A.Footer,null,c.createElement(s.A,{variant:"link",className:"text-gray ms-auto",onClick:j},"Close"))))}}}]);
//# sourceMappingURL=component---src-pages-item-js-bc8725ec46b0df90e36e.js.map