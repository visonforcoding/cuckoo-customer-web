import { createWebHashHistory, createRouter } from 'vue-router'
// import store from '@/store'
// import layout from '@/layout/layout'



const routes = [

  {
    path: '/',
    component: () => import('@/layouts/index.vue'),
    children: [{
        path: '',
        component: () => import('@/pages/Index.vue')
      },
      {
        path: '/chat/:to',
        component: () => import('@/pages/Chat/chat.vue')
      }
    ],
    meta:{
      requireLogin:true,
    }
  }, 
  {
    path: '/login',
    name: 'login',
    meta:{
      requireLogin:false
    },
    component: () => import("@/pages/Login/Login")
  },

]
var router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});


router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token');
  // store.getters('isLogin')
  if (to.meta.requireLogin) {
    //需要检测登录
    if (token) {
      next();
    } else {
      console.log('前往登录...')
      next({
        path: '/login'
      });
    }
  } else {
 
    next();
  }
})

export default router
