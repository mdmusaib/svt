(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[11],{663:function(e,t,n){"use strict";var r=n(1),a=n(110),i=n.n(a),c=n(159),o=n(650),l=(n(162),function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],l=Object(r.useRef)();return{invoke:function(e,t,n){return a(!0),new Promise(function(){var r=Object(c.a)(i.a.mark((function r(c,o){var s,u;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=null,e&&t&&n&&(s=JSON.stringify({data:n})),r.prev=2,r.next=5,window.silentFetch(e,{method:t||"POST",body:s});case 5:return u=r.sent,r.next=8,u.json();case 8:l.current=r.sent,c(l.current),a(!1),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(2),console.log(r.t0);case 16:case"end":return r.stop()}}),r,null,[[2,13]])})));return function(e,t){return r.apply(this,arguments)}}())},result:l.current,inProgress:n}});t.a=function(e){var t=l();return{invoke:function(e){var n=e.endPoint,r=e.method,a=e.data;return t.invoke(n,r,a)},inProgress:t.inProgress}}},966:function(e,t,n){"use strict";n.r(t);var r=n(110),a=n.n(r),i=n(159),c=n(48),o=n(650),l=n(1),s=n(965),u=n(13),d=n(626),f=n(627),p=n(625),m=n.n(p),v=n(657),h=n(777);function b(e){var t=e.className,n=e.direction,r=e.index,a=e.marginDirection,i=e.children,c=e.split,o=e.wrap,s=l.useContext(O),f=s.horizontalSize,p=s.verticalSize,m=s.latestIndex,v={};return"vertical"===n?r<m&&(v={marginBottom:f/(c?2:1)}):v=Object(u.a)(Object(u.a)({},r<m&&Object(d.a)({},a,f/(c?2:1))),o&&{paddingBottom:p}),null===i||void 0===i?null:l.createElement(l.Fragment,null,l.createElement("div",{className:t,style:v},i),r<m&&c&&l.createElement("span",{className:"".concat(t,"-split"),style:v},c))}var j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},O=l.createContext({latestIndex:0,horizontalSize:0,verticalSize:0}),g={small:8,middle:16,large:24};var x=function(e){var t,n=l.useContext(h.b),r=n.getPrefixCls,a=n.space,i=n.direction,c=e.size,o=void 0===c?(null===a||void 0===a?void 0:a.size)||"small":c,s=e.align,p=e.className,x=e.children,y=e.direction,w=void 0===y?"horizontal":y,z=e.prefixCls,k=e.split,S=e.style,C=e.wrap,P=void 0!==C&&C,E=j(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),I=l.useMemo((function(){return(Array.isArray(o)?o:[o,o]).map((function(e){return function(e){return"string"===typeof e?g[e]:e||0}(e)}))}),[o]),N=Object(f.a)(I,2),B=N[0],F=N[1],R=Object(v.a)(x,{keepEmpty:!0});if(0===R.length)return null;var H=void 0===s&&"horizontal"===w?"center":s,L=r("space",z),M=m()(L,"".concat(L,"-").concat(w),(t={},Object(d.a)(t,"".concat(L,"-rtl"),"rtl"===i),Object(d.a)(t,"".concat(L,"-align-").concat(H),H),t),p),V="".concat(L,"-item"),A="rtl"===i?"marginLeft":"marginRight",D=0,T=R.map((function(e,t){return null!==e&&void 0!==e&&(D=t),l.createElement(b,{className:V,key:"".concat(V,"-").concat(t),direction:w,index:t,marginDirection:A,split:k,wrap:P},e)}));return l.createElement("div",Object(u.a)({className:M,style:Object(u.a)(Object(u.a)({},P&&{flexWrap:"wrap",marginBottom:-F}),S)},E),l.createElement(O.Provider,{value:{horizontalSize:B,verticalSize:F,latestIndex:D}},T))},y=n(672),w=n(960),z=n(779),k=n(946),S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]},name:"file-text",theme:"outlined"},C=n(637),P=function(e,t){return l.createElement(C.a,Object.assign({},e,{ref:t,icon:S}))};P.displayName="FileTextOutlined";var E=l.forwardRef(P),I=n(663),N=n(20);t.default=function(e){var t,n=Object(l.useState)([]),r=Object(o.a)(n,2),u=r[0],d=r[1],f=Object(l.useState)(""),p=Object(o.a)(f,2),m=(p[0],p[1]),v=Object(l.useState)(""),h=Object(o.a)(v,2),b=(h[0],h[1]),j=Object(l.createRef)(),O=function(e,t,n){t(),b(e[0]),m(n)},g=function(e){e(),b("")},S=[Object(c.a)({title:"* Customer Name",dataIndex:"customer_name",editable:!1,width:"50%"},(t="customer_name",{filterDropdown:function(e){var n=e.setSelectedKeys,r=e.selectedKeys,a=e.confirm,i=e.clearFilters;return Object(N.jsxs)("div",{style:{padding:8},children:[Object(N.jsx)(s.a,{ref:j,placeholder:"Search ".concat(t),value:r[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){return O(r,a,t)},style:{width:188,marginBottom:8,display:"block"}}),Object(N.jsxs)(x,{children:[Object(N.jsx)(y.a,{type:"primary",onClick:function(){return O(r,a,t)},icon:Object(N.jsx)(z.a,{}),size:"small",style:{width:90},children:"Search"}),Object(N.jsx)(y.a,{onClick:function(){return g(i)},size:"small",style:{width:90},children:"Reset"})]})]})},filterIcon:function(e){return Object(N.jsx)(z.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(e,n){return n[t]?n[t].toString().toLowerCase().includes(e.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return j.current.select()}),100)},render:function(e){return e}})),{title:"Address",dataIndex:"receiver_address",editable:!1,width:"50%"},{title:"* Rate",dataIndex:"rate",editable:!1,width:"50%"},{title:"* Tot Amt",dataIndex:"total_amount",editable:!1},{title:"",dataIndex:"operation",render:function(e,t){return u.length>=1?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{title:"View Booking",style:{cursor:"pointer"},onClick:function(){return P(t)},children:Object(N.jsx)(k.a,{})}),Object(N.jsx)("div",{title:"invoice",style:{cursor:"pointer"},onClick:function(){return B(t)},children:Object(N.jsx)(E,{})})]}):null}}],C=Object(I.a)();Object(l.useEffect)((function(){F()}),[]);var P=function(t){e.history.push({pathname:"addBooking",record:t,type:"view"})},B=function(t){e.history.push({pathname:"invoice",record:t,type:"view"})},F=function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.invoke({endPoint:"http://localhost:8000/api/getBookings",method:"get"});case 2:t=e.sent,d(t.data),console.log("called",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsx)("div",{style:{width:"100%",overflowX:"scroll"},children:Object(N.jsx)(w.a,{loading:C.inProgress,bordered:!0,dataSource:u,columns:S,pagination:!1})})}}}]);
//# sourceMappingURL=11.c91304a6.chunk.js.map