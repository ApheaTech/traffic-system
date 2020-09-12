<template>
  <div class="vehicleList">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">车辆管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home/vehicleList'}">车辆列表</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>车辆列表</h1>
    <!-- 表格 -->
    <el-table
      class="list"
      :data="tableData"
      border="true"
      style="width: 50%"
      highlight-current-row="true"
    >
      <el-table-column fixed="left" prop="carNumber" label="车牌号" sortable width="150"></el-table-column>
      <el-table-column prop="registerDate" label="录入日期" sortable width="150"></el-table-column>
      <el-table-column prop="department" label="所属部门" width="150"></el-table-column>
      <el-table-column prop="dispatchStatus" label="调度状态" width="150"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClickViewDetails(scope.row)" type="text" size="small">查看详情</el-button>
          <el-dialog
            title="车辆详情"
            :visible.sync="detailDialogVisible"
            width="60%"
            center
            :modal="false"
          >
            <table class="detailTable" border="0">
              <tr>
                <td>车牌照号:</td>
                <td>{{ vehicleDetail.carNumber }}</td>
                <td>使用单位:</td>
                <td>{{ vehicleDetail.carBelong }}</td>
                <td>车辆种类:</td>
                <td>{{ vehicleDetail.carType }}</td>
                <td>是否领导用车:</td>
                <td>{{ vehicleDetail.isLeaderCar }}</td>
                <td>车辆类型:</td>
                <td>{{ vehicleDetail.carCategory }}</td>
              </tr>
              <tr>
                <td>驾驶员:</td>
                <td>{{ vehicleDetail.driverName }}</td>
                <td>车身颜色:</td>
                <td>{{ vehicleDetail.carColor }}</td>
                <td>厂牌型号:</td>
                <td>{{ vehicleDetail.brandModel }}</td>
                <td>出厂日期:</td>
                <td>{{ vehicleDetail.manufactureDate }}</td>
                <td>入户日期:</td>
                <td>{{ vehicleDetail.obtainDate }}</td>
              </tr>
              <tr>
                <td>价值（万元）:</td>
                <td>{{ vehicleDetail.carValue }}</td>
                <td>车辆来历:</td>
                <td>{{ vehicleDetail.carFrom }}</td>
                <td>已累计行驶（公里）:</td>
                <td>{{ vehicleDetail.carDrivingDistance }}</td>
                <td>行驶证车主:</td>
                <td>{{ vehicleDetail.drivingLicenseOwner }}</td>
                <td>车主地址:</td>
                <td>{{ vehicleDetail.carOwnerAddress }}</td>
              </tr>
              <tr>
                <td>车主代码:</td>
                <td>{{ vehicleDetail.carOwnerIndex }}</td>
                <td>制造国:</td>
                <td>{{ vehicleDetail.carMadeBy }}</td>
                <td>制造厂商:</td>
                <td>{{ vehicleDetail.manufactures }}</td>
                <td>启用日期:</td>
                <td>{{ vehicleDetail.enbaleDate }}</td>
                <td>发动机型号:</td>
                <td>{{ vehicleDetail.engineModel }}</td>
              </tr>
              <tr>
                <td>发动机号:</td>
                <td>{{ vehicleDetail.engineNumber }}</td>
                <td>气缸数目:</td>
                <td>{{ vehicleDetail.cylinderCount }}</td>
                <td>车架号:</td>
                <td>{{ vehicleDetail.frameNumber }}</td>
                <td>排量/功率:</td>
                <td>{{ vehicleDetail.displacement }}</td>
                <td>最小离地距离:</td>
                <td>{{ vehicleDetail.leastDistanceFromGround }}</td>
              </tr>
              <tr>
                <td>缸径×行程:</td>
                <td>{{ vehicleDetail.boreMultiplyDistance }}</td>
                <td>最小转弯半径:</td>
                <td>{{ vehicleDetail.leastTurnRadius }}</td>
                <td>压缩比:</td>
                <td>{{ vehicleDetail.compressionRatio }}</td>
                <td>转向器型式:</td>
                <td>{{ vehicleDetail.steerMachineModel }}</td>
                <td>轴数:</td>
                <td>{{ vehicleDetail.axleCount }}</td>
              </tr>
              <tr>
                <td>轴距:</td>
                <td>{{ vehicleDetail.axleDistance }}</td>
                <td>轮胎规格:</td>
                <td>{{ vehicleDetail.tyreSize }}</td>
                <td>轮胎数:</td>
                <td>{{ vehicleDetail.tyreCount }}</td>
                <td>主制动型式:</td>
                <td>{{ vehicleDetail.mainBrakeType }}</td>
                <td>驻车制动型式:</td>
                <td>{{ vehicleDetail.parkBrakeType }}</td>
              </tr>
              <tr>
                <td>油耗:</td>
                <td>{{ vehicleDetail.oilConsumption }}</td>
                <td>油箱容量:</td>
                <td>{{ vehicleDetail.tankCapacity }}</td>
                <td>核定载客:</td>
                <td>{{ vehicleDetail.approvedPassengerCapacity }}</td>
                <td>核定载重:</td>
                <td>{{ vehicleDetail.approvedLoad }}</td>
                <td>总质量:</td>
                <td>{{ vehicleDetail.totalMass }}</td>
              </tr>
              <tr>
                <td>车身尺寸-长:</td>
                <td>{{ vehicleDetail.carLength }}</td>
                <td>车身尺寸-宽:</td>
                <td>{{ vehicleDetail.carWidth }}</td>
                <td>车身尺寸-高:</td>
                <td>{{ vehicleDetail.carHeight }}</td>
                <td>冷却-形式:</td>
                <td>{{ vehicleDetail.coolingForm }}</td>
                <td>冷却-容量:</td>
                <td>{{ vehicleDetail.coolingCapacity }}</td>
              </tr>
              <tr>
                <td>轮距-前:</td>
                <td>{{ vehicleDetail.frontWheelBase }}</td>
                <td>轮距-中后:</td>
                <td>{{ vehicleDetail.middleBackWheelBase }}</td>
                <td>备注:</td>
                <td>{{ vehicleDetail.remarks }}</td>
              </tr>
            </table>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="detailDialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
          <el-button @click="handleClickEdit(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="handleClickDelete(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 详情窗口显示标志位
      detailDialogVisible: false,
      // 详情窗口数据
      vehicleDetail: {},
      tableData: [{}]
      // 表格数据
      // tableData: [
      //   {
      //     carNumber: '川AB1118',
      //     registerDate: '2016-05-10',
      //     department: '汽车服务中心',
      //     dispatchStatus: '空闲',
      //     insuranceDueDate: '2022-2-2',
      //     insuranceStatus: '未到期'
      //   },
      //   {
      //     carNumber: '川A22228',
      //     registerDate: '2017-05-02',
      //     department: '汽车服务中心',
      //     dispatchStatus: '空闲',
      //     insuranceDueDate: '2022-2-2',
      //     insuranceStatus: '未到期'
      //   },
      //   {
      //     carNumber: '川A88428',
      //     registerDate: '2013-09-02',
      //     department: '汽车服务中心',
      //     dispatchStatus: '空闲',
      //     insuranceDueDate: '2022-2-2',
      //     insuranceStatus: '未到期'
      //   },
      //   {
      //     carNumber: '川A23128',
      //     registerDate: '2020-05-02',
      //     department: '汽车服务中心',
      //     dispatchStatus: '空闲',
      //     insuranceDueDate: '2022-2-2',
      //     insuranceStatus: '未到期'
      //   }
      // ]
    }
  },
  methods: {
    handleClickViewDetails (row) {
      // 与服务器通信
      this.axios
        // 发送车牌号给后端
        .get('http://localhost:3000/vehicledetails', {
          params: {
            carNumber: row.carNumber
          },
          timeout: 1000
        })
        // 获取到该车牌号车辆的详情
        .then(response => {
          this.detailDialogVisible = true
          console.log(response)
          this.vehicleDetail = response.data
        })
        .catch(err => {
          console.log(err)
          this.$message({
            message: '获取数据失败',
            type: 'error'
          })
        })
    },
    handleClickEdit (row) {
      console.log(row)
    },
    handleClickDelete (row) {
      console.log(row)
    }
  },
  mounted () {
    this.axios
      .get('/getallcarinfo')
      .then(response => {
        this.tableData = response.data
        console.log(response)
      })
      .catch(function (error) { // 请求失败处理
        console.log(error)
      })
  }
}
</script>

<style>
.list {
  margin: 30px auto;
}
.detailTable td {
  border: 0;
}
</style>
