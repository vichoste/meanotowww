import { createRouter, createWebHashHistory } from 'vue-router'

// eslint-disable-next-line no-undef
const routes =[
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/holaMundo',
    name: 'holaMundo',
    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld'),
    meta:{
      requiereAuth: true
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from, next) => {
  const logg = false
  if(to.matched.some(record => record.meta.requiereAuth))
  {
    if(logg)
    {
      next()
    }
    else
    {
      console.log("holav  111")
      next(false)
    }

  }
  else
  {
    next()
  }
})
export default router

