(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f66aab6"],{"4ae2":function(t,e,l){"use strict";var a=l("7294"),i=l.n(a);i.a},7294:function(t,e,l){},f1a6:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"vehicleList"},[l("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[l("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("车辆管理")]),l("el-breadcrumb-item",{attrs:{to:{path:"/home/vehicleList"}}},[t._v("车辆列表")])],1),l("h1",[t._v("车辆列表")]),l("el-table",{staticClass:"list",staticStyle:{width:"50%"},attrs:{data:t.tableData,border:"true","highlight-current-row":"true"}},[l("el-table-column",{attrs:{fixed:"left",prop:"carNumber",label:"车牌号",sortable:"",width:"150"}}),l("el-table-column",{attrs:{prop:"registerDate",label:"录入日期",sortable:"",width:"150"}}),l("el-table-column",{attrs:{prop:"department",label:"所属部门",width:"150"}}),l("el-table-column",{attrs:{prop:"dispatchStatus",label:"调度状态",width:"150"}}),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return t.handleClickViewDetails(e.row)}}},[t._v("查看详情")]),l("el-dialog",{attrs:{title:"车辆详情",visible:t.detailDialogVisible,width:"60%",center:"",modal:!1},on:{"update:visible":function(e){t.detailDialogVisible=e}}},[l("table",{staticClass:"detailTable",attrs:{border:"0"}},[l("tr",[l("td",[t._v("车牌照号:")]),l("td",[t._v(t._s(t.vehicleDetail.carNumber))]),l("td",[t._v("使用单位:")]),l("td",[t._v(t._s(t.vehicleDetail.carBelong))]),l("td",[t._v("车辆种类:")]),l("td",[t._v(t._s(t.vehicleDetail.carType))]),l("td",[t._v("是否领导用车:")]),l("td",[t._v(t._s(t.vehicleDetail.isLeaderCar))]),l("td",[t._v("车辆类型:")]),l("td",[t._v(t._s(t.vehicleDetail.carCategory))])]),l("tr",[l("td",[t._v("驾驶员:")]),l("td",[t._v(t._s(t.vehicleDetail.driverName))]),l("td",[t._v("车身颜色:")]),l("td",[t._v(t._s(t.vehicleDetail.carColor))]),l("td",[t._v("厂牌型号:")]),l("td",[t._v(t._s(t.vehicleDetail.brandModel))]),l("td",[t._v("出厂日期:")]),l("td",[t._v(t._s(t.vehicleDetail.manufactureDate))]),l("td",[t._v("入户日期:")]),l("td",[t._v(t._s(t.vehicleDetail.obtainDate))])]),l("tr",[l("td",[t._v("价值（万元）:")]),l("td",[t._v(t._s(t.vehicleDetail.carValue))]),l("td",[t._v("车辆来历:")]),l("td",[t._v(t._s(t.vehicleDetail.carFrom))]),l("td",[t._v("已累计行驶（公里）:")]),l("td",[t._v(t._s(t.vehicleDetail.carDrivingDistance))]),l("td",[t._v("行驶证车主:")]),l("td",[t._v(t._s(t.vehicleDetail.drivingLicenseOwner))]),l("td",[t._v("车主地址:")]),l("td",[t._v(t._s(t.vehicleDetail.carOwnerAddress))])]),l("tr",[l("td",[t._v("车主代码:")]),l("td",[t._v(t._s(t.vehicleDetail.carOwnerIndex))]),l("td",[t._v("制造国:")]),l("td",[t._v(t._s(t.vehicleDetail.carMadeBy))]),l("td",[t._v("制造厂商:")]),l("td",[t._v(t._s(t.vehicleDetail.manufactures))]),l("td",[t._v("启用日期:")]),l("td",[t._v(t._s(t.vehicleDetail.enbaleDate))]),l("td",[t._v("发动机型号:")]),l("td",[t._v(t._s(t.vehicleDetail.engineModel))])]),l("tr",[l("td",[t._v("发动机号:")]),l("td",[t._v(t._s(t.vehicleDetail.engineNumber))]),l("td",[t._v("气缸数目:")]),l("td",[t._v(t._s(t.vehicleDetail.cylinderCount))]),l("td",[t._v("车架号:")]),l("td",[t._v(t._s(t.vehicleDetail.frameNumber))]),l("td",[t._v("排量/功率:")]),l("td",[t._v(t._s(t.vehicleDetail.displacement))]),l("td",[t._v("最小离地距离:")]),l("td",[t._v(t._s(t.vehicleDetail.leastDistanceFromGround))])]),l("tr",[l("td",[t._v("缸径×行程:")]),l("td",[t._v(t._s(t.vehicleDetail.boreMultiplyDistance))]),l("td",[t._v("最小转弯半径:")]),l("td",[t._v(t._s(t.vehicleDetail.leastTurnRadius))]),l("td",[t._v("压缩比:")]),l("td",[t._v(t._s(t.vehicleDetail.compressionRatio))]),l("td",[t._v("转向器型式:")]),l("td",[t._v(t._s(t.vehicleDetail.steerMachineModel))]),l("td",[t._v("轴数:")]),l("td",[t._v(t._s(t.vehicleDetail.axleCount))])]),l("tr",[l("td",[t._v("轴距:")]),l("td",[t._v(t._s(t.vehicleDetail.axleDistance))]),l("td",[t._v("轮胎规格:")]),l("td",[t._v(t._s(t.vehicleDetail.tyreSize))]),l("td",[t._v("轮胎数:")]),l("td",[t._v(t._s(t.vehicleDetail.tyreCount))]),l("td",[t._v("主制动型式:")]),l("td",[t._v(t._s(t.vehicleDetail.mainBrakeType))]),l("td",[t._v("驻车制动型式:")]),l("td",[t._v(t._s(t.vehicleDetail.parkBrakeType))])]),l("tr",[l("td",[t._v("油耗:")]),l("td",[t._v(t._s(t.vehicleDetail.oilConsumption))]),l("td",[t._v("油箱容量:")]),l("td",[t._v(t._s(t.vehicleDetail.tankCapacity))]),l("td",[t._v("核定载客:")]),l("td",[t._v(t._s(t.vehicleDetail.approvedPassengerCapacity))]),l("td",[t._v("核定载重:")]),l("td",[t._v(t._s(t.vehicleDetail.approvedLoad))]),l("td",[t._v("总质量:")]),l("td",[t._v(t._s(t.vehicleDetail.totalMass))])]),l("tr",[l("td",[t._v("车身尺寸-长:")]),l("td",[t._v(t._s(t.vehicleDetail.carLength))]),l("td",[t._v("车身尺寸-宽:")]),l("td",[t._v(t._s(t.vehicleDetail.carWidth))]),l("td",[t._v("车身尺寸-高:")]),l("td",[t._v(t._s(t.vehicleDetail.carHeight))]),l("td",[t._v("冷却-形式:")]),l("td",[t._v(t._s(t.vehicleDetail.coolingForm))]),l("td",[t._v("冷却-容量:")]),l("td",[t._v(t._s(t.vehicleDetail.coolingCapacity))])]),l("tr",[l("td",[t._v("轮距-前:")]),l("td",[t._v(t._s(t.vehicleDetail.frontWheelBase))]),l("td",[t._v("轮距-中后:")]),l("td",[t._v(t._s(t.vehicleDetail.middleBackWheelBase))]),l("td",[t._v("备注:")]),l("td",[t._v(t._s(t.vehicleDetail.remarks))])])]),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.detailDialogVisible=!1}}},[t._v("确 定")])],1)]),l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return t.handleClickEdit(e.row)}}},[t._v("编辑")]),l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return t.handleClickDelete(e.row)}}},[t._v("删除")])]}}])})],1)],1)},i=[],v={data:function(){return{detailDialogVisible:!1,vehicleDetail:{},tableData:[{}]}},methods:{handleClickViewDetails:function(t){var e=this;this.axios.get("http://localhost:3000/vehicledetails",{params:{carNumber:t.carNumber},timeout:1e3}).then((function(t){e.detailDialogVisible=!0,console.log(t),e.vehicleDetail=t.data})).catch((function(t){console.log(t),e.$message({message:"获取数据失败",type:"error"})}))},handleClickEdit:function(t){console.log(t)},handleClickDelete:function(t){console.log(t)}},mounted:function(){var t=this;this.axios.get("/getallcarinfo").then((function(e){t.tableData=e.data,console.log(e)})).catch((function(t){console.log(t)}))}},d=v,s=(l("4ae2"),l("9ca4")),c=Object(s["a"])(d,a,i,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-0f66aab6.ec1f6d85.js.map