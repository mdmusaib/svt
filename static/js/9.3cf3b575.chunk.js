(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[9],{650:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(681);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var c=[],n=!0,s=!1,r=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(c.push(l.value),!t||c.length!==t);n=!0);}catch(a){s=!0,r=a}finally{try{n||null==i.return||i.return()}finally{if(s)throw r}}return c}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},663:function(e,t,c){"use strict";var n=c(1),s=c(110),r=c.n(s),l=c(159),i=c(650),a=(c(162),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useRef)();return{invoke:function(e,t,c){return s(!0),new Promise(function(){var n=Object(l.a)(r.a.mark((function n(l,i){var d,o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d=null,e&&t&&c&&(d=JSON.stringify({data:c})),n.prev=2,n.next=5,window.silentFetch(e,{method:t||"POST",body:d});case 5:return o=n.sent,n.next=8,o.json();case 8:a.current=n.sent,l(a.current),s(!1),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[2,13]])})));return function(e,t){return n.apply(this,arguments)}}())},result:a.current,inProgress:c}});t.a=function(e){var t=a();return{invoke:function(e){var c=e.endPoint,n=e.method,s=e.data;return t.invoke(c,n,s)},inProgress:t.inProgress}}},681:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(682);function s(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var c=Object.prototype.toString.call(e).slice(8,-1);return"Object"===c&&e.constructor&&(c=e.constructor.name),"Map"===c||"Set"===c?Array.from(e):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Object(n.a)(e,t):void 0}}},682:function(e,t,c){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var c=0,n=new Array(t);c<t;c++)n[c]=e[c];return n}c.d(t,"a",(function(){return n}))},940:function(e,t,c){},958:function(e,t,c){"use strict";c.r(t);var n=c(110),s=c.n(n),r=c(159),l=c(650),i=c(1),a=(c(940),c(663)),d=c(20);t.default=function(e){var t,c,n=Object(a.a)(),o=Object(i.useState)([]),j=Object(l.a)(o,2),b=j[0],h=j[1],u=Object(i.useState)([]),x=Object(l.a)(u,2),O=x[0],m=x[1],f=Object(i.useState)(0),v=Object(l.a)(f,2);v[0],v[1];Object(i.useEffect)((function(){var t;"view"===(null===e||void 0===e||null===(t=e.location)||void 0===t?void 0:t.type)&&p()}),[null===e||void 0===e||null===(t=e.location)||void 0===t?void 0:t.type]);var p=function(){var t=Object(r.a)(s.a.mark((function t(){var c,r,l;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.invoke({endPoint:"http://localhost:8000/api/getBooking/".concat(e.location.record.id),method:"get"});case 2:r=t.sent,l=0,console.log(r.data),h(r.data),m(r.data),console.log("totlal",parseInt(r.data.total_amount)+parseFloat(r.data.total_amount*r.data.tax/100)),null===r||void 0===r||null===(c=r.data)||void 0===c||c.vehicle_details.map((function(e){l=parseInt(l)+parseInt(e.total_amount)})),console.log(l);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:"view"===e.location.type?Object(d.jsx)("div",{class:"container d-flex justify-content-center mt-50 mb-50",children:Object(d.jsx)("div",{class:"row",children:Object(d.jsxs)("div",{class:"col-md-12",children:[Object(d.jsx)("img",{src:"https://svtinfra.com/images/svt%20infra.png",alt:"Smiley face",height:"100",width:"100"}),Object(d.jsxs)("div",{class:"card",children:[Object(d.jsxs)("div",{class:"card-header bg-transparent header-elements-inline",children:[Object(d.jsx)("h6",{class:"card-title",children:"Tax invoice"}),Object(d.jsxs)("div",{class:"header-elements",children:[" ",Object(d.jsxs)("button",{type:"button",class:"btn btn-light btn-sm",children:[Object(d.jsx)("i",{class:"fa fa-file mr-2"})," Save"]})," ",Object(d.jsxs)("button",{type:"button",class:"btn btn-light btn-sm ml-3",children:[Object(d.jsx)("i",{class:"fa fa-print mr-2"})," Print"]})," "]})]}),Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsxs)("div",{class:"row",children:[Object(d.jsx)("div",{class:"col-sm-6",children:Object(d.jsx)("div",{class:"mb-4 pull-left",children:Object(d.jsxs)("ul",{class:"list list-unstyled mb-0 text-left",children:[Object(d.jsx)("li",{children:Object(d.jsx)("b",{children:"Address: #1/168, Main Road, Puttuuthakku,Walaja TK, Ranipet"})}),Object(d.jsx)("li",{children:Object(d.jsx)("b",{children:"Mobile No: 9944891281 "})}),Object(d.jsx)("li",{children:Object(d.jsx)("b",{children:"Email: pradeep@svtinfra.com"})}),Object(d.jsx)("li",{children:Object(d.jsx)("b",{children:"GSTIN No: 33CWMPP5005Q2ZZ "})}),Object(d.jsx)("li",{children:Object(d.jsx)("b",{children:"Website: www.svtinfra.com "})})]})})}),Object(d.jsx)("div",{class:"col-sm-6",children:Object(d.jsx)("div",{class:"mb-4 ",children:Object(d.jsxs)("div",{class:"text-sm-right",children:[Object(d.jsx)("h4",{class:"invoice-color mb-2 mt-md-2",children:"Invoice No: 59"}),Object(d.jsx)("ul",{class:"list list-unstyled mb-0",children:Object(d.jsxs)("li",{children:["Date: ",Object(d.jsx)("span",{class:"font-weight-semibold",children:"March 15, 2020"})]})})]})})})]}),Object(d.jsx)("div",{class:"d-md-flex flex-md-wrap",children:Object(d.jsxs)("div",{class:"mb-4 mb-md-2 text-left",children:[" ",Object(d.jsx)("h5",{class:"text-muted",children:"Invoice To:"}),Object(d.jsxs)("ul",{class:"list list-unstyled mb-0",children:[Object(d.jsx)("li",{children:Object(d.jsx)("h6",{class:"my-2",children:"KUNAL METAL"})}),Object(d.jsx)("li",{children:Object(d.jsx)("span",{class:"font-weight-bold",children:"CHENNAI"})}),Object(d.jsx)("li",{children:Object(d.jsx)("span",{span:!0,class:"font-weight-bold",children:"GSTIN: 8879HDJ6399 "})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#","data-abc":"true",class:"font-weight-bold",children:"kunalmetal@gmail.com"})})]})]})})]}),Object(d.jsx)("div",{class:"table-responsive",children:Object(d.jsxs)("table",{class:"table table-lg",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"S No"}),Object(d.jsx)("th",{children:"TRUCK R.NO"}),Object(d.jsx)("th",{children:"DC.NO"}),Object(d.jsx)("th",{children:"MATERIAL"}),Object(d.jsx)("th",{children:"Qty/CFT"}),Object(d.jsx)("th",{children:"Rate"}),Object(d.jsx)("th",{children:"Amount"}),Object(d.jsx)("th",{children:"GST AMT"}),Object(d.jsx)("th",{children:"T Amount"})]})}),Object(d.jsx)("tbody",{children:null===b||void 0===b||null===(c=b.vehicle_details)||void 0===c?void 0:c.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:O.id}),Object(d.jsx)("td",{children:e.vehicle_no}),Object(d.jsx)("td",{children:e.dc_no}),Object(d.jsx)("td",{children:e.material}),Object(d.jsx)("td",{children:O.total_weight}),Object(d.jsx)("td",{children:O.rate}),Object(d.jsx)("td",{children:O.total_amount}),Object(d.jsx)("td",{children:parseFloat(O.total_amount*O.tax/100)}),Object(d.jsx)("td",{children:O.total_amount+parseFloat(O.total_amount*O.tax/100)})]})}))})]})}),Object(d.jsx)("div",{class:"card-body",children:Object(d.jsx)("div",{class:"d-md-flex flex-md-wrap",children:Object(d.jsxs)("div",{class:"pt-2 mb-3 wmin-md-400 ml-auto",children:[Object(d.jsx)("h6",{class:"mb-3 text-left",children:"Total"}),Object(d.jsx)("div",{class:"table-responsive",children:Object(d.jsx)("table",{class:"table",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{class:"text-left",children:"Total Amount:"}),Object(d.jsx)("td",{class:"text-right",children:"80220"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{class:"text-left",children:"GST Amount:"}),Object(d.jsx)("td",{class:"text-right",children:"4011"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("th",{class:"text-left",children:["CGST: ",Object(d.jsx)("span",{class:"font-weight-normal",children:"2.5%"})]}),Object(d.jsx)("td",{class:"text-right",children:"2105.78"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("th",{class:"text-left",children:["SGST: ",Object(d.jsx)("span",{class:"font-weight-normal",children:"2.5%"})]}),Object(d.jsx)("td",{class:"text-right",children:"2105.78"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{class:"text-left",children:"Grand Total:"}),Object(d.jsx)("td",{class:"text-right text-primary",children:Object(d.jsx)("h5",{class:"font-weight-semibold",children:"84231"})})]})]})})}),Object(d.jsxs)("div",{class:"text-right mt-3",children:[" ",Object(d.jsxs)("button",{type:"button",class:"btn btn-primary",children:[Object(d.jsx)("b",{children:Object(d.jsx)("i",{class:"fa fa-paper-plane-o mr-1"})})," Send invoice"]})," "]})]})})}),Object(d.jsxs)("div",{class:"card-footer",children:[" ",Object(d.jsx)("span",{class:"text-muted",children:"Seller shall have the continuing right to approve Buyer\u2019s credit. Seller may at any time demand advance payment, additional security or guarantee of prompt payment. If Buyer refuses to give the payment, security or guarantee demanded, Seller may terminate the Agreement, refuse to deliver any undelivered goods and Buyer shall immediately become liable to Seller for the unpaid price of all goods delivered & for damages as provided in Paragraph V below. Buyer agrees to pay Seller cost of collection of overdue invoices, including reasonable attorney\u2019s fees incurred by Seller in collecting said sums. F.O.B. point shall be point of SHIP TO on face hereof."})," "]})]})]})})}):""})}}}]);
//# sourceMappingURL=9.3cf3b575.chunk.js.map