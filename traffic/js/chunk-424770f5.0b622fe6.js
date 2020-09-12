(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-424770f5"],{"6d0e":function(t,e,r){"use strict";var a=r("b1b2"),l=r.n(a);l.a},b1b2:function(t,e,r){},f534:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"applyManage"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("车辆调派")]),r("el-breadcrumb-item",{attrs:{to:{path:"/home/applyManage"}}},[t._v("用车申请管理")])],1),r("h3",[t._v("用车申请管理")]),r("el-row",[r("el-col",{attrs:{span:24,offset:0}},[r("el-table",{staticClass:"list",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"true","highlight-current-row":"true"}},[r("el-table-column",{attrs:{prop:"orderStatus",label:"订单状态",width:"110","column-key":"orderStatus",filters:[{text:"待审批",value:"待审批"},{text:"已审批",value:"已审批"},{text:"已调配",value:"已调配"},{text:"已发车",value:"已发车"},{text:"已完成",value:"已完成"}],"filter-method":t.statusFilterHandler}}),r("el-table-column",{attrs:{prop:"orderid",label:"订单编号",width:"150",sortable:""}}),r("el-table-column",{attrs:{prop:"applicationTime",label:"申请时间",width:"150",sortable:""}}),r("el-table-column",{attrs:{prop:"carDepartment",label:"用车部门",width:"150",sortable:""}}),r("el-table-column",{attrs:{prop:"safetySupervisor",label:"安全监督员",width:"120",sortable:""}}),r("el-table-column",{attrs:{prop:"carCategory",label:"车辆种类",width:"150",sortable:""}}),r("el-table-column",{attrs:{prop:"passengerCounter",label:"乘车人数",width:"150",sortable:""}}),r("el-table-column",{attrs:{prop:"passengerName",label:"乘车人员名单",width:"250"}}),r("el-table-column",{attrs:{prop:"carReason",label:"用车事由",width:"200"}}),r("el-table-column",{attrs:{prop:"carRoute",label:"经由路线",width:"200"}}),r("el-table-column",{attrs:{prop:"departureTime",label:"出发时间",width:"150"}}),r("el-table-column",{attrs:{prop:"predictionReturnTime",label:"预计返回时间",width:"150"}}),r("el-table-column",{attrs:{prop:"destination",label:"目的地",width:"150"}}),r("el-table-column",{attrs:{prop:"pickUpLocation",label:"上车地点",width:"150"}}),r("el-table-column",{attrs:{prop:"applicantNumber",label:"申请人联系电话",width:"150"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-row",[r("el-col",{attrs:{span:12}},["已审批"==e.row.orderStatus?r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return t.handleClickAllocate(e.row)}}},[t._v("调配")]):r("div",{staticStyle:{padding:"10px"}})],1),r("el-col",{attrs:{span:12}},[r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(r){return t.handleClickDelete(e.row)}}},[t._v("删除")])],1)],1)]}}])})],1),r("el-dialog",{attrs:{title:"车辆调配",visible:t.dialogFormVisible,width:"21%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[r("p",{staticStyle:{"text-align":"left","font-size":"18px"}},[t._v("订单详情：")]),r("table",{staticClass:"orderDetailTable",staticStyle:{"margin-bottom":"30px"}},[r("tr",[r("td",[t._v("订单状态:")]),r("td",[t._v(t._s(t.currentOrderStatus))]),r("td",[t._v("申请时间:")]),r("td",[t._v(t._s(t.currentApplicationTime))])]),r("tr",[r("td",[t._v("用车部门:")]),r("td",[t._v(t._s(t.currentCarDepartment))]),r("td",[t._v("安全监督员:")]),r("td",[t._v(t._s(t.currentSafetySupervisor))])]),r("tr",[r("td",[t._v("车辆种类:")]),r("td",[t._v(t._s(t.currentCarCategory))]),r("td",[t._v("乘车人数:")]),r("td",[t._v(t._s(t.currentPassengerCounter))])]),r("tr",[r("td",[t._v("乘车人员名单")]),r("td",[t._v(t._s(t.currentPassengerName))]),r("td",[t._v("用车事由:")]),r("td",[t._v(t._s(t.currentCarReason))])]),r("tr",[r("td",[t._v("经由路线:")]),r("td",[t._v(t._s(t.currentCarRoute))]),r("td",[t._v("出发时间:")]),r("td",[t._v(t._s(t.currentDepartureTime))])]),r("tr",[r("td",[t._v("预计返回时间")]),r("td",[t._v(t._s(t.currentPredictionReturnTime))]),r("td",[t._v("出发时间:")]),r("td",[t._v(t._s(t.currentDestination))])]),r("tr",[r("td",[t._v("上车地点:")]),r("td",[t._v(t._s(t.currentPickUpLocation))]),r("td",[t._v("申请人联系电话:")]),r("td",[t._v(t._s(t.currentApplicantNumber))])])]),r("el-form",{attrs:{model:t.form}},[r("el-form-item",{attrs:{label:"调配驾驶员","label-width":"100px"}},[r("el-select",{attrs:{placeholder:"请选择驾驶员",filterable:""},model:{value:t.applyDriver,callback:function(e){t.applyDriver=e},expression:"applyDriver"}},t._l(t.freeDriverList,(function(t){return r("el-option",{key:t,attrs:{label:t.driverName,value:t.driverName}})})),1)],1),r("el-form-item",{attrs:{label:"调配车辆","label-width":"100px"}},[r("el-select",{attrs:{placeholder:"请选择车型"},on:{change:function(e){return t.searchVehicle(t.applyVehicleCategory)}},model:{value:t.applyVehicleCategory,callback:function(e){t.applyVehicleCategory=e},expression:"applyVehicleCategory"}},t._l(t.vehicleCategoryList,(function(t){return r("el-option",{key:t.index,attrs:{label:t.carType,value:t.carType}})})),1),r("el-select",{staticStyle:{"margin-top":"10px"},attrs:{placeholder:"请选择车辆",filterable:""},model:{value:t.applyVehicle,callback:function(e){t.applyVehicle=e},expression:"applyVehicle"}},t._l(t.freeVehicleList,(function(t){return r("el-option",{key:t.index,attrs:{label:t,value:t}})})),1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.submitAllocateTask}},[t._v("下发任务")])],1)],1)],1)],1)],1)},l=[],i={methods:{handleClickAllocate:function(t){var e=this;this.dialogFormVisible=!0,this.currentOrderStatus=t.orderStatus,this.currentApplicationTime=t.applicationTime,this.currentCarDepartment=t.carDepartment,this.currentSafetySupervisor=t.safetySupervisor,this.currentCarCategory=t.carCategory,this.currentPassengerCounter=t.passengerCounter,this.currentPassengerName=t.passengerName,this.currentCarReason=t.carReason,this.currentCarRoute=t.carRoute,this.currentDepartureTime=t.departureTime,this.currentPredictionReturnTime=t.predictionReturnTime,this.currentDestination=t.destination,this.currentPickUpLocation=t.pickUpLocation,this.currentApplicantNumber=t.applicantNumber,this.applyDriver="",this.applyVehicleCategory="",this.applyVehicle="",this.axios.get("/seleteDriverFree").then((function(t){console.log(t),e.freeDriverList=t.data})).catch((function(t){return console.log(t)})),this.axios.get("/getAllCarType").then((function(t){console.log(t),e.vehicleCategoryList=t.data})).catch((function(t){return console.log(t)}))},handleClickDelete:function(t){var e=this;console.log(t.orderStatus),console.log(t.carDepartment),this.axios.get("/deleteusercarorderbyid",{params:{orderid:t.orderid}}).then((function(t){console.log(t),e.axios.get("/seleteCarOrder").then((function(t){e.tableData=t.data}))})).catch((function(t){return console.log(t)}))},stautsFilterHandler:function(t,e,r){var a="orderStatus";return e[a]===t},searchVehicle:function(t){var e=this;this.axios.get("/seleteCarNumbreByCarType",{params:{carType:t}}).then((function(t){console.log(t),e.freeVehicleList=t.data})).catch((function(t){return console.log(t)}))},submitAllocateTask:function(){this.dialogFormVisible=!1,this.axios.get("http://localhost:3000/allocateTask",{params:{driver:this.applyDriver,carNumber:this.applyVehicle}}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.axios.get("/seleteCarOrder").then((function(e){console.log(e),t.tableData=e.data})).catch((function(t){console.log(t)}))},data:function(){return{freeDriverList:[],freeVehicleList:[],vehicleCategoryList:[],applyDriver:"",applyVehicleCategory:"",applyVehicle:"",tableData:[{}],dialogFormVisible:!1,currentOrderStatus:"",currentApplicationTime:"",currentCarDepartment:"",currentSafetySupervisor:"",currentCarCategory:"",currentPassengerCounter:"",currentPassengerName:"",currentCarReason:"",currentCarRoute:"",currentDepartureTime:"",currentPredictionReturnTime:"",currentDestination:"",currentPickUpLocation:"",currentApplicantNumber:""}}},o=i,n=(r("6d0e"),r("9ca4")),s=Object(n["a"])(o,a,l,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-424770f5.0b622fe6.js.map