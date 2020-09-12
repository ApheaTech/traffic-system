<template>
  <div class="vehicle-repair">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home/vehicle-manage'}">车辆管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home/vehicle-repair'}">车辆维修管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <h1>车辆维修管理</h1> -->
    <el-row>
      <el-col :span="6" :offset="0">
        <el-form :inline="true" :model="form">
          <el-form-item label="车牌号">
            <el-select v-model="form.carNumber" placeholder="请选择车辆">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="3" :offset="0">
        <el-button type="success" @click="onSubmit">打印维修费用审核登记表</el-button>
      </el-col>
      <el-col :span="2" :offset="1">
        <el-button type="warning" @click="dialogNewRecordVisible=true">录入新的维修记录</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table
      class="list"
      :data="tableData"
      border="true"
      style="width: 100%"
      highlight-current-row="true"
    >
      <el-table-column fixed="left" prop="repairNumber" label="送修单编号" sortable width="150"></el-table-column>
      <el-table-column prop="carNumber" label="车牌号" sortable width="100"></el-table-column>
      <el-table-column prop="repairType" label="维修类型" width="150" column-key="repairType"
          :filters="[
            {text: '日常维修', value: '日常维修'},
            {text: '大维修', value: '大维修'}]"
          :filter-method="statusFilterHandler"
      ></el-table-column>
      <el-table-column prop="repairStartDate" label="维修开始日期" sortable width="150"></el-table-column>
      <el-table-column prop="repairFromDepartment" label="送修单位" width="150"></el-table-column>
      <el-table-column prop="repairToDepartment" label="承修单位" width="150"></el-table-column>
      <el-table-column prop="driver" label="驾驶员" width="100"></el-table-column>
      <el-table-column prop="repairDepot" label="修理厂" width="100"></el-table-column>
      <el-table-column prop="materialCost" label="材料费" width="100"></el-table-column>
      <el-table-column prop="taskTimeFee" label="工时费" width="100"></el-table-column>
      <el-table-column prop="managementExpense" label="管理费" width="100"></el-table-column>
      <el-table-column prop="invoicesNumber" label="发票张数" width="100"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <el-button type="text" size="small">修改</el-button>
        <el-button type="text" size="small">打印</el-button>
        <el-button type="text" size="small">删除</el-button>
      </el-table-column>
    </el-table>
    <el-dialog title="新的维修记录" :visible.sync="dialogNewRecordVisible" width="60%">
      <el-form :model="newRecordForm">
        <el-row>
          <el-col :span="6" :offset="0">
            <el-form-item label="送修单编号" label-width="100px">
              <el-input v-model="newRecordForm.repairNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="0">
            <el-form-item label="车牌号" label-width="100px">
              <el-input v-model="newRecordForm.carNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="0">
            <el-form-item label="车牌号" label-width="100px">
              <el-select v-model="newRecordForm.carBelong" placeholder="请选择维修类型">
                <el-option label="日常维修" value="日常维修"></el-option>
                <el-option label="大维修" value="大维修"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="0">
            <el-form-item label="维修开始日期" label-width="100px">
              <el-date-picker
                v-model="newRecordForm.repairStartDate"
                type="date"
                placeholder="选择日期"
                style="width:100%">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :offset="0">
            <el-form-item label="送修单位" label-width="100px">
              <el-select v-model="newRecordForm.repairFromDepartment" placeholder="请选择送修单位">
                <el-option label="油气销售公司" value="油气销售公司"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="0">
            <el-form-item label="承修单位" label-width="100px">
              <el-select v-model="newRecordForm.repairToDepartment" placeholder="请选择承修单位">
                <el-option label="矿级机关" value="矿级机关"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="0">
            <!-- 此处需要获取驾驶员列表 -->
            <el-form-item label="驾驶员" label-width="100px">
              <el-select v-model="newRecordForm.driver" placeholder="请选择驾驶员">
                <el-option label="蒲益" value="蒲益"></el-option>
                <el-option label="冯波" value="冯波"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="0">
            <el-form-item label="修理厂" label-width="100px">
              <el-select v-model="newRecordForm.repairDepot" placeholder="请选择修理厂">
                <el-option label="正典" value="正典"></el-option>
                <el-option label="丰田" value="丰田"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :offset="0">
            <el-form-item label="材料费" label-width="100px">
              <el-input v-model="newRecordForm.materialCost"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="0">
            <el-form-item label="工时费" label-width="100px">
              <el-input v-model="newRecordForm.taskTimeFee"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="0">
            <el-form-item label="管理费" label-width="100px">
              <el-input v-model="newRecordForm.managementExpense"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="0">
            <el-form-item label="发票张数" label-width="100px">
              <el-input-number v-model="newRecordForm.invoicesNumber" :min="1" :max="20"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-button @click="dialogNewRecordVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveNewRecord">保存</el-button>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogNewRecordVisible: false,
      form: {
        carNumber: ''
      },
      newRecordForm: {
        repairNumber: '',
        carNumber: '',
        repairType: '',
        repairStartDate: '',
        repairFromDepartment: '',
        repairToDepartment: '',
        driver: '',
        repairDepot: '',
        materialCost: '',
        taskTimeFee: '',
        managementExpense: '',
        invoicesNumber: ''
      },
      tableData: [{
        registerDate: ''
      }]
    }
  },
  methods: {
    saveNewRecord () {
      this.dialogNewRecordVisible = false
    }
  }
}
</script>

<style scoped>
.el-row {
  /* margin-bottom: 20px; */
  &:last-child {
    margin-bottom: 0;
  }
}
.el-breadcrumb {
  margin-bottom: 20px;
}
</style>
