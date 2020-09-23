<template>
  <div class="vehicleCategory">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">车辆管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home/vehicleCategory'}">车辆种类</el-breadcrumb-item>
    </el-breadcrumb>
    <h3>车辆种类</h3>
    <el-row>
      <el-col :span="8" :offset="8">
       <!-- 表格 -->
        <el-table class="list" :data="tableData" border="true" style="width: 100%" highlight-current-row="true">
          <el-table-column prop="index" label="序号" width="100" sortable></el-table-column>
          <el-table-column prop="carType" label="种类名称" width="200"></el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <el-button @click="handleClickEdit(scope.row)" type="text" size="small" icon="el-icon-edit">编辑</el-button>
              <el-button @click="handleClickDelete(scope.row)" type="text" size="small" icon="el-icon-delete">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="3" :offset="0">
        <el-button type="primary" @click="handleClickAdd" icon="el-icon-circle-plus">新增</el-button>
        <!-- <el-button type="success">保存</el-button> -->
      </el-col>
    </el-row>
    <!-- 弹出编辑对话框 -->
    <el-dialog title="车辆种类修改" :visible.sync="editDialogFormVisible" width="20%">
      <el-form :model="form">
        <el-form-item label="车辆种类:" label-width="100px">
          <el-input v-model="editInput"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleClickEditConfirm(currentRow)">确定</el-button>
      </div>
    </el-dialog>
    <!-- 弹出新增对话框 -->
    <el-dialog title="车辆种类新增" :visible.sync="addDialogFormVisible" width="20%">
      <el-form :model="form">
        <el-form-item label="车辆种类:" label-width="100px">
          <el-input v-model="addInput"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleClickAddConfirm(addInput)">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      editDialogFormVisible: false,
      addDialogFormVisible: false,
      currentRow: null,
      oldType: '',
      editInput: '',
      addInput: '',
      tableData: [{
        // carType: ''
      }]
    }
  },
  methods: {
    // 编辑事件
    handleClickEdit (row) {
      // console.log(row)
      console.log(row.carType)
      this.currentRow = row
      // 显示编辑对话框
      this.editDialogFormVisible = true
      // this.form.editInput = row.carType
      this.editInput = row.carType
      this.oldType = row.carType
    },
    // 在修改对话框中的确认
    // 还需添加完成后再从服务器获取tableData
    handleClickEditConfirm (row) {
      console.log(this.editInput)
      this.editDialogFormVisible = false
      this.axios
        .get('/updatecartype', {
          params: {
            s1: this.oldType,
            s2: this.editInput
          },
          timeout: 1000
        })
        .then(response => {
          console.log(response)
          this.axios
            .get('/getAllCarType', {
              timeout: 1000
            })
            .then(response => {
              this.tableData = response.data
              console.log(response)
            })
            .catch(err => {
              console.log(err)
              this.$message({
                message: '获取数据失败',
                type: 'error'
              })
            })
        })
        .catch(err => {
          console.log(err)
          this.$message({
            message: '获取数据失败',
            type: 'error'
          })
        })
      console.log(row)
      row.carType = this.form.editInput
      this.editDialogFormVisible = false
    },
    // 删除事件
    handleClickDelete (row) {
      console.log(row)
      this.axios
        .get('/deletecartype', {
          params: {
            s1: row.carType
          }
        })
        .then(response => {
          console.log(response)
          this.axios
            .get('/getAllCarType', {
              timeout: 1000
            })
            .then(response => {
              this.tableData = response.data
              console.log(response)
            })
            .catch(err => console.log(err))
        })
    },
    // 新增事件
    handleClickAdd () {
      this.addInput = ''
      this.addDialogFormVisible = true
    },
    // 在新增对话框中的确认
    handleClickAddConfirm (input) {
      // 发送新增数据
      this.axios
        .get('/addCarType', {
          params: {
            carType: input
          },
          timeout: 1000
        })
        .then(response => {
          console.log(response)
          // 更新tableData
          this.axios
            .get('/getAllCarType', {
              timeout: 1000
            })
            .then(response => {
              this.tableData = response.data
            })
            .catch(err => {
              console.log(err)
              this.$message({
                message: '获取数据失败',
                type: 'error'
              })
            })
        })
        .catch(err => {
          console.log(err)
          this.$message({
            message: '获取数据失败',
            type: 'error'
          })
        })
      this.addDialogFormVisible = false
    }
  },
  mounted () {
    console.log(this.$router.currentRoute.fullPath)
    // 获取所有车辆种类
    this.axios
      // .get('http://21m16493e8.wicp.vip/getAllCarType')
      // .get('http://47.104.62.208:4321/getAllCarType')
      .get('/getAllCarType')
      .then(response => {
        this.tableData = response.data
        console.log(response)
      })
      .catch(err => {
        console.log(err)
        this.$message({
          message: '获取数据失败',
          type: 'error'
        })
      })
  }
}
</script>

<style>
  .list {
    margin: 0 auto;
  }
</style>
