(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[12],{663:function(e,t,r){"use strict";var c=r(1),n=r(110),a=r.n(n),s=r(159),i=r(650),l=(r(162),function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),r=t[0],n=t[1],l=Object(c.useRef)();return{invoke:function(e,t,r){return n(!0),new Promise(function(){var c=Object(s.a)(a.a.mark((function c(s,i){var j,d;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return j=null,e&&t&&r&&(j=JSON.stringify({data:r})),c.prev=2,c.next=5,window.silentFetch(e,{method:t||"POST",body:j});case 5:return d=c.sent,c.next=8,d.json();case 8:l.current=c.sent,s(l.current),n(!1),c.next=16;break;case 13:c.prev=13,c.t0=c.catch(2),console.log(c.t0);case 16:case"end":return c.stop()}}),c,null,[[2,13]])})));return function(e,t){return c.apply(this,arguments)}}())},result:l.current,inProgress:r}});t.a=function(e){var t=l();return{invoke:function(e){var r=e.endPoint,c=e.method,n=e.data;return t.invoke(r,c,n)},inProgress:t.inProgress}}},957:function(e,t,r){"use strict";r.r(t);var c=r(110),n=r.n(c),a=r(48),s=r(159),i=r(650),l=r(1),j=r(771),d=r(965),o=r(963),h=r(955),b=r(956),u=r(961),x=r(672),O=r(969),p=(r(683),r(663)),m=r(20),v=j.a.Option,f=d.a.TextArea;t.default=function(e){var t=o.a.useForm(),r=Object(i.a)(t,1)[0],c=Object(l.useRef)(),y=Object(p.a)(),g=function(){var e=Object(s.a)(n.a.mark((function e(t){var c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(a.a)(Object(a.a)({},t),{},{permit_expiry_date:new Date(t.permit_expiry_date).toLocaleDateString()}),e.next=3,y.invoke({endPoint:"http://localhost:8000/api/updateVehicle",method:"post",data:c});case 3:1===(s=e.sent).status?r.resetFields():alert("Something Went Wroung You Record Couldn`t able to create!"),console.log("called",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{ref:c,style:{padding:"20px 10px"},children:[Object(m.jsx)(h.a,{children:Object(m.jsx)("p",{style:{fontSize:"calc(10px + 1vmin)"},children:"Add New Truck Details"})}),Object(m.jsx)("hr",{}),Object(m.jsxs)(o.a,{style:{paddingTop:20},form:r,onFinish:g,children:[Object(m.jsx)(h.a,{children:Object(m.jsxs)(b.a,{xl:12,children:[Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)("label",{children:"Vechicle Provider *"})}),Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)(o.a.Item,{name:"vehicle_provider",rules:[{required:!0,message:"Please select vechicle provider!"}],children:Object(m.jsxs)(j.a,{placeholder:"Select",children:[Object(m.jsx)(v,{value:"Owned By Company",children:"Owned By Company"}),Object(m.jsx)(v,{value:"Third Party Carrier",children:"Third Party Carrier"})]})})})]}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)("label",{children:"Work Service Location *"})}),Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)(o.a.Item,{name:"service_loc",rules:[{required:!0,message:"Please enter work service location!"}],children:Object(m.jsx)(d.a,{placeholder:"Work Service Location"})})})]}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)("label",{children:"Vehicle Number *"})}),Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)(o.a.Item,{name:"vehicle_no",rules:[{required:!0,message:"Please enter vehicle number!"}],children:Object(m.jsx)(d.a,{placeholder:"Vehicle Number",maxLength:10,prefix:Object(m.jsx)(O.a,{})})})})]}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)("label",{children:"Transportation Type *"})}),Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)(o.a.Item,{name:"transport_type",rules:[{required:!0,message:"Please select transportation type!"}],children:Object(m.jsxs)(j.a,{placeholder:"Select",children:[Object(m.jsx)(v,{value:"In-Bound",children:"In-Bound"}),Object(m.jsx)(v,{value:"Out-Bound",children:"Out-Bound"})]})})})]}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)("label",{children:"Vehicle Details *"})}),Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)(o.a.Item,{name:"vehicle_details",rules:[{required:!0,message:"Please enter vehicle details!"}],children:Object(m.jsx)(f,{placeholder:"Vehicle Details"})})})]}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)("label",{children:"Permit of States *"})}),Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)(o.a.Item,{name:"permit",rules:[{required:!0,message:"Please enter permit of states!"}],children:Object(m.jsx)(d.a,{placeholder:"Permit of States"})})})]}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)("label",{children:"Permit Expiry Date *"})}),Object(m.jsx)(b.a,{span:11,children:Object(m.jsx)(o.a.Item,{name:"permit_expiry_date",rules:[{required:!0,message:"Please select permit expiry date!"}],children:Object(m.jsx)(u.a,{style:{width:"100%"},format:"DD/MM/YYYY",disabledDate:function(e){return e&&e<new Date(Date.now()-864e5)}})})})]})]})}),Object(m.jsx)("hr",{}),Object(m.jsxs)(h.a,{gutter:16,children:[Object(m.jsx)(b.a,{children:Object(m.jsx)(o.a.Item,{children:Object(m.jsx)(x.a,{type:"primary",danger:!0,htmlType:"submit",children:"Submit"})})}),Object(m.jsx)(b.a,{children:Object(m.jsx)(x.a,{onClick:function(){r.resetFields()},children:"Reset"})})]})]})]})}}}]);
//# sourceMappingURL=12.74ba347b.chunk.js.map