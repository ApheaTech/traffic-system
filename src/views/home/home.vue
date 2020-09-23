<template>
  <div id="app">
    <el-row>
      <el-col :span="24" :offset="0">
        <div class="grid-content bg-purple">
          <el-container>
            <!-- 顶栏 -->
            <el-header height="80px">
              <el-row>
                <el-col :span="16" :offset="4">
                  <h3>交通安全管理信息系统</h3>
                </el-col>
                <el-col :span="4" :offset="0">
                  <span class="el-icon-s-custom" style="margin:auto 10px auto;">你好，{{ this.Global.userName }}</span>
                  <el-button type="success" class="el-icon-refresh-right" size="small" style="margin:auto 10px auto;" @click="refresh">刷新</el-button>
                  <el-button type="info" class="el-icon-s-promotion" size="small" style="margin:auto 10px auto;" @click="quit">退出</el-button>
                </el-col>
              </el-row>
            </el-header>
            <el-container>
              <!-- 侧栏 -->
              <el-aside width="210px">
                <el-menu
                  default-active="/home/vehicle-list"
                  background-color="#393d49"
                  text-color="#bfcbd9"
                  active-text-color="#409EFF"
                  mode="vertical"
                  router=true
                  @open="handleOpen"
                  @close="handleClose"
                  left
                >
                  <!-- 车辆管理 -->
                  <el-submenu index="/home/vehicle-manage">
                    <template slot="title">
                      <i class="el-icon-truck"></i>
                      <span style="margin-left: 0;">车辆管理</span>
                    </template>
                    <!-- 车辆年度保险 -->
                    <el-menu-item index="/home/vehicle-insurance">
                      <span slot="title">车辆年度保险</span>
                    </el-menu-item>
                    <!-- 车辆维修管理 -->
                    <el-menu-item index="/home/vehicle-repair">
                      <span slot="title">车辆维修管理</span>
                    </el-menu-item>
                    <!-- 车辆检查管理 -->
                    <el-submenu index="/home/vehicle-examine-manage">
                      <template slot="title">
                        <span>车辆检查管理</span>
                      </template>
                      <el-menu-item index="/home/vehicle-daily-examine">
                        <span slot="title">车辆日检查</span>
                      </el-menu-item>
                      <el-menu-item index="/home/vehicle-return-examine">
                        <span slot="title">车辆回场检查</span>
                      </el-menu-item>
                      <el-menu-item index="/home/vehicle-monthly-examine">
                        <span slot="title">车辆月检查</span>
                      </el-menu-item>
                    </el-submenu>
                    <!-- 车辆技术档案 -->
                    <el-submenu index="/home/vehicle-tech-file">
                      <template slot="title">
                        <span>车辆技术档案</span>
                      </template>
                      <el-menu-item index="/home/vehicle-list">
                        <span slot="title">车辆列表</span>
                      </el-menu-item>
                      <el-menu-item index="/home/vehicle-category">
                        <span slot="title">车辆种类</span>
                      </el-menu-item>
                      <el-menu-item index="/home/vehicle-register">
                        <span slot="title">车辆录入</span>
                      </el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <!-- 车辆GPS监控 -->
                  <el-submenu index="/home/vehicleGps">
                    <template slot="title">
                      <i class="el-icon-map-location"></i>
                      <span>车辆GPS监控</span>
                    </template>
                    <el-menu-item index="/home/applyManage">
                      <span slot="title">GPS监控平台</span>
                    </el-menu-item>
                    <el-menu-item index="/home/applyManage">
                      <span slot="title">GPS监控日志</span>
                    </el-menu-item>
                  </el-submenu>
                  <!-- 驾驶员管理 -->
                  <el-submenu index="/home/driver-manage">
                    <template slot="title">
                      <i class="el-icon-s-custom"></i>
                      <span>驾驶员管理</span>
                    </template>
                    <el-menu-item index="/home/driver-list">
                      <span slot="title">驾驶员列表</span>
                    </el-menu-item>
                    <el-menu-item index="/home/driver-register">
                      <span slot="title">驾驶员录入</span>
                    </el-menu-item>
                  </el-submenu>
                  <!-- 车辆调派管理 -->
                  <el-submenu index="/home/allocate-manage">
                    <template slot="title">
                      <i class="el-icon-odometer"></i>
                      <span>车辆调派管理</span>
                    </template>
                    <el-menu-item index="/home/apply-vehicle">
                      <!-- <i class="el-icon-menu"></i> -->
                      <span slot="title">用车申请管理</span>
                    </el-menu-item>
                  </el-submenu>
                  <!-- 其他设置 -->
                  <el-submenu index="/home/other-setting">
                    <template slot="title">
                      <i class="el-icon-setting"></i>
                      <span>其他设置</span>
                    </template>
                    <el-menu-item index="/home/vacation-setting">
                      <span slot="title">节假日设置</span>
                    </el-menu-item>
                  </el-submenu>
                </el-menu>
              </el-aside>
              <!-- 主体 -->
              <el-main>
                <router-view></router-view>
              </el-main>
            </el-container>
          </el-container>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      breadList: [] // 路由集合
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  methods: {
    quit () {
      this.$confirm('是否确定退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push({ name: 'login' })
      })
    },
    refresh () {

    },
    handleOpen () {

    },
    handleClose () {

    },
    // isCollapse () {

    // },
    // isHome (route) {
    //   return route.name === 'home'
    // },
    getBreadcrumb () {
      let matched = this.$route.matched
      // 如果不是首页
      // if (!this.isHome(matched[0])) {
      //   matched = [{ path: '/home', meta: { title: '首页' } }].concat(matched)
      // }
      matched = [{ path: '/home', meta: { title: '首页' } }].concat(matched)
      this.breadList = matched
    }
  },
  mounted () {
  },
  created () {
    this.getBreadcrumb()
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.bg-gray-dark {
  background: #23262e;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-header,
.el-footer {
  background-color: #23262e;
  color: #c6c6c9;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  line-height: 60px;
}
.el-header span {
  font-size: 14px;
}
.el-aside {
  background-color: #393d49;
  color: #ffffff;
  /* text-align: left; */
  line-height: 200px;
  margin-left: 0px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
  height: 850px;
}
h3 {
  margin: 10px auto;
}
</style>
