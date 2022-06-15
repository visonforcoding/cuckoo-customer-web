const routes = [{
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
  ]
}, {
  path: '/login',
  component: () => import('@/pages/Login/Login'),
  hidden: true
}, ]


// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('@/pages/Error404.vue')
  })
}


export default routes