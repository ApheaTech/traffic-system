<template>
  <div class="applyManage">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">车辆调派</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home/applyManage'}">用车申请管理</el-breadcrumb-item>
    </el-breadcrumb>
    <h3>用车申请管理</h3>
    <el-row>
      <el-col :span="24" :offset="0">
       <!-- 表格 -->
        <el-table class="list" :data="tableData" border="true" style="width: 100%" highlight-current-row="true">
          <el-table-column prop="orderStatus" label="订单状态" width="110" column-key="orderStatus"
          :filters="[
            {text: '待审批', value: '待审批'},
            {text: '已审批', value: '已审批'},
            {text: '已调配', value: '已调配'},
            {text: '已发车', value: '已发车'},
            {text: '已完成', value: '已完成'}]"
          :filter-method="statusFilterHandler"
        >
          </el-table-column>
          <el-table-column prop="orderid" label="订单编号" width="150" sortable></el-table-column>
          <el-table-column prop="applicationTime" label="申请时间" width="150" sortable></el-table-column>
          <el-table-column prop="carDepartment" label="用车部门" width="150" sortable></el-table-column>
          <el-table-column prop="safetySupervisor" label="安全监督员" width="120" sortable></el-table-column>
          <el-table-column prop="carCategory" label="车辆种类" width="150" sortable></el-table-column>
          <el-table-column prop="passengerCounter" label="乘车人数" width="150" sortable></el-table-column>
          <el-table-column prop="passengerName" label="乘车人员名单" width="250"></el-table-column>
          <el-table-column prop="carReason" label="用车事由" width="200"></el-table-column>
          <el-table-column prop="carRoute" label="经由路线" width="200"></el-table-column>
          <el-table-column prop="departureTime" label="出发时间" width="150"></el-table-column>
          <el-table-column prop="predictionReturnTime" label="预计返回时间" width="150"></el-table-column>
          <el-table-column prop="destination" label="目的地" width="150"></el-table-column>
          <el-table-column prop="pickUpLocation" label="上车地点" width="150"></el-table-column>
          <el-table-column prop="applicantNumber" label="申请人联系电话" width="150"></el-table-column>
          <el-table-column fixed="right" label="操作" width="170">
            <template slot-scope="scope">
              <el-row>
                <el-col :span="12">
                  <el-button @click="handleClickAllocate(scope.row)" type="primary" size="small" v-if="scope.row.orderStatus=='已审批'">调配</el-button>
                  <div v-else style="padding:10px;"></div>
                </el-col>
                <el-col :span="12">
                  <el-button @click="handleClickDelete(scope.row)" type="danger" size="small">删除</el-button>
                </el-col>
              </el-row>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog title="车辆调配" :visible.sync="dialogFormVisible" width="21%">
          <p style="text-align:left;font-size:18px;">订单详情：</p>
          <table class="orderDetailTable" style="margin-bottom: 30px">
              <tr>
                <td>订单状态:</td>
                <td>{{ currentOrderStatus }}</td>
                <td>申请时间:</td>
                <td>{{ currentApplicationTime }}</td>
              </tr>
              <tr>
                <td>用车部门:</td>
                <td>{{ currentCarDepartment }}</td>
                <td>安全监督员:</td>
                <td>{{ currentSafetySupervisor }}</td>
              </tr>
              <tr>
                <td>车辆种类:</td>
                <td>{{ currentCarCategory }}</td>
                <td>乘车人数:</td>
                <td>{{ currentPassengerCounter }}</td>
              </tr>
              <tr>
                <td>乘车人员名单</td>
                <td>{{ currentPassengerName }}</td>
                <td>用车事由:</td>
                <td>{{ currentCarReason }}</td>
              </tr>
              <tr>
                <td>经由路线:</td>
                <td>{{ currentCarRoute }}</td>
                <td>出发时间:</td>
                <td>{{ currentDepartureTime }}</td>
              </tr>
              <tr>
                <td>预计返回时间</td>
                <td>{{ currentPredictionReturnTime }}</td>
                <td>出发时间:</td>
                <td>{{ currentDestination }}</td>
              </tr>
              <tr>
                <td>上车地点:</td>
                <td>{{ currentPickUpLocation }}</td>
                <td>申请人联系电话:</td>
                <td>{{ currentApplicantNumber }}</td>
              </tr>
            </table>
          <el-form :model="form">
            <el-form-item label="调配驾驶员" label-width="100px">
              <el-select v-model="applyDriver" placeholder="请选择驾驶员" filterable>
                <el-option v-for="item in freeDriverList" v-bind:key="item" v-bind:label="item.driverName" v-bind:value="item.driverName"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="调配车辆" label-width="100px">
              <el-select v-model="applyVehicleCategory" placeholder="请选择车型" @change="searchVehicle(applyVehicleCategory)">
                <el-option v-for="item in vehicleCategoryList" v-bind:key="item.index" v-bind:label="item.carType" v-bind:value="item.carType"></el-option>
              </el-select>
              <el-select v-model="applyVehicle" placeholder="请选择车辆" style="margin-top:10px;" filterable>
                <el-option v-for="item in freeVehicleList" v-bind:key="item.index" v-bind:label="item" v-bind:value="item"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitAllocateTask">下发任务</el-button>
          </div>
        </el-dialog>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    // 调配
    handleClickAllocate (row) {
      // console.log(row)
      this.dialogFormVisible = true
      this.currentOrderStatus = row.orderStatus
      this.currentApplicationTime = row.applicationTime
      this.currentCarDepartment = row.carDepartment
      this.currentSafetySupervisor = row.safetySupervisor
      this.currentCarCategory = row.carCategory
      this.currentPassengerCounter = row.passengerCounter
      this.currentPassengerName = row.passengerName
      this.currentCarReason = row.carReason
      this.currentCarRoute = row.carRoute
      this.currentDepartureTime = row.departureTime
      this.currentPredictionReturnTime = row.predictionReturnTime
      this.currentDestination = row.destination
      this.currentPickUpLocation = row.pickUpLocation
      this.currentApplicantNumber = row.applicantNumber
      this.applyDriver = ''
      this.applyVehicleCategory = ''
      this.applyVehicle = ''
      // 获取驾驶员
      this.axios
        .get('/seleteDriverFree')
        .then(response => {
          console.log(response)
          this.freeDriverList = response.data
        })
        .catch(err => console.log(err))

      // 获取车型
      this.axios
        .get('/getAllCarType')
        .then(response => {
          console.log(response)
          this.vehicleCategoryList = response.data
        })
        .catch(err => console.log(err))
    },
    handleClickDelete (row) {
      console.log(row.orderStatus)
      console.log(row.carDepartment)
      this.axios
        .get('/deleteusercarorderbyid', {
          params: {
            orderid: row.orderid
          }
        })
        .then(response => {
          console.log(response)
          this.axios
            .get('/seleteCarOrder')
            .then(response => {
              this.tableData = response.data
            })
        })
        .catch(err => console.log(err))
    },
    stautsFilterHandler (value, row, column) {
      const property = 'orderStatus'
      return row[property] === value
    },
    searchVehicle (category) {
      // 根据车型获取可用车辆
      this.axios
        .get('/seleteCarNumbreByCarType', {
          params: {
            carType: category
          }
        })
        .then(response => {
          console.log(response)
          this.freeVehicleList = response.data
        })
        .catch(err => console.log(err))
    },
    submitAllocateTask () {
      // 提交调配任务
      this.dialogFormVisible = false
      this.axios
        .get('http://localhost:3000/allocateTask', {
          params: {
            driver: this.applyDriver,
            carNumber: this.applyVehicle
          }
        })
        .then(response => {
          console.log(response)
        })
        .catch(function (error) { // 请求失败处理
          console.log(error)
        })
    }
  },
  mounted () {
    this.axios
      .get('/seleteCarOrder')
      .then(response => {
        console.log(response)
        this.tableData = response.data
      })
      .catch(function (error) { // 请求失败处理
        console.log(error)
      })
  },
  data () {
    return {
      freeDriverList: [],
      freeVehicleList: [],
      vehicleCategoryList: [],
      applyDriver: '',
      applyVehicleCategory: '',
      applyVehicle: '',
      tableData: [{}],
      // tableData: [
      //   {
      //     orderStatus: '待审批'
      //   },
      //   {
      //     orderStatus: '已审批',
      //     applicationTime: '2020-08-19',
      //     carDepartment: '行政部门',
      //     safetySupervisor: '李雷',
      //     carCategory: '任意',
      //     passengerCounter: '3',
      //     passengerName: 'A B C',
      //     carReason: '值班',
      //     carRoute: '环线',
      //     departureTime: '2020-08-22',
      //     predictionReturnTime: '2020-08-23',
      //     destination: '气田',
      //     pickUpLocation: '公司',
      //     applicantNumber: '188888888'
      //   },
      //   {
      //     orderStatus: '已调配',
      //     carDepartment: '行政部门'
      //   },
      //   {
      //     orderStatus: '已发车'
      //   },
      //   {
      //     orderStatus: '已完成'
      //   }
      // ],
      dialogFormVisible: false,
      currentOrderStatus: '',
      currentApplicationTime: '',
      currentCarDepartment: '',
      currentSafetySupervisor: '',
      currentCarCategory: '',
      currentPassengerCounter: '',
      currentPassengerName: '',
      currentCarReason: '',
      currentCarRoute: '',
      currentDepartureTime: '',
      currentPredictionReturnTime: '',
      currentDestination: '',
      currentPickUpLocation: '',
      currentApplicantNumber: ''
    }
  }
}
</script>

<style>
  .list {
    margin: 0 auto;
  }
</style>
