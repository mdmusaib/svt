(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[10],{1017:function(e,t,a){"use strict";a.r(t);a(680);var n=a(44),c=a.n(n),r=a(61),i=a(162),l=a(1),d=a(805),s=a(1021),o=a(989),j=a(674),u=a(1008),b=a(1023),h=a(1032),x=a(1033),O=a(1034),p=(a(687),a(733),a(734),a(163)),m=a(802),f=a.n(m),v=a(4);d.a.Option;t.default=function(e){var t,a=s.a.useForm(),n=Object(i.a)(a,1)[0],d=Object(l.useRef)(),m=Object(p.a)(),y=Object(l.useState)([]),g=Object(i.a)(y,2),w=(g[0],g[1]),I=Object(l.useState)([]),S=Object(i.a)(I,2),_=(S[0],S[1]);Object(l.useEffect)((function(){window.matchMedia("(min-width: 768px)").matches&&(d.current.style.padding="20px 60px")}),[]),Object(l.useEffect)((function(){var t;"view"===(null===e||void 0===e||null===(t=e.location)||void 0===t?void 0:t.type)&&(n.setFieldsValue(e.location.record),w(JSON.parse(e.location.record.items)),_(e.location.record.vehicle_details))}),[null===e||void 0===e||null===(t=e.location)||void 0===t?void 0:t.type]);var k=function(){var e=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.invoke({endPoint:"https://logistic.svtinfra.com/api/customers/create",method:"post",data:t});case 2:a=e.sent,n.resetFields(),console.log("called",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{ref:d,style:{padding:"20px 10px"},children:[Object(v.jsx)(o.a,{children:"view"===e.location.type?Object(v.jsx)(j.a,{onClick:function(){return e.history.goBack()},type:"primary",style:{marginBottom:16},children:"Back"}):Object(v.jsx)("p",{style:{fontSize:"calc(10px + 1vmin)"},children:"Customer Details"})}),Object(v.jsx)("hr",{}),Object(v.jsxs)(s.a,{style:{paddingTop:20,paddingLeft:180},form:n,onFinish:k,children:[Object(v.jsx)(o.a,{children:Object(v.jsxs)(u.a,{xl:12,md:6,children:[Object(v.jsxs)(o.a,{children:[Object(v.jsx)(u.a,{span:11,children:Object(v.jsx)("label",{children:"Name *"})}),Object(v.jsx)(u.a,{span:11,children:Object(v.jsx)(s.a.Item,{name:"name",rules:[{required:!0,message:"Please enter your name!"}],children:Object(v.jsx)(b.a,{placeholder:"Name",prefix:Object(v.jsx)(h.a,{})})})})]}),Object(v.jsxs)(o.a,{children:[Object(v.jsx)(u.a,{span:11,children:Object(v.jsx)("label",{children:"Email *"})}),Object(v.jsx)(u.a,{span:11,children:Object(v.jsx)(s.a.Item,{name:"email",rules:[{type:"email",message:"Please Enter Valid Mail"},{required:!0,message:"Please enter your mail!"}],children:Object(v.jsx)(b.a,{placeholder:"Email",prefix:Object(v.jsx)(x.a,{})})})})]}),Object(v.jsxs)(o.a,{children:[Object(v.jsx)(u.a,{span:11,children:Object(v.jsx)("label",{children:"Mobile Number *"})}),Object(v.jsx)(u.a,{span:11,children:Object(v.jsx)(s.a.Item,{name:"mobile",rules:[{required:!0,message:"Please enter your number!"}],children:Object(v.jsx)(b.a,{placeholder:"Mobile Number",maxLength:10,prefix:Object(v.jsx)(O.a,{})})})})]}),Object(v.jsxs)(o.a,{children:[Object(v.jsx)(u.a,{span:11,children:Object(v.jsx)("label",{children:"PAN *"})}),Object(v.jsx)(u.a,{span:11,children:Object(v.jsx)(s.a.Item,{name:"pan_no",rules:[{required:!0,message:"Please enter your name!"}],children:Object(v.jsx)(b.a,{placeholder:"PAN"})})})]}),Object(v.jsxs)(o.a,{children:[Object(v.jsx)(u.a,{span:11,children:Object(v.jsx)("label",{children:"Aadhaar *"})}),Object(v.jsx)(u.a,{span:11,children:Object(v.jsx)(s.a.Item,{name:"aadhaar_no",rules:[{required:!0,message:"Please enter your name!"}],children:Object(v.jsx)(b.a,{placeholder:"Aadhaar"})})})]}),Object(v.jsxs)(o.a,{children:[Object(v.jsx)(u.a,{span:11,children:Object(v.jsx)("label",{children:"Address *"})}),Object(v.jsx)(u.a,{span:11,children:Object(v.jsx)(s.a.Item,{name:"address",rules:[{required:!0,message:"Please enter receiver address"}],children:Object(v.jsx)(f.a,{placeholder:"Receiver Address"})})})]})]})}),"view"===e.location.type?"":Object(v.jsxs)(o.a,{gutter:16,children:[Object(v.jsx)(u.a,{children:Object(v.jsx)(s.a.Item,{children:Object(v.jsx)(j.a,{type:"primary",danger:!0,htmlType:"submit",children:"Submit"})})}),Object(v.jsx)(u.a,{children:Object(v.jsx)(j.a,{onClick:function(){n.resetFields(),w([])},children:"Reset"})})]})]})]})}},733:function(e,t,a){"use strict";var n=a(680),c=a(167),r=a(168),i=a(170),l=a(169),d=a(44),s=a.n(d),o=a(61),j=a(166),u=a(40),b=a(162),h=a(164),x=a(1),O=a.n(x),p=a(1021),m=a(1023),f=a(1029),v=a(674),y=a(1019),g=a(1030),w=a(4),I=O.a.createContext(null),S=function(e){e.index;var t=Object(h.a)(e,["index"]),a=p.a.useForm(),n=Object(b.a)(a,1)[0];return Object(w.jsx)(p.a,{form:n,component:!1,children:Object(w.jsx)(I.Provider,{value:n,children:Object(w.jsx)("tr",Object(u.a)({},t))})})},_=function(e){var t=e.title,a=e.editable,n=e.children,c=e.dataIndex,r=e.record,i=e.handleSave,l=Object(h.a)(e,["title","editable","children","dataIndex","record","handleSave"]),d=Object(x.useState)(!1),O=Object(b.a)(d,2),f=O[0],v=O[1],y=Object(x.useRef)(null),g=Object(x.useContext)(I);Object(x.useEffect)((function(){f&&y.current.focus()}),[f]);var S=function(){v(!f),g.setFieldsValue(Object(j.a)({},c,r[c]))},_=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.validateFields();case 3:t=e.sent,S(),i(Object(u.a)(Object(u.a)({},r),t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Save failed:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),k=n;return a&&(k=f?Object(w.jsx)(p.a.Item,{style:{margin:0},name:c,rules:[{required:!0,message:"".concat(t," is required.")}],children:Object(w.jsx)(m.a,{ref:y,onPressEnter:_,onBlur:_})}):Object(w.jsx)("div",{className:"editable-cell-value-wrap",style:{paddingRight:24},onClick:S,children:n})),Object(w.jsx)("td",Object(u.a)(Object(u.a)({},l),{},{children:k}))};O.a.Component},734:function(e,t,a){"use strict";var n=a(680),c=a(167),r=a(168),i=a(170),l=a(169),d=a(166),s=a(44),o=a.n(s),j=a(61),u=a(40),b=a(162),h=a(164),x=a(1),O=a.n(x),p=a(805),m=a(1021),f=a(1023),v=a(1029),y=a(674),g=a(1019),w=a(1030),I=(a(735),a(163)),S=a(4),_=O.a.createContext(null),k=p.a.Option,q=function(e){e.index;var t=Object(h.a)(e,["index"]),a=m.a.useForm(),n=Object(b.a)(a,1)[0];return Object(S.jsx)(m.a,{form:n,component:!1,children:Object(S.jsx)(_.Provider,{value:n,children:Object(S.jsx)("tr",Object(u.a)({},t))})})},C=function(e){var t=e.title,a=e.editable,n=e.children,c=e.dataIndex,r=e.record,i=e.handleSave,l=Object(h.a)(e,["title","editable","children","dataIndex","record","handleSave"]),s=Object(x.useState)(!1),O=Object(b.a)(s,2),v=O[0],y=O[1],g=Object(x.useRef)(null),w=Object(x.useContext)(_),q=Object(I.a)();Object(x.useEffect)((function(){v&&g.current.focus()}),[v]);var C=Object(x.useState)([]),P=Object(b.a)(C,2),N=P[0],D=P[1];Object(x.useEffect)((function(){E()}),[]);var E=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.invoke({endPoint:"http://localhost:8000/api/customers",method:"get"});case 2:t=e.sent,D(t),console.log("response",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){y(!v),w.setFieldsValue(Object(d.a)({},c,r[c]))},A=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.validateFields();case 3:t=e.sent,F(),i(Object(u.a)(Object(u.a)({},r),t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Save failed:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),R=n;if(a)if(v)switch(c){case"party_name":R=Object(S.jsx)(m.a.Item,{style:{margin:0},name:c,rules:[{required:!0,message:"".concat(t," is required.")}],children:Object(S.jsx)(p.a,{ref:g,onChange:A,children:N.map((function(e){return Object(S.jsx)("option",{value:"".concat(e.name),children:e.name})}))})});break;case"gst":R=Object(S.jsx)(m.a.Item,{style:{margin:0},name:c,rules:[{required:!0,message:"".concat(t," is required.")}],children:Object(S.jsxs)(p.a,{ref:g,onChange:A,children:[Object(S.jsx)(k,{value:"yes",children:"YES"}),Object(S.jsx)(k,{value:"no",children:"NO"})]})});break;default:R=Object(S.jsx)(m.a.Item,{style:{margin:0},name:c,rules:[{required:!0,message:"".concat(t," is required.")}],children:Object(S.jsx)(f.a,{ref:g,onPressEnter:A,onBlur:A})})}else R=Object(S.jsx)("div",{className:"editable-cell-value-wrap",style:{paddingRight:24},onClick:F,children:n});return Object(S.jsx)("td",Object(u.a)(Object(u.a)({},l),{},{children:R}))},P=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).handleDelete=function(e){var t=Object(n.a)(r.state.dataSource);r.setState({dataSource:t.filter((function(t){return t.key!==e}))})},r.handleAdd=function(){var e=r.state,t=e.count,a=e.dataSource,c={key:t,vehicle_no:"",dc_no:"",from_loc:"",to_loc:"",material:"",party_name:"",rate:"",scale:"",weight:"",gst:"",payment_type:"",diesel_rt:"",diesel_qty:"",loading_quantity:"",accepted_quantity:"",logistic_rent:"",lead:"",date:"",puc:"",total_amount:"",expences:"",driver_name:"",profit:""};r.setState({dataSource:[].concat(Object(n.a)(a),[c]),count:t+1})},r.handleSave=function(e){var t=Object(n.a)(r.state.dataSource),a=t.findIndex((function(t){return e.key===t.key})),c=t[a];t.splice(a,1,Object(u.a)(Object(u.a)({},c),e)),r.setState({dataSource:t},(function(){return r.props.getTableData(r.state.dataSource)}))},r.columns=[{title:"* Vehicle No",dataIndex:"vehicle_no",editable:!0,width:"200"},{title:"* DC.NO",dataIndex:"dc_no",editable:!0,width:"200"},{title:"* From",dataIndex:"from_loc",editable:!0,width:"200"},{title:"* To",dataIndex:"to_loc",editable:!0,width:"200"},{title:"* Material",dataIndex:"material",editable:!0,width:"200"},{title:"* Party Name",dataIndex:"party_name",editable:!0,width:"200"},{title:"* Rate",dataIndex:"rate",editable:!0,width:"200"},{title:"* Weight",dataIndex:"weight",editable:!0,width:"200"},{title:"* GST",dataIndex:"gst",editable:!0,width:"200"},{title:"* Payment Type",dataIndex:"payment_type",editable:!0,width:"200"},{title:"* Diseal Rate",dataIndex:"diesel_rt",editable:!0,width:"200"},{title:"* Diseal Qty",dataIndex:"diesel_qty",editable:!0,width:"200"},{title:"* Loading Quantity",dataIndex:"loading_quantity",editable:!0,width:"200"},{title:"* Accepted Quantity",dataIndex:"accepted_quantity",editable:!0,width:"200"},{title:"* Logistic Rent",dataIndex:"logistic_rent",editable:!0,width:"200"},{title:"* Lead",dataIndex:"lead",editable:!0,width:"200"},{title:"* Date",dataIndex:"date",editable:!0,width:"200"},{title:"* PUC",dataIndex:"puc",editable:!0,width:"200"},{title:"* Expences",dataIndex:"expences",editable:!0,width:"200"},{title:"* Driver Name",dataIndex:"driver_name",editable:!0,width:"200"},{title:"* Profit",dataIndex:"profit",editable:!0,width:"200"},{title:"* Tot Amt",dataIndex:"total_amount",editable:!0,width:"200"},{title:"",dataIndex:"operation",render:function(e,t){return r.state.dataSource.length>=1?Object(S.jsx)(v.a,{title:"Sure to delete?",onConfirm:function(){return r.handleDelete(t.key)},children:Object(S.jsx)(w.a,{style:{color:"black"}})}):null}}],r.state={dataSource:[],count:2},r}return Object(r.a)(a,[{key:"componentDidUpdate",value:function(e,t){JSON.stringify(e.rowData)!==JSON.stringify(this.props.rowData)&&this.setState({dataSource:this.props.rowData})}},{key:"render",value:function(){var e=this,t=this.state.dataSource,a={body:{row:q,cell:C}},n=this.columns.map((function(t){return t.editable?Object(u.a)(Object(u.a)({},t),{},{onCell:function(a){return{record:a,editable:t.editable,dataIndex:t.dataIndex,title:t.title,handleSave:e.handleSave,width:t.width}}}):t}));return Object(S.jsxs)("div",{style:{width:"100%"},children:[this.props.view?"":Object(S.jsx)(y.a,{onClick:this.handleAdd,type:"primary",style:{marginBottom:16},children:"Add a row"}),Object(S.jsx)(g.a,{components:a,className:"editingTable",rowClassName:function(){return"editable-row"},bordered:!0,dataSource:t,columns:n,pagination:!1,scroll:{x:4200}})]})}}]),a}(O.a.Component);t.a=P},735:function(e,t,a){}}]);
//# sourceMappingURL=10.7e79b102.chunk.js.map