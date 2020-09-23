<template>
  <div class="driverList">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">驾驶员管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home/driverList'}">驾驶员列表</el-breadcrumb-item>
    </el-breadcrumb>
    <h3>驾驶员列表</h3>
    <!-- 表格 -->
    <el-table
      class="list"
      :data="tableData"
      border=true
      style="width: 75%"
      highlight-current-row="true"
      stripe
    >
      <el-table-column prop="driverNumber" label="编号" sortable width="100" fixed="left"></el-table-column>
      <el-table-column prop="driverName" label="姓名" width="100"></el-table-column>
      <el-table-column prop="department" label="所属部门" width="150"></el-table-column>
      <el-table-column prop="gender" label="性别" width="50"></el-table-column>
      <el-table-column prop="isDispatch" label="调度" width="70"></el-table-column>
      <el-table-column label="查看" width="500">
        <template>
          <el-button @click="handleClick(scope.row)" type="text" size="small">工作简历</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">子女资料</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">驾驶证</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">准驾证</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">奖励</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">处分</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">培训</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">竞赛</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">行驶记录</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">事故记录</el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClickEdit(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="handleClickDelete(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick (row) {
      console.log(row)
    },
    handleClickEdit (row) {
      console.log(row)
    },
    handleClickDelete (row) {
      console.log(row)
      this.axios
        .get('/deletedriverinforbyid', {
          params: {
            driverNumber: row.driverNumber
          }
        })
        .then(response => {
          console.log(response)
          this.axios
            .get('/seletecarinfoshort')
            .then(response => {
              this.tableData = response.data
              console.log(response)
            })
            .catch(function (error) { // 请求失败处理
              console.log(error)
            })
        })
        .catch(function (error) { // 请求失败处理
          console.log(error)
        })
    }
  },
  mounted () {
    this.axios
      .get('/seletecarinfoshort')
      .then(response => {
        this.tableData = response.data
        console.log(response)
      })
      .catch(function (error) { // 请求失败处理
        console.log(error)
      })
  },
  data () {
    return {
      tableData: [
        {
          driverIndex: '',
          driverName: '',
          driverDepartent: '',
          sex: '',
          isDispatch: ''
        }
      ]
    }
  }
}
</script>

<style>
.list {
  margin: 30px auto;
}
</style>
