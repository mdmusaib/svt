(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[15],{647:function(e,t,r){"use strict";var c=r(1),n=r(110),a=r.n(n),i=r(159),s=r(642),l=(r(162),function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),r=t[0],n=t[1],l=Object(c.useRef)();return{invoke:function(e,t,r){return n(!0),new Promise(function(){var c=Object(i.a)(a.a.mark((function c(i,s){var j,o;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return j=null,e&&t&&r&&(j=JSON.stringify({data:r})),c.prev=2,c.next=5,window.silentFetch(e,{method:t||"POST",body:j});case 5:return o=c.sent,c.next=8,o.json();case 8:l.current=c.sent,i(l.current),n(!1),c.next=16;break;case 13:c.prev=13,c.t0=c.catch(2),console.log(c.t0);case 16:case"end":return c.stop()}}),c,null,[[2,13]])})));return function(e,t){return c.apply(this,arguments)}}())},result:l.current,inProgress:r}});t.a=function(e){var t=l();return{invoke:function(e){var r=e.endPoint,c=e.method,n=e.data;return t.invoke(r,c,n)},inProgress:t.inProgress}}},968:function(e,t,r){"use strict";r.r(t);var c=r(110),n=r.n(c),a=r(159),i=r(48),s=r(642),l=r(1),j=r(781),o=r(978),d=r(976),h=r(758),u=r(669),b=r(967),p=r(975),x=r(982),O=(r(673),r(647)),m=r(20),v=j.a.Option,f=o.a.TextArea;t.default=function(e){var t,r=d.a.useForm(),c=Object(s.a)(r,1)[0],y=Object(l.useRef)(),g=Object(O.a)();Object(l.useEffect)((function(){var t;if("view"===(null===e||void 0===e||null===(t=e.location)||void 0===t?void 0:t.type)){console.log(e.location.record);var r=Object(i.a)({},e.location.record);delete r.permit_expiry_date,c.setFieldsValue(r)}}),[null===e||void 0===e||null===(t=e.location)||void 0===t?void 0:t.type]);var w=function(){var e=Object(a.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(i.a)(Object(i.a)({},t),{},{permit_expiry_date:new Date(t.permit_expiry_date).toLocaleDateString()}),e.next=3,g.invoke({endPoint:"http://localhost:8000/api/updateVehicle",method:"post",data:r});case 3:1===(a=e.sent).status?c.resetFields():alert("Something Went Wroung You Record Couldn`t able to create!"),console.log("called",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{ref:y,style:{padding:"20px 10px"},children:[Object(m.jsx)(h.a,{children:"view"===e.location.type?Object(m.jsx)(u.a,{onClick:function(){return e.history.goBack()},type:"primary",style:{marginBottom:16},children:"Back"}):Object(m.jsx)("p",{style:{fontSize:"calc(10px + 1vmin)"},children:"Vehicle"})}),Object(m.jsx)(h.a,{children:Object(m.jsx)("p",{style:{fontSize:"calc(10px + 1vmin)"},children:"Add New Truck Details"})}),Object(m.jsx)("hr",{}),Object(m.jsxs)(d.a,{style:{paddingTop:20},form:c,onFinish:w,children:[Object(m.jsx)(h.a,{children:Object(m.jsxs)(b.a,{xl:12,children:[Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)("label",{children:"Vechicle Provider *"})}),Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)(d.a.Item,{name:"vehicle_provider",rules:[{required:!0,message:"Please select vechicle provider!"}],children:Object(m.jsxs)(j.a,{placeholder:"Select",children:[Object(m.jsx)(v,{value:"Owned By Company",children:"Owned By Company"}),Object(m.jsx)(v,{value:"Third Party Carrier",children:"Third Party Carrier"})]})})})]}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)("label",{children:"Work Service Location *"})}),Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)(d.a.Item,{name:"service_loc",rules:[{required:!0,message:"Please enter work service location!"}],children:Object(m.jsx)(o.a,{placeholder:"Work Service Location"})})})]}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)("label",{children:"Vehicle Number *"})}),Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)(d.a.Item,{name:"vehicle_no",rules:[{required:!0,message:"Please enter vehicle number!"}],children:Object(m.jsx)(o.a,{placeholder:"Vehicle Number",maxLength:10,prefix:Object(m.jsx)(x.a,{})})})})]}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)("label",{children:"Transportation Type *"})}),Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)(d.a.Item,{name:"transport_type",rules:[{required:!0,message:"Please select transportation type!"}],children:Object(m.jsxs)(j.a,{placeholder:"Select",children:[Object(m.jsx)(v,{value:"In-Bound",children:"In-Bound"}),Object(m.jsx)(v,{value:"Out-Bound",children:"Out-Bound"})]})})})]}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)("label",{children:"Vehicle Details *"})}),Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)(d.a.Item,{name:"vehicle_details",rules:[{required:!0,message:"Please enter vehicle details!"}],children:Object(m.jsx)(f,{placeholder:"Vehicle Details"})})})]}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)("label",{children:"Permit of States *"})}),Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)(d.a.Item,{name:"permit",rules:[{required:!0,message:"Please enter permit of states!"}],children:Object(m.jsx)(o.a,{placeholder:"Permit of States"})})})]}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)("label",{children:"Permit Expiry Date *"})}),Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)(d.a.Item,{name:"permit_expiry_date",rules:[{required:!0,message:"Please select permit expiry date!"}],children:Object(m.jsx)(p.a,{style:{width:"100%"},format:"DD/MM/YYYY",disabledDate:function(e){return e&&e<new Date(Date.now()-864e5)}})})})]})]})}),Object(m.jsx)("hr",{}),Object(m.jsxs)(h.a,{gutter:16,children:[Object(m.jsx)(b.a,{children:Object(m.jsx)(d.a.Item,{children:"view"===e.location.type?"":Object(m.jsx)(u.a,{type:"primary",danger:!0,htmlType:"submit",children:"Submit"})})}),Object(m.jsx)(b.a,{children:"view"===e.location.type?"":Object(m.jsx)(u.a,{onClick:function(){c.resetFields()},children:"Reset"})})]})]})]})}}}]);
//# sourceMappingURL=15.ac662edb.chunk.js.map