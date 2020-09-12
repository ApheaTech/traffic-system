<template>
  <div class="vehicleList">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home/vehicle-manage'}">车辆管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home/vehicle-insurance'}">车辆保险</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>车辆保险</h1>
    <el-row>
      <el-col :span="10" :offset="0">
        <el-form :inline="true" :model="form">
          <el-form-item label="车牌号">
            <el-select v-model="form.carNumber" placeholder="请选择车辆">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="保险年度">
            <el-select v-model="form.insuranceYear" placeholder="请选择年份">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="车牌号" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        carNumber: '',
        insuranceYear: ''
      }
    }
  }
}
</script>
