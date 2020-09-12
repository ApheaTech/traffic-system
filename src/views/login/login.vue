<template>
  <div>
    <el-row class="box">
      <el-col :span="5" :offset="9">
        <el-card shadow="always">
          <h2>交通安全管理信息系统</h2>
          <el-form ref="form" :model="loginForm" label-width="40px">
            <el-form-item label="账号">
              <el-input v-model="loginForm.userName" prefix-icon="el-icon-user-solid" placeholder="请输入账号">账号</el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" show-password placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <div class="formBtn">
                <el-row style="margin-top: 0px">
                  <el-col :span="14" :offset="5">
                    <el-button type="primary" @click="loginOn">登陆</el-button>
                    <el-button @click="register">注册</el-button>
                  </el-col>
                </el-row>
              </div>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <p v-for=" item in info " :key='item'>
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        userName: '',
        passWord: ''
      },
      info: []
    }
  },
  methods: {
    loginOn () {
      this.Global.setUserName(this.loginForm.userName)
      // this.$router.push({ name: 'home' })
      // this.axios
      //   .get('/', {
      //     params: {
      //       id: '123',
      //       pwd: '123'
      //     }
      //   })
      //   .then(response => console.log(response))
      //   .catch(err => console.log(err))

      // 与服务器通信
      this.axios
        // .get('http://localhost:3000/login', {
        .get('/login', {
          // 超时1s即报错
          timeout: 1000,
          params: {
            id: this.loginForm.userName,
            pwd: this.loginForm.password
          }
        })
        .then(response => {
          console.log(response)
          if (response.data === true) {
            this.$router.push({ name: 'home' })
            this.$message({
              message: '登陆成功',
              type: 'success'
            })
          } else {
            this.$message({
              message: '账号或密码错误',
              type: 'error'
            })
          }
        })
        // 请求失败处理
        .catch(error => {
          console.log(error)
          this.$message({
            message: '网络错误',
            type: 'error'
          })
        })
    },
    register () {
    }
  },
  mounted () {
    this.axios
      .get('http://wthrcdn.etouch.cn/weather_mini', {
        params: {
          city: '上海'
        }
      })
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>
.el-row {
  margin-top: 200px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-card {
  background: #e7e7e9;
  border-radius: 20px;
}
h2 {
  font-family: "微软雅黑","Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
  text-align: center;
}
.formBtn {
  margin: 0 auto;
}
</style>
