import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'

import loginRoutes from './login/login'

Vue.use(Router)


var routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }
];

routes.push(...loginRoutes);

export default new Router({
  routes: routes,
  mode: 'history'
})
