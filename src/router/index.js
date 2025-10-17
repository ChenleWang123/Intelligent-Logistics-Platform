import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
 roles: ['admin','editor']    control the page roles (you can set multiple roles)
 title: 'title'               the name show in sidebar and breadcrumb (recommend set)
 icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
 breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
 activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
 }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'el-icon-odometer' }
    }]
  },
  // 物流资源需求预测、整车物流资源调度、零部件物流资源调度、物流资源维护、地图信息管理、用户信息管理
  {
    path: '/',
    component: Layout,
    redirect: '/predict',
    children: [{
      path: 'predict',
      name: 'Predict',
      component: () => import('@/views/predict/index'),
      meta: { title: '物流资源需求预测', icon: 'el-icon-help' }
    }]
  },
  {
    path: '/vehicle',
    component: Layout,
    redirect: '/vehicle/predict',
    name: 'Vehicle',
    meta: {
      title: '整车物流资源调度',
      icon: 'el-icon-truck'
    },
    children: [
      {
        path: 'task_manage',
        component: () => import('@/views/vehicle/task_manage/index'),
        name: 'Task_manage',
        meta: { title: '运输任务管理' }
      },
      {
        path: 'match_select',
        component: () => import('@/views/vehicle/match_select/index'),
        name: 'Match_select',
        meta: { title: '运力匹配查询' }
      },
      {
        path: 'dispatch',
        component: () => import('@/views/vehicle/dispatch/index'),
        name: 'Dispatch',
        meta: { title: '物流路径预览' }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/parts',
    children: [{
      path: 'parts',
      name: 'Parts',
      component: () => import('@/views/parts/index'),
      meta: { title: '零部件物流资源调度', icon: 'nested' }
    }]
  },
  {
    path: '/management',
    component: Layout,
    redirect: '/management/select_update',
    name: 'Management',
    meta: {
      title: '物流资源管理',
      icon: 'el-icon-setting'
    },
    children: [
      {
        path: 'select_update',
        component: () => import('@/views/management/select_update/index'), // Parent router-view
        name: 'Select_update',
        meta: { title: '查询/更改设备' }
      },
      {
        path: 'add_delete',
        component: () => import('@/views/management/add_delete/index'),
        name: 'Add_delete',
        meta: { title: '新增/删除设备' }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/consumer',
    children: [{
      path: 'consumer',
      name: 'Consumer',
      component: () => import('@/views/consumer/index'),
      meta: { title: '用户信息管理', icon: 'el-icon-user' }
    }]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/select_update',
    name: 'User',
    meta: {
      title: '员工信息管理',
      icon: 'el-icon-coordinate'
    },
    children: [
      {
        path: 'select_update',
        component: () => import('@/views/user/select_update/index'), // Parent router-view
        name: 'Select_update',
        meta: { title: '查询/更改员工' }
      },
      {
        path: 'add_delete',
        component: () => import('@/views/user/add_delete/index'),
        name: 'Add_delete',
        meta: { title: '新增/删除员工' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
