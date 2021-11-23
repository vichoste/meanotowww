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
  //const logg = this.$cookies.get('user') | null
  // console.log(this.$cookies.get('user')) si nos irven las cookies usar la strore min 3:53:https://vueschool.io/lessons/how-to-configure-an-authentication-middleware-route-guard-with-vue-router?friend=vuerouter
  console.log(":D")
  console.log(localStorage.getItem('correo'))
  console.log(":C")
  const logg = validarString(localStorage.getItem('token'))
  if(to.matched.some(record => record.meta.requiereAuth))
  {
    console.log("jajaj saludos ")
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

function validarString(val ) {
  if(typeof val === 'string')
  {
    if(val.trim().length > 1 )
    {
      return true
    }
  }
  return false
}
