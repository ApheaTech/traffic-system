import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由规则
const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/index.vue'),
    meta: { title: '登陆'}
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/home.vue'),
    meta: { title: '首页' },
    children: [
      // 车辆保险
      {
        path: 'vehicle-insurance',
        component: () => import('../views/vehicle-manage/vehicle-insurance.vue'),
        meta: { title: '车辆保险' }
      },
      // 车辆维修管理
      {
        path: 'vehicle-repair',
        component: () => import('../views/vehicle-manage/vehicle-repair.vue'),
        meta: { title: '车辆维修管理' }
      },
      // 车辆日检查
      {
        path: 'vehicle-daily-examine',
        component: () => import('../views/vehicle-manage/vehicle-daily-examine.vue'),
        meta: { title: '车辆日检查' }
      },
      // 车辆回场检查
      {
        path: 'vehicle-return-examine',
        component: () => import('../views/vehicle-manage/vehicle-return-examine.vue'),
        meta: { title: '车辆回场检查' }
      },
      // 车辆月检查
      {
        path: 'vehicle-monthly-examine',
        component: () => import('../views/vehicle-manage/vehicle-monthly-examine.vue'),
        meta: { title: '车辆月检查' }
      },
      // 车辆列表
      {
        path: 'vehicle-list',
        component: () => import('../views/vehicle-manage/vehicle-list.vue'),
        meta: { title: '车辆列表' }
      },
      // 车辆种类
      {
        path: 'vehicle-register',
        component: () => import('../views/vehicle-manage/vehicle-register.vue'),
        meta: { title: '车辆种类' }
      },
      // 车辆录入
      {
        path: 'vehicle-category',
        component: () => import('../views/vehicle-manage/vehicle-category.vue'),
        meta: { title: '车辆录入' }
      },
      // 驾驶员录入
      {
        path: 'driver-register',
        component: () => import('../views/driver-manage/driver-register.vue')
      },
      // 驾驶员列表
      {
        path: 'driver-list',
        component: () => import('../views/driver-manage/driver-list.vue')
      },
      // 用车申请
      {
        path: 'apply-vehicle',
        component: () => import('../views/allocate-manage/apply-vehicle.vue')
      },
      // 节假日设置
      {
        path: 'vacation-setting',
        component: () => import('../views/other-setting/vacation-setting.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  console.log(to);
  next()
})

export default router
