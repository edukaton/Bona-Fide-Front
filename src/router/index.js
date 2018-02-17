import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'

// import loginRoutes from './login/login'

import AddFakeLink from '@/pages/AddFakeLink'
import CheckNews from '@/pages/CheckNews'

Vue.use(Router)


var routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/add-fake-news',
    name: 'AddFakeLink',
    component: AddFakeLink
  },
  {
    path: '/check',
    name: 'CheckNews',
    component: CheckNews
  }
];

// routes.push(...loginRoutes);

export default new Router({
  routes: routes,
  mode: 'history'
})
