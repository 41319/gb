"use strict";(self.webpackChunkinweb=self.webpackChunkinweb||[]).push([[691],{8018:function(e,t,n){n.d(t,{x:function(){return l}});var a=n(1078),l=function(e){var t=e.id,n=e.quantity,l=e.comments;return{type:a.gQ,payload:{item:{id:t,quantity:n,comments:l}}}}},1540:function(e,t,n){n.r(t),n.d(t,{Head:function(){return v},default:function(){return m}});var a=n(7294),l=function(e){e.title,e.titleBold,e.children;var t=e.tabObject,n=void 0===t?{}:t;return a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-xl-12"},a.createElement("div",{className:"section__head d-md-flex justify-content-between mb-40"},a.createElement("div",{className:"section__title"},a.createElement("h3",null,"GroupBuy",a.createElement("span",null," Deals")))))),a.createElement("div",{className:"row"},a.createElement("div",{className:"col-xl-12"},a.createElement("div",{className:"tab-content",id:"flast-sell-tabContent"},Object.keys(n).map((function(e,t){return a.createElement("div",{className:"tab-pane fade show "+(!t&&"active"),id:e,role:"tabpanel","aria-labelledby":e+"-tab"},n[e])}))))))},i=n(1136),c=function(e){e.children;var t,n,l,c,r=e.data,o=e.onUpdate,u=(0,a.useState)(0),s=u[0],d=u[1],m=(0,a.useState)(0),v=m[0];m[1];return a.createElement("div",{className:"product__item-wrapper mb-20"},a.createElement("div",{className:"product__item white-bg"},s+1," / ",null==r||null===(t=r.media)||void 0===t?void 0:t.length,a.createElement("div",{className:"product__thumb p-relative"},"photo"===(null==r||null===(n=r.media[s])||void 0===n?void 0:n.type)&&a.createElement("div",{className:"w-img",onClick:function(){d((function(e){var t;return console.log(e),e<(null==r||null===(t=r.media)||void 0===t?void 0:t.length)-1?e+1:0}))}},(null==r||null===(l=r.media)||void 0===l?void 0:l.length)&&a.createElement("img",{src:(null==r||null===(c=r.media)||void 0===c?void 0:c.length)&&(null==r?void 0:r.media[s].url),alt:"product"})),a.createElement("div",{className:"w-img"},"")),a.createElement("div",{className:"product__content text-center"},a.createElement("h6",{className:"product-name"},null==r?void 0:r.title),a.createElement("span",{className:"new"},"RM",20),a.createElement("div",null,a.createElement("div",null,a.createElement("textarea",{placeholder:"write your order"})),a.createElement("div",{div:!0,className:"f-left"},"Total: ",20*v),a.createElement("div",{className:"f-right"},a.createElement(i.Z,{initialQuantity:r.quantity||0,onChanged:function(e){o&&o(Object.assign({},r,{quantity:e}))}}))))))},r=n(7782),o=n(4118),u=n(2256),s=n(8018),d=function(e){var t=e.items,n=((0,u.v9)((function(e){var t;return null==e||null===(t=e.cart)||void 0===t?void 0:t.items}),u.wU),(0,u.v9)((function(e){return e}),u.wU),(0,u.I0)());a.useEffect((function(){}),[]);var l=function(e){var t=(0,s.x)({id:e.id,quantity:e.quantity});n(t)};return a.createElement("div",{className:"row"},t.map((function(e){return a.createElement("div",{className:"col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6"},a.createElement(c,{data:e,onUpdate:l}))})))},m=function(e){var t,n,i,c=e.data,s=(0,u.v9)((function(e){var t;return null==e||null===(t=e.cart)||void 0===t?void 0:t.items}),u.wU);(0,r.useTranslation)().t,null===o.c||void 0===o.c||null===(t=o.c.User)||void 0===t||t.current();console.log("---cartItems"),console.log(s),console.log("---cartItems");var m=null==c||null===(n=c.products)||void 0===n||null===(i=n.edges)||void 0===i?void 0:i.map((function(e){var t;return Object.assign({},e.node,{quantity:(null===(t=s.find((function(t){return t.id===e.node.id})))||void 0===t?void 0:t.quantity)||0,test:e.node.id,test2:!!s.find((function(t){return t.id===e.node.id}))})}));return console.log(m),a.createElement(a.Fragment,null,a.createElement("section",{className:"flash__sell pt-25 pb-40 grey-bg-2"},a.createElement(l,{title:"Hot",titleBold:"Deals",tabObject:{groupbuy:a.createElement(d,{items:m})}})))},v=function(){return a.createElement("title",null,"Home Page")}},1136:function(e,t,n){var a=n(7294);t.Z=function(e){e.children;var t=e.onChanged,n=e.initialQuantity,l=(0,a.useState)(n),i=l[0],c=l[1],r=function(e){var n=i+e;n>-1&&(c(n),t&&t(n))};return a.createElement("div",{className:"card  product__content"},a.createElement("div",null,a.createElement("a",{className:"btn btn-primary btn-social"},a.createElement("i",{className:"fal fa-minus fa-lg",onClick:function(){return r(-1)}})),a.createElement("span",null,""+i),a.createElement("a",{className:"btn btn-primary btn-social"},a.createElement("i",{className:"fal fa-plus fa-lg",onClick:function(){return r(1)}}))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-883dc33c57ad20f178ed.js.map