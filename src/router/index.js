import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const About = () => {
  return import(/* webpackChunkName: "about" */ '../views/About.vue')
}

const Users = () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
const UsersDetail = () => import(/* webpackChunkName: "users-detail" */ '../views/Users-detail.vue')
const UsersEdit = () => import(/* webpackChunkName: "users-Edit" */ '../views/Users-Edit.vue')


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    // path: '/users/:userId',
    path: '/users',
    name: 'users',
    // beforeEnter: (to, from, next) => {
    //   console.log('beforeEnter')
    //   next()
    // },
    component: Users,
    children:[
      {
        path: ":id",
        name: 'users-detail',
        component: UsersDetail,
      },
      {
        path: ":id/edit",
        name: 'users-edit',
        component: UsersEdit,
      }
    ]
  },
  {
    path: '/redirect-me',
    redirect: {name: 'users'}
  },
  {
    path: '/*',
    redirect: {name: 'home'}
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
