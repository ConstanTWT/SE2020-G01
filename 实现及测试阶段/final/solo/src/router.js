import Vue from 'vue'
import Router from 'vue-router'
import store from './store/index'
import Full from '@/containers/Full'

// 把下面的路由 作懒加载处理
const Login = () => import(/* webpackChunkName: "users" */ '@/views/users/Login.vue')
const Register = () => import(/* webpackChunkName: "users" */ '@/views/users/Register.vue')
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/Dashboard.vue')
const Diagram = () => import(/* webpackChunkName: "charts" */ '@/views/charts/Diagram.vue')
const Slider = () => import(/* webpackChunkName: "dashboard" */ '@/views/charts/Slider.vue')
const Tables = () => import(/* webpackChunkName: "tables" */ '@/views/tables/Tables.vue')
const List = () => import(/* webpackChunkName: "tables" */ '@/views/tables/list/List.vue')
const active = () => import(/* webpackChunkName: "tables" */ '@/views/tables/active/active.vue')
const Details = () => import(/* webpackChunkName: "tables" */ '@/views/tables/details/Details.vue')
const Setting = () => import(/* webpackChunkName: "tables" */ '@/views/setting/Setting.vue')
const NotFind = () => import(/* webpackChunkName: "home" */ '@/views/404.vue')
const Message = () => import(/* webpackChunkName: "charts" */ '@/views/users/message.vue')
const Homes = () => import(/* webpackChunkName: "homes" */'@/views/webs/home.vue')

const Homelogin =() => import(/* webpackChunkName: "homes" */'@/views/webs/homelogin.vue')



Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    
  {
   path:'/Homelogin',
   name:'Homelogin',
   component:Homelogin,
   meta:{
     title:"首页登陆"
   }
  },
    
    {
      path: '/',
      redirect: '/home',//设置默认指向的路径
      name: '主页'
      },
    
    {
      path:'/home',
      name:'Home',
      component: Homes,
      meta: {
        title:'攻略内容页'
      }
    },
// 攻略网站内容页面

      
  //  管理员用户配套登陆组件
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: '注册'
      }
    },
    {
      path:'/message',
      name:'message',
      component: Message,
      meta:{
        title:'个人信息'
      }
    },


    // 管理员界面模块
    {
      path: '/Full',
      redirect: '/dashboard',
      name: 'Full',
      component: Full,
      meta: {
        breadcrumb: '首页',
        requireLogin: true
      },
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard,
          meta: {
            breadcrumb: '访客量',
            title: '访客量',
            requireLogin: true
          }
        },
        {
          path: '/charts/diagram',
          name: 'Diagram',
          component: Diagram,
          meta: {
            breadcrumb: '关注游戏',
            title: '关注游戏',
            requireLogin: true
          }
        },
      
        {
          path: '/charts/slider',
          name: 'Slider',
          component: Slider,
          meta: {
            breadcrumb: '所有游戏访客',
            title: '所有游戏访客',
            requireLogin: true
          }
        },
        {
          path: '/tables',
          redirect: '/tables/list',
          name: 'Tables',
          component: Tables,
          meta: {
            breadcrumb: '管理员',
            requireLogin: true
          },
          children: [
            {
              path: '/tables/list',
              name: 'List',
              component: List,
              meta: {
                title: 'list',
                breadcrumb: '管理员信息',
                requireLogin: true
              }
            },
	
            {
              path: '/tables/details',
              name: 'Details',
              component: Details,
              meta: {
                title: 'details',
                breadcrumb: '详情',
                requireLogin: true
              }
            },
            {
              path: '/tables/active',
              name: 'active',
              component: active,
              meta: {
              title: 'active',
              breadcrumb: '相关活动',
              requireLogin: true
              }	
            }
          ]
        },
        {
          path: '/setting',
          name: 'Setting',
          component: Setting,
          meta: {
            breadcrumb: '设置',
            requireLogin: true
          },
        }
      ]
    },
    {
      path: '*',
      name: 'NotFind',
      component: NotFind,
      meta: {
        title: '404'
      }
    }
  ]
})

// 页面刷新时，重新赋值token
if (localStorage.getItem('token')) {
  store.commit('BIND_LOGIN', localStorage.getItem('token'))
}

// 全局导航钩子
router.beforeEach((to, from, next) => {
  if (to.meta.title) { // 路由发生变化修改页面title
    document.title = to.meta.title
  }
  if (to.meta.requireLogin) {
    if (store.getters.token) {
      if (Object.keys(from.query).length === 0) { // 判断路由来源是否有query，处理不是目的跳转的情况
        next()
      } else {
          let redirect = from.query.redirect // 如果来源路由有query
          if (to.path === redirect) { // 避免 next 无限循环
              next()
          } else {
              next({ path: redirect }) // 跳转到目的路由
          }
      }
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
