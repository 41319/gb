"use strict";(self.webpackChunkinweb=self.webpackChunkinweb||[]).push([[691],{1540:function(e,t,l){l.r(t),l.d(t,{Head:function(){return v},default:function(){return d}});var a=l(7294),n=l(1018),c=function(e){e.title,e.titleBold,e.children;var t=e.tabObject,l=void 0===t?{}:t;return a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-xl-12"},a.createElement("div",{className:"section__head d-md-flex justify-content-between mb-40"},a.createElement("div",{className:"section__title"},a.createElement("h3",null,"GroupBuy",a.createElement("span",null," Deals")))))),a.createElement("div",{className:"row"},a.createElement("div",{className:"col-xl-12"},a.createElement("div",{className:"tab-content",id:"flast-sell-tabContent"},Object.keys(l).map((function(e,t){return a.createElement("div",{className:"tab-pane fade show "+(!t&&"active"),id:e,role:"tabpanel","aria-labelledby":e+"-tab"},l[e])}))))))},r=function(e){e.children;var t,l,n,c,r=e.data,i=e.onUpdate,s=(0,a.useState)(0),u=s[0],o=s[1],m=(0,a.useState)(0),d=m[0],v=m[1];(0,a.useEffect)((function(){i&&i(Object.assign({},r,{quantity:d}))}),[d]);var f=function(e){var t=d+e;t>-1&&v(t)};return a.createElement("div",{className:"product__item-wrapper mb-20"},a.createElement("div",{className:"product__item white-bg"},u+1," / ",null==r||null===(t=r.media)||void 0===t?void 0:t.length,a.createElement("div",{className:"product__thumb p-relative"},"photo"===(null==r||null===(l=r.media[u])||void 0===l?void 0:l.type)&&a.createElement("div",{className:"w-img",onClick:function(){o((function(e){var t;return console.log(e),e<(null==r||null===(t=r.media)||void 0===t?void 0:t.length)-1?e+1:0}))}},(null==r||null===(n=r.media)||void 0===n?void 0:n.length)&&a.createElement("img",{src:(null==r||null===(c=r.media)||void 0===c?void 0:c.length)&&(null==r?void 0:r.media[u].url),alt:"product"})),a.createElement("div",{className:"w-img"},"")),a.createElement("div",{className:"product__content text-center"},a.createElement("h6",{className:"product-name"},null==r?void 0:r.title),a.createElement("span",{className:"new"},"RM",20),a.createElement("div",null,a.createElement("div",null,a.createElement("textarea",{placeholder:"write your order"})),a.createElement("div",{div:!0,className:"f-left"},"Total: ",20*d),a.createElement("div",{className:"f-right"},a.createElement("a",{className:"btn btn-primary btn-social"},a.createElement("i",{className:"fal fa-minus fa-lg",onClick:function(){return f(-1)}})),a.createElement("span",null,""+d),a.createElement("a",{className:"btn btn-primary btn-social"},a.createElement("i",{className:"fal fa-plus fa-lg",onClick:function(){return f(1)}})))))))},i=l(7782),s=l(4118),u=l(2714),o=l(1078),m=function(e){var t=e.items,l=(0,u.useSelector)((function(e){var t;return null==e||null===(t=e.cart)||void 0===t?void 0:t.items})),n=(0,u.useDispatch)(),c=function(e,t){var l=e.findIndex((function(e){return e.id===t.id}));return t.quantity<=0?e.splice(l,1):l>-1?e[l]=t:e.push(t),e},i=function(e){n({type:o.g,payload:c(l,e)})};return a.createElement("div",{className:"row"},t.map((function(e){return a.createElement("div",{className:"col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6"},a.createElement(r,{data:e,onUpdate:i}))})))},d=function(e){var t,l,r,u=e.data,o=((0,i.useTranslation)().t,null===s.c||void 0===s.c||null===(t=s.c.User)||void 0===t||t.current(),null==u||null===(l=u.products)||void 0===l||null===(r=l.edges)||void 0===r?void 0:r.map((function(e){return Object.assign({},e.node)})));return a.createElement(n.Z,null,a.createElement("section",{className:"flash__sell pt-25 pb-40 grey-bg-2"},a.createElement(c,{title:"Hot",titleBold:"Deals",tabObject:{groupbuy:a.createElement(m,{items:o})}})))},v=function(){return a.createElement("title",null,"Home Page")}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-aaff94e878340b7815b1.js.map