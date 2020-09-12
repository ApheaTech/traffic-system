<template>
  <div class="driverRegister">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">驾驶员管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home/driverRegister'}">驾驶员录入</el-breadcrumb-item>
    </el-breadcrumb>
    <h3>驾驶员录入</h3>
    <!-- <h1>司机录入</h1> -->
    <el-form class="registerForm" ref="form" :model="form" label-width="80px">
      <!-- 第一行 -->
      <el-row>
        <el-col :span="7" :offset="4">
          <el-form-item label="驾驶员编号" label-width="100px">
            <el-input v-model="form.driverNumber"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7" :offset="1">
          <el-form-item label="驾驶员名称" label-width="100px">
            <el-input v-model="form.driverName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第二行 -->
      <el-row>
        <el-col :span="7" :offset="4">
          <el-form-item label="联系电话" label-width="100px">
            <el-input v-model="form.telephone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7" :offset="1">
          <el-form-item label="性别">
            <el-radio v-model="form.gender" label="男"></el-radio>
            <el-radio v-model="form.gender" label="女"></el-radio>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第三行 -->
      <el-row>
        <el-col :span="7" :offset="4">
          <el-form-item label="出生日期" label-width="100px">
            <el-date-picker
              v-model="form.birthDay"
              type="date"
              placeholder="选择日期"
              style="width:100%;">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="7" :offset="1">
          <el-form-item label="籍贯" label-width="100px">
            <el-input v-model="form.nativePlace"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第四行 -->
      <el-row>
        <el-col :span="7" :offset="4">
          <el-form-item label="民族" label-width="100px">
            <el-input v-model="form.nation" placeholder="请输入完整名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7" :offset="1">
          <el-form-item label="文化程度" label-width="100px">
            <el-select v-model="form.degreeOfEducation" placeholder="请选择文化程度"  style="width:100%;">
              <el-option label="小学" value="primarySchool"></el-option>
              <el-option label="初中" value="juniorMiddleSchool"></el-option>
              <el-option label="高中" value="highSchool"></el-option>
              <el-option label="大学" value="undergraduate"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第五行 -->
      <el-row>
        <el-col :span="7" :offset="4">
          <el-form-item label="技术等级" label-width="100px">
            <el-select v-model="form.techGrade" style="width:100%;">
              <el-option label="高级" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="7" :offset="1">
          <el-form-item label="现工作单位" label-width="100px">
            <el-select v-model="form.department" placeholder="请选择现工作单位"  style="width:100%;">
              <el-option label="矿级机关-质量安全环保科" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第六行 -->
      <el-row>
        <el-col :span="7" :offset="4">
          <el-form-item label="参加工作时间" label-width="100px">
            <el-date-picker
              v-model="form.participateInWorkDate"
              type="date"
              placeholder="选择日期"
              style="width:100%;">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="7" :offset="1">
          <el-form-item label="初次领证时间" label-width="100px">
            <el-date-picker
              v-model="form.firstGetCardDate"
              type="date"
              placeholder="选择日期"
              style="width:100%;">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第七行 -->
      <el-row>
        <el-col :span="7" :offset="4">
          <el-form-item label="驾驶证证号" label-width="100px">
            <el-input v-model="form.driveCardNumber"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7" :offset="1">
          <el-form-item label="驾驶证档案号" label-width="100px">
            <el-input v-model="form.driveCardFileNumber"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第八行 -->
      <el-row>
        <el-col :span="7" :offset="4">
          <el-form-item label="驾驶证有效期" label-width="100px">
            <el-date-picker
              v-model="form.driveCardEffective"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width:100%;">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="7" :offset="1">
          <el-form-item label="准驾车型" label-width="100px">
            <el-select v-model="form.permittedCar" style="width:100%;">
              <el-option label="A1" value="a1"></el-option>
              <el-option label="A2" value="a2"></el-option>
              <el-option label="A3" value="a3"></el-option>
              <el-option label="B1" value="b1"></el-option>
              <el-option label="B2" value="b2"></el-option>
              <el-option label="C1" value="c1"></el-option>
              <el-option label="C2" value="c2"></el-option>
              <el-option label="C3" value="c3"></el-option>
              <el-option label="C4" value="c4"></el-option>
              <el-option label="C5" value="c5"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 按钮 -->
      <el-row>
        <el-col :span="6" :offset="8">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认保存</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        driverNumber: '',
        driverName: '',
        telephone: '',
        gender: '',
        nativePlace: '',
        birthDay: '',
        degreeOfEducation: '',
        nation: '',
        department: '',
        participateInWorkDate: '',
        firstGetCardDate: '',
        driveCardNumber: '',
        driveCardFileNumber: '',
        driveCardEffective: '',
        permittedCar: '',
        techGrade: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.form.driveCardEffective[0])
      this.axios
        .get('/adddriverinfo', {
          params: {
            // form: this.form
            driverNumber: this.form.driverNumber,
            driverName: this.form.driverName,
            telephone: this.form.telephone,
            gender: this.form.gender,
            nativePlace: this.form.nativePlace,
            birthDay: this.form.birthDay,
            degreeOfEducation: this.form.degreeOfEducation,
            nation: this.form.nation,
            department: this.form.department,
            participateInWorkDate: this.form.participateInWorkDate,
            firstGetCardDate: this.form.firstGetCardDate,
            driveCardNumber: this.form.driveCardNumber,
            driveCardFileNumber: this.form.driveCardFileNumber,
            driveCardEffectiveStart: this.form.driveCardEffective[0],
            driveCardEffectiveEnd: this.form.driveCardEffective[1],
            permittedCar: this.form.permittedCar,
            techGrade: this.form.techGrade
          }
        })
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.registerForm {
  margin: 30px auto;
}
</style>
