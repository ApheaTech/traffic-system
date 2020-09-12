<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home/other-setting'}">其他设置</el-breadcrumb-item>
    </el-breadcrumb>
    <h3>节假日设置</h3>
    <el-form ref="form" :model="form" label-width="80px">
      <!-- 第1行 -->
      <el-row>
        <el-col :span="8" :offset="0">
          <el-form-item label="假期起始日期" label-width="150px">
            <el-date-picker
              v-model="form.newVacationRange"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width:100%;">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="5" :offset="0">
          <el-form-item label="假期类型" label-width="100px">
            <el-select v-model="form.newVacationType" placeholder="请选择假期类型" style="width:100%;">
              <el-option label="其他" value="其他"></el-option>
              <el-option label="清明节" value="清明节"></el-option>
              <el-option label="端午节" value="端午节"></el-option>
              <el-option label="中秋节" value="中秋节"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="3" :offset="0">
          <el-button type="primary">新增</el-button>
        </el-col>
      </el-row>
      <el-row>
        <!-- <h4>节假日信息</h4> -->
      </el-row>
      <el-row>
        <el-col :span="5" :offset="0">
          <el-form-item label="显示年份" label-width="150px">
            <el-select v-model="showYear" placeholder="请选择年份" style="width:100%;">
              <el-option label="所有" value="所有"></el-option>
              <el-option label="2018" value="2018"></el-option>
              <el-option label="2019" value="2019"></el-option>
              <el-option label="2020" value="2020"></el-option>
              <el-option label="2021" value="2021"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      <!-- </el-row>
      <el-row> -->
        <el-col :span="12" :offset="1">
          <el-table
            class="list"
            :data="tableData"
            border="true"
            style="margin-top: 0px;width: 100%;"
            highlight-current-row="true"
          >
            <el-table-column prop="startDate" label="开始日期" sortable width="200"></el-table-column>
            <el-table-column prop="endDate" label="结束日期" sortable width="200"></el-table-column>
            <el-table-column prop="vacationType" label="假期类型" width="150"></el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
              <template>
                <el-button type="text" size="small">编辑</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showYear: '',
      form: {
        newVacationRange: '',
        newVacationType: ''
      },
      tableData: [{}]
    }
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
